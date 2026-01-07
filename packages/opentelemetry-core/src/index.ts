/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export { W3CBaggagePropagator } from './baggage/propagation/W3CBaggagePropagator.js';
export { AnchoredClock } from './common/anchored-clock.js';
export type { Clock } from './common/anchored-clock.js';
export { isAttributeValue, sanitizeAttributes } from './common/attributes.js';
export {
  globalErrorHandler,
  setGlobalErrorHandler,
} from './common/global-error-handler.js';
export { loggingErrorHandler } from './common/logging-error-handler.js';
export {
  addHrTimes,
  getTimeOrigin,
  hrTime,
  hrTimeDuration,
  hrTimeToMicroseconds,
  hrTimeToMilliseconds,
  hrTimeToNanoseconds,
  hrTimeToTimeStamp,
  isTimeInput,
  isTimeInputHrTime,
  millisToHrTime,
  timeInputToHrTime,
} from './common/time.js';
export { unrefTimer } from './common/timer-util.js';
export type { ErrorHandler, InstrumentationScope } from './common/types.js';
export { ExportResultCode } from './ExportResult.js';
export type { ExportResult } from './ExportResult.js';
export { parseKeyPairsIntoRecord } from './baggage/utils.js';
export {
  SDK_INFO,
  _globalThis,
  getStringFromEnv,
  getBooleanFromEnv,
  getNumberFromEnv,
  getStringListFromEnv,
  otperformance,
} from './platform/index.js';
export { CompositePropagator } from './propagation/composite.js';
export type { CompositePropagatorConfig } from './propagation/composite.js';
export {
  TRACE_PARENT_HEADER,
  TRACE_STATE_HEADER,
  W3CTraceContextPropagator,
  parseTraceParent,
} from './trace/W3CTraceContextPropagator.js';
export {
  RPCType,
  deleteRPCMetadata,
  getRPCMetadata,
  setRPCMetadata,
} from './trace/rpc-metadata.js';
export type { RPCMetadata } from './trace/rpc-metadata.js';
export {
  isTracingSuppressed,
  suppressTracing,
  unsuppressTracing,
} from './trace/suppress-tracing.js';
export { TraceState } from './trace/TraceState.js';
export { merge } from './utils/merge.js';
export { TimeoutError, callWithTimeout } from './utils/timeout.js';
export { isUrlIgnored, urlMatches } from './utils/url.js';
export { BindOnceFuture } from './utils/callback.js';
export { diagLogLevelFromString } from './utils/configuration.js';
import { _export } from './internal/exporter.js';
export const internal = {
  _export,
};
