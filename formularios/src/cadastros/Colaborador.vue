<template>
    <div class='formulario'>

        <label for="txtNome">Colaborador:</label>
        <input type="text" id="txtNome" value="" v-model="rsColaborador.nome" @change='validarFormulario()'/>
        <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>
        <br><br>
        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco" @change='validarFormulario()'/>
        <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>
        <br>
        <input type="button" value="cadastrar" @click='validarFormulario()'/>
        <br>
        <div class="genero">
            <input type="radio" id="radFeminino" value="F" v-model="rsColaborador.genero">
            <label for="radFeminino">Feminino</label>
            <br>
            <input type="radio" id="radMasculino" value="M" v-model="rsColaborador.genero">
            <label for="radMasculino">Masculino</label>
            <br><br>
            <span>Escolhido: {{ rsColaborador.genero }}</span>
        </div>
        <br>
        <div class="cnh">
            <select v-model="rsColaborador.cnh">
                <option disabled value="">Escolha uma CNH</option>
                <option>A</option>
                <option>AB</option>
                <option>AC</option>
            </select>
            <br>
            <br>
            <span>CNH Selecionada: {{ rsColaborador.cnh }}</span>
        </div>
        <br>
        <div class="hob">
            <input type="checkbox" id="pilates" value="pilates" v-model="rsColaborador.tratamentos">
            <label for="pilates">Pilates</label>
            <input type="checkbox" id="fisioterapia" value="fisioterapia" v-model="rsColaborador.tratamentos">
            <label for="fisioterapia">Fisioterapia</label>
            <input type="checkbox" id="hidroginastica" value="hidroginastica" v-model="rsColaborador.tratamentos">
            <label for="hidrogibastica">Hidrogibastica</label>
            <br>
            <br>
            <span>Nomes assinalados: {{ rsColaborador.tratamentos }}</span>
        </div>
        <br>
        <div>
            <label for="profissao">Escolha uma profissão</label>
            <br>
            <select v-model="rsColaborador.profissoes" id="profissao">
                <option v-for="prof in profissoes" v-bind:value="prof.valor">
                    {{ prof.cargo }}

                </option>
            </select>
            <br>
            <span>Selecionado: {{ rsColaborador.profissoes }}</span>
        </div>
        <br>
        <div class="debug">
            {{ rsColaborador }}
        </div>
    </div>
</template>

<script lang="ts">

import ColaboradorCls from "./ColaboradorCls";
export default ColaboradorCls

</script>

<style>
.debug {

    margin-top: 10px;
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: red;
}

.genero {
    border: 2px;
    border-color: rgb(11, 14, 14);
    border-style: solid;
}

@media(min-width: 600px) {

    .formulario {
        text-align: left;
        width: 33%;
        margin-left: 33%;
        margin-top: 100px;
    }

}

@media(max-width: 600px) {

.formulario {
    text-align: left;
    width: 90%;
    margin-left: 5%;
    margin-top: 70px;
}

}

input[type=text] {
    width: 100%;
    padding: 12px 30px;
    margin: 8px 0;
    box-sizing: border-box;
}

label {
    margin-top: 18px;
    display: block;
}
.mensagemErro{
    color: red;
    font-size: 14px;
    position: relative;
    bottom: 8px;
}
</style>