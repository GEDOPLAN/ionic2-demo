import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CustomerService} from '../../services/customer.service'
import {CustomerDetailPage} from './details/details'

@Component({
    templateUrl: 'build/pages/customers/customers.html',
    styleUrls: ['build/css/pages/customers/customers.css'],
    providers: [CustomerService]
})
export class CustomersPage {

    customers: Rest.Customer[];

    constructor(private navCtrl: NavController, customerService: CustomerService) {
        customerService.getCustomers().subscribe(c => { this.customers = c; })
    }
    
    showCustomer(customer: Rest.Customer){
        this.navCtrl.push(CustomerDetailPage, { id: customer.customerID})
    }
}
