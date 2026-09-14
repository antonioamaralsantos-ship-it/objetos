JOAO GABRIEL PRIMAKI DE SOUZA <joao.primaki.souza@escola.pr.gov.br>
12:18 (há 0 minuto)
para mim

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.endereços = [
{
    rua: "r. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}
];

for (let chave in cliente) {
   if (tipo  !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
}
}le.log(`A chave é ${chave} e o valor é ${cliente[chave]}`);
}