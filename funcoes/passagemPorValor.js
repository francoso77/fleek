function converterEmMaiusculo(oque = "")
{
    /* se o seu paramentro já vai definido o tipo
     qdo vc escreve o código ele trás os metodos e propriedades
     mesmo se vc alterar o argumento, não troca o dado armazendo
     tipos primitivos de variável:
     string
     Number
     Boolean
     Null
     Undefined
     Stmbol
     qdo se usa um desses tipo vc não transmite o conteúdo (referência)
     vc transmite o valor
     */

    oque = oque.toUpperCase()
    return oque
}

console.log(converterEmMaiusculo("jb textil eireli"))

var nomeEmpresa = "Jb Textil"

console.log(converterEmMaiusculo(nomeEmpresa))
console.log("valor de nomeEmpresa: ", nomeEmpresa)
// dessa forma não muda o valor da variável
// apenas muda formas e propriedades
