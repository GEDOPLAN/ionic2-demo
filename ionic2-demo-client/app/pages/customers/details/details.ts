import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CustomerService} from '../../../services/customer.service'

@Component({
    templateUrl: 'build/pages/customers/details/details.html',
    styleUrls: ['build/css/pages/customers/details/details.css'],
    providers: [CustomerService]
})
export class CustomerDetailPage {

    customer: Rest.Customer;
    
    customerId:string;
    

    constructor(params:NavParams, private navCtrl: NavController, customerService: CustomerService) {
        this.customerId = params.get("id");
        customerService.getCustomer(this.customerId).subscribe(c => { this.customer = c; })
    }
}
