var par = 0;
var imp = 0;
var somaPar = 0;
var somaImp = 0;

for (i = 1; i <= 100; i++)
{
    // primeira opcao de teste if (i % 2 == 0)
    // segunda opcao de teste if (i % 2) --------- porém aqui o teste é o inverso
    // terceira opcao NOT if (!(i % 2))
    
    if (!(i % 2))
    {
        //console.log("Numéro par: ", i)
        par++;
        somaPar += i;
    }
    else
    {
        //console.log("Numéro Impar: ", i)
        imp++;
        somaImp += i;
    }
}

if (!par)
{
    console.log("Não tem valores pares no intervalo");
}
else
{
    console.log("Quantidade de Números Pares: ", par);
    console.log("Média dos Números Pares: ", somaPar/par);
}
  
if (imp)
{
    console.log("Quantidade de Números Impares: ", imp);
    console.log("Media dos Números Impares: ", somaImp/par);
}
else
{
    console.log("Não tem valores impares no intervalo");
}