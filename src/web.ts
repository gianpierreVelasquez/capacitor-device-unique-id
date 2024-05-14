import { WebPlugin } from '@capacitor/core';

import type { DeviceUniqueIdPlugin, UniqueIdentifier } from './definitions';

export class DeviceUniqueIdWeb extends WebPlugin implements DeviceUniqueIdPlugin {
  async getAndroidUID(): Promise<UniqueIdentifier> {
    return {
      identifier: 'android-id'
    };
  }

  async getIosUID(): Promise<UniqueIdentifier> {
    return {
      identifier: 'android-id'
    };
  }
}
