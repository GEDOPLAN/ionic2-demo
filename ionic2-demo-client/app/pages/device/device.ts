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
            this.device = device;
        });
    }
    
    getDeviceKeys(){
        return Object.keys(this.device);
    }
    
    getDeviceAttribute(att:string){
        return this.device[att];
    }
}
