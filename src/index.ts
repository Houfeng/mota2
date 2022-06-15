/**
 * Copyright (c) 2015-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <houzhanfeng@gmail.com>
 */

import { ObserveConfig, nextTick } from "ober";

import { unstable_batchedUpdates } from "./batch";
import { name } from "./info";
import { AnyFunction } from "./util";

export {
  observable,
  action,
  bind,
  computed,
  track,
  untrack,
  autorun,
  watch,
  nextTick,
  ObserveConfig,
  ObserveInspector,
  takeDependencies,
  type ObserveMode,
} from "ober";

export { version } from "./info";

export { observer } from "./observer";
export { useObservable, useWatch, useAutoRun, useComputed } from "./hooks";

export function setBatchHandler(fn: AnyFunction) {
  nextTick.batch = fn;
}

setBatchHandler(unstable_batchedUpdates);
ObserveConfig.logPrefix = name.toLocaleUpperCase();
