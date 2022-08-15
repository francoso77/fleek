function exibirNome(nome)
{
    console.log(nome)

}

exibirNome('Francoso')

var listaNomes = [
    'Frank',
    'Ana Clara',
    'Zanatta',
    'Diana'
]
var teste = 'Frank'
listaNomes.forEach(exibirNome)

for (indice in listaNomes)
{
    console.log(indice, listaNomes[indice])
    

}
