//desestructuracion de arreglos

const personajes = ["Alan", "Xavier", "Lasco"];

console.log(personajes[0]);

const [, , Alan] = personajes; // , para ignorar el primero

console.log(Alan);

const retornaArray = () => {
  return ["abc", 123];
};

const [letras, numeros] = retornaArray();

console.log(letras, numeros);

const usestate = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const arr = usestate("goku");
console.log(arr);
arr[1]();

const [nombre, setNombre] = usestate("goku");

console.log(nombre);
setNombre();
