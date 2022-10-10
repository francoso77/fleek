<template>
  <div>
    <div class="cliente">
      <h1>Cadastro de Cliente</h1>
      <label for="txtCPF">CPF</label>
      <input type="text" name="" id="txtCPF" ref="txtCPF" v-model="rsCliente.cpf" >
      <label for="txtNome">Nome</label>
      <input type="text" name="" id="txtNome" v-model="rsCliente.nome">
      <label for="txtNascimento">Nascimento</label>
      <input type="date" name="" id="txtNascimento" v-model="rsCliente.nascimento"><br>
      <input type="button" :value="(statusForm==statusFormEnum.INCLUINDO)? 'Cadastrar' : 'Alterar'" id="btCadastrar"
        @click="confimarDados()">
      <input type="button" value="Cancelar" @click="cancelarDados()">

    </div>
    <div class="tabelaDados">

      <table>
        <tr>
          <th>CPF</th>
          <th>Nome</th>
          <th>Nascimento</th>
          <th>Ações</th>
        </tr>
        <tr v-for="(cliente, i) in rsClientes">
          <td>{{cliente.cpf}}</td>
          <td>{{cliente.nome}}</td>
          <td>{{cliente.nascimento}}</td>
          <td>
            <i class="material-icons botaoAcao" @click="btExcluir(i)">close</i>
            <i class="material-icons botaoAcao" @click="btAlterar(i)">edit</i>
          </td>
        </tr>
      </table>
    </div>
    <div class="debug" v-if="exibirDebug">
      {{ rsCliente }}
    </div>
  </div>

</template>
<script lang="ts">
import x from './ClienteViewCls'
export default x
</script>
<style scoped src="./estilos.css">