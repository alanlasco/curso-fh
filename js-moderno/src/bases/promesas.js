import { getHeroeById } from "./bases/importaciones-funciones-de-arreglos.js";

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //tarea
    const heroe = getHeroeById(2);
    resolve(heroe); //esto va al then
    console.log("dos segundos despues resolve", heroe);
    reject("no se pudo encontrar el heroe");
  }, 2000);
}); //resolve es otro callback/ asincronas

promesa
  .then((heroe) => {
    console.log("then de la promesa", heroe);
  })
  .catch((err) => console.warn(err));

const getHerpByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //tarea
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("no se encontro el heroe");
      }
    }, 2000);
  });
};
getHerpByIdAsync(10)
  .then((heroe) => console.log("heroe", heroe)) //console.log sirve igual que el warn
  .catch((err) => console.warn(err));
