const chalk = require("chalk");
const fs = require("fs");

exports.guardarSaludo = (nombre) => {
  fs.writeFile("./textos/saludo.txt", "Hola " + nombre, (err) => {
    if (err) {
      console.log(chalk.red.bold("ABOOOOOORTAA MISION"));
      return;
    }
    console.log("Nombre Recibido!");
  });
};
