//desestructuracion
//asignacion desestructurante

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "ironman",
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
//esto es tedioso

const { nombre, edad, clave } = persona;

console.log(nombre + edad + clave);

const imprimePersona = (persona) => {
  console.log(persona);
};
// se le puede asignar una propiedad por defecto
const imprimePersonaD = ({ nombre, rango = "capitan" }) => {
  console.log(nombre + rango);
};

const usecontext = ({ clave, nombre, edad, rango = "capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    lat: {
      l: 14,
      i: 15,
    },
  };
};

imprimePersona(persona);
imprimePersonaD(persona);
const {
  nombreClave,
  anios,
  lat: { l, i },
} = usecontext(persona); // lo ideal es desestructuracion de lat aparte
console.log(nombreClave, anios, i, l);
