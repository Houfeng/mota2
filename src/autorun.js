/**
 * Copyright (c) 2015-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

import { lifecycles } from './lifecycle';
import { annotation } from './annotation';

export function autorun(target, method) {
  if (!target || !method) return autorun;
  //autorun 如果已经存在，比如父类声明了，都不再重复处理
  const exist = annotation.get('autorun', target, method);
  if (exist) return;
  let autoRef;
  lifecycles.didMount.add(target, function () {
    const context = this;
    if (!context._observer_) return;
    const deep = annotation.get('deep', context, method);
    autoRef = context._observer_.run(context[method], { context, deep });
    autoRef.run();
  });
  lifecycles.unmount.add(target, function () {
    this._observer_.stop(autoRef);
  });
  annotation.set('autorun', true, target, method);
}
