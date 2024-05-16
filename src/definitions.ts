export interface UniqueIdentifier {
  identifier: string
}

export interface DeviceUniqueIdPlugin {
  getDeviceUID(): Promise<UniqueIdentifier>;
}
