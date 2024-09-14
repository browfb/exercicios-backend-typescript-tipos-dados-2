const fs = require('fs'); 

const lerArquivo = (): unknown => {
 return JSON.parse(fs.readFileSync('./bd.json'));
}

const escreverArquivo = (dados: any): void => {
fs.writeFileSync('./bd.json', JSON.stringify(dados));
}

type Endereco = {
cep: string, 
rua: string, 
complemento?: string,
bairro: string,
cidade: string 
}

type Usuario = {
    nome: string, 
    email: string, 
    cpf: string, 
    profissao?: string, 
    endereco: Endereco | null
}

const cadastrarUsuario =(dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[];
    bd.push(dados);
    escreverArquivo(bd); 
    return dados;
}

const listarUsuarios = (): Usuario[] => {
    return lerArquivo() as Usuario[]; 
}

const augusto = cadastrarUsuario({
    nome: "Augusto", 
    email:"augusto@gmail.com",
    cpf: "12345678900",
    endereco: {
        cep: "55365-000",
        rua: "Mauricio Inacio",
        bairro: "centro",
        cidade: "garanhuns"
    }
});

const bd = lerArquivo();
console.log(bd, augusto);
