//Saludo con callback
function getName(callback){
    let name = prompt('Ingresá tu nombre: ');
    callback(name);
}

function sayHi(name){
    alert('Hola ' + name);
}
getName(sayHi);

//Calculadora con callback: suma y resta
let suma = (n1, n2) => n1 +n2;
let resta =(n1, n2) => n1 - n2;

let calculadora = function(n1, n2, callback){
    return callback(n1, n2);
}

console.log(calculadora(7, 5, resta));
console.log(calculadora(7, 5, suma));
//Calculadora usando la misma función pero haciendo el callback
console.log(calculadora(7, 5, function(n1, n2){return n1 - n2}));
console.log(calculadora(7, 5, function(n1, n2){return n1 + n2}));


//Sort nomal en un objeto
let productos = [];
productos.push({nombre: 'Remera', precio: 100});
productos.push({nombre: 'Pantalon', precio: 800});
productos.push({nombre: 'Camisa', precio: 300});
productos.sort();
console.log(productos);


//Sort con callback propio para generar orden en la 
let productos2 = [];
productos2.push({nombre: 'Remera', precio: 100});
productos2.push({nombre: 'Pantalon', precio: 800});
productos2.push({nombre: 'Camisa', precio: 300});
productos2.sort(function(valor1,valor2){
    if(valor1.nombre < valor2.nombre){
        return -1;
    }else{
        return 1;
    }
});
console.log(productos2);


//ort con callback propio para generar orden 
let productos3 = [];

