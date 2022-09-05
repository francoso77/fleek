import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ClsExibirNome extends Vue
{
    @Prop({
        default: "none"
    })
    public nome: string | undefined

    public msgNome()
    {
        alert(this.nome)
    }
}