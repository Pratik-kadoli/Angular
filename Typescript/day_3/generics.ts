// Generics - reused block of code with different types 
// extends - provide property type for generics

interface rules {
    name : string
    amount : number
}


let createInvoice = ( order : object ) =>{

    return order;
}

let obj = { someData : {name : 'str', amount : 299}, product : 'Cap', address : 'pune'};

let orderOne = createInvoice(obj);
console.log(orderOne)



