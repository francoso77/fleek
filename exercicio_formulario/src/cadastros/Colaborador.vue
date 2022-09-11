<template>
    <div class='formulario'>
        <link href="estilo.css" rel="stylesheet">

        <label for="txtNome">Nome:</label>
        <input type="text" id="txtNome" value="" v-model="rsColaborador.nome" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.nome">{{msgErro.nome}}</span>

        <label for="txtCEP">CEP:</label>
        <input type="text" id="txtCEP" value="" v-model="rsColaborador.cep" v-mask="'##.###-###'" @change='validaCampos()' />
        <span class="mensagemErro" v-show="msgErro.cep">{{msgErro.cep}}</span>

        <label for="txtEndereco">Endereço:</label>
        <input type="text" id="txtEndereco" value="" v-model="rsColaborador.endereco" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.endereco">{{msgErro.endereco}}</span>

        <label for="txtNumero">Número:</label>
        <input type="number" id="txtNumero" value="" v-model="rsColaborador.numero" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.numero">{{msgErro.numero}}</span>

        <label for="txtBairro">Bairro:</label>
        <input type="text" id="txtBairro" value="" v-model="rsColaborador.bairro" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.bairro">{{msgErro.bairro}}</span>

        <label for="txtUF">UF:</label>
        <select v-model="rsColaborador.uf">
            <option disabled value="">UF</option>
            <option>A</option>
            <option>AB</option>
            <option>AC</option>
        </select>
        <span class="mensagemErro" v-show="msgErro.uf">{{msgErro.uf}}</span>

        <label for="txtCidade">Cidade:</label>
        <select v-model="rsColaborador.cidade">
            <option disabled value="">Cidade</option>
            <option>A</option>
            <option>AB</option>
            <option>AC</option>
        </select>
        <span class="mensagemErro" v-show="msgErro.cidade">{{msgErro.cidade}}</span>

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
        <select v-model="rsColaborador.escolaridades" id="escolaridade">
            <option v-for="escola in escolaridades" v-bind:value="escola.valor">
                {{ escola.nivel }}

            </option>
        </select>
        <span class="mensagemErro" v-show="msgErro.escolaridade">{{msgErro.escolaridade}}</span>

        <label for="chkViagem">Disponibilidade para viagem:</label>
        <input type="checkbox" id="chkViagem" value="" v-model="rsColaborador.viagem">
        <label for="chkFilhos">Filhos:</label>
        <input type="checkbox" id="chkFilhos" value="" v-model="rsColaborador.filhos">
        <label for="txtQtdFilhos">Quantos Filhos?</label>
        <input type="number" id="chkQtdFilhos" value="" v-model="rsColaborador.qtdFilos">

        <label for="txtSalario">Salário:</label>
        <input type="number" id="txtSalario" value="" v-model="rsColaborador.salario" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.salario">{{msgErro.salario}}</span>

        <label for="txtEmail">E-mail:</label>
        <input type="text" id="txtEmail" value="" v-model="rsColaborador.email" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.email">{{msgErro.email}}</span>

        <label for="txtTel">Telefone:</label>
        <input type="tel" id="txtTelefone" value="" v-model="rsColaborador.telefone" v-mask="'(##)#####-####'" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.telefone">{{msgErro.telefone}}</span>

        <label for="txtNascimento">Nascimento:</label>
        <input type="date" id="txtNascimento" value="" v-model="rsColaborador.nascimento"/>
        <span class="mensagemErro" v-show="msgErro.nascimento">{{msgErro.nascimento}}</span>

        <label for="txtCPF">CPF:</label>
        <input type="text" id="txtCPF" value="" v-model="rsColaborador.cpf" v-mask="'###.###.###-##'" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.cpf">{{msgErro.cpf}}</span>

        <label for="txtRG">RG:</label>
        <input type="number" id="txtRG" value="" v-model="rsColaborador.rg" @change='validarFormulario()' />
        <span class="mensagemErro" v-show="msgErro.rg">{{msgErro.rg}}</span>

        <label for="radJornada">Jornada de Trabalho:</label>
        <input type="radio" id="radJor8" value="8Horas" v-model="rsColaborador.jornada">
        <label for="radJor8">8 Horas</label>
        <input type="radio" id="radJor12x36" value="12x36" v-model="rsColaborador.jornada">
        <label for="radJor12x36">12 x 36</label>
        <input type="radio" id="radJor1/2" value="1/2" v-model="rsColaborador.jornada">
        <label for="radJor1/2">Meio Período</label>
        <span class="mensagemErro" v-show="msgErro.jornada">{{msgErro.jornada}}</span>
        
        <br>
        <input type="button" value="cadastrar" @click='validarFormulario()' />
        
        
        <div class="debug">
            {{ rsColaborador }}
        </div>
    </div>
</template>

<script lang="ts">
import ColaboradorCls from "./ColaboradorCls";
export default ColaboradorCls

</script>
