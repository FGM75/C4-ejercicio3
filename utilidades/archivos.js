const fs = require("fs");
const chalk = require("chalk");

exports.guardarSaludo = (nombre) => {
  fs.writeFile("./textos/saludo.txt", "Hola " + nombre, (err) => {
    if (err) {
      console.log(chalk.red.bold("ABOOOOOORTAA MISION"));
      return;
    }
    console.log("Nombre Recibido!");
  });
};
