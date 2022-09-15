<template>
    <div>
        <div class='formulario'>
            <h4>Cadastro de Colaboradores</h4>

            <label for="txtNome">Nome:</label>
            <input type="text" id="txtNome" value="" ref="txtNome"  v-model="rsColaborador.nome" @keypress="verificaLetra" />
            <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

            <label for="txtNascimento">Nascimento:</label>
            <input type="date" id="txtNascimento" value="" v-model="rsColaborador.nascimento" />
            <span class="mensagemErro" v-show="msgErro.nascimento">{{msgErro.nascimento}}</span>

            <label for="txtCPF">CPF:</label>
            <input type="text" id="txtCPF" value="" v-model="rsColaborador.cpf" v-mask="'###.###.###-##'" />
            <span class="mensagemErro" v-show="msgErro.cpf">{{msgErro.cpf}}</span>

            <label for="txtRG">RG:</label>
            <input type="number" id="txtRG" value="" v-model="rsColaborador.rg" />
            <span class="mensagemErro" v-show="msgErro.rg">{{msgErro.rg}}</span>

            <label for="txtCivil">Estado Civil:</label>
            <select v-model="rsColaborador.civil">
                <option disabled value="">Estado Civil</option>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Viúvo</option>
            </select>
            <span class="mensagemErro" v-show="msgErro.civil">{{msgErro.civil}}</span>

            <label for="txtEscolaridade">Escolaridade:</label>
            <select v-model="rsColaborador.escolaridade" id="escolaridade">
                <option v-for="escola in escolaridades" v-bind:value="escola.valor">
                    {{ escola.nivel }}

                </option>
            </select>
            <span class="mensagemErro" v-show="msgErro.escolaridade">{{msgErro.escolaridade}}</span>

            <label for="txtCEP">CEP:</label>
            <input type="text" id="txtCEP" value="" v-model="rsColaborador.cep" v-mask="'##.###-###'"
                @change="buscaCep('txtCEP')" />
            <span class="mensagemErro" v-show="msgErro.cep">{{msgErro.cep}}</span>

            <label for="txtEndereco">Endereço:</label>
            <input type="text" id="txtEndereco" value="" ref="txtEndereco" v-model="rsColaborador.endereco" />
            <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>

            <label for="txtNumero">Número:</label>
            <input type="number" id="txtNumero" value="" v-model="rsColaborador.numero" />
            <span class="mensagemErro" v-show="msgErro.numero">{{msgErro.numero}}</span>

            <label for="txtBairro">Bairro:</label>
            <input type="text" id="txtBairro" value="" ref="txtBairro" v-model="rsColaborador.bairro" />
            <span class="mensagemErro" v-show="msgErro.bairro">{{msgErro.bairro}}</span>

            <label for="txtUF">UF:</label>
            <select v-model="rsColaborador.uf" ref="txtUF" id="txtUF">
                <option v-for="uf in ufs">
                    {{ uf }}

                </option>
            </select>
            <span class="mensagemErro" v-show="msgErro.uf">{{msgErro.uf}}</span>

            <label for="txtCidade">Cidade:</label>
            <input type="text" id="txtCidade" value="" ref="txtCidade" v-model="rsColaborador.cidade" />
            <span class="mensagemErro" v-show="msgErro.cidade">{{msgErro.cidade}}</span>

            <label for="chkViagem">Disponibilidade para viagem:</label>
            <input type="checkbox" id="chkViagem" value="não" v-model="rsColaborador.viagem">
            <div class="filhos">
                <label for="chkFilhos">Filhos:</label>
                <input type="checkbox" id="chkFilhos" onclick="temFilhos" value="não" v-model="rsColaborador.filhos">
                <div class="qtdFilhos" v-if="exibirQtdFilhos">
                    <label for="txtQtdFilhos">Quantos Filhos?</label>
                    <input type="number" id="txtQtdFilhos" value="" v-model="rsColaborador.qtdFilos">
                </div>
            </div>
            <label for="txtSalario">Salário:</label>
            <input type="number" id="txtSalario" value="" v-model="rsColaborador.salario" />
            <span class="mensagemErro" v-show="msgErro.salario">{{msgErro.salario}}</span>

            <label for="txtEmail">E-mail:</label>
            <input type="text" id="txtEmail" value="" v-model="rsColaborador.email" />
            <span class="mensagemErro" v-show="msgErro.email">{{msgErro.email}}</span>

            <label for="txtTel">Telefone:</label>
            <input type="tel" id="txtTelefone" value="" v-model="rsColaborador.telefone" v-mask="'(##)#####-####'" />
            <span class="mensagemErro" v-show="msgErro.telefone">{{msgErro.telefone}}</span>
            <div class="jornada">
                <label for="radJornada">Jornada de Trabalho:</label>
                <label for="radJor8">8 Horas</label>
                <input type="radio" id="radJor8" value="8Horas" v-model="rsColaborador.jornada">
                <label for="radJor12x36">12 x 36</label>
                <input type="radio" id="radJor12x36" value="12x36" v-model="rsColaborador.jornada">
                <label for="radJor1/2">Meio Período</label>
                <input type="radio" id="radJor1/2" value="1/2" v-model="rsColaborador.jornada">
                <span class="mensagemErro" v-show="msgErro.jornada">{{msgErro.jornada}}</span>
            </div>
            <br>
            <input type="button" :value="statusForm==statusFormEnum.INCLUINDO? 'Cadastrar' : 'Alterar'"
             @click="confirmarDados()" />
        </div>
        <div class="tabelaDados">

            <table>
                <tr>
                    <th align="center">Nome</th>
                    <th align="center">CPF</th>
                    <th align="center">Ações</th>
                </tr>
                <tr v-for="(colaborador, i) in rsColaboradores">
                    <td>{{colaborador.nome}}</td>
                    <td>{{colaborador.cpf}}</td>
                    <td>
                        <i class="material-icons botaoAcao" @click="btExcluir()">close</i>
                        <i class="material-icons botaoAcao" @click="btAlterar()">edit</i>
                    </td>
                </tr>
            </table>
        </div>

        <div class="debug" v-if="exibirDebug">
            {{ rsColaborador }}
        </div>
    </div>
</template>

<script lang="ts">
import ColaboradorCls from "./ColaboradorCls"
export default ColaboradorCls

</script>

<style scoped src="./ColaboradorCss.css">

</style>
