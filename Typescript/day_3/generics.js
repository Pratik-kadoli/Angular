// Generics - reused block of code with different types 
// extends - provide property type for generics
var createInvoice = function (order) {
    return order;
};
var obj = { someData: { name: 'str', amount: 299 }, product: 'Cap', address: 'pune' };
var orderOne = createInvoice(obj);
console.log(orderOne);
