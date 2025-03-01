import heroes, { owners } from "../data/heroes.js";

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => {
//     if (heroe.id == id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// };

const getHeroeById = (id) => heroes.find((heroe) => heroe.id == id); // necesita un callback el find, solo devuelve uno

console.log(getHeroeById(2));

const getHeroeByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner); // filter devuelve todos

console.log(getHeroeByOwner("DC"));
