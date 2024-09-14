const fs = require('fs'); 

const lerArquivo = (): unknown => {
 return JSON.parse(fs.readFileSync('./bd.json'));
}

const escreverArquivo = (dados: any): void => {
fs.writeFileSync('./bd.json', JSON.stringify(dados));
}

const dados = lerArquivo() as string[];

dados.push("vinicius")
escreverArquivo(dados)

console.log(lerArquivo());
