import {Component, Injectable, Inject} from '@angular/core'
import {Http} from '@angular/http'
import {Observable} from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class CustomerService {
    constructor( @Inject("api") private api: string, private http: Http) { }
    
    getCustomers(): Observable<Rest.Customer[]>{
        return this.http.get(`${this.api}/customer`).map(e => e.json())
    }
    
    getCustomer(id: string): Observable<Rest.Customer>{
        return this.http.get(`${this.api}/customer/${id}`).map(e => e.json())
    }
}

