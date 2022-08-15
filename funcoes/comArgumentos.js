
// função sem valor definido para os paramentros
//function somar(numero01, numero02)

//função com argumentos definidos
function somar(numero01 = 0, numero02 = 0)
{
    return numero01 + numero02
}

var resultado = somar(115, 2)

console.log(resultado)
console.log(somar(45,100))

//mesmo passando mtos valores no javascript ele só vai somar 
//os dois primeiros pq a função tem só 2 parametros
var mtosValores = somar(15,35,10,15,13)
console.log(mtosValores)

//usando com um valor só, como está delcaro o tipo do argumento 
//não dá erro
console.log(somar(1000))