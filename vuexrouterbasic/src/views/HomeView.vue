<template>
  <div class="home">
    <HelloWorld :msg="mensagemBoasVindas" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import store from '../store'

@Component({
  components: {
    HelloWorld
  }
})
export default class HomeView extends Vue {

  public get mensagemBoasVindas(): string {
    let mensagem: string = ''
    
    //quando vc usa class essa é a sintaxe

    if (store.state.LoginModule.logado) {
      mensagem = "Seja bem vindo ao nosso APP ..."
    } else {
      mensagem = "Faça o login!"
    }
    return mensagem
  }
}
</script>
