import { WebPlugin } from '@capacitor/core';

import type { DeviceUniqueIdPlugin } from './definitions';

export class DeviceUniqueIdWeb extends WebPlugin implements DeviceUniqueIdPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
