import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';

declare var device;

@Component({
    templateUrl: 'build/pages/device/device.html',
    styleUrls: ['build/css/pages/device/device.css']
})
export class DevicePage {

    device: any={};

    constructor(platform: Platform) {
        platform.ready().then(() => {
            if (typeof device !== 'undefined'){  //device is a cordova plugin = not define in browser mode
                this.device = device;
            }
            else{
                this.device={
                  "device": "not available in browsers"   
                }
            }
        });
    }
    
    getDeviceKeys(){
        return Object.keys(this.device);
    }
    
    getDeviceAttribute(att:string){
        return this.device[att];
    }
}
