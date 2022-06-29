import chalk from "chalk";
import fs from "fs";

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados;
}

function pegarErro(erro) {
  throw new Error(chalk.red(erro.code, "Caminho do arquivo errado"));
}

// PROMISE - USANDO async / await

async function pegaArquivo(caminhoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    pegarErro(erro);
  }
}

//pegaArquivo("texto1.md");

export default pegaArquivo;

// PROMISE - USANDO THEN / CATCH

/*

function pegaArquivo (caminhoArquivo){
    const enconding = 'utf-8'
    fs.promises
    .readFile(caminhoArquivo, enconding)
    .then (function(texto){console.log(chalk.green(texto))})
    .catch(function (erro) { pegarErro(erro)})
}

/*

/*

// READ FILE

function pegaArquivo(caminhoArquivo) {
const enconding = 'utf-8'

fs.readFile( caminhoArquivo, enconding, function(erro, texto) {

    if (erro) {
    pegarErro(erro)
    }
    console.log(chalk.green(texto));
})

}
*/
