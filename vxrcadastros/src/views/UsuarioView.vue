<template>
  <div>
    <div class="usuario">
      <h1>Cadastro de Usuário</h1>
      <label for="txtID">ID</label>
      <input type="text" name="" id="txtID" ref="txtID" v-model="rsUsuario.id">
      <label for="txtUsuario">Usuário</label>
      <input type="text" name="" id="txtUsuario" v-model="rsUsuario.usuario">
      <label for="txtSenha">Senha</label>
      <input type="password" name="" id="txtSenha" v-model="rsUsuario.senha"><br>
      <input type="button" :value="(statusForm==statusFormEnum.INCLUINDO)? 'Cadastrar' : 'Alterar'" id="btCadastrar"
        @click="confimarDados()">
      <input type="button" value="Cancelar" @click="cancelarDados()">

    </div>
    <div class="tabelaDados">

      <table>
        <tr>
          <th>ID</th>
          <th>Usuário</th>
          <th>Senha</th>
          <th>Ações</th>
        </tr>
        <tr v-for="(usuario, i) in rsUsuarios">
          <td>{{usuario.id}}</td>
          <td>{{usuario.usuario}}</td>
          <td>{{usuario.senha}}</td>
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
import x from './UsuarioViewCls'
export default x
</script>
<style scoped src="./estilos.css">

