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

export type { SessionProvider } from './types/SessionProvider.js';
export {
  createSessionSpanProcessor,
  createSessionLogRecordProcessor,
  createSessionManager,
  createDefaultSessionIdGenerator,
  createLocalStorageSessionStore,
} from './utils.js';
export type { Session } from './types/Session.js';
export type { SessionIdGenerator } from './types/SessionIdGenerator.js';
export type { SessionPublisher } from './types/SessionPublisher.js';
export type { SessionObserver } from './types/SessionObserver.js';
export type { SessionStore } from './types/SessionStore.js';
