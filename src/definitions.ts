export interface UniqueIdentifier {
  identifier: string
}

export interface DeviceUniqueIdPlugin {
  getAndroidUID(): Promise<UniqueIdentifier>;
  getIosUID(): Promise<UniqueIdentifier>;
}
