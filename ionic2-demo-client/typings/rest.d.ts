// Generated using typescript-generator version 1.10.220 on 2016-08-30 11:45:01.

declare namespace Rest {

    interface Category extends Serializable {
        categoryID: number;
        categoryName: string;
        description: string;
        picture: string;
        products: Product[];
    }

    interface Category_ {
    }

    interface Customer extends Serializable {
        customerID: string;
        companyName: string;
        contactName: string;
        contactTitle: string;
        address: string;
        city: string;
        region: string;
        postalCode: string;
        country: string;
        phone: string;
        fax: string;
        orders: Order[];
    }

    interface Customer_ {
    }

    interface Employee extends Serializable {
        employeeID: number;
        lastName: string;
        firstName: string;
        title: string;
        titleOfCourtesy: string;
        birthDate: Date;
        hireDate: Date;
        address: string;
        city: string;
        region: string;
        postalCode: string;
        country: string;
        homePhone: string;
        extension: string;
        photo: string;
        notes: string;
        orders: Order[];
        employees: Employee[];
        reportsTo: Employee;
    }

    interface Employee_ {
    }

    interface Order extends Serializable {
        orderID: number;
        orderDate: Date;
        requiredDate: Date;
        shippedDate: Date;
        freight: number;
        shipName: string;
        shipAddress: string;
        shipCity: string;
        shipRegion: string;
        shipPostalCode: string;
        shipCountry: string;
        customer: Customer;
        employee: Employee;
        shipVia: Shipper;
        orderDetails: OrderDetail[];
    }

    interface OrderDetail extends Serializable {
        id: number;
        unitPrice: number;
        quantity: number;
        discount: number;
        order: Order;
        product: Product;
    }

    interface OrderDetail_ {
    }

    interface Order_ {
    }

    interface Product extends Serializable {
        productID: number;
        productName: string;
        quantityPerUnit: string;
        unitPrice: number;
        unitsInStock: number;
        unitsOnOrder: number;
        reorderLevel: number;
    }

    interface Product_ {
    }

    interface Shipper extends Serializable {
        shipperID: number;
        companyName: string;
        phone: string;
        orders: Order[];
    }

    interface Shipper_ {
    }

    interface Supplier extends Serializable {
        supplierID: number;
        companyName: string;
        contactName: string;
        contactTitle: string;
        address: string;
        city: string;
        region: string;
        postalCode: string;
        country: string;
        phone: string;
        fax: string;
        homePage: string;
        products: Product[];
    }

    interface Supplier_ {
    }

    interface User extends Serializable {
        login: string;
        roles: string[];
        customerID: string;
    }

    interface Serializable {
    }

}
