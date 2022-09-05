<template>
    <div>

        <label for="txtFornecedor">Fornecedor:</label>
        <input type="text" id="txtFornecedor" value="" v-model="rsColaborador.nome" />
        <br>
        <br>
        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco" />
        <br>
        <br>
        <div class="genero">
            <input type="radio" id="radFeminino" value="F" v-model="rsColaborador.genero">
            <label for="radFeminino">Feminino</label>
            <br>
            <input type="radio" id="radMasculino" value="M" v-model="rsColaborador.genero">
            <label for="radMasculino">Masculino</label>
            <br>
            <span>Escolhido: {{ rsColaborador.genero }}</span>
        </div>
        <div class="cnh">
            <select v-model="rsColaborador.cnh">
                <option disabled value="">Escolha uma CNH</option>
                <option>A</option>
                <option>AB</option>
                <option>AC</option>
            </select>
            <br>
            <span>CNH Selecionada: {{ rsColaborador.cnh }}</span>
        </div>
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