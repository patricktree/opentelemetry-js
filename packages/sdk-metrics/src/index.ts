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

export type {
  Sum,
  LastValue,
  Histogram,
  ExponentialHistogram,
} from './aggregator/types.js';

export type {
  AggregationSelector,
  AggregationTemporalitySelector,
} from './export/AggregationSelector.js';

export { AggregationTemporality } from './export/AggregationTemporality.js';

export { DataPointType, InstrumentType } from './export/MetricData.js';
export type {
  DataPoint,
  SumMetricData,
  GaugeMetricData,
  HistogramMetricData,
  ExponentialHistogramMetricData,
  ResourceMetrics,
  ScopeMetrics,
  MetricData,
  MetricDescriptor,
  CollectionResult,
} from './export/MetricData.js';

export type { PushMetricExporter } from './export/MetricExporter.js';

export { MetricReader } from './export/MetricReader.js';
export type { IMetricReader, MetricReaderOptions } from './export/MetricReader.js';

export { PeriodicExportingMetricReader } from './export/PeriodicExportingMetricReader.js';
export type { PeriodicExportingMetricReaderOptions } from './export/PeriodicExportingMetricReader.js';

export { InMemoryMetricExporter } from './export/InMemoryMetricExporter.js';

export { ConsoleMetricExporter } from './export/ConsoleMetricExporter.js';

export type {
  MetricCollectOptions,
  MetricProducer,
} from './export/MetricProducer.js';

export { MeterProvider } from './MeterProvider.js';
export type { MeterProviderOptions } from './MeterProvider.js';

export { AggregationType } from './view/AggregationOption.js';
export type { AggregationOption } from './view/AggregationOption.js';

export type { ViewOptions } from './view/View.js';

export type { IAttributesProcessor } from './view/AttributesProcessor.js';
export {
  createAllowListAttributesProcessor,
  createDenyListAttributesProcessor,
} from './view/AttributesProcessor.js';

export { TimeoutError } from './utils.js';
