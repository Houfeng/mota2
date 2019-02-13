/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

const Observer = require('ober');
const { isObject, isFunction } = require('ntils');
const { isComponentClass, defineGetter } = require('./utils');
const { wrapRender } = require('./render');
const { annotation } = require('./annotation');
const { lifecycle } = require('./lifecycle');
const { stateful } = require('./stateful');

function createRender(proto) {
  const initailRender = proto.render;
  if (!initailRender || initailRender._override_) return initailRender;
  const overrideRender = wrapRender(initailRender);
  const render = function (...args) {
    const model = this.model;
    if (!this._run_) {
      defineGetter(this, '_observer_', new Observer(model));
      defineGetter(this, '_trigger_', () => function () {
        if (!this._mounted_) return;
        this.setState({ model });
      });
      defineGetter(this, '_run_', this._observer_.run(overrideRender, {
        context: this,
        trigger: this._trigger_,
        deep: annotation.get('deep', this)
      }));
      this.state = Object.assign({}, this.state, { model });
    }
    return this._run_.run(...args);
  };
  defineGetter(render, '_override_', true);
  return render;
}

function clearReference(com) {
  if (com._run_) com._observer_.stop(com._run_);
  if (com._isNewModelInstance_) com._observer_.clearReference();
  defineGetter(com, '_run_', null);
}

function createUnmount(proto) {
  const initailUnmount = proto.componentWillUnmount;
  return function (...args) {
    defineGetter(this, '_mounted_', false);
    let result = null;
    if (initailUnmount) result = initailUnmount.call(this, ...args);
    const handlers = lifecycle.unmount.get(this);
    if (handlers) {
      handlers.forEach(handler => handler.call(this, ...args));
    }
    clearReference(this);
    return result;
  };
}

function createMount(proto) {
  const initailMount = proto.componentDidMount;
  return function (...args) {
    defineGetter(this, '_mounted_', true);
    const handlers = lifecycle.didMount.get(this);
    if (handlers) {
      handlers.forEach(handler => handler.call(this, ...args));
    }
    if (initailMount) return initailMount.call(this, ...args);
  };
}

function createDidUpdate(proto) {
  const initailDidUpdate = proto.componentDidUpdate;
  return function (...args) {
    const handlers = lifecycle.didUpdate.get(this);
    if (handlers) {
      handlers.forEach(handler => handler.call(this, ...args));
    }
    if (initailDidUpdate) return initailDidUpdate.call(this, ...args);
  };
}

function createModelGetter(model) {
  return function () {
    const modelInProps = 'model' in this.props;
    const propModel = this.props.model || {};
    if (this._model_ && (!modelInProps || propModel === this._model_)) {
      return this._model_;
    }
    clearReference(this);
    let componentModel = modelInProps ? propModel : model;
    let isNewModelInstance = false;
    if (!isObject(componentModel) && !isFunction(componentModel)) {
      throw new Error('Invalid Model');
    }
    if (componentModel instanceof Function) {
      componentModel = new componentModel();
      isNewModelInstance = true;
    }
    defineGetter(this, '_model_', componentModel);
    defineGetter(this, '_isNewModelInstance_', isNewModelInstance);
    const handlers = lifecycle.model.get(this);
    if (handlers) handlers.forEach(handler => handler.call(this));
    if (this.modelDidCreate) this.modelDidCreate();
    return this._model_;
  };
}

function connect(model, component) {
  if (!component) return component => connect(model, component);
  if (!isFunction(component)) return component;
  if (!isComponentClass(component)) component = stateful(component);
  const proto = component.prototype;
  //通过 hasOwnProperty 才能保证父类装饰过了，子类可重新装饰
  if (proto.hasOwnProperty('_contented_')) return component;
  defineGetter(proto, 'model', createModelGetter(model));
  proto.render = createRender(proto);
  proto.componentDidMount = createMount(proto);
  proto.componentWillUnmount = createUnmount(proto);
  proto.componentDidUpdate = createDidUpdate(proto);
  defineGetter(proto, '_contented_', true);
  return component;
}

connect.connect = connect;
module.exports = connect;