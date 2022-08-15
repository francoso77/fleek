var metroQuadrado = 12.25;

var isencao = 250;

var alturaImovel = 12;
var larguraImovel = 30;
var imovel = alturaImovel * larguraImovel;

if(imovel > isencao)
{
    var imposto = (imovel - isencao) * metroQuadrado;
    console.log('Este imóvel paragá imposto de: ', imposto);
}
else
{
    console.log("Imóvel isento de imposto!");
}

imovel > isencao ? console.log('Ternário: Este imóvel paragá imposto de: ', (imovel - isencao) * metroQuadrado)
: console.log("Ternário: Imóvel isento de imposto!");
//Aqui todos são falsos - falsy
//if(false)
//if(null)
//if(undefined)
//if(0)
//if(NaN)
//if('')

//Aqui todos são verdadeiros - truthy
//if(true)
//if({})
//if([])
//if(42)
//if("flor")
//if(new Date())
//if(-3.14)
//if(Infinity)
var x = null;
var num = 1000;
if((x * num) > 100)
{
    console.log('verdade');
}
else
{
    console.log('falso');    
}

//Operador Ternário - ?

10 > 20 ? console.log('Maior'):console.log('Menor');

// case - com valores 

switch (2 <= 10)
{
    case true: 
        console.log('case verdadeiro');
        break;
    case false: 
        console.log('case falso');
        break;
    default:    
        console.log('Retorno caso não tenha um case');
        break;
}

// case - com expressões
var exp = "Manga";

switch (exp)
{
    case 'Maçã': 
        console.log('Suco de maçã');
        break;
    case 'Laranja': 
        console.log('Suco de Laranja');
        break;
    case 'Manga':
    case 'Melão':
        console.log('Suco de Manga e Melão são mais caros');
        break;
    default:    
        console.log('Não temos esse suco');
        break;
}