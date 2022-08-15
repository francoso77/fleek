var etanol = 4.0;
var gas = 6.0;

//conumo de km por litro de etanol e gasolina
const CONSUMO_ETANOL = 15;
const CONSUMO_GAS = 12;

var rendimentoEtanol = etanol/CONSUMO_ETANOL;
var rendimentoGas = gas/CONSUMO_GAS;

if (rendimentoEtanol < rendimentoGas)
{
    console.log("Abasteça com Etanol");
}
else if( rendimentoGas < rendimentoEtanol)
{
    console.log("Abasteça com Gasolina");
}
else
{
    console.log("Pode abasteçer Etanol ou Gasolina");
}

