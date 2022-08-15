var cadastro = 
{
    empresa: "jb textil",
    tel: "037-3016-5407",
    cnpj: 20278531000158
}

//está função altera o contéudo do objeto

function converterEmMaiusculo(objCadastro)
{
    objCadastro.empresa = objCadastro.empresa.toUpperCase()
}

console.log("Empresa ANTES da função: ", cadastro.empresa)
converterEmMaiusculo(cadastro)

//aqui o valor do objeto foi transformado alterado dentro da tabela BD
console.log("Empresa DEPOIS da função: ", cadastro.empresa)

cadastro.endereco = "Rod BR 494, 13.700"

//cuidado aqui vc inseriu um campo no objeto q não foi declarado 
console.log(cadastro.endereco)