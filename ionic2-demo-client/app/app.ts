import {Component, PLATFORM_DIRECTIVES, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MenuComponent} from './components/menu/menu.component'
import {HomePage} from './pages/home/home'
import {CustomersPage} from './pages/customers/customers'
import {DevicePage} from './pages/device/device'

@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {

    private rootPage: any;
    
    @ViewChild(Nav) 
    nav: Nav;

    pages = [
        { title: 'Home', component: HomePage },
        { title: 'Kunden', component: CustomersPage },
        { title: 'Geräte-Info', component: DevicePage },
    ];

    constructor(private platform: Platform) {
        this.rootPage = HomePage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });

    }
    
    navigate(component:any,push=false){
        if (push) this.nav.push(component)
        else this.nav.setRoot(component)
    }
}

ionicBootstrap(MyApp, [
    { provide: PLATFORM_DIRECTIVES, useValue: MenuComponent, multi: true },
    { provide: "api", useValue: "http://localhost:8080/ionic2-demo-1.0-SNAPSHOT/webresources"}
]);
