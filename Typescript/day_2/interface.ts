// interface - a template for class, object or a rule for class.

interface studentData{
    name : string,
    city : string,
    ph_number : string,
}
let student : studentData = {
    name : 'Rushikesh',
    city : 'Pune',
    ph_number : '+91 9482737231'
}

function getName(){
    this.student = {}
}

console.log(student)