let numbers =[2,4,6,8,9,10];
let output = [];

for(let i = 0;i<numbers.length;i++){
    const elements = numbers[i]
    const result = elements*elements
    output.push(result)
}

function square (elements){
    return elements*elements;
}
const square = elements => elements*elements;
const square = x=>x*x;

const result = numbers.map(function(elements){
    return elements*elements;
})
const result = numbers.map(elements=>elements*elements);
const result = numbers.map(x=>x*x)
console.log(result);

//FILTER//
const bigger = numbers.filter(x=> x>6);
console.log(bigger)