function saludar(nombre) {
  return `hola, ${nombre}`;
}
console.log(saludar("alan"));
//saludar = 30 asignacion a funcion

const saludar2 = function (nombre) {
  return `${nombre}`;
};

console.log(saludar2);

const saludar3 = (nombre) => {
  return `${nombre}`;
};

//como solo tiene un return

const saludar4 = (nombre) => `${nombre}`;

console.log(saludar3("alan2"));

console.log(saludar4("alan3"));

const getUser = () => ({
  nombre: "alan",
  nombre: "lasco",
});

console.log(getUser());
