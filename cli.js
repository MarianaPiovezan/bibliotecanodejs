import chalk from "chalk";
import pegaArquivo from "./biblioteca.nodejs.js";
import validaURLs from "./http-validacao.js";   

const caminho = process.argv

async function processaTexto (caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if ( caminho[3] === 'validar') {
    console.log("Lista de links validados:", validaURLs(resultado));
   
    } else
    console.log("Lista de links: ", resultado);
}

processaTexto(caminho) 
