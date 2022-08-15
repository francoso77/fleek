var numeros = [2,5,20,48,27,3,19,55];
var somaTodos=0;
var par=0;
var imp=0;
var somaPar = 0;
var somaImp = 0;

for (i = 0; i < numeros.length; i++ )
{
    //somando todos os números do array
    somaTodos += numeros[i];

    //separando e somando pares e impares
    //if (numeros[i] % 2 ==0)
    
    if (!(numeros[i] %2))
    {
        par++;
        somaPar += numeros[i];
    }
    else
    {
        imp++;
        somaImp += numeros[i];
    }
}
console.log("A soma dos números é: ", somaTodos, "\n" );
console.log("A média dos números é: ", somaTodos / numeros.length);
console.log("Quantidade de números pares: ", par);
console.log("Quantidade de números impares: ", imp);
console.log("A média dos números pares: ", somaPar / par);
console.log("A média dos números impares: ", somaImp / imp);
