<template>
    <div class="frmCao">
        <div calss="titulo">
            <h2>Perfil do cão</h2>
        </div>
        <span>Qualquer alteração neste formulário irá afetar apenas eventos futuros</span>
        <label for="lblCodigo">Código</label>
        <input type="number" id="txtCodigo" />

        <label for="lblNome">Nome (curto)</label>
        <input type="text" id="txtNome" maxlength="35"/>

        <label for="lblGenero">Género</label>
        <select>
            <option disabled selected>Género</option>
            <option>Femea</option>
            <option>Macho</option>
        </select>

        <label for="lblAltura">Altura (cm)</label>
        <input type="number" id="txtAltura" />

        <label for="lblNascimento">Data de Nascimento</label>
        <input type="date" id="txtNascimento" />

        <label for="lblObito">Data de óbito</label>
        <input type="date" id="txtObito" />

        <label for="lblRaca">Raça</label>
        <select>
            <option disabled selected>Raças</option>
            <option v-for="raca in racas" :value="raca">{{raca}}</option>
        </select>

        <label for="lblFederacao">Federações</label>
        <select>
            <option disabled selected>Federações</option>
            <option v-for="federacao in federacoes" :value="federacao">{{federacao}}</option>
        </select>

    </div>
</template>

<script lang="ts">
import frmCaoCls from './frmCaoCls';
export default frmCaoCls
</script>

<style src="./frmCaoCss.css"></style>
