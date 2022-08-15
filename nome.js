const NOME = "asdfasdf asdfsadf ";
var tamanhoNome = NOME.length;
var nomeCorreto = false;
var arrayNome = NOME.split("");
var contaEspaco = NOME.split(" ");

//teste se nome é vázio
if (!NOME)
{

    console.log("campo NOME vázio", NOME);

}
//teste se nome tem 2 palavras
else if (contaEspaco.length >= 2)
{
    //teste se é no máximo 35 caracteres
    if (tamanhoNome <= 35)
    {
        for(i = 0; i < tamanhoNome; i++)
        {
            //teste se é espaço em branco
            if(arrayNome[i].charCodeAt() != 32)
            {
                //teste se é letras A a Z 
                if(arrayNome[i].charCodeAt() < 65 || arrayNome[i].charCodeAt() > 122)
                {
                    nomeCorreto = false;
                    i = tamanhoNome + 1;
                }
                //teste se é letras a a z
                else if(arrayNome[i].charCodeAt() >= 91 && arrayNome[i].charCodeAt() <= 96)
                {
                    nomeCorreto= false;
                    i = tamanhoNome + 1;
                }
                else
                {
                    nomeCorreto = true;
                }
            }
        }
        if (nomeCorreto == true)
        {
            console.log("Nome Válido");
        }
        else
        {
            console.log("o Nome deve conter apenas LETRAS");
        }
    }
    else
    {
        console.log("o campo NOME deve conter no máximo 35 caractes.");
    }
}
else
{
    console.log("o campo NOME deve conter nome e sobrenome.");
}

