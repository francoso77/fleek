const CEP="35501506";

var cep=0;
var cepLimpo = "";

cep = parseInt(CEP);
cepLimpo = String(cep)



if(cepLimpo.length < 8 || cepLimpo.length > 8)
{
    console.log("CEP inválido!", CEP);
}
else
{
    cepLimpo = cepLimpo.substring(0,2)+'.'+ cepLimpo.substring(2,5)+ '-'+cepLimpo.substring(5,8);
    console.log("CEP Válido!", CEP);
    console.log("CEP Válido e com formato:", cepLimpo);
}

//charAt retorna a posição da variavel

console.log(CEP.charAt(0))

