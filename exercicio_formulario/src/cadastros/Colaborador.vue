<template>
    <div>
        <div class='formulario'>
            <h4>Cadastro de Colaboradores</h4>

            <label for="txtNome">Nome:</label>
            <input type="text" id="txtNome" value="" placeholder="insirá o nome completo" autofocus ref="txtNome"
                v-model="rsColaborador.nome" @keypress="verificaLetra" />
            <br>
            <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>
            <br>

            <label for="txtNascimento">Nascimento:</label>
            <input type="date" id="txtNascimento" value="" v-model="rsColaborador.nascimento" />
            <br>
            <span class="mensagemErro" v-show="msgErro.nascimento">{{msgErro.nascimento}}</span>
            <br>
            <label for="txtCPF">CPF:</label>
            <input type="text" id="txtCPF" v-model="rsColaborador.cpf" v-mask="'###.###.###-##'" />
            <br>
            <span class="mensagemErro" v-show="msgErro.cpf">{{msgErro.cpf}}</span>
            <br>
            <label for="txtRG">RG:</label>
            <input type="text" id="txtRG" value="" v-model="rsColaborador.rg" />
            <br>
            <span class="mensagemErro" v-show="msgErro.rg">{{msgErro.rg}}</span>
            <br>
            <label for="txtCivil">Estado Civil:</label>
            <select v-model="rsColaborador.civil">
                <option disabled value="">Estado Civil</option>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Viúvo</option>
            </select>
            <br>
            <span class="mensagemErro" v-show="msgErro.civil">{{msgErro.civil}}</span>
            <br>
            <label for="txtEscolaridade">Escolaridade:</label>
            <select v-model="rsColaborador.escolaridade" id="escolaridade">
                <option disabled value="">Escolaridade</option>
                <option v-for="escola in escolaridades" :value="escola.valor">{{ escola.nivel }}</option>
            </select>
            <br>
            <span class="mensagemErro" v-show="msgErro.escolaridade">{{msgErro.escolaridade}}</span>
            <br>
            <label for="txtCEP">CEP:</label>
            <input type="text" id="txtCEP" value="" v-model="rsColaborador.cep" v-mask="'##.###-###'"
                @change="buscaCep('txtCEP')" />
            <br>
            <span class="mensagemErro" v-show="msgErro.cep">{{msgErro.cep}}</span>
            <br>
            <label for="txtEndereco">Endereço:</label>
            <input type="text" id="txtEndereco" value="" ref="txtEndereco" v-model="rsColaborador.endereco" />
            <br>
            <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>
            <br>
            <label for="txtNumero">Número:</label>
            <input type="text" id="txtNumero" value="" v-model="rsColaborador.numero" />
            <br>
            <span class="mensagemErro" v-show="msgErro.numero">{{msgErro.numero}}</span>
            <br>
            <label for="txtBairro">Bairro:</label>
            <input type="text" id="txtBairro" value="" ref="txtBairro" v-model="rsColaborador.bairro" />
            <br>
            <span class="mensagemErro" v-show="msgErro.bairro">{{msgErro.bairro}}</span>
            <br>
            <label for="txtUF">UF:</label>
            <select v-model="rsColaborador.uf" ref="txtUF" id="txtUF">
                <option disabled value="">UF</option>
                <option v-for="uf in ufs" :value="uf">{{ uf }}</option>
            </select>
            <br>
            <span class="mensagemErro" v-show="msgErro.uf">{{msgErro.uf}}</span>
            <br>
            <label for="txtCidade">Cidade:</label>
            <input type="text" id="txtCidade" value="" ref="txtCidade" v-model="rsColaborador.cidade" />
            <br>
            <span class="mensagemErro" v-show="msgErro.cidade">{{msgErro.cidade}}</span>

            <br>
            <div class="viagemEfilhos">


                <input type="checkbox" id="chkViagem" value="não" v-model="rsColaborador.viagem">
                <label for="chkViagem">Disponibilidade para viagem?</label>
                <br>
                <input type="checkbox" id="chkFilhos" value="não" v-model="rsColaborador.filhos">
                <label for="chkFilhos">Tem filhos?</label>
                <br>
                <label for="txtQtdFilhos">Quantos Filhos?</label>
                <input type="number" id="txtQtdFilhos" value="" v-model="rsColaborador.qtdfilhos">

            </div>
            <label for="txtSalario">Salário:</label>
            <input type="number" id="txtSalario" value="" v-model="rsColaborador.salario" />
            <br>
            <span class="mensagemErro" v-show="msgErro.salario">{{msgErro.salario}}</span>
            <br>
            <label for="txtEmail">E-mail:</label>
            <input type="text" id="txtEmail" v-model="rsColaborador.email" />
            <br>
            <span class="mensagemErro" v-show="msgErro.email">{{msgErro.email}}</span>
            <br>
            <label for="txtTel">Telefone:</label>
            <input type="tel" id="txtTelefone" value="" v-model="rsColaborador.telefone" v-mask="'(##)#####-####'" />
            <br>
            <span class="mensagemErro" v-show="msgErro.telefone">{{msgErro.telefone}}</span>
            <div class="jornada">
                <label for="radJornada">Jornada de Trabalho:</label>
                <br>
                <input type="radio" id="radJor8" value="8Horas" v-model="rsColaborador.jornada">
                <label for="radJor8">8 Horas</label><br>
                <input type="radio" id="radJor12x36" value="12x36" v-model="rsColaborador.jornada">
                <label for="radJor12x36">12 x 36</label><br>
                <input type="radio" id="radJor1/2" value="1/2" v-model="rsColaborador.jornada">
                <label for="radJor1/2">Meio Período</label><br>
                <br>
                <span class="mensagemErro" v-show="msgErro.jornada">{{msgErro.jornada}}</span>
            </div>
            <br>
            <input type="button" :value="statusForm == statusFormEnum.INCLUINDO ? 'Cadastrar' : 'Alterar'"
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
                        <i class="material-icons botaoAcao" @click="btExcluir(i)">close</i>
                        <i class="material-icons botaoAcao" @click="btAlterar(i)">edit</i>
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
