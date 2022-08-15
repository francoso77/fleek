'use strict';
import { dividir } from "./rotinas.js";

try
{
    
    var resultado = dividir(2430, "0")
    console.log('O resultado da Divisão é: ', resultado)

} catch (erro) {

    console.log('Erro gerado: ', erro.message)
}