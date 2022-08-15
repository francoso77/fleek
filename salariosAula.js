var salario = [1500.35, 4838.70, 10525.14, 3250.90, 8512.24];

var somaSalarios = 0;
var i = 0;
var mediaSalarios = 0;
var maiorSalario = salario[0];
var menorSalario = salario[0];
var qtdSalarios = salario.length;

console.log(qtdSalarios);

do
{
    if(salario[i] > maiorSalario)    
    {
        maiorSalario = salario[i];
    }
    
    if (salario[i] < menorSalario)
    {
        menorSalario = salario[i];
    }
    somaSalarios += salario[i++];

}
while (i < qtdSalarios)

console.log("A soma dos salarios: ", somaSalarios);

if (!(somaSalarios/qtdSalarios))
{
    console.log("Não salarios para calcular a média.")
}
else
{
    console.log("A media dos salarios: ", (somaSalarios/qtdSalarios).toFixed(2));
}
console.log("O menor salario: ", menorSalario);
console.log("O maior salario: ", maiorSalario);
