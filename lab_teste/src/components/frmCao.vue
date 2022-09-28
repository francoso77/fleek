<template>
    <div class="frmCao">

        <h2>Perfil do cão</h2>
        <span>Qualquer alteração neste formulário irá afetar apenas eventos futuros</span>
        <label for="txtCodigo">Código</label>
        <input type="text" autofocus id="txtCodigo" ref="txtCodigo" v-model="rsCao.id" />
        <span class="mensagemErro" v-show="msgErro.id">{{msgErro.id}}</span>

        <label for="txtNome">Nome (curto)</label>
        <input type="text" placeholder="nome" id="txtNome" maxlength="35" v-model="rsCao.nome" />
        <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

        <label for="selGenero">Género</label>
        <select v-model="rsCao.genero" id="selGenero">
            <option disabled selected>Género</option>
            <option>Femea</option>
            <option>Macho</option>
        </select>
        <span class="mensagemErro" v-show="msgErro.genero">{{msgErro.genero}}</span>

        <label for="txtAltura">Altura (cm)</label>
        <input type="number" id="txtAltura" v-model="rsCao.altura" />
        <span class="mensagemErro" v-show="msgErro.altura">{{msgErro.altura}}</span>

        <label for="txtNascimento">Data de Nascimento</label>
        <input type="date" id="txtNascimento" v-model="rsCao.nascimento" />
        <span class="mensagemErro" v-show="msgErro.nascimento">{{msgErro.nascimento}}</span>

        <label for="txtObito">Data de óbito</label>
        <input type="date" id="txtObito" v-model="rsCao.obito" />
        <span class="mensagemErro" v-show="msgErro.obito">{{msgErro.obito}}</span>

        <label for="selRaca">Raça</label>
        <select v-model="rsCao.raca" id="selRaca">
            <option disabled selected>Raças</option>
            <option v-for="raca in racas" :value="raca">{{raca}}</option>
        </select>
        <span class="mensagemErro" v-show="msgErro.raca">{{msgErro.raca}}</span>

        <label for="selFederacao">Federações</label>
        <select v-model="rsCao.federacao" id="selFederacao">
            <option disabled selected>Federações</option>
            <option v-for="federacao in federacoes" :value="federacao">{{federacao}}</option>
        </select>
        <span class="mensagemErro" v-show="msgErro.federacao">{{msgErro.federacao}}</span>

        <label for="">Categorias:</label>
        <div class="categoria">

            <input type="radio" id="radCatAmarela" value="Amarela" v-model="rsCao.categoria" />
            <label for="radCatAmarela" id="lblAmarela">Amarela</label><br>
            <input type="radio" id="radCatAzul" value="Azul" v-model="rsCao.categoria" />
            <label for="radCatAzul" id="lblAzul">Azul</label><br>
            <input type="radio" id="radCatBranca" value="Branca" v-model="rsCao.categoria" />
            <label for="radCatBranca" id="lblBranca">Branca</label><br>
            <input type="radio" id="radCatPreta" value="Preta" v-model="rsCao.categoria" />
            <label for="radCatPreta" id="lblPreta">Preta</label>

        </div>
        <span class="mensagemErro" v-show="msgErro.categoria">{{msgErro.categoria}}</span>

        <label for="lblSaude">Saúde:</label>
        <div class="saude">


            <input type="checkbox" id="chkVacina" value="" true-value="sim" false-value="não" v-model="rsCao.vacina" />
            <label for="chkVacina" id="lblVacina">Vacinação em dia?</label><br>
            <input type="checkbox" id="chkConsulta" value="" @click="habilitaClinica()" true-value="sim"
                false-value="não" v-model="rsCao.consulta" />
            <label for="chkConsulta" id="lblConsulta">Consultas em dia?</label><br>
            <label for="txtClinica" id="lblClinica">Clínica Veterinária</label>
            <input type="text" id="txtClinica" :disabled="!temClinica" value="" maxlength="30"
                v-model="rsCao.clinica" />

        </div>
        <span class="mensagemErro" v-show="msgErro.clinica">{{msgErro.clinica}}</span>

        <input type="button" :value="(statusForm==statusFormEnum.INCLUINDO)? 'Cadastrar' : 'Alterar'" id="btCadastrar"
            @click="confimarDados()">

        <div class="tabelaDados">

            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Género</th>
                    <th>Altura</th>
                    <th>Nascimento</th>
                    <th>Óbito</th>
                    <th>Raça</th>
                    <th>Federação</th>
                    <th>Categoria</th>
                    <th>Vacina em Dia?</th>
                    <th>Consulta?</th>
                    <th>Clínica</th>
                    <th>Ações</th>
                </tr>
                <tr v-for="(cao, i) in rsCaes">
                    <td>{{cao.id}}</td>
                    <td>{{cao.nomne}}</td>
                    <td>{{cao.genero}}</td>
                    <td>{{cao.altura}}</td>
                    <td>{{cao.nascimento}}</td>
                    <td>{{cao.obito}}</td>
                    <td>{{cao.raca}}</td>
                    <td>{{cao.federacao}}</td>
                    <td>{{cao.categoria}}</td>
                    <td>{{cao.vacina}}</td>
                    <td>{{cao.consulta}}</td>
                    <td>{{cao.clinica}}</td>
                    <td>
                        <i class="material-icons botaoAcao" @click="btExcluir(i)">close</i>
                        <i class="material-icons botaoAcao" @click="btAlterar(i)">edit</i>
                    </td>
                </tr>
            </table>
        </div>

        <div class="debug" v-if="exibirDebug">
            {{rsCao}}
        </div>

    </div>
</template>

<script lang="ts">
import frmCaoCls from './frmCaoCls';
export default frmCaoCls
</script>
<style scoped src="./frmCaoCss.css">

