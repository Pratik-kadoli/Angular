// Generics - reused block of code with different types 
// extends - provide property type for generics

// let createInvoice = ( order : object ) =>{

//     let id = Math.floor( Math.random() * 100 );
//     return {...order,id}
// }

// let orderOne = createInvoice({name : 'Vijay', product : 'Cap', amount : 299});

// console.log(orderOne)

let objOne = {
    Name : 'pratik',
    age : 23
}

let obj = {...objOne};

obj['Name'] = 'shubham';

// console.log(objOne,obj);

// let name1 = 'pratik';
// let name2 = name1;

// console.log(name1,name2);
