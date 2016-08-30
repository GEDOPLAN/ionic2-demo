import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html',
  styleUrls: ['build/css/pages/home/home.css']
})
export class HomePage {
  constructor(private navCtrl: NavController) {
  
  }
}
