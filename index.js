const { program } = require("commander");
const chalk = require("chalk");
const { guardarSaludo } = require("./utilidades/archivos");
program.option("-n,--nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const options = program.opts();
if (options.nombre) {
  guardarSaludo(options.nombre);
} else {
  console.log(chalk.yellow.bold("Nombre 404 Not found"));
  process.exit();
}
