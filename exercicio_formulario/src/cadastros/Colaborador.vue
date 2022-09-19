<template>
    <div>
        <div class='formulario'>
            <h4>Cadastro de Colaboradores</h4>
            <div class="form1" id="lblNome">
                <label for="txtNome">Nome:</label>
                <input type="text" id="txtNome" value="" placeholder="insirá o nome completo" autofocus ref="txtNome"
                    v-model="rsColaborador.nome" @keypress="verificaLetra" />
                <br>
                <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>
                <br>

                <label for="txtNascimento" id="lblNascimento">Nascimento:</label>
                <input type="date" id="txtNascimento" value="" v-model="rsColaborador.nascimento" />
                <br>
                <span class="mensagemErro" v-show="msgErro.nascimento">{{msgErro.nascimento}}</span>
                <br>
                <label for="txtCPF" id="lblCPF">CPF:</label>
                <input type="text" id="txtCPF" v-model="rsColaborador.cpf" v-mask="'###.###.###-##'" />
                <br>
                <span class="mensagemErro" v-show="msgErro.cpf">{{msgErro.cpf}}</span>
                <br>
                <label for="txtRG" id="lblRG">RG:</label>
                <input type="text" id="txtRG" value="" v-model="rsColaborador.rg" />
                <br>
                <span class="mensagemErro" v-show="msgErro.rg">{{msgErro.rg}}</span>
                <br>
                <label for="txtCivil" id="lblCivil">Estado Civil:</label>
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
                <label for="txtEscolaridade" id="lblEscolaridade">Escolaridade:</label>
                <select v-model="rsColaborador.escolaridade" id="escolaridade">
                    <option disabled value="">Escolaridade</option>
                    <option v-for="escola in escolaridades" :value="escola.valor">{{ escola.nivel }}</option>
                </select>
                <br>
                <span class="mensagemErro" v-show="msgErro.escolaridade">{{msgErro.escolaridade}}</span>
                <br>
                <label for="txtCEP" id="lblCEP">CEP:</label>
                <input type="text" id="txtCEP" value="" v-model="rsColaborador.cep" v-mask="'##.###-###'"
                    @change="buscaCep('txtCEP')" />
                <br>
                <span class="mensagemErro" v-show="msgErro.cep">{{msgErro.cep}}</span>
                <br>
                <label for="txtEndereco" id="lblEndereco">Endereço:</label>
                <input type="text" id="txtEndereco" value="" ref="txtEndereco" :disabled="!habilitarCampo" v-model="rsColaborador.endereco" />
                <br>
                <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>
                <br>
                <label for="txtNumero" id="lblNumero">Número:</label>
                <input type="text" id="txtNumero" value="" v-model="rsColaborador.numero" />
                <br>
                <span class="mensagemErro" v-show="msgErro.numero">{{msgErro.numero}}</span>
                <br>
                <label for="txtBairro" id="lblBairro">Bairro:</label>
                <input type="text" id="txtBairro" value="" ref="txtBairro" :disabled="!habilitarCampo" v-model="rsColaborador.bairro" />
                <br>
                <span class="mensagemErro" v-show="msgErro.bairro">{{msgErro.bairro}}</span>
                <br>
                <label for="txtUF" id="lblUF">UF:</label>
                <select v-model="rsColaborador.uf" ref="txtUF" :disabled="!habilitarCampo" id="txtUF">
                    <option disabled value="">UF</option>
                    <option v-for="uf in ufs" :value="uf">{{ uf }}</option>
                </select>
                <br>
                <span class="mensagemErro" v-show="msgErro.uf">{{msgErro.uf}}</span>
                <br>
                <label for="txtCidade" id="lblCidade">Cidade:</label>
                <input type="text" id="txtCidade" value="" ref="txtCidade" v-model="rsColaborador.cidade" />
                <br>
                <span class="mensagemErro" v-show="msgErro.cidade">{{msgErro.cidade}}</span>

                <br>
            </div>
            <div class="viagemEfilhos">


                <input type="checkbox" id="chkViagem" value="" true-value="sim" false-value="não"
                    v-model="rsColaborador.viagem">
                <label for="chkViagem">Disponibilidade para viagem?</label>
                <br>
                <input type="checkbox" id="chkFilhos" value="" @click="ativarCampo()" true-value="sim" false-value="não"
                    v-model="rsColaborador.filhos">
                <label for="chkFilhos">Tem filhos?</label>
                <br>
                <label for="txtQtdFilhos">Quantos Filhos?</label>
                <input type="number" id="txtQtdFilhos" :disabled="!habilitarCampo" value=""
                    v-model="rsColaborador.qtdfilhos">

            </div>
            <div class="form2">
                <label for="txtSalario" id="lblSalario">Salário:</label>
                <input type="text" id="txtSalario" value="" v-model="rsColaborador.salario" />

                <br>
                <span class="mensagemErro" v-show="msgErro.salario">{{msgErro.salario}}</span>
                <br>
                <label for="txtEmail" id="lblEmail">E-mail:</label>
                <input type="text" id="txtEmail" v-model="rsColaborador.email" />
                <br>
                <span class="mensagemErro" v-show="msgErro.email">{{msgErro.email}}</span>
                <br>
                <label for="txtTel" id="lblTel">Telefone:</label>
                <input type="tel" id="txtTelefone" value="" v-model="rsColaborador.telefone"
                    v-mask="'(##)#####-####'" />
                <br>
                <span class="mensagemErro" v-show="msgErro.telefone">{{msgErro.telefone}}</span>
            </div>
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
                    <th>Nome</th>
                    <th>Nascimento</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Endereço</th>
                    <th>Número</th>
                    <th>Bairro</th>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>CPF</th>
                    <th>RG</th>
                    <th>Estado Cívil</th>
                    <th>Escolaridade</th>
                    <th>Pode Viajar?</th>
                    <th>Tem Filhos?</th>
                    <th>Qtd Filhos</th>
                    <th>Salário</th>
                    <th>Jornada</th>
                    <th>Ações</th>
                </tr>
                <tr v-for="(colaborador, i) in rsColaboradores">
                    <td>{{colaborador.nome}}</td>
                    <td>{{colaborador.nascimento}}</td>
                    <td>{{colaborador.email}}</td>
                    <td>{{colaborador.telefone}}</td>
                    <td>{{colaborador.endereco}}</td>
                    <td>{{colaborador.numero}}</td>
                    <td>{{colaborador.bairro}}</td>
                    <td>{{colaborador.cidade}}</td>
                    <td>{{colaborador.uf}}</td>
                    <td>{{colaborador.cpf}}</td>
                    <td>{{colaborador.rg}}</td>
                    <td>{{colaborador.civil}}</td>
                    <td>{{colaborador.escolaridade}}</td>
                    <td>{{colaborador.viagem}}</td>
                    <td>{{colaborador.filhos}}</td>
                    <td>{{colaborador.qtdfilhos}}</td>
                    <td>{{colaborador.salario}}</td>
                    <td>{{colaborador.jornada}}</td>
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
