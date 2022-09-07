<template>
    <div class="montaCalculadora">
        <table class="corpoCalculadora">
            <tr>
                <td colspan="4"><input type="text" value="" id="txtVisor" v-model="txtVisor"></td>
            </tr>
            <tr>
                <td><input type="button" value='x²' id="btElevado" @click="enviaValor('x²')"></td>
                <td><input type="button" value='√' id="btRaiz" @click="enviaValor('√')"></td>
                <td><input type="button" value='←' id="btApagarUltimo" @click="enviaValor('←')"></td>
                <td><input type="button" value='/' id="btDividir" @click="enviaValor('/')"></td>
            </tr>
            <tr>
                <td><input type="button" value='7' id="btSete" @click="enviaValor('7')"></td>
                <td><input type="button" value='8' id="btOito" @click="enviaValor('8')"></td>
                <td><input type="button" value='9' id="btNove" @click="enviaValor('9')"></td>
                <td><input type="button" value='*' id="btMultiplicar" @click="enviaValor('*')"></td>
            </tr>
            <tr>
                <td><input type="button" value='4' id="btQuatro" @click="enviaValor('4')"></td>
                <td><input type="button" value='5' id="btCinco" @click="enviaValor('5')"></td>
                <td><input type="button" value='6' id="btSeis" @click="enviaValor('6')"></td>
                <td><input type="button" value='+' id="btSomar" @click="enviaValor('+')"></td>
            </tr>
            <tr>
                <td><input type="button" value='1' id="btUm" @click="enviaValor('1')"></td>
                <td><input type="button" value='2' id="btDois" @click="enviaValor('2')"></td>
                <td><input type="button" value='3' id="btTres" @click="enviaValor('3')"></td>
                <td><input type="button" value='-' id="btDiminuir" @click="enviaValor('-')"></td>
            </tr>
            <tr>
                <td><input type="button" value='C' id="btApagar" @click="enviaValor('C')"></td>
                <td><input type="button" value='0 ' id="btZero" @click="enviaValor('0')"></td>                
                <td><input type="button" value='.' id="btPonto" @click="enviaValor('.')"></td>
                <td><input type="button" value='=' id="btResultado" @click="enviaValor('=')"></td>
                
            </tr>

        </table>
        <p id="txtResultado"></p><br>
    </div>
</template>

<script lang="ts">
import CalculadoraCls from './CalculadoraCls';
export default CalculadoraCls

</script>

<style>
tr td {

    border: solid 1px black;
    border-radius: 5px;
    text-align: center;
}
.corpoCalculadora
{
    border: solid 3px black;
    border-radius: 1px;
    text-align: center; 
    
}
#txtVisor
{
    text-align: right;
}

input
{
    height: 100%;
    width: 95%;
    font-size: large;
}
</style>