<template>
  <div>
    <div class="fornecedor">
      <h1>Cadastro de Fornecedor</h1>
      <label for="txtCNPJ">CNPJ</label>
      <input type="text" name="" id="txtCNPJ" ref="txtCNPJ" v-model="rsFornecedor.cnpj">
      <label for="txtEmpresa">Empresa</label>
      <input type="text" name="" id="txtEmpresa" v-model="rsFornecedor.empresa">
      <label for="txtTel">Telefone</label>
      <input type="tel" name="" id="txtTelefone" v-model="rsFornecedor.telefone"><br>
      <input type="button" :value="(statusForm==statusFormEnum.INCLUINDO)? 'Cadastrar' : 'Alterar'" id="btCadastrar"
        @click="confimarDados()">
      <input type="button" value="Cancelar" @click="cancelarDados()">

    </div>
    <div class="tabelaDados">

      <table>
        <tr>
          <th>CNPJ</th>
          <th>Empresa</th>
          <th>Telefone</th>
          <th>Ações</th>
        </tr>
        <tr v-for="(fornecedor, i) in rsFornecedores">
          <td>{{fornecedor.cnpj}}</td>
          <td>{{fornecedor.empresa}}</td>
          <td>{{fornecedor.telefone}}</td>
          <td>
            <i class="material-icons botaoAcao" @click="btExcluir(i)">close</i>
            <i class="material-icons botaoAcao" @click="btAlterar(i)">edit</i>
          </td>
        </tr>
      </table>
    </div>
    <div class="debug" v-if="exibirDebug">
      {{ rsFornecedor }}
    </div>
  </div>

</template>
<script lang="ts">
import x from './FornecedorViewCls'
export default x
</script>
<style scoped src="./estilos.css">
