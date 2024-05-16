import { WebPlugin } from '@capacitor/core';

import type { DeviceUniqueIdPlugin, UniqueIdentifier } from './definitions';

export class DeviceUniqueIdWeb extends WebPlugin implements DeviceUniqueIdPlugin {
  async getDeviceUID(): Promise<UniqueIdentifier> {
    return {
      identifier: 'device-uid'
    };
  }
}
