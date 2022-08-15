const JOGADOR01 = "X"
const JOGADOR02 = "O"
const CORJOGADOR01 = 'red'
const CORJOGADOR02 = 'green'

var qtdJogadas = 0
var jogadorAtual = JOGADOR01

var matrizJogo = [
    ['','',''],
    ['','',''],
    ['','','']
]

function btClick(objBt, linha, coluna)
{

    objBt.value = jogadorAtual
    matrizJogo[linha][coluna] = jogadorAtual
    objBt.style='background-color:'.concat((jogadorAtual == JOGADOR01) ? CORJOGADOR02 : CORJOGADOR01).concat(';')
    objBt.disabled = true

   if (conferirGanhador())
   {
    
      document.getElementById('txtResultado').innerHTML = "O JOGADOR ".concat(jogadorAtual).concat(' VENCEU!!')

   } else if (qtdJogadas == 8)
   {
    
      document.getElementById('txtResultado').innerHTML = "NÂO DEU VELHA!"

   }
   jogadorAtual = (jogadorAtual == JOGADOR01) ? JOGADOR02 : JOGADOR01
   qtdJogadas++
}

function conferirGanhador()
{
    return (matrizJogo[0][0] && matrizJogo[0][0] == matrizJogo[0][1] && matrizJogo[0][0] == matrizJogo[0][2]
         || matrizJogo[1][0] && matrizJogo[1][0] == matrizJogo[1][1] && matrizJogo[1][0] == matrizJogo[1][2]
         || matrizJogo[2][0] && matrizJogo[2][0] == matrizJogo[2][1] && matrizJogo[2][0] == matrizJogo[2][2])
}