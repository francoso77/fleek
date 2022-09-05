<template>
  <div id="app">
    <h1>Introdução a primeira APP</h1>
    <br>
    <h3>Definindo a @Prop propriedade nome da classe</h3>
    <br>
    <exibir-nome nome="Frank Alves"></exibir-nome>
    <br>
    <exibir-nome nome="Leideiane Neves"></exibir-nome>
    <br>
    <exibir-nome nome="Ana Clara Alves"></exibir-nome>
    <br>
    <h3>Usando o v-for com v-if</h3>
    <br>
    <exibir-nome v-for="(cliente,chave) in rsClientes" v-bind:nome='cliente.nome' v-if="chave == 2">Só renderiza esse elemento</exibir-nome>
    <br>
    <br>
    <h3>Usando o v-for com v-show</h3>
    <exibir-nome v-for="(cliente,chave) in rsClientes" v-bind:nome='cliente.nome' v-show="chave == 3">renderiza tudo e só mostra a chave</exibir-nome>
    <br>
  </div>
</template>

<script lang="ts">

import AppCls from './AppCls.ts';
export default AppCls

</script>


