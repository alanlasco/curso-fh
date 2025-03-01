const arreglo = new Array(); // no es recomendado, solamente con posiciones predeterminados o fijos

const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);

arreglo2.push(5);

//no es recomendable usar el push

//mejor con el spread

//los arreglos tambien son objetos

let arreglo3 = [...arreglo2, 5];

const arreglo4 = arreglo3.map(function (num) {
  return num * 2;
}); //es un callback  ); //espera una funcion

//si no hay un return devuelve siempre undefined

console.log(arreglo4);
