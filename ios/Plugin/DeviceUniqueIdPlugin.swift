import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(DeviceUniqueIdPlugin)
public class DeviceUniqueIdPlugin: CAPPlugin {

    @objc func getDeviceUID(_ call: CAPPluginCall) {
        if let uid = UIDevice.current.identifierForVendor {
            call.resolve([
                "identifier": uid.uuidString
            ])
        } else {
            call.reject("Id not available")
        }
    }
}
