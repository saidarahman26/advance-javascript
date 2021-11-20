const students = [
    {id:21,name:"kamal"},
    {id:31,name:"hasi"},
    {id:41,name:"moyna"}

]
const name = [];
// for(let i = 0;i<students.length;i++){
//     const elements = students.name[i];
//     name.push(elements)

// }
// console.log(name);
const names = students.map(s => s.name);
console.log(names);