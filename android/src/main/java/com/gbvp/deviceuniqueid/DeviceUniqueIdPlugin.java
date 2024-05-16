package com.gbvp.deviceuniqueid;

import android.annotation.SuppressLint;
import android.provider.Settings.Secure;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "DeviceUniqueId")
public class DeviceUniqueIdPlugin extends Plugin {
    
    @PluginMethod
    @SuppressLint("HardwareIds")
    public void getDeviceUID(final PluginCall call) {
        String uid = Secure.getString(getContext().getContentResolver(), Secure.ANDROID_ID);

        JSObject ret = new JSObject();
        ret.put("identifier", uid);
        call.resolve(ret);
    }
}
