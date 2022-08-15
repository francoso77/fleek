//primeira forma
var somar = function ()
{
    //fazendo operações direto no return
    return 100 * 3
}

//segunda forma 

function somaNumeros()
{
    console.log("dentro da função sem declarar com o var")
    return 100
}
somaNumeros()

//armazendo o resultado da função em uma variável 
var resultadoSomar = somar()

//sem o return
console.log(somar(), somaNumeros())
console.log(resultadoSomar)