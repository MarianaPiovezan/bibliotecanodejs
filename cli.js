import chalk from "chalk";
import pegaArquivo from "./biblioteca.nodejs.js";

const caminho = process.argv



async function processaTexto (caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    console.log(chalk.yellow("Lista de links: ", resultado));
}

processaTexto(caminho) 