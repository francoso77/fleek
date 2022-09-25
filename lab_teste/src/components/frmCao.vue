<template>
    <div class="frmCao">

        <h2>Perfil do cão</h2>
        <span>Qualquer alteração neste formulário irá afetar apenas eventos futuros</span>
        <label for="lblCodigo">Código</label>
        <input type="text" id="txtCodigo" v-model="rsCao.id" />

        <label for="lblNome">Nome (curto)</label>
        <input type="text" autofocus placeholder="nome" id="txtNome" maxlength="35" v-model="rsCao.nome" />

        <label for="lblGenero">Género</label>
        <select v-model="rsCao.genero">
            <option disabled selected>Género</option>
            <option>Femea</option>
            <option>Macho</option>
        </select>

        <label for="lblAltura">Altura (cm)</label>
        <input type="number" id="txtAltura" v-model="rsCao.altura" />

        <label for="lblNascimento">Data de Nascimento</label>
        <input type="date" id="txtNascimento" v-model="rsCao.nascimento" />

        <label for="lblObito">Data de óbito</label>
        <input type="date" id="txtObito" v-model="rsCao.obito" />

        <label for="lblRaca">Raça</label>
        <select v-model="rsCao.raca">
            <option disabled selected>Raças</option>
            <option v-for="raca in racas" :value="raca">{{raca}}</option>
        </select>

        <label for="lblFederacao">Federações</label>
        <select v-model="rsCao.federacao">
            <option disabled selected>Federações</option>
            <option v-for="federacao in federacoes" :value="federacao">{{federacao}}</option>
        </select>

        <label for="lblCategoria">Categorias</label>
        <div class="categoria">

            <input type="radio" id="radCatBranca" value="Branca" v-model="rsCao.categoria" /><br>
            <label for="radBranca">Branca</label>
            <input type="radio" id="radCatAzul" value="Azul" v-model="rsCao.categoria" /><br>
            <label for="radCatAzul">Azul</label>
            <input type="radio" id="radCatAmarela" value="Amarela" v-model="rsCao.categoria" /><br>
            <label for="radCatAmarela">Amarela</label>
        </div>

        <label for="lblSaude">Saúde</label>
        <div class="saude">


            <input type="checkbox" id="chkVacina" value="" true-value="sim" false-value="não" v-model="rsCao.vacina" />
            <label for="chkVacina">Vacinação em dia?</label>
            <input type="checkbox" id="chkConsulta" value="" true-value="sim" false-value="não"
                v-model="rsCao.consulta" />
            <label for="chkConsulta">Consultas em dia?</label>
            <label for="txtClinica">Clínica Veterinária</label>
            <input type="text" id="txtClinica" value="" maxlength="30" v-model="rsCao.clinica" />


        </div>
        <div class="debug">
            {{rsCao}}
        </div>

    </div>
</template>

<script lang="ts">
import frmCaoCls from './frmCaoCls';
export default frmCaoCls
</script>
<style scoped src="./frmCaoCss.css">
