export interface DeviceUniqueIdPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
