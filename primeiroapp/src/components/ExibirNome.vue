<template>
    <div>
        o nome vai aqui... {{ nome }}
        <br>
        <input type="button" value="Mostra Nome" @mousemove="msgNome()"/>
    </div>
</template>

<script lang="ts">
    
import ClsExibirNome from './ClsExibirNome';
export default ClsExibirNome;


</script>