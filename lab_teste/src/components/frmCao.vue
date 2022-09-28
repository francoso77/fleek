<template>
    <div class="frmCao">

        <h2>Perfil do cão</h2>
        <span>Qualquer alteração neste formulário irá afetar apenas eventos futuros</span>
        <label for="txtCodigo">Código</label>
        <input type="text" id="txtCodigo" v-model="rsCao.id" />

        <label for="txtNome">Nome (curto)</label>
        <input type="text" autofocus placeholder="nome" id="txtNome" maxlength="35" v-model="rsCao.nome" />

        <label for="selGenero">Género</label>
        <select v-model="rsCao.genero" id="selGenero">
            <option disabled selected>Género</option>
            <option>Femea</option>
            <option>Macho</option>
        </select>

        <label for="txtAltura">Altura (cm)</label>
        <input type="number" id="txtAltura" v-model="rsCao.altura" />

        <label for="txtNascimento">Data de Nascimento</label>
        <input type="date" id="txtNascimento" v-model="rsCao.nascimento" />

        <label for="txtObito">Data de óbito</label>
        <input type="date" id="txtObito" v-model="rsCao.obito" />

        <label for="selRaca">Raça</label>
        <select v-model="rsCao.raca" id="selRaca">
            <option disabled selected>Raças</option>
            <option v-for="raca in racas" :value="raca">{{raca}}</option>
        </select>

        <label for="selFederacao">Federações</label>
        <select v-model="rsCao.federacao" id="selFederacao">
            <option disabled selected>Federações</option>
            <option v-for="federacao in federacoes" :value="federacao">{{federacao}}</option>
        </select>

        <label for="">Categorias:</label>
        <div class="categoria">

            <input type="radio" id="radCatBranca" value="Branca" v-model="rsCao.categoria" />
            <label for="radCatBranca" id="lblBranca">Branca</label><br>
            <input type="radio" id="radCatAzul" value="Azul" v-model="rsCao.categoria" />
            <label for="radCatAzul" id="lblAzul">Azul</label><br>
            <input type="radio" id="radCatAmarela" value="Amarela" v-model="rsCao.categoria" />
            <label for="radCatAmarela" id="lblAmarela">Amarela</label>
        </div>

        <label for="lblSaude">Saúde:</label>
        <div class="saude">


            <input type="checkbox" id="chkVacina" value="" true-value="sim" false-value="não" v-model="rsCao.vacina" />
            <label for="chkVacina" id="lblVacina">Vacinação em dia?</label><br>
            <input type="checkbox" id="chkConsulta" value="" true-value="sim" false-value="não"
                v-model="rsCao.consulta" />
            <label for="chkConsulta" id="lblConsulta">Consultas em dia?</label><br>
            <label for="txtClinica" id="lblClinica">Clínica Veterinária</label>
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
