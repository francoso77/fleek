/*instrução para testar erros*/
'use strict';

function imprimirValor(oque)
{
    console.log(oque)
}

/*Esque de teste do erro */

try
{
    //operação normal do código
    
    //o programa vai executar até o ponto que tiver erro 
    //veja o teste com a console.log

    console.log('Antes do erro')

    //ele executado todo o código e pula para o CATCH
    notas = [2.5,5,9,1.5]
    console.log('Depois do erro')

    imprimirValor("jb textil")
    imprimirValor(notas)

    notas.forEach(imprimirValor)
} catch(err)
{
    //caso retorne algum erro durante a execução
    console.log('Erro Gerado: ', err.message)
} finally
{
    //termo opicional ele é executado tanto para try qto para catch

    console.log('Rotina finalizada!')
}