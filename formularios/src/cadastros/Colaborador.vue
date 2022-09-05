<template>
    <div>

        <label for="txtNome">Colaborador:</label>
        <input type="text" id="txtNome" value="" v-model="rsColaborador.nome" />
        <br><br>
        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco" />
        <br><br>
        <div class="genero">
            <input type="radio" id="radFeminino" value="F" v-model="rsColaborador.genero">
            <label for="radFeminino">Feminino</label>
            <br>
            <input type="radio" id="radMasculino" value="M" v-model="rsColaborador.genero">
            <label for="radMasculino">Masculino</label>
            <br><br>
            <span>Escolhido: {{ rsColaborador.genero }}</span>
        </div>
        <br><br>
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
        <br><br>
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
        <br><br>
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
        <br><br>
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

    margin-top: 100px;
    font-size: 16px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: red;
}

.genero {
    border: 2px;
    border-color: rgb(11, 14, 14);
    border-style: solid;
}
</style>