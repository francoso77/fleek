const NUM = 2;
const POT = 5;
var i = 0;
var resultado = 1;


while (i++ < POT)
{
    resultado = resultado * NUM;
    console.log(i);
}

console.log("O número ", NUM, " elevado a ", POT, " = ", resultado);
