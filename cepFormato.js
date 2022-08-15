const CEP="35.501-50-";

var cepLimpo = ""
var cepValido = ""

for (var i = 0; i <= CEP.length; i++)
{
    if(CEP.charAt(i) != "." && CEP.charAt(i) != "-")
    {
        cepLimpo += CEP.charAt(i)
    }
}

for (var j = 0; j < cepLimpo.length; j++)
{
    if(isNaN(parseInt(cepLimpo.charAt(j))))
    {
        j = cepLimpo.length + 1 
    }
    else
    {
        cepValido += cepLimpo.charAt(j)
    }
}

if (cepValido.length < 8)
{
    console.log("CEP Invalido!")
}
else
{
    console.log("CEP Valido!")
}
