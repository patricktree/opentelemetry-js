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
import { OtlpHttpConfiguration } from './configuration/otlp-http-configuration.js';
import { ISerializer } from '@opentelemetry/otlp-transformer';
import { IOtlpExportDelegate } from './otlp-export-delegate.js';
import { createRetryingTransport } from './retrying-transport.js';
import { createXhrTransport } from './transport/xhr-transport.js';
import { createSendBeaconTransport } from './transport/send-beacon-transport.js';
import { createOtlpNetworkExportDelegate } from './otlp-network-export-delegate.js';
import { createFetchTransport } from './transport/fetch-transport.js';

/**
 * @deprecated use {@link createOtlpFetchExportDelegate}
 */
export function createOtlpXhrExportDelegate<Internal, Response>(
  options: OtlpHttpConfiguration,
  serializer: ISerializer<Internal, Response>
): IOtlpExportDelegate<Internal> {
  return createOtlpNetworkExportDelegate(
    options,
    serializer,
    createRetryingTransport({
      transport: createXhrTransport(options),
    })
  );
}

export function createOtlpFetchExportDelegate<Internal, Response>(
  options: OtlpHttpConfiguration,
  serializer: ISerializer<Internal, Response>
): IOtlpExportDelegate<Internal> {
  return createOtlpNetworkExportDelegate(
    options,
    serializer,
    createRetryingTransport({
      transport: createFetchTransport(options),
    })
  );
}

export function createOtlpSendBeaconExportDelegate<Internal, Response>(
  options: OtlpHttpConfiguration,
  serializer: ISerializer<Internal, Response>
): IOtlpExportDelegate<Internal> {
  return createOtlpNetworkExportDelegate(
    options,
    serializer,
    createRetryingTransport({
      transport: createSendBeaconTransport({
        url: options.url,
        headers: options.headers,
      }),
    })
  );
}
