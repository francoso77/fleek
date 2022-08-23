export default class ClsCliente
{
    public nome:string
    public endereco:string

    constructor(nome: string, endereco: string)
    {
        this.nome = nome
        this.endereco = endereco
    }        

    public setNome(nome: string)
    {
        this.nome = nome.concat(' xuxu')
    }

    public getNome(): string
    {
        return this.nome
    }
}
