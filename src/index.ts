import { registerPlugin } from '@capacitor/core';

import type { DeviceUniqueIdPlugin } from './definitions';

const DeviceUniqueId = registerPlugin<DeviceUniqueIdPlugin>('DeviceUniqueId', {
  web: () => import('./web').then(m => new m.DeviceUniqueIdWeb()),
});

export * from './definitions';
export { DeviceUniqueId };
