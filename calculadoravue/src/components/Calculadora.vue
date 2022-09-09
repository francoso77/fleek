<template>
    
    <div class="montaCalculadora">
        <link href="estilo.css" rel="stylesheet">
        <table class="corpoCalculadora">
            <tr>
                <td colspan="4"><input type="text" disabled value="" id="txtVisor" v-model="txtVisor"></td>
            </tr>
            <tr>
                <td><input type="button" value='x²' id="btElevado" @click="enviaValor('x²')"></td>
                <td><input type="button" value='√' id="btRaiz" @click="enviaValor('√')"></td>
                <td><input type="button" value='←' id="Backspace" @click="enviaValor('←')"></td>
                <td><input type="button" value='/' id="/" @click="enviaValor('/')"></td>
            </tr>
            <tr>
                <td><input type="button" value='7' id="7" @click="enviaValor('7')"></td>
                <td><input type="button" value='8' id="8" @click="enviaValor('8')"></td>
                <td><input type="button" value='9' id="9" @click="enviaValor('9')"></td>
                <td><input type="button" value='*' id="*" @click="enviaValor('*')"></td>
            </tr>
            <tr>
                <td><input type="button" value='4' id="4" @click="enviaValor('4')"></td>
                <td><input type="button" value='5' id="5" @click="enviaValor('5')"></td>
                <td><input type="button" value='6' id="6" @click="enviaValor('6')"></td>
                <td><input type="button" value='+' id="+" @click="enviaValor('+')"></td>
            </tr>
            <tr>
                <td><input type="button" value='1' id="1" @click="enviaValor('1')"></td>
                <td><input type="button" value='2' id="2" @click="enviaValor('2')"></td>
                <td><input type="button" value='3' id="3" @click="enviaValor('3')"></td>
                <td><input type="button" value='-' id="-" @click="enviaValor('-')"></td>
            </tr>
            <tr>
                <td><input type="button" value='C' id="Escape" @click="enviaValor('C')"></td>
                <td><input type="button" value='0 ' id="0" @click="enviaValor('0')"></td>
                <td><input type="button" value=',' id="," @click="enviaValor(',')"></td>
                <td><input type="button" value='=' id="Enter" @click="enviaValor('=')"></td>

            </tr>

        </table>
    </div>
</template>

<script lang="ts">
    
import CalculadoraCls from './CalculadoraCls'
export default CalculadoraCls
window.
document.addEventListener('keydown', (e) => {
    document.getElementById(e.key).click()
})
</script>

<style>

</style>