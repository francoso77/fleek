/*aqui iremos demostrar como criar um local para as funções
e exportar ela para os outros modulos do meu sistema.
Isso é feito atráves do comando export default se for um 
ou export function somar()*/

export function somaDoisNumeros(num1 = 0, num2 = 0)
{
    return num1 + num2
}

//função criada ela é chamada em outro arquivo com o import

/*Para usar a modularização tem alterar o arquivo package.json
para criar este arquivo excute: 

npm init -y

isso irá criar um aquivo no seu diretório crie nele a opção 
"type":"module",
e ser for interessante retire a opção "main":
*/

//para documentar use /** */


/**
 * Divide o dividendo pelo divisor
 * @param {number} dividendo 
 * @param {number} divisor 
 * @returns Resultado da Divisão
 */
export function dividir(dividendo, divisor)
{
    if (!divisor)
    {
        throw new Error ('informe um Divisor diferente de 0!')
    } else if (typeof dividendo != "number" || typeof divisor != "number")
    {
        throw new Error ('informe 2 números para a divisão!')
    } else
    {
        return dividendo / divisor
    }
}