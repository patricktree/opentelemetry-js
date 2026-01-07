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
  LoggerProviderConfig,
  LoggerConfig,
  LoggerConfigurator,
  LogRecordLimits,
  BufferConfig,
  BatchLogRecordProcessorBrowserConfig,
} from './types.js';
export { LoggerProvider } from './LoggerProvider.js';
export type { SdkLogRecord } from './export/SdkLogRecord.js';
export type { LogRecordProcessor } from './LogRecordProcessor.js';
export type { ReadableLogRecord } from './export/ReadableLogRecord.js';
export { ConsoleLogRecordExporter } from './export/ConsoleLogRecordExporter.js';
export type { LogRecordExporter } from './export/LogRecordExporter.js';
export { SimpleLogRecordProcessor } from './export/SimpleLogRecordProcessor.js';
export { InMemoryLogRecordExporter } from './export/InMemoryLogRecordExporter.js';
export { BatchLogRecordProcessor } from './platform/index.js';
export {
  createLoggerConfigurator,
  type LoggerPattern,
} from './config/LoggerConfigurators.js';
