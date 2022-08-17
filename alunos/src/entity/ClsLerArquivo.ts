import fs from 'node:fs/promises'

export default class ClsLeituraArquivo
{
    constructor(private nomeArquivo: string){}
    public conteudoArquivo: string = ''
    
    public lerArquivo(): Promise<string> {

        return fs.readFile(this.nomeArquivo).then( (texto) =>
        {
            var linhas: Array<string> = texto.toString().split(' ')
            
            
            //linhas.forEach(function (linha){
            //    console.log(linha)
           // })
            console.log('linha 0', linhas)
            this.conteudoArquivo = texto.toString()
            return Promise.resolve(texto.toString())
    
        }).catch( err1 =>
        {
             return Promise.reject(err1.message)
        })
    }
}