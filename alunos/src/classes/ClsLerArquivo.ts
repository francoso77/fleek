//Importando fs agora em primise para trabalhar com o tempo de analise dos dados e interface
//Declaração de constante usadas para tratar os dados
import fs from 'node:fs/promises'
import { AlunoInterface } from '../interfaces/AlunoInterfaces'
const SEPARADOR_DE_REGISTRO: string = '\r\n'
const SEPARADOR_DE_COLUNA: string = ' '
const MEDIA_APROVACAO: number = 7

/**
 * Realiza a leitura do arquivo TXT e trnsforma os dados em um Array do tipo objeto
 */
export default class ClsLeituraArquivo {
    
    public rsAlunos: Array<AlunoInterface> = []

    /**
     * Promise que realiza a letura do arquivo TXT
     * @param nomeArquivo variável do tipo string, que contém o nome do arquivo texto
     * @returns retorna um valor boolean de confrimação da leitura ou não do arquivo 
     */
    public lerArquivo(nomeArquivo: string): Promise<boolean> {

        return fs.readFile(nomeArquivo).then((conteudo) => {

            this.divideColuna(conteudo.toString().split(SEPARADOR_DE_REGISTRO))
            
            return true
        })
        .catch (err => {
            return false
        })
        
    }
    /**
     * Divide os dados contidos em uma linha em colunas
     * @param dadosGeral Array do tipo string com linhas e dados diferentes na mesma linha
     */
    private divideColuna(dadosGeral: Array<string>): void {
        
        dadosGeral.forEach(linha => {

            let tmpRegistro: Array<string> = linha.split(SEPARADOR_DE_COLUNA)
            
            let tmpBoletim: AlunoInterface = {
                matricula: parseInt(tmpRegistro[0]),
                nomeAluno: tmpRegistro[1],
                nota1: parseFloat(tmpRegistro[2]),
                nota2: parseFloat(tmpRegistro[3]),
                nota3: parseFloat(tmpRegistro[4]),
                notaFinal: this.caclulaMedia(parseFloat(tmpRegistro[2]), parseFloat(tmpRegistro[3]), parseFloat(tmpRegistro[4])),
                status: ''
            }

            tmpBoletim.status = tmpBoletim.notaFinal >= MEDIA_APROVACAO ? 'Aprovado' : 'Reprovado'
            this.rsAlunos.push(tmpBoletim)
            
        })
        this.rsAlunos.sort()
    }
    /**
     * Calcula a média de 3 notas do arquivo texto
     * @param n1 Number - valor da nota 1
     * @param n2 Number - valor da nota 2
     * @param n3 Number - valor da nota 3
     * @returns retorna o valor da média de 3 notas
     */
    private caclulaMedia(n1: number, n2: number, n3: number): number {

        return parseFloat(((n1 + n2 + n3) / 3).toFixed(2))

    }
}