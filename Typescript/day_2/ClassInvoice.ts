// Class - Multiple data and functions are wrapped in single unit.
// Object - Instance of an class.
// new - creates new object for an class.
// constructor - when class of object is called then first thing constructor function is executed.  

// class Login{
//     name : string = 'Rushikesh';

//     constructor(){
//         console.log('Constructor called');
//         this.login();
//     }

//     login() : void {
//         console.log('Successfully loged in', this.name);
//     }
// }

// let instance = new Login();




interface Invoice{
    
    client : string;
    product : string;
    amount : number;
    createInvoice() : void;
}

class ClassInvoice implements Invoice {

    client : string;
    product : string;
    amount : number;

    address : string;

    constructor( client : string, product: string, amount: number, address : string ){

        this.client = client;
        this.product = product;
        this.amount = amount;
        this.address = address;

        console.log(this.address,"this is address");
    }

    createInvoice () : void {
        
        console.log(`Hello ${this.client} you purchased ${this.product} and the amount is ${this.amount}`); 
    }
}

let order_1 = new ClassInvoice('Vijay', 'Samsung Mobile A2', 29000, 'Pune');

