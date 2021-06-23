//Calculadora con callbacks
let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let mult = (n1, n2) => n1 *n2;
let div = (n1, n2) => n1 / n2;

let firstNumber = parseInt(prompt("Ingrese el primer número por favor"));
let secondNumber = parseInt(prompt("Ingrese el segundo número por favor"));

function calculadora(n1, n2, callback){
    if(typeof callback === 'function'){
       return callback(n1, n2);
    } else{
        alert("El parametro calback o es una función");
    }
}

console.log(calculadora(firstNumber, secondNumber, sumar));
console.log(calculadora(firstNumber, secondNumber, restar));
console.log(calculadora(firstNumber, secondNumber, mult));
console.log(calculadora(firstNumber, secondNumber, div));

calculadora(firstNumber, secondNumber,(n1, n2) => sumar(n1 + n2) / 2);

