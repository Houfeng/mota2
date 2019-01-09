(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("mota", ["react"], factory);
	else if(typeof exports === 'object')
		exports["mota"] = factory(require("react"));
	else
		root["mota"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 空函数
 */
function noop() { }
exports.noop = noop;
function toString(obj) {
    return Object.prototype.toString.call(obj);
}
exports.toString = toString;
function getType(obj) {
    var str = toString(obj);
    return (/^\[object (.+)\]$/i.exec(str))[1];
}
exports.getType = getType;
/**
 * 验证一个对象是否为NULL
 * @method isNull
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNull(obj) {
    return obj === undefined || obj === null;
}
exports.isNull = isNull;
/**
 * 除去字符串两端的空格
 * @method trim
 * @param  {String} str 源字符串
 * @return {String}     结果字符串
 * @static
 */
function trim(str) {
    if (isNull(str))
        return str;
    if (str.trim) {
        return str.trim();
    }
    else {
        return str.replace(/(^[\\s]*)|([\\s]*$)/g, '');
    }
}
exports.trim = trim;
/**
 * 替换所有
 * @method replace
 * @param {String} str 源字符串
 * @param {String} str1 要替换的字符串
 * @param {String} str2 替换为的字符串
 * @static
 */
function replace(str, str1, str2) {
    if (isNull(str))
        return str;
    return str.replace(new RegExp(str1, 'g'), str2);
}
exports.replace = replace;
/**
 * 从字符串开头匹配
 * @method startWith
 * @param {String} str1 源字符串
 * @param {String} str2 要匹配的字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function startWith(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) === 0;
}
exports.startWith = startWith;
/**
 * 是否包含
 * @method contains
 * @param {String} str1 源字符串
 * @param {String} str2 检查包括字符串
 * @return {Boolean} 结果
 * @static
 */
function contains(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) > -1;
}
exports.contains = contains;
/**
 * 从字符串结束匹配
 * @method endWidth
 * @param {String} str1 源字符串
 * @param {String} str2 匹配字符串
 * @return {Boolean} 匹配结果
 * @static
 */
function endWith(str1, str2) {
    if (isNull(str1) || isNull(str2))
        return false;
    return str1.indexOf(str2) === (str1.length - str2.length);
}
exports.endWith = endWith;
/**
 * 是否包含属性
 * @method hasProperty
 * @param  {Object}  obj  对象
 * @param  {String}  name 属性名
 * @return {Boolean}      结果
 * @static
 */
function has(obj, name) {
    if (isNull(obj) || isNull(name))
        return false;
    return (name in obj) || (obj.hasOwnProperty(name));
}
exports.has = has;
exports.hasProperty = has;
/**
 * 验证一个对象是否为Function
 * @method isFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isFunction(obj) {
    if (isNull(obj))
        return false;
    return typeof obj === 'function';
}
exports.isFunction = isFunction;
/**
 * 验证一个对象是否为 AsyncFunction
 * @method isAsyncFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isAsyncFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'AsyncFunction';
}
exports.isAsyncFunction = isAsyncFunction;
/**
 * 验证一个对象是否为 GeneratorFunction
 * @method isGeneratorFunction
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isGeneratorFunction(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'GeneratorFunction';
}
exports.isGeneratorFunction = isGeneratorFunction;
/**
 * 验证一个对象是否为String
 * @method isString
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isString(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'String';
}
exports.isString = isString;
/**
 * 验证一个对象是否为Number
 * @method isNumber
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isNumber(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'Number';
}
exports.isNumber = isNumber;
/**
 * 验证一个对象是否为Boolean
 * @method isBoolean
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isBoolean(obj) {
    if (isNull(obj))
        return false;
    return getType(obj) === 'Boolean';
}
exports.isBoolean = isBoolean;
/**
 * 验证一个对象是否为HTML Element
 * @method isElement
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isElement(obj) {
    if (isNull(obj))
        return false;
    if (window.Element) {
        return obj instanceof Element;
    }
    else {
        return (obj.tagName && obj.nodeType &&
            obj.nodeName && obj.attributes &&
            obj.ownerDocument);
    }
}
exports.isElement = isElement;
/**
 * 验证一个对象是否为HTML Text Element
 * @method isText
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isText(obj) {
    if (isNull(obj))
        return false;
    return obj instanceof Text;
}
exports.isText = isText;
/**
 * 验证一个对象是否为Object
 * @method isObject
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isObject(obj) {
    if (isNull(obj))
        return false;
    var type = getType(obj);
    return type === 'Object' || type === 'Array';
}
exports.isObject = isObject;
/**
 * 验证一个对象是否为Array或伪Array
 * @method isArray
 * @param  {Object}  obj 要验证的对象
 * @return {Boolean}     结果
 * @static
 */
function isArray(obj) {
    if (isNull(obj))
        return false;
    var v1 = getType(obj) === 'Array';
    var v2 = obj instanceof Array;
    var v3 = !isString(obj) && isNumber(obj.length) && isFunction(obj.splice);
    var v4 = !isString(obj) && isNumber(obj.length) && obj[0];
    return v1 || v2 || v3 || v4;
}
exports.isArray = isArray;
/**
 * 验证是不是一个日期对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isDate(val) {
    if (isNull(val))
        return false;
    return val instanceof Date;
}
exports.isDate = isDate;
/**
 * 验证是不是一个正则对象
 * @method isDate
 * @param {Object} val   要检查的对象
 * @return {Boolean}           结果
 * @static
 */
function isRegexp(val) {
    return val instanceof RegExp;
}
exports.isRegexp = isRegexp;
/**
 * 转换为数组
 * @method toArray
 * @param {Array|Object} array 伪数组
 * @return {Array} 转换结果数组
 * @static
 */
function toArray(array) {
    if (isNull(array))
        return [];
    return Array.prototype.slice.call(array);
}
exports.toArray = toArray;
/**
 * 转为日期格式
 * @method toDate
 * @param {Number|String} val 日期字符串或整型数值
 * @return {Date} 日期对象
 * @static
 */
function toDate(val) {
    if (isNumber(val))
        return new Date(val);
    else if (isString(val))
        return new Date(replace(replace(val, '-', '/'), 'T', ' '));
    else if (isDate(val))
        return val;
    else
        return null;
}
exports.toDate = toDate;
/**
 * 遍历一个对像或数组
 * @method each
 * @param  {Object or Array}   obj  要遍历的数组或对象
 * @param  {Function} fn            处理函数
 * @return {void}                   无返回值
 * @static
 */
function each(list, handler, scope) {
    if (isNull(list) || isNull(handler))
        return;
    if (isArray(list)) {
        var listLength = list.length;
        for (var i = 0; i < listLength; i++) {
            var rs = handler.call(scope || list[i], i, list[i]);
            if (!isNull(rs))
                return rs;
        }
    }
    else {
        for (var key in list) {
            var rs = handler.call(scope || list[key], key, list[key]);
            if (!isNull(rs))
                return rs;
        }
    }
}
exports.each = each;
/**
 * 格式化日期
 * @method formatDate
 * @param {Date|String|Number} date 日期
 * @param {String} format 格式化字符串
 * @param {object} dict 反译字典
 * @return {String} 格式化结果
 * @static
 */
function formatDate(date, format, dict) {
    if (isNull(format) || isNull(date))
        return date;
    date = toDate(date);
    dict = dict || {};
    var placeholder = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        'w+': date.getDay(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S': date.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var key in placeholder) {
        if (new RegExp('(' + key + ')').test(format)) {
            var value = placeholder[key];
            value = dict[value] || value;
            format = format.replace(RegExp.$1, RegExp.$1.length == 1
                ? value : ('00' + value).substr(('' + value).length));
        }
    }
    return format;
}
exports.formatDate = formatDate;
/**
 * 拷贝对象
 * @method copy
 * @param {Object} src 源对象
 * @param {Object} dst 目标对象
 * @static
 */
function copy(src, dst, igonres) {
    dst = dst || (isArray(src) ? [] : {});
    each(src, function (key) {
        if (igonres && igonres.indexOf(key) > -1)
            return;
        delete dst[key];
        if (Object.getOwnPropertyDescriptor) {
            try {
                Object.defineProperty(dst, key, Object.getOwnPropertyDescriptor(src, key));
            }
            catch (ex) {
                dst[key] = src[key];
            }
        }
        else {
            dst[key] = src[key];
        }
    });
    return dst;
}
exports.copy = copy;
/**
 * 深度克隆对象
 * @method clone
 * @param {Object} src 源对象
 * @return {Object} 新对象
 * @static
 */
function clone(src, igonres) {
    if (isNull(src) ||
        isString(src) ||
        isNumber(src) ||
        isBoolean(src) ||
        isDate(src)) {
        return src;
    }
    var objClone = src;
    try {
        objClone = new src.constructor();
    }
    catch (ex) { }
    each(src, function (key, value) {
        if (objClone[key] != value && !contains(igonres, key)) {
            if (isObject(value)) {
                objClone[key] = clone(value, igonres);
            }
            else {
                objClone[key] = value;
            }
        }
    });
    ['toString', 'valueOf'].forEach(function (key) {
        if (contains(igonres, key))
            return;
        final(objClone, key, src[key]);
    });
    return objClone;
}
exports.clone = clone;
/**
 * 合并对象
 * @method mix
 * @return 合并后的对象
 * @param {Object} dst 目标对象
 * @param {Object} src 源对象
 * @param {Array} igonres 忽略的属性名,
 * @param {Number} mode 模式
 */
function mix(dst, src, igonres, mode, igonreNull) {
    //根据模式来判断，默认是Obj to Obj的  
    if (mode) {
        switch (mode) {
            case 1:// proto to proto  
                return mix(dst.prototype, src.prototype, igonres, 0);
            case 2:// object to object and proto to proto  
                mix(dst.prototype, src.prototype, igonres, 0);
                break; // pass through  
            case 3:// proto to static  
                return mix(dst, src.prototype, igonres, 0);
            case 4:// static to proto  
                return mix(dst.prototype, src, igonres, 0);
            default: // object to object is what happens below  
        }
    }
    //---
    src = src || {};
    dst = dst || (isArray(src) ? [] : {});
    keys(src).forEach(function (key) {
        if (contains(igonres, key))
            return;
        if (igonreNull && isNull(src[key]))
            return;
        if (isObject(src[key]) &&
            (src[key].constructor == Object ||
                src[key].constructor == Array ||
                src[key].constructor == null)) {
            dst[key] = mix(dst[key], src[key], igonres, 0, igonreNull);
        }
        else {
            dst[key] = src[key];
        }
    });
    return dst;
}
exports.mix = mix;
/**
 * 定义不可遍历的属性
 **/
function final(obj, name, value) {
    if (arguments.length < 1)
        throw new Error('Parameter missing');
    if (arguments.length < 2) {
        return each(obj, function (name, value) {
            final(obj, name, value);
        });
    }
    if (arguments.length < 3)
        return final(obj, name, obj[name]);
    try {
        Object.defineProperty(obj, name, {
            get: function () {
                return value;
            },
            set: function () {
                throw new Error('Cannot assign to final property:' + name);
            },
            enumerable: false,
            configurable: false //不能重写定义
        });
    }
    catch (err) {
        obj[name] = value;
    }
}
exports.final = final;
/**
 * 获取所有 key
 */
function keys(obj) {
    if (Object.keys)
        return Object.keys(obj);
    var keys = [];
    each(obj, function (key) {
        keys.push(key);
    });
    return keys;
}
exports.keys = keys;
/**
 * 创建一个对象
 */
function create(proto, props) {
    if (Object.create)
        return Object.create(proto, props);
    function Cotr() { }
    Cotr.prototype = proto;
    var obj = new Cotr();
    if (props)
        copy(props, obj);
    return obj;
}
exports.create = create;
/**
 * 设置 proto
 * 在不支持 setPrototypeOf 也不支持 __proto__ 的浏览器
 * 中，会采用 copy 方式
 */
function setPrototypeOf(obj, proto) {
    if (Object.setPrototypeOf) {
        return Object.setPrototypeOf(obj, proto || create(null));
    }
    else {
        if (!('__proto__' in Object))
            copy(proto, obj);
        obj.__proto__ = proto;
    }
}
exports.setPrototypeOf = setPrototypeOf;
/**
 * 获取 proto
 */
function getPrototypeOf(obj) {
    if (obj.__proto__)
        return obj.__proto__;
    if (Object.getPrototypeOf)
        return Object.getPrototypeOf(obj);
    if (obj.constructor)
        return obj.constructor.prototype;
}
exports.getPrototypeOf = getPrototypeOf;
/**
 * 是否深度相等
 */
function deepEqual(a, b) {
    if (a === b)
        return true;
    if (!isObject(a) || !isObject(b))
        return false;
    var aKeys = keys(a);
    var bKeys = keys(b);
    if (aKeys.length !== bKeys.length)
        return false;
    var allKeys = aKeys.concat(bKeys);
    var checkedMap = create(null);
    var result = true;
    each(allKeys, function (i, key) {
        if (checkedMap[key])
            return;
        if (!deepEqual(a[key], b[key]))
            result = false;
        checkedMap[key] = true;
    });
    return result;
}
exports.deepEqual = deepEqual;
/**
 * 从一个数值循环到别一个数
 * @param {number} fromNum 开始数值
 * @param {Number} toNum 结束数值
 * @param {Number} step 步长值
 * @param {function} handler 执行函数
 * @returns {void} 无返回
 */
function fromTo(fromNum, toNum, step, handler) {
    if (!handler)
        handler = [step, step = handler][0];
    step = Math.abs(step || 1);
    if (fromNum < toNum) {
        for (var i = fromNum; i <= toNum; i += step)
            handler(i);
    }
    else {
        for (var i = fromNum; i >= toNum; i -= step)
            handler(i);
    }
}
exports.fromTo = fromTo;
/**
 * 生成一个Guid
 * @method newGuid
 * @return {String} GUID字符串
 * @static
 */
function newGuid() {
    function s4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4());
}
exports.newGuid = newGuid;
/**
 * 对象变换
 **/
function map(list, fn) {
    var buffer = isArray(list) ? [] : {};
    each(list, function (name, value) {
        buffer[name] = fn(name, value);
    });
    return buffer;
}
exports.map = map;
/**
 * 通过路径设置属性值
 */
function setByPath(obj, path, value) {
    if (isNull(obj) || isNull(path) || path === '') {
        return;
    }
    if (!isArray(path)) {
        path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
    }
    each(path, function (index, name) {
        if (isNull(name) || name.length < 1)
            return;
        if (index === path.length - 1) {
            obj[name] = value;
        }
        else {
            obj[name] = obj[name] || {};
            obj = obj[name];
        }
    });
}
exports.setByPath = setByPath;
/**
 * 通过路径获取属性值
 */
function getByPath(obj, path, filter) {
    if (isNull(obj) || isNull(path) || path === '')
        return obj;
    if (!isArray(path)) {
        path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
    }
    each(path, function (index, name) {
        if (isNull(obj) || isNull(name) || name.length < 1)
            return;
        obj = filter ? filter(obj[name], name, obj) : obj[name];
    });
    return obj;
}
exports.getByPath = getByPath;
/**
 * 数组去重
 **/
function unique(array) {
    if (isNull(array))
        return array;
    var newArray = [];
    each(array, function (i, value) {
        if (newArray.indexOf(value) > -1)
            return;
        newArray.push(value);
    });
    return newArray;
}
exports.unique = unique;
/**
 * 解析 function 的参数列表
 **/
function getFunctionArgumentNames(fn) {
    if (!fn)
        return [];
    var src = fn.toString();
    var parts = src.split(')')[0].split('=>')[0].split('(');
    return (parts[1] || parts[0]).split(',').map(function (name) {
        return trim(name);
    }).filter(function (name) {
        return name != 'function';
    });
}
exports.getFunctionArgumentNames = getFunctionArgumentNames;
/**
 * 缩短字符串
 */
function short(str, maxLength) {
    if (!str)
        return str;
    maxLength = maxLength || 40;
    var strLength = str.length;
    var trimLength = maxLength / 2;
    return strLength > maxLength ?
        str.substr(0, trimLength) + '...' + str.substr(strLength - trimLength) :
        str;
}
exports.short = short;
/**
 * 首字母大写
 */
function firstUpper(str) {
    if (!isString(str))
        return '';
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
exports.firstUpper = firstUpper;
/**
 * 编码正则字符串
 */
function escapeRegExp(str) {
    if (!isString(str))
        return '';
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
/**
  * 将字符串转成「驼峰」式
  * @param {string} str 原始字符串
  * @param {number} mode 1 大驼峰，0 小驼峰
  * @return {string} 转换后的字符串
  */
function toCamelCase(str, mode) {
    if (!isString(str))
        return '';
    if (str) {
        str = str.replace(/\-[a-z0-9]/g, function ($1) {
            return $1.slice(1).toUpperCase();
        });
        str = str.replace(/^[a-z]/i, function ($1) {
            return mode ? $1.toUpperCase() : $1.toLowerCase();
        });
    }
    return str;
}
exports.toCamelCase = toCamelCase;
/**
 * 将字符串转成分隔形式
 * @param {string} str 原始字符串
 * @return {string} 转换后的字符串
 */
function toSplitCase(str) {
    if (!isString(str))
        return '';
    if (str) {
        str = str.replace(/([A-Z])/g, '-$1');
        if (str[0] == '-')
            str = str.slice(1);
    }
    return str.toLowerCase();
}
exports.toSplitCase = toSplitCase;
function htmlPrefilter(html) {
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    return html.replace(rxhtmlTag, '<$1></$2>');
}
exports.htmlPrefilter = htmlPrefilter;
/**
 * 解析字符串为 dom
 * @param {string} str 字符串
 * @returns {HTMLNode} 解析后的 DOM
 */
function parseHTML(str) {
    str = str || ' ';
    var parent = document.createElement('div');
    parent.innerHTML = htmlPrefilter(trim(str));
    var childNodes = toArray(parent.childNodes);
    //先 clone 一份再通过 innerHTML 清空
    //否则 IE9 下，清空时会导不通过返回的 DOM 没有子结点
    // if (firstNode) firstNode = firstNode.cloneNode(true);
    // window._NPH_.innerHTML = '';
    each(childNodes, function (index, childNode) {
        parent.removeChild(childNode);
    });
    return childNodes;
}
exports.parseHTML = parseHTML;
//# sourceMappingURL=index.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(39);
var hide = __webpack_require__(8);
var has = __webpack_require__(7);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(40);
var toPrimitive = __webpack_require__(24);
var dP = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(6) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(43);
var defined = __webpack_require__(25);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _getPrototypeOf = __webpack_require__(51);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(12),
    push = _require.push,
    _get = _require.get;

var Lifecycle = function () {
  function Lifecycle(name) {
    (0, _classCallCheck3.default)(this, Lifecycle);

    this.key = name + ':handlers';
  }

  Lifecycle.prototype.add = function add(target, handler) {
    push(this.key, handler, target);
  };

  Lifecycle.prototype.get = function get(target) {
    var base = (0, _getPrototypeOf2.default)(target);
    var baseList = base ? this.get(base) : null;
    var list = _get(this.key, target);
    if (!list) return baseList;
    return baseList ? [].concat(baseList, list) : list;
  };

  return Lifecycle;
}();

function create(list) {
  var map = {};
  list.forEach(function (name) {
    return map[name] = new Lifecycle(name);
  });
  return map;
}

module.exports = create(['didMount', 'unmount', 'didUpdate', 'element', 'render', 'model']);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = __webpack_require__(51);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(1),
    isArray = _require.isArray;

var _require2 = __webpack_require__(23),
    has = _require2.has,
    define = _require2.define;

var STORE_KEY = '_annotations_';

function getStore(target, member, ownOnly) {
  if (!target) return {};
  target = target.prototype || target;
  if (!has(target, STORE_KEY, ownOnly)) return {};
  var store = target[STORE_KEY];
  if (!member) return store;
  return has(store, member, ownOnly) ? store[member] : {};
}

function useStore(target, member) {
  if (!target) throw new Error('Invalid annotation target');
  target = target.prototype || target;
  var baseStore = getStore((0, _getPrototypeOf2.default)(target));
  if (!has(target, STORE_KEY)) {
    define(target, STORE_KEY, (0, _create2.default)(baseStore));
  }
  var store = target[STORE_KEY];
  if (!member) return store;
  if (!has(store, member)) {
    store[member] = (0, _create2.default)(getStore(baseStore[member]));
  }
  return store[member];
}

function wrapKey(key) {
  return ':' + key;
}

function get(key, target, member, ownOnly) {
  if (!key) return null;
  key = wrapKey(key);
  var store = getStore(target, member, ownOnly || false);
  return store && store[key];
}

function set(key, value, target, member) {
  if (!key || !value) return null;
  key = wrapKey(key);
  var store = useStore(target, member);
  store[key] = value;
  return value;
}

function push(key, value, target, member) {
  var list = get(key, target, member, true);
  if (list && !isArray(list)) throw new Error('Invaild Array');
  if (!list) list = set(key, [], target, member);
  list.push(value);
  return list;
}

function annotation(key, value) {
  return function (target, member) {
    set(key, value, target, member);
  };
}

annotation.set = set;
annotation.push = push;
annotation.get = get;
annotation.getAll = getStore;

module.exports = annotation;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(28)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Observer = __webpack_require__(71);
var AutoRun = __webpack_require__(47);
var Watcher = __webpack_require__(49);
var expression = __webpack_require__(73);
var nextTick = __webpack_require__(48);
Observer.AutoRun = AutoRun;
Observer.Watcher = Watcher;
Observer.expression = expression;
Observer.nextTick = nextTick;
Observer.Observer = Observer;
module.exports = Observer;
//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(42);
var enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var _defineProperty = __webpack_require__(74);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var React = __webpack_require__(16);
var Component = React.Component,
    PureComponent = React.PureComponent;

var _require = __webpack_require__(1),
    isObject = _require.isObject,
    isFunction = _require.isFunction;

function isComponentInstance(instance) {
  if (!instance || !isObject(instance)) return false;
  return instance instanceof Component || instance instanceof PureComponent || 'render' in instance && '__reactAutoBindPairs' in instance;
}

function isComponentClass(com) {
  if (!com) return false;
  return isComponentInstance(com.prototype);
}

function has(owner, key, ownOnly) {
  if (ownOnly === false) return !!(owner && owner[key]);
  return owner && owner.hasOwnProperty(key);
}

function define(owner, key, value) {
  var getter = isFunction(value) ? value : function () {
    return value;
  };
  (0, _defineProperty2.default)(owner, key, {
    configurable: true,
    enumerable: false,
    get: getter
  });
}

module.exports = {
  isComponentClass: isComponentClass,
  isComponentInstance: isComponentInstance,
  has: has,
  define: define
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(28)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(25);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(14);
var dPs = __webpack_require__(85);
var enumBugKeys = __webpack_require__(29);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(86).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(13);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(37);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(66);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(68)(false);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(44);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var Observer = __webpack_require__(15);

var _require = __webpack_require__(1),
    final = _require.final,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

var _require2 = __webpack_require__(23),
    isComponentClass = _require2.isComponentClass,
    define = _require2.define;

var _require3 = __webpack_require__(77),
    wrapRender = _require3.wrapRender;

var annotation = __webpack_require__(12);
var lifecycle = __webpack_require__(11);
var stateful = __webpack_require__(53);
var binding = __webpack_require__(59);

function createRender(proto) {
  var initailRender = proto.render;
  if (!initailRender || initailRender._override_) return initailRender;
  var overrideRender = wrapRender(initailRender);
  var render = function render() {
    var _run_;

    if (!this._run_) {
      final(this, '_observer_', new Observer(this.model));
      final(this, '_trigger_', function () {
        if (!this._mounted_) return;
        this.forceUpdate();
      });
      final(this, '_run_', this._observer_.run(overrideRender, {
        context: this,
        trigger: this._trigger_,
        deep: annotation.get('deep', this)
      }));
    }
    return (_run_ = this._run_).run.apply(_run_, arguments);
  };
  final(render, '_override_', true);
  return render;
}

function createUnmount(proto) {
  var initailUnmount = proto.componentWillUnmount;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._mounted_ = false;
    var result = null;
    if (initailUnmount) result = initailUnmount.call.apply(initailUnmount, [this].concat(args));
    var handlers = lifecycle.unmount.get(this);
    if (handlers) {
      handlers.forEach(function (handler) {
        return handler.call.apply(handler, [_this].concat(args));
      });
    }
    if (this._run_) this._observer_.stop(this._run_);
    if (this._isNewModelInstance_) this._observer_.clearReference();
    return result;
  };
}

function createMount(proto) {
  var initailMount = proto.componentDidMount;
  return function () {
    var _this2 = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    this._mounted_ = true;
    var handlers = lifecycle.didMount.get(this);
    if (handlers) {
      handlers.forEach(function (handler) {
        return handler.call.apply(handler, [_this2].concat(args));
      });
    }
    if (initailMount) return initailMount.call.apply(initailMount, [this].concat(args));
  };
}

function createDidUpdate(proto) {
  var initailDidUpdate = proto.componentDidUpdate;
  return function () {
    var _this3 = this;

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var handlers = lifecycle.didUpdate.get(this);
    if (handlers) {
      handlers.forEach(function (handler) {
        return handler.call.apply(handler, [_this3].concat(args));
      });
    }
    if (initailDidUpdate) return initailDidUpdate.call.apply(initailDidUpdate, [this].concat(args));
  };
}

function createModelGetter(model) {
  return function () {
    var _this4 = this;

    if (this._model_) return this._model_;
    var componentModel = this.props.model || model || {};
    var isNewModelInstance = false;
    if (!isObject(componentModel) && !isFunction(componentModel)) {
      throw new Error('Invalid Model');
    }
    if (componentModel instanceof Function) {
      componentModel = new componentModel();
      isNewModelInstance = true;
    }
    final(this, '_model_', componentModel);
    final(this, '_isNewModelInstance_', isNewModelInstance);
    var handlers = lifecycle.model.get(this);
    if (handlers) handlers.forEach(function (handler) {
      return handler.call(_this4);
    });
    if (this.modelDidCreate) this.modelDidCreate();
    return this._model_;
  };
}

function recursiveConnect(component) {
  connect(this.model, component);
}

function connect(model, component) {
  if (!component) return function (component) {
    return connect(model, component);
  };
  if (!isFunction(component)) return component;
  if (!isComponentClass(component)) component = stateful(component);
  var proto = component.prototype;
  //通过 hasOwnProperty 才能保证父类装饰过了，子类可重新装饰
  if (proto.hasOwnProperty('_contented_')) return component;
  define(proto, 'model', createModelGetter(model));
  proto.render = createRender(proto);
  proto.componentDidMount = createMount(proto);
  proto.componentWillUnmount = createUnmount(proto);
  proto.componentDidUpdate = createDidUpdate(proto);
  lifecycle.element.add(proto, binding.elementHandler);
  lifecycle.element.add(proto, recursiveConnect);
  final(proto, '_contented_', true);
  return component;
}

module.exports = connect;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var nextTick = __webpack_require__(48);
module.exports = /** @class */ (function () {
    function AutoRun(handler, context, trigger, deep) {
        var _this = this;
        this.onGet = function (event) {
            if (!_this.runing || !event || !_this.dependencies)
                return;
            _this.dependencies[event.path] = true;
        };
        this.isDependent = function (path) {
            if (!path)
                return false;
            if (!_this.dependencies || _this.dependencies[path])
                return true;
            if (!_this.deep)
                return false;
            var paths = path.split('.');
            paths.pop();
            return _this.isDependent(paths.join('.'));
        };
        this.onChange = function (event) {
            if (_this.runing || !event || !_this.isDependent(event.path))
                return;
            if (_this.isSync()) {
                return _this.trigger.call(_this.context);
            }
            var pending = nextTick(_this.trigger, _this.context, true);
            if (pending)
                pending.catch(function (err) {
                    throw err;
                });
        };
        this.run = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            _this.dependencies = {};
            _this.runing = true;
            var result = (_a = _this.handler).call.apply(_a, [_this.context].concat(args));
            _this.runing = false;
            return result;
        };
        this.handler = handler;
        this.context = context || this;
        this.trigger = trigger || this.run;
        this.deep = deep || false;
    }
    AutoRun.prototype.isSync = function () {
        return false;
    };
    return AutoRun;
}());
//# sourceMappingURL=autorun.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports) {

var handlers = [];
var pending = false;
function execHandlers() {
    pending = false;
    var copies = handlers.slice(0);
    handlers.length = 0;
    copies.forEach(function (callback) { return callback(); });
}
function createTimer() {
    if (typeof Promise !== 'undefined') {
        var promise_1 = Promise.resolve();
        return function () {
            promise_1.then(execHandlers).catch(function (err) { return console.error(err); });
        };
    }
    else if (typeof MutationObserver !== 'undefined' ||
        // PhantomJS and iOS 7.x
        MutationObserver.toString() === '[object MutationObserverConstructor]') {
        // use MutationObserver where native Promise is not available,
        // e.g. PhantomJS IE11, iOS7, Android 4.4
        var counter_1 = 1;
        var observer = new MutationObserver(execHandlers);
        var textNode_1 = document.createTextNode(String(counter_1));
        observer.observe(textNode_1, { characterData: true });
        return function () {
            counter_1 = (counter_1 + 1) % 2;
            textNode_1.data = String(counter_1);
        };
    }
    else {
        // fallback to setTimeout
        /* istanbul ignore next */
        return function () {
            setTimeout(execHandlers, 0);
        };
    }
}
var timer = createTimer();
function nextTick(callback, ctx, unique) {
    if (unique === true) {
        var exists = handlers.find(function (h) { return h.callback === callback; });
        if (exists)
            return exists.promise;
    }
    var resolve, reject;
    var handler = function () {
        try {
            var result = callback ? callback.call(ctx) : null;
            if (resolve)
                resolve(result);
        }
        catch (err) {
            if (reject)
                reject(err);
        }
    };
    handler.callback = callback;
    handler.promise = typeof Promise !== 'undefined' ?
        new Promise(function (_resolve, _reject) {
            resolve = _resolve;
            reject = _reject;
        }) : null;
    handlers.push(handler);
    if (!pending) {
        pending = true;
        timer();
    }
    return handler.promise;
}
module.exports = nextTick;
//# sourceMappingURL=next-tick.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var _a = __webpack_require__(1), isFunction = _a.isFunction, isBoolean = _a.isBoolean, getByPath = _a.getByPath, deepEqual = _a.deepEqual, clone = _a.clone;
var Watcher = /** @class */ (function () {
    function Watcher(calculator, handler, context) {
        var _this = this;
        //force: true 强制执行，false 强制不执行，无参数根据计算结果决定
        this.calc = function (force) {
            var newValue = _this.calculator.call(_this.context);
            var willExecute = isBoolean(force) ? force :
                !deepEqual(newValue, _this.value);
            if (willExecute) {
                _this.handler.call(_this.context, newValue, _this.value);
            }
            _this.value = clone(newValue);
        };
        if (!isFunction(calculator) || !isFunction(handler)) {
            throw new Error('Invalid parameters');
        }
        this.context = context || this;
        this.calculator = isFunction(calculator) ? calculator : function () {
            return getByPath(_this.context, calculator);
        };
        this.handler = handler;
    }
    return Watcher;
}());
module.exports = Watcher;
//# sourceMappingURL=watcher.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(31);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(87);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(107);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var React = __webpack_require__(16);

module.exports = function (stateless) {
  if (!stateless._stateful_) {
    var StatelessWrapper = function (_React$Component) {
      (0, _inherits3.default)(StatelessWrapper, _React$Component);

      function StatelessWrapper() {
        (0, _classCallCheck3.default)(this, StatelessWrapper);
        return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
      }

      StatelessWrapper.prototype.render = function render() {
        return stateless(this.props, this.context);
      };

      return StatelessWrapper;
    }(React.Component);

    stateless._stateful_ = StatelessWrapper;
  }
  return stateless._stateful_;
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(88);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(97);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(56);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(35);
var $iterCreate = __webpack_require__(92);
var setToStringTag = __webpack_require__(36);
var getPrototypeOf = __webpack_require__(52);
var ITERATOR = __webpack_require__(13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(42);
var hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(22);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(24);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(40);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var bindable = __webpack_require__(60);

var _require = __webpack_require__(15),
    expression = _require.expression;

var _require2 = __webpack_require__(1),
    isObject = _require2.isObject;

function compileExpr(expr) {
  return {
    get: expression(expr),
    set: expression('$scope.' + expr + '=$value')
  };
}

function elementHandler(type, props) {
  if (!type || !props) return;
  var dataBind = props['data-bind'];
  if (!dataBind) return;
  var bindOpts = dataBind && bindable.getOptions(type, props);
  if (!bindOpts) return;
  var dataScope = props['data-scope'] || this.model;
  var bindExpr = compileExpr(dataBind);
  var setValue = function setValue(value) {
    return bindExpr.set((0, _create2.default)(dataScope, {
      $value: { value: value }
    }));
  };
  var getValue = function getValue() {
    return bindExpr.get(dataScope);
  };
  var context = { getValue: getValue, setValue: setValue };
  var bindEvent = bindOpts.event[0];
  var initailChange = props[bindEvent];
  var bindEventHandler = function bindEventHandler(event) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var handler = bindOpts.event[1];
    if (handler instanceof Function) {
      handler.apply(undefined, [context, event].concat(args));
    } else if (!handler) {
      var value = isObject(event) && 'target' in event ? event.target.value : event;
      setValue(value);
    } else {
      setValue(expression(String(handler))(event));
    }
    if (initailChange) return initailChange.apply(undefined, [event].concat(args));
  };
  var bindProp = bindOpts.prop[0];
  var bindPropHandler = bindOpts.prop[1] || function (ctx) {
    return ctx.getValue();
  };
  //--
  props[bindProp] = bindPropHandler(context, props);
  props[bindEvent] = bindEventHandler;
  props['data-scope'] = undefined;
  props['data-bind'] = undefined;
}

/**
 * @deprecated
 * @param {React.Component} component React Component
 * @returns {void}
 */
function binding(component) {
  // if (!component) return binding;
  // const proto = component.prototype;
  // if (proto.hasOwnProperty('_contented_')) {
  //   throw new Error('`binding` must be enabled before `model`');
  // }
  // registerElementHandler(proto, elementHandler);
  console.warn('binding is deprecated and will be automatic');
  return component;
}

binding.elementHandler = elementHandler;

module.exports = binding;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(23),
    isComponentClass = _require.isComponentClass;

var defaultOpts = {
  prop: ['value'],
  event: ['onChange']
};

var checkboxOpts = {
  prop: ['checked', function (ctx, props) {
    var mValue = ctx.getValue();
    if (mValue instanceof Array) {
      return mValue.indexOf(props.value) > -1;
    } else {
      return !!mValue;
    }
  }],
  event: ['onChange', function (ctx, event) {
    var _event$target = event.target,
        value = _event$target.value,
        checked = _event$target.checked;

    var mValue = ctx.getValue();
    if (mValue instanceof Array) {
      if (checked) {
        mValue.push(value);
      } else {
        var index = mValue.indexOf(value);
        mValue.splice(index, 1);
      }
    } else {
      ctx.setValue(checked);
    }
  }]
};

var radioOpts = {
  prop: ['checked', function (ctx, props) {
    var mValue = ctx.getValue();
    if (typeof mValue == 'boolean') {
      return !!mValue;
    } else {
      return mValue == props.value;
    }
  }],
  event: ['onChange', function (ctx, event) {
    var _event$target2 = event.target,
        value = _event$target2.value,
        checked = _event$target2.checked;

    var mValue = ctx.getValue();
    if (typeof mValue == 'boolean') {
      ctx.setValue(checked);
    } else if (checked) ctx.setValue(value);
  }]
};

var builtIn = {
  input: function input(type, props) {
    switch (props.type) {
      case 'checkbox':
        return checkboxOpts;
      case 'radio':
        return radioOpts;
      default:
        return defaultOpts;
    }
  },
  radio: radioOpts,
  checkbox: checkboxOpts,
  select: defaultOpts,
  textarea: defaultOpts
};

function getOptions(type, props) {
  var opts = typeof type === 'string' ? builtIn[type] : type.bindOpts;
  if (opts instanceof Function) opts = opts(type, props);
  opts = opts || defaultOpts;
  if (opts && typeof opts.event === 'string') {
    opts.event = opts.event.split(',');
  }
  if (opts && typeof opts.prop === 'string') {
    opts.prop = opts.prop.split(',');
  }
  return opts;
}

function bindable(opts, component) {
  if (isComponentClass(opts)) {
    return bindable(component, opts);
  }
  if (typeof opts === 'string') opts = builtIn[opts];
  if (!opts) opts = defaultOpts;
  if (!component) return function (component) {
    return bindable(opts, component);
  };
  component.bindOpts = (0, _assign2.default)({}, opts);
  return component;
}

bindable.getOptions = getOptions;
module.exports = bindable;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var _extends2 = __webpack_require__(63);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var connect = __webpack_require__(45);
var model = __webpack_require__(112);
var binding = __webpack_require__(59);
var bindable = __webpack_require__(60);
var autorun = __webpack_require__(113);
var watch = __webpack_require__(114);
var deep = __webpack_require__(115);
var mapping = __webpack_require__(116);
var utils = __webpack_require__(23);
var stateful = __webpack_require__(53);
var composition = __webpack_require__(117);
var annotation = __webpack_require__(12);
var lifecycle = __webpack_require__(11);

var _require = __webpack_require__(15),
    Observer = _require.Observer,
    expression = _require.expression,
    nextTick = _require.nextTick;

var _require2 = __webpack_require__(118),
    useModel = _require2.useModel;

var info = __webpack_require__(119);

module.exports = (0, _extends3.default)({
  connect: connect, model: model, binding: binding, bindable: bindable, watch: watch, mapping: mapping, autorun: autorun, deep: deep, stateful: stateful,
  composition: composition, Observer: Observer, expression: expression, nextTick: nextTick, annotation: annotation, lifecycle: lifecycle, useModel: useModel,
  utils: utils }, info);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(3);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(67) });


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(22);
var toObject = __webpack_require__(31);
var IObject = __webpack_require__(43);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(69);
var toAbsoluteIndex = __webpack_require__(70);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(26);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a = __webpack_require__(1), isArray = _a.isArray, isFunction = _a.isFunction, isNull = _a.isNull, isObject = _a.isObject, copy = _a.copy, final = _a.final, each = _a.each;
var EventEmitter = __webpack_require__(72);
var AutoRun = __webpack_require__(47);
var Watcher = __webpack_require__(49);
var OBSERVER_PROP_NAME = '_observer_';
var CHANGE_EVENT_NAME = 'change';
var GET_EVENT_NAME = 'get';
var EVENT_MAX_DISPATCH_LAYER = 10;
var IGNORE_REGEXPS = [/^\_(.*)\_$/, /^\_\_/, /^\$/];
/**
 * 对象观察类，可以监控对象变化
 * 目前方案问题:
 *   对于父子关系和事件冒泡，目前方案如果用 delete 删除一个属性，无关真实删除关系，
 *   即便调用 clearReference 也无法再清除关系，子对象的 parents 中会一直有一个引用，当前方案最高效
 * 其它方法一:
 *   将「关系」放入全局数组中，然后将 ob.parents 变成一个「属性」从全局数组件中 filter 出来，
 *   基本和目前方法类似，但是关系在外部存领教，所以 clearReference 可清除。
 * 其它方案二:
 *   构造时添加到全局数组，每一个 observer change 时都让放到全局的 observer 遍历自身的，
 *   检果事件源是不是自已的子对象，如果是则触发自身 change 事件，这样 ob 对象本身没有相关引用
 *   clearReference 时只从全局清除掉就行了，并且 delete 操作也不会影响，但效率稍差。
 * 其它方案三:
 *   给构造函数添加一个 deep 属性，只有 deep 的 ob 对象，才放入到全局数组中，检查时逻辑同方案二
 *   但是因为要检查的对象会少很多，效率会更高一点。
 */
var Observer = /** @class */ (function (_super) {
    __extends(Observer, _super);
    /**
     * 通过目标对象构造一个观察对象
     * @param {Object} target 目标对象
     * @param {Object} options 选项
     * @returns {void} 无返回
     */
    function Observer(target, options) {
        var _this = _super.call(this) || this;
        if (isNull(target)) {
            throw new Error('Invalid target');
        }
        options = options || {};
        var observer = target[OBSERVER_PROP_NAME];
        if (observer) {
            copy(options, observer.options);
            //当时一个组件 A 的为组件 B 的 prop 时，A 更新不会触发 B 更新
            //所在暂注释这里，另一种方法是更新 prop 指令，重写 excute 方法，而不是现在的 update 方法
            // if (observer.options.root) {
            //   observer.parents.length = 0;
            // }
            observer.apply();
            return observer;
        }
        final(_this, 'options', options);
        final(_this, 'shadow', {});
        final(_this, 'target', target);
        final(_this, 'parents', []);
        final(target, OBSERVER_PROP_NAME, _this);
        _this.apply();
        return _this;
    }
    /**
     * 添加一个属性，动态添中的属性，无法被观察，
     * 但是通过 set 方法添加的属性可能被观察。
     * @param {string} name 名称
     * @param {Object} value 值
     * @returns {void} 无返回
     */
    Observer.prototype.set = function (name, value) {
        if (isFunction(value) || Observer.isIgnore(name)) {
            return;
        }
        Object.defineProperty(this.target, name, {
            get: function () {
                var observer = this[OBSERVER_PROP_NAME];
                observer.emitGet({ name: name, value: value });
                return observer.shadow[name];
            },
            set: function (value) {
                var observer = this[OBSERVER_PROP_NAME];
                var oldValue = observer.shadow[name];
                if (oldValue === value)
                    return;
                if (isObject(value)) {
                    var childObserver = new Observer(value);
                    observer.addChild(childObserver, name);
                }
                //移除旧值的父引用
                //如果用 delete 删除属性将无法移除父子引用
                if (oldValue && oldValue[OBSERVER_PROP_NAME]) {
                    observer.removeChild(oldValue[OBSERVER_PROP_NAME], name);
                }
                observer.shadow[name] = value;
                observer.emitChange({ name: name, value: value });
            },
            configurable: true,
            enumerable: true
        });
        this.target[name] = value;
    };
    /**
     * 自动应用所有动态添加的属性
     * @returns {void} 无返回
     */
    Observer.prototype.apply = function () {
        if (isArray(this.target)) {
            this._wrapArray(this.target);
        }
        var names = this._getPropertyNames(this.target);
        names.forEach(function (name) {
            var desc = Object.getOwnPropertyDescriptor(this.target, name);
            if (!('value' in desc))
                return;
            this.set(name, this.target[name]);
        }, this);
    };
    /**
     * 添子观察者对象
     * @param {Object} child 父对象
     * @param {String} name 属性名
     * @returns {void} 无返回
     */
    Observer.prototype.addChild = function (child, name) {
        if (isNull(child) || isNull(name)) {
            throw new Error('Invalid paramaters');
        }
        if (child.options.root)
            return;
        child.parents.push({ parent: this, name: name });
    };
    /**
     * 移除子对象
     * @param {Object} child 父对象
     * @param {String} name 属性名
     * @returns {void} 无返回
     */
    Observer.prototype.removeChild = function (child, name) {
        if (isNull(child)) {
            throw new Error('Invalid paramaters');
        }
        var foundIndex = -1;
        child.parents.forEach(function (item, index) {
            if (item.parent === this && item.name === name) {
                foundIndex = index;
            }
        }, this);
        if (foundIndex > -1) {
            child.parents.splice(foundIndex, 1);
        }
    };
    /**
     * 清除所有父子引用
     * @returns {void} 无返回
     */
    Observer.prototype.clearReference = function () {
        each(this.target, function (name, value) {
            if (isNull(value))
                return;
            var child = value[OBSERVER_PROP_NAME];
            if (child)
                this.removeChild(child);
        }, this);
    };
    /**
     * 触发 change 事件
     * @param {Object} event 事件对象
     * @returns {void} 无返回
     */
    Observer.prototype.emitChange = function (event) {
        event.path = event.name;
        this.dispatch(CHANGE_EVENT_NAME, event);
    };
    /**
     * 触发 change 事件
     * @param {Object} event 事件对象
     * @returns {void} 无返回
     */
    Observer.prototype.emitGet = function (event) {
        event.path = event.name;
        this.dispatch(GET_EVENT_NAME, event);
    };
    /**
     * 派发一个事件，事件会向父级对象冒泡
     * @param {string} eventName 事件名称
     * @param {Object} event 事件对象
     * @returns {void} 无返回
     */
    Observer.prototype.dispatch = function (eventName, event) {
        if (event._src_ === this)
            return;
        event._src_ = event._src_ || this;
        event._layer_ = event._layer_ || 0;
        if ((event._layer_++) >= EVENT_MAX_DISPATCH_LAYER)
            return;
        this.emit(eventName, event);
        if (!this.parents || this.parents.length < 1)
            return;
        this.parents.forEach(function (item) {
            if (!(item.name in item.parent.target)) {
                return item.parent.removeChild(this);
            }
            var parentEvent = copy(event);
            parentEvent.path = isNull(event.path) ? item.name :
                item.name + '.' + event.path;
            item.parent.dispatch(eventName, parentEvent);
        }, this);
    };
    /**
     * 获取所有成员名称列表
     * @returns {Array} 所有成员名称列表
     */
    Observer.prototype._getPropertyNames = function () {
        var names = isArray(this.target) ?
            this.target.map(function (item, index) {
                return index;
            }) : Object.keys(this.target);
        return names.filter(function (name) {
            return name !== OBSERVER_PROP_NAME;
        });
    };
    /**
     * 包裹数组
     * @param {array} array 源数组
     */
    Observer.prototype._wrapArray = function (array) {
        if (array._wrapped_)
            return;
        final(array, '_wrapped_', true);
        final(array, 'push', function () {
            var items = [].slice.call(arguments);
            var observer = this[OBSERVER_PROP_NAME];
            items.forEach(function (item) {
                //这里也会触发对应 index 的 change 事件
                observer.set(array.length, item);
            }, this);
            observer.emitChange({ name: 'length', value: this.length });
            observer.emitChange({ value: this.length });
        });
        final(array, 'pop', function () {
            var item = [].pop.apply(this, arguments);
            var observer = this[OBSERVER_PROP_NAME];
            observer.emitChange({ name: this.length, value: item });
            observer.emitChange({ name: 'length', value: this.length });
            observer.emitChange({ value: this.length });
            return item;
        });
        final(array, 'unshift', function () {
            [].unshift.apply(this, arguments);
            var items = [].slice.call(arguments);
            var observer = this[OBSERVER_PROP_NAME];
            items.forEach(function (item, index) {
                //这里也会触发对应 index 的 change 事件
                observer.set(index, item);
            }, this);
            observer.emitChange({ name: 'length', value: this.length });
            observer.emitChange({ value: this.length });
        });
        final(array, 'shift', function () {
            var item = [].shift.apply(this, arguments);
            var observer = this[OBSERVER_PROP_NAME];
            observer.emitChange({ name: 0, value: item });
            observer.emitChange({ name: 'length', value: this.length });
            observer.emitChange({ value: this.length });
            return item;
        });
        final(array, 'splice', function () {
            var startIndex = arguments[0];
            var endIndex = isNull(arguments[1])
                ? startIndex + arguments[1]
                : this.length - 1;
            var observer = this[OBSERVER_PROP_NAME];
            var items = [].splice.apply(this, arguments);
            for (var i = startIndex; i <= endIndex; i++) {
                observer.emitChange({ name: i, value: items[i - startIndex] });
            }
            observer.emitChange({ name: 'length', value: this.length });
            observer.emitChange({ value: this.length });
            return items;
        });
        final(array, 'set', function (index, value) {
            var observer = this[OBSERVER_PROP_NAME];
            if (index >= this.length) {
                observer.emitChange({ name: 'length', value: this.length });
                observer.emitChange({ value: this.length });
            }
            observer.set(index, value);
        });
    };
    Observer.prototype.run = function (handler, options) {
        options = options || {};
        var context = options.context, trigger = options.trigger, immed = options.immed, deep = options.deep;
        context = context || this.target;
        var auto = new AutoRun(handler, context, trigger, deep);
        this.on('get', auto.onGet);
        this.on('change', auto.onChange);
        if (immed)
            auto.run();
        return auto;
    };
    Observer.prototype.stop = function (autoRef) {
        if (!autoRef)
            return;
        this.off('get', autoRef.onGet);
        this.off('change', autoRef.onChange);
    };
    Observer.prototype.watch = function (calculator, handler, options) {
        options = options || {};
        var context = options.context;
        context = context || this.target;
        var watcher = new Watcher(calculator, handler, context);
        watcher.autoRef = this.run(watcher.calc, options);
        return watcher;
    };
    Observer.prototype.unWatch = function (watcher) {
        if (!watcher)
            return;
        this.stop(watcher.autoRef);
    };
    return Observer;
}(EventEmitter));
/**
 * 观察一个对象
 * @param {Object} target 目标对象
 * @return {Observer} 观察者对象
 */
Observer.observe = function (target) {
    return new Observer(target);
};
/**
 * 检查是不是忽略的属性名
 * @param {string} word 待检查的字符串
 * @returns {void} 无返回
 */
Observer.isIgnore = function (word) {
    return IGNORE_REGEXPS.some(function (re) { return re.test(word); });
};
module.exports = Observer;
//# sourceMappingURL=observer.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _a = __webpack_require__(1), final = _a.final, isArray = _a.isArray, copy = _a.copy, each = _a.each;
/**
 * 事件触发器基类
 */
var EventEmitter = /** @class */ (function () {
    /**
     * 构建一个一个事修的触发器对象
     * @param {object} target 将代理的目标对象可以省略
     * @returns {void} 无返回
     */
    function EventEmitter(target) {
        target = target || this;
        var emitter = target._emitter_;
        if (emitter)
            return emitter;
        final(this, '_target_', target);
        final(target, '_emitter_', this);
        this._isNative_ = this._isNativeObject(this._target_);
        this._listeners_ = this._listeners_ || Object.create(null);
        this.on = this.$on = this.$addListener = this.addListener;
        this.off = this.$off = this.$removeListener = this.removeListener;
        this.$emit = this.emit;
    }
    /**
     * 检查是否原生支持事件
     * @param {object} obj 对象
     * @returns {void} 检查结果
     */
    EventEmitter.prototype._isNativeObject = function (obj) {
        return obj.addEventListener && obj.removeEventListener && obj.dispatchEvent;
    };
    /**
     * 添加一个事件监听函数
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.addListener = function (name, listener, capture) {
        if (this._isNative_) {
            this._addNativeEventListener(name, listener, capture);
        }
        this._listeners_[name] = this._listeners_[name] || [];
        this._listeners_[name].push(listener);
        var maxListeners = EventEmitter._maxListeners;
        if (this._listeners_[name].length > maxListeners) {
            console.warn("The '" + name + "' event listener is not more than " + maxListeners, this);
        }
    };
    /**
     * 移除「一个/一组/所有」事件监听函数
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.removeListener = function (name, listener, capture) {
        if (name && listener) {
            if (this._isNative_) {
                this._removeNativeEventListener(name, listener, capture);
            }
            if (!this._listeners_[name])
                return;
            var index = this._listeners_[name].indexOf(listener);
            this._listeners_[name].splice(index, 1);
        }
        else if (name) {
            if (this._isNative_ && this._listeners_[name]) {
                this._listeners_[name].forEach(function (_listener) {
                    this.removeListener(name, _listener, capture);
                }, this);
            }
            delete this._listeners_[name];
        }
        else {
            each(this._listeners_, function (name) {
                this.removeListener(name, null, capture);
            }, this);
            this._listeners_ = {};
        }
    };
    /**
     * 触发自身的一个事件
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
     * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.emit = function (name, data, canBubble, cancelAble) {
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        var listeners = this._listeners_[name];
        if (!listeners)
            return;
        var stopPropagation = false;
        listeners.forEach(function (handler) {
            var rs = handler.call(this._target_, data);
            if (rs === false)
                stopPropagation = true;
        }, this);
        return stopPropagation;
    };
    /**
     * 触发自身的一个事件 (支持异步 handler，串行执行，仅对非 dom 对象有效)
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
     * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.emitAsync = function (name, data, canBubble, cancelAble) {
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        var listeners = this._listeners_[name];
        if (!listeners)
            return;
        var stopPropagation = false, queue = listeners.slice(0);
        return new Promise(function (resolve, reject) {
            function done(rs, err) {
                if (err)
                    return reject(err);
                if (rs === false)
                    stopPropagation = true;
                return queue.length > 0 ? exec() : resolve(stopPropagation);
            }
            function exec() {
                var handler = queue.shift();
                var rs = handler.call(this._target_, data);
                return rs && rs.then ? rs.then(done) : done(rs);
            }
            exec();
        });
    };
    /**
     * 触发自身的一个事件 (支持异步 handler，并行执行，仅对非 dom 对象有效)
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
     * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
     * @returns {void} 无返回
     */
    EventEmitter.prototype.emitParallel = function (name, data, canBubble, cancelAble) {
        var _this = this;
        if (this._isNative_) {
            return this._emitNativeEvent(name, data, canBubble, cancelAble);
        }
        var listeners = this._listeners_[name];
        if (!listeners)
            return;
        var stopPropagation = false, count = 0;
        return new Promise(function (resolve, reject) {
            function done(rs, err) {
                if (err)
                    return reject(err);
                if (rs === false)
                    stopPropagation = true;
                if (++count >= listeners.length)
                    resolve(stopPropagation);
            }
            listeners.forEach(function (handler) {
                var rs = handler.call(this._target_, data);
                return rs && rs.then ? rs.then(done) : done(rs);
            }, _this);
        });
    };
    /**
     * 添加 DOM 元素事件
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件
     * @returns {void} 无返回
     */
    EventEmitter.prototype._addNativeEventListener = function (name, listener, capture) {
        this._target_.addEventListener(name, listener, capture);
        //如果存在已注册的自定义 “组合事件”
        var descriptor = EventEmitter._events[name];
        if (descriptor) {
            descriptor.addListener = descriptor.addListener || descriptor.on;
            descriptor.addListener(this, name, listener, capture);
        }
    };
    /**
     * 移除 DOM 元素事件
     * @param {string} name 事件名称
     * @param {function} listener 事件处理函数
     * @param {capture} capture 是否是捕获阶段事件
     * @returns {void} 无返回
     */
    EventEmitter.prototype._removeNativeEventListener = function (name, listener, capture) {
        this._target_.removeEventListener(name, listener, capture);
        //如果存在已注册的自定义 “组合事件”
        var descriptor = EventEmitter._events[name];
        if (descriptor) {
            descriptor.removeListener = descriptor.removeListener || descriptor.off;
            descriptor.removeListener(this, name, listener, capture);
        }
    };
    /**
     * 触发 DOM 元素事件
     * @param {string} name 事件名称
     * @param {object} data 传递的对象
     * @param {string} canBubble 能否冒泡
     * @param {object} cancelAble 能否取消
     * @returns {void} 无返回
     */
    EventEmitter.prototype._emitNativeEvent = function (name, data, canBubble, cancelAble) {
        if (!global.document)
            return;
        var event = global.document.createEvent('HTMLEvents');
        event.initEvent(name, canBubble, cancelAble);
        copy(data, event, ['data']);
        event.data = data;
        return this._target_.dispatchEvent(event);
    };
    return EventEmitter;
}());
//最多添加多少个 listener
EventEmitter._maxListeners = 1024;
//所有自定义事件
EventEmitter._events = [];
/**
 * 注册自定义事件(只在代理 dom 对象时有效)
 * @param {object} descriptor 事件定义
 * @returns {void} 无返回
 */
EventEmitter.register = function (descriptor) {
    var names = descriptor.name;
    if (!names)
        return;
    if (!isArray(names))
        names = names.split(',');
    names.forEach(function (name) {
        this._events[name] = descriptor;
    }, this);
};
module.exports = EventEmitter;
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

var VARIABLE_FILTER = /(\(|\[|\{|\+|\-|\*|\/|\>|\<|\=|\!|\,|\;|\?|\:|\&|\|)\s*([a-z\_0-9\$]+)/ig;
var VARIABLE_NAME = /^[a-z\$\_]/i;
var ALLOWED_WORD = /^(\$scope|true|false|null|undefined|Date|Number|String|Object|Boolean|Array|RegExp|Math|JSON|parseInt|parseFloat|isNaN|isFinite)$/; //eslint-disable-line
var EXPRESSION_BLOCK = /\{\{([\s\S]+?)\}\}/;
var EXPRESSION_CACHE = {};
var TEMPLATE_CACHE = {};
function findVariables(expr) {
    expr = "(" + expr + ")";
    VARIABLE_FILTER.lastIndex = 0;
    var variables = {};
    var info;
    while (info = VARIABLE_FILTER.exec(expr)) { //eslint-disable-line
        var name_1 = info[2];
        if (VARIABLE_NAME.test(name_1) && !ALLOWED_WORD.test(name_1)) {
            variables[name_1] = true;
        }
    }
    return Object.keys(variables);
}
function getValue(scope, name) {
    var value = scope[name];
    return (value instanceof Function) ? value.bind(scope) : value;
}
function expression(expr) {
    var cacheItem = EXPRESSION_CACHE[expr];
    if (cacheItem)
        return cacheItem;
    var keys = findVariables(expr);
    var func = new (Function.bind.apply(Function, [void 0, '$scope'].concat(keys, ["return(" + expr + ")"])))();
    function exec(scope) {
        var values = keys.map(function (name) { return getValue(scope, name); });
        return func.apply(void 0, [scope].concat(values));
    }
    EXPRESSION_CACHE[expr] = exec;
    return exec;
}
function template(str) {
    var cacheItem = TEMPLATE_CACHE[str];
    if (cacheItem)
        return cacheItem;
    var blocks = str.split(EXPRESSION_BLOCK);
    for (var i = 1; i < blocks.length; i += 2) {
        blocks[i] = expression(blocks[i]);
    }
    function exec(scope) {
        var result = '';
        blocks.forEach(function (block) {
            result += (block instanceof Function) ? block(scope) : block;
        });
        return result;
    }
    TEMPLATE_CACHE[str] = exec;
    return exec;
}
function compile(str, mixed) {
    return mixed ? template(str) : expression(str);
}
compile.expression = expression;
compile.template = template;
module.exports = compile;
//# sourceMappingURL=expression.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(6), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _isFrozen = __webpack_require__(78);

var _isFrozen2 = _interopRequireDefault(_isFrozen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var React = __webpack_require__(16);

var _require = __webpack_require__(1),
    isArray = _require.isArray;

var lifecycle = __webpack_require__(11);

if (!_isFrozen2.default) Object.isFrozen = function () {
  return false;
};

var initailCreateElement = React.createElement;
React.createElement = function (type) {
  intercepted = true;

  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  beforeCreateElement.apply(undefined, [type].concat(args));
  return initailCreateElement.call.apply(initailCreateElement, [this, type].concat(args));
};

var component = null,
    intercepted = false;

function beginIntercept(com) {
  intercepted = false;
  component = com;
}

function endIntercept() {
  intercepted = false;
  component = null;
}

function beforeCreateElement(type) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  if (!component) return;
  var handlers = lifecycle.element.get(component);
  if (!handlers) return;
  handlers.forEach(function (handler) {
    return handler.call.apply(handler, [component, type].concat(args));
  });
}

function afterCreateElement(element) {
  if (!element) return element;
  if (isArray(element)) return element.map(afterCreateElement);
  if (element.type && element.props) {
    if ((0, _isFrozen2.default)(element)) element = (0, _assign2.default)({}, element);
    if ((0, _isFrozen2.default)(element.props)) element.props = (0, _assign2.default)({}, element.props);
    beforeCreateElement(element.type, element.props);
  }
  if (element.props && element.props.children) {
    element.props.children = afterCreateElement(element.props.children);
  }
  return element;
}

function wrapRender(initailRender) {
  return function () {
    var _this = this;

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var handlers = lifecycle.render.get(this);
    if (handlers) handlers.forEach(function (handler) {
      return handler.call.apply(handler, [_this].concat(args));
    });
    beginIntercept(this);
    var element = initailRender.call.apply(initailRender, [this].concat(args));
    if (!intercepted) element = afterCreateElement(element);
    endIntercept(this);
    return element;
  };
}

module.exports = { wrapRender: wrapRender };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
module.exports = __webpack_require__(0).Object.isFrozen;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(5);

__webpack_require__(50)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(31);
var $getPrototypeOf = __webpack_require__(52);

__webpack_require__(50)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(34) });


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(14);
var getKeys = __webpack_require__(19);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(54);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
__webpack_require__(93);
module.exports = __webpack_require__(37).f('iterator');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(91)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(26);
var defined = __webpack_require__(25);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(34);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(36);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(94);
var global = __webpack_require__(2);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(35);
var TO_STRING_TAG = __webpack_require__(13)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(95);
var step = __webpack_require__(96);
var Iterators = __webpack_require__(35);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
__webpack_require__(104);
__webpack_require__(105);
__webpack_require__(106);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(6);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(56);
var META = __webpack_require__(100).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(28);
var setToStringTag = __webpack_require__(36);
var uid = __webpack_require__(21);
var wks = __webpack_require__(13);
var wksExt = __webpack_require__(37);
var wksDefine = __webpack_require__(38);
var enumKeys = __webpack_require__(101);
var isArray = __webpack_require__(102);
var anObject = __webpack_require__(14);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(24);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(34);
var gOPNExt = __webpack_require__(103);
var $GOPD = __webpack_require__(58);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(19);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f = $propertyIsEnumerable;
  __webpack_require__(30).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(19);
var gOPS = __webpack_require__(30);
var pIE = __webpack_require__(22);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(44);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(57).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 104 */
/***/ (function(module, exports) {



/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('asyncIterator');


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('observable');


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(108);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(33);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(54);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(110);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(111).set });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(5);
var anObject = __webpack_require__(14);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(39)(Function.call, __webpack_require__(58).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var connect = __webpack_require__(45);
var React = __webpack_require__(16);

module.exports = function model(model) {
  if (model && model.prototype instanceof React.Component) {
    return connect(null, model);
  } else {
    return function (component) {
      return connect(model, component);
    };
  }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var lifecycle = __webpack_require__(11);

var _require = __webpack_require__(12),
    get = _require.get,
    set = _require.set;

function autorun(target, method) {
  if (!target) return autorun;
  var autoRef = void 0;
  lifecycle.didMount.add(target, function () {
    if (!this._observer_) return;
    if (get('autorun_started', target, method)) return;
    set('autorun_started', true, target, method);
    var context = this;
    var deep = get('deep', target, method);
    autoRef = this._observer_.run(this[method], { context: context, deep: deep });
    autoRef.run();
  });
  lifecycle.unmount.add(target, function () {
    this._observer_.stop(autoRef);
  });
  set('autorun', true, target, method);
}

module.exports = autorun;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(1),
    isFunction = _require.isFunction;

var lifecycle = __webpack_require__(11);

var _require2 = __webpack_require__(12),
    get = _require2.get,
    set = _require2.set,
    push = _require2.push;

function watch(calculator, immed) {
  if (!isFunction(calculator)) {
    throw new Error('Watch needs to specify a calculation function');
  }
  return function (target, method) {
    var watcher = void 0;
    lifecycle.didMount.add(target, function () {
      if (!this._observer_) return;
      var calcs = get('watch_calcs', target, method);
      if (calcs && calcs.indexOf(calculator) > -1) return;
      push('watch_calcs', calculator, target, method);
      var context = this;
      var deep = get('deep', target, method);
      watcher = this._observer_.watch(function () {
        return calculator.call(this, this.model);
      }, this[method], { context: context, deep: deep });
      //immed 通过 autorun.run 方法会传递给 watcher.calc 方法
      watcher.autoRef.run(immed || false);
    });
    lifecycle.unmount.add(target, function () {
      this._observer_.unWatch(watcher);
    });
    set('watch', true, target, method);
  };
}

module.exports = watch;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(12),
    get = _require.get,
    set = _require.set;

function deep(target, method) {
  if (!target) return deep;
  var error = method ? get('autorun', target, method) || get('watch', target, method) : target && target.prototype && target.prototype._contented_;
  if (error) {
    throw new Error('`deep` must be enabled before `model/autorun/watch`');
  }
  set('deep', true, target, method);
}

module.exports = deep;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(1),
    isObject = _require.isObject,
    each = _require.each,
    isString = _require.isString,
    getByPath = _require.getByPath,
    setByPath = _require.setByPath;

var lifecycle = __webpack_require__(11);

function mapping(map) {
  if (!isObject(map)) {
    throw new Error('Mapping needs to specify a object or array');
  }
  function assign(model, props, prevProps) {
    each(map, function (propName, modelField) {
      if (!isString(propName)) propName = modelField;
      var propValue = getByPath(props, propName);
      var modelValue = getByPath(model, modelField);
      if (modelValue === propValue || prevProps && getByPath(prevProps, propName) === propValue) {
        return;
      }
      setByPath(model, modelField, propValue);
    });
  }
  return function (component) {
    if (!component) throw new Error('Invaild Component');
    var proto = component.prototype;
    if (proto._contented_) {
      throw new Error('`mapping` must be enabled before `model`');
    }
    lifecycle.model.add(proto, function () {
      assign(this.model, this.props);
    });
    lifecycle.didUpdate.add(proto, function (prevProps) {
      assign(this.model, this.props, prevProps);
    });
  };
}

module.exports = mapping;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _classCallCheck2 = __webpack_require__(32);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(15),
    AutoRun = _require.AutoRun;

var UPDATE_EVENT = 'compositionupdate';
var END_EVENT = 'compositionend';
var INPUT_EVENT = 'input';

var Composition = function () {
  Composition.prototype.on = function on(event, handler) {
    if (!global.document) return;
    global.document.addEventListener(event, handler, true);
  };

  Composition.prototype.off = function off(event, handler) {
    if (!global.document) return;
    global.document.removeEventListener(event, handler, true);
  };

  Composition.prototype.enable = function enable() {
    this.on(UPDATE_EVENT, this.onUpdate);
    this.on(END_EVENT, this.onEnd);
    this.on(INPUT_EVENT, this.onInput);
  };

  Composition.prototype.disable = function disable() {
    this.off(UPDATE_EVENT, this.onUpdate);
    this.off(END_EVENT, this.onEnd);
  };

  function Composition() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Composition);
    this.composing = false;
    this.inputting = false;

    this.onUpdate = function () {
      _this.composing = true;
    };

    this.onEnd = function () {
      _this.composing = false;
    };

    this.onInput = function () {
      _this.inputting = true;
      if (_this.inputTimer) clearTimeout(_this.inputTimer);
      _this.inputTimer = setTimeout(function () {
        _this.inputting = false;
        _this.inputTimer = null;
      }, 0);
    };

    this.enable();
  }

  return Composition;
}();

var composition = new Composition();

AutoRun.prototype.isSync = function () {
  return !global.document || composition.composing || composition.inputting;
};

module.exports = composition;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(46)))

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

var _require = __webpack_require__(16),
    useState = _require.useState,
    useEffect = _require.useEffect,
    useLayoutEffect = _require.useLayoutEffect;

var Observer = __webpack_require__(15);

var owner = { buffer: [], state: null, uuid: 0 };

function getter(info) {
  if (!owner.state || owner.buffer.indexOf(info.path) > -1) return;
  owner.buffer.push(this.id + '.' + info.path);
}

function collect(nextState) {
  if (owner.state) owner.state[2] = owner.buffer;
  owner.buffer = [];
  owner.state = nextState;
  return nextState;
}

function createModel(factory) {
  var _useState = useState([]),
      state = _useState[0],
      update = _useState[1];

  if (state.length > 0) return collect(state);
  var isNew = factory instanceof Function;
  var model = isNew ? new factory() : factory;
  var observer = new Observer(model);
  if (!observer.id) observer.id = '_observer_:' + owner.uuid++;
  function setter(info) {
    if (state[2].indexOf(this.id + '.' + info.path) < 0) return;
    update(state);
  }
  function distory() {
    observer.off('change', setter);
    if (isNew) observer.clearReference();
  }
  (0, _assign2.default)(state, [model, distory, []]);
  observer.off('get', getter);
  observer.on('get', getter);
  observer.on('change', setter);
  return collect(state);
}

function useModel(factory) {
  var _createModel = createModel(factory),
      model = _createModel[0],
      distory = _createModel[1];

  useEffect(function () {
    return distory;
  }, []);
  useLayoutEffect(function () {
    return collect();
  });
  return model;
}

module.exports = { useModel: useModel };

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {"name":"mota","version":"2.0.4"}

/***/ })
/******/ ]);
});
//# sourceMappingURL=mota.js.map