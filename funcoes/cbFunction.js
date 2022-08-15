//cb de array.forEach

function imprimirValor(oque)
{
    console.log(oque)
}

var notas = [2.5,5,9,1.5]

imprimirValor("jb textil")
imprimirValor(notas)

//aqui passando a função imprimirValor como paramentro
// para cada elemento do array ele executa o for
// para cada função ele roda o for
notas.forEach(imprimirValor)

//aqui usando Arrow Fanction - qdo a função é somente para 
//resolver essa situação, ela só acontece aqui neste momento
notas.forEach((valorDoElemento,i ) => 
{
    console.log("O indice do array: ", i )
    console.log("Valor de cada Elemento: ", valorDoElemento)
})
