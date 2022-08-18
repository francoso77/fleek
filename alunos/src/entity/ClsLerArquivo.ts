import fs from 'node:fs/promises'
import lineReader from 'line-reader'


export default class ClsLeituraArquivo
{
    constructor(private nomeArquivo: string){}

    public lerArquivo(): Promise<string [][]>{
        
        /*let dadosAlunos: string[][] = []
        lineReader.eachLine(this.nomeArquivo, function(linha){
            dadosAlunos.push(linha.split(" "))
        })
        return fs.readFile */
        let dadosAlunos: string[][] = []

        return new Promise((resolve, reject) => {

            lineReader.eachLine(this.nomeArquivo, function(linha){
                dadosAlunos.push(linha.split(" "))
            }).then(() => {
                resolve(dadosAlunos)
            }).catch (err => {
                reject ('Erro na leitura')
            })
        })
    }    
}
