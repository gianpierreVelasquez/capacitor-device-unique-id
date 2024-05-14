# capacitor-unique-device-id

Capacitor plugin to get android and ios device unique identifier

## Install

```bash
npm install capacitor-unique-device-id
npx cap sync
```

## API

<docgen-index>

* [`getAndroidUID()`](#getandroiduid)
* [`getIosUID()`](#getiosuid)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getAndroidUID()

Take in consideration that for apps that were installed prior to updating the device to a version of Android 8.0 (API level 26) or higher, the value of ANDROID_ID changes if the app is uninstalled and then reinstalled after the OTA.
More information on https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID

```typescript
getAndroidUID() => Promise<UniqueIdentifier>
```

**Returns:** <code>Promise&lt;<a href="#uniqueidentifier">UniqueIdentifier</a>&gt;</code>

--------------------


### getIosUID()

```typescript
getIosUID() => Promise<UniqueIdentifier>
```

**Returns:** <code>Promise&lt;<a href="#uniqueidentifier">UniqueIdentifier</a>&gt;</code>

--------------------


### Interfaces


#### UniqueIdentifier

| Prop             | Type                |
| ---------------- | ------------------- |
| **`identifier`** | <code>string</code> |

</docgen-api>
