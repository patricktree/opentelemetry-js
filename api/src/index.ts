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

/**
 * @module @opentelemetry/api
 */

export type {
  BaggageEntry,
  BaggageEntryMetadata,
  Baggage,
} from './baggage/types.js';
export { baggageEntryMetadataFromString } from './baggage/utils.js';
export type { Exception } from './common/Exception.js';
export type { HrTime, TimeInput } from './common/Time.js';
export type { Attributes, AttributeValue } from './common/Attributes.js';

// Context APIs
export { createContextKey, ROOT_CONTEXT } from './context/context.js';
export type { Context, ContextManager } from './context/types.js';
export type { ContextAPI } from './api/context.js';

// Diag APIs
export { DiagConsoleLogger } from './diag/consoleLogger.js';
export { DiagLogLevel } from './diag/types.js';
export type {
  DiagLogFunction,
  DiagLogger,
  ComponentLoggerOptions,
  DiagLoggerOptions,
} from './diag/types.js';
export type { DiagAPI } from './api/diag.js';

// Metrics APIs
export { createNoopMeter } from './metrics/NoopMeter.js';
export type { MeterOptions, Meter } from './metrics/Meter.js';
export type { MeterProvider } from './metrics/MeterProvider.js';
export { ValueType } from './metrics/Metric.js';
export type {
  Counter,
  Gauge,
  Histogram,
  MetricOptions,
  Observable,
  ObservableCounter,
  ObservableGauge,
  ObservableUpDownCounter,
  UpDownCounter,
  BatchObservableCallback,
  MetricAdvice,
  MetricAttributes,
  MetricAttributeValue,
  ObservableCallback,
} from './metrics/Metric.js';
export type {
  BatchObservableResult,
  ObservableResult,
} from './metrics/ObservableResult.js';
export type { MetricsAPI } from './api/metrics.js';

// Propagation APIs
export {
  defaultTextMapGetter,
  defaultTextMapSetter,
} from './propagation/TextMapPropagator.js';
export type {
  TextMapPropagator,
  TextMapSetter,
  TextMapGetter,
} from './propagation/TextMapPropagator.js';
export type { PropagationAPI } from './api/propagation.js';

// Trace APIs
export type { SpanAttributes, SpanAttributeValue } from './trace/attributes.js';
export type { Link } from './trace/link.js';
export { ProxyTracer, type TracerDelegator } from './trace/ProxyTracer.js';
export { ProxyTracerProvider } from './trace/ProxyTracerProvider.js';
export type { Sampler } from './trace/Sampler.js';
export {
  SamplingDecision,
  type SamplingResult,
} from './trace/SamplingResult.js';
export type { SpanContext } from './trace/span_context.js';
export { SpanKind } from './trace/span_kind.js';
export type { Span } from './trace/span.js';
export type { SpanOptions } from './trace/SpanOptions.js';
export { type SpanStatus, SpanStatusCode } from './trace/status.js';
export { TraceFlags } from './trace/trace_flags.js';
export type { TraceState } from './trace/trace_state.js';
export { createTraceState } from './trace/internal/utils.js';
export type { TracerProvider } from './trace/tracer_provider.js';
export type { Tracer } from './trace/tracer.js';
export type { TracerOptions } from './trace/tracer_options.js';
export {
  isSpanContextValid,
  isValidTraceId,
  isValidSpanId,
} from './trace/spancontext-utils.js';
export {
  INVALID_SPANID,
  INVALID_TRACEID,
  INVALID_SPAN_CONTEXT,
} from './trace/invalid-span-constants.js';
export type { TraceAPI } from './api/trace.js';

// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
import { context } from './context-api.js';
import { diag } from './diag-api.js';
import { metrics } from './metrics-api.js';
import { propagation } from './propagation-api.js';
import { trace } from './trace-api.js';

// Named export.
export { context, diag, metrics, propagation, trace };
// Default export.
export default {
  context,
  diag,
  metrics,
  propagation,
  trace,
};
