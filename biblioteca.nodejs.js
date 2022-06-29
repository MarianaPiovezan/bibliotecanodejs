import chalk from "chalk";

import fs from "fs";

const texto =
  "A interface File provê informações sobre arquivos e permite ao JavaScript  a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.) ";

function pegarErro(erro) {
  throw new Error(chalk.red(erro.code, "Caminho do arquivo errado"));
}

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\(https?:\/\/[^$#\s].[^\s]*\)/gm;
  const linksExtraidos = texto.match(regex);
  console.log(linksExtraidos);
}

extraiLinks(texto);

// PROMISE - USANDO async / await

async function pegaArquivo(caminhoArquivo) {
  const enconding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoArquivo, enconding);
    console.log(chalk.green(texto));
  } catch (erro) {
       pegarErro(erro);
  }
}

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
//pegaArquivo('texto1.md')
