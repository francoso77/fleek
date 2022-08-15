
//declarado fora da função ele pode ser usando
//tanto dentro quando fora da função
var multiplicador = 10

function somar(numero01 = 0, numero02 = 0)
{
    //como usou o var mesmo como mesmo nome é uma outra variável 
    //var multiplicador = 5
    //sem o var ele troca o valor da variável 
    multiplicador = 20
    console.log("valor de multiplicador dentro da função: ", multiplicador)
    return numero01 + numero02 * multiplicador
}

console.log("valor de multiplicador fora da função: ", multiplicador)
var resultado = somar(115, 2)

console.log(resultado)


