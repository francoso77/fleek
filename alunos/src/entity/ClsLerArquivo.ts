import fs from 'node:fs/promises'
import { AlunoInterface } from '../interfaces/AlunoInterfaces'
const SEPARADOR_DE_REGISTRO: string = '\r\n'
const SEPARADOR_DE_COLUNA: string = ' '
const MEDIA_APROVACAO: number = 7


export default class ClsLeituraArquivo {
    //constructor(private nomeArquivo: string) { }

    public rsAlunos: Array<AlunoInterface> = []

    public lerArquivo(nomeArquivo: string): Promise<boolean> {

        return fs.readFile(nomeArquivo).then((conteudo) => {

            let tmpConteudo: Array<string> = conteudo.toString().split(SEPARADOR_DE_REGISTRO)
            this.divideColuna(tmpConteudo)
            return true
        })
        .catch (err => {
            return false
        })
        
    }

    private divideColuna(dadosGeral: Array<string>): void {
        dadosGeral.forEach(linha => {

            let tmpRegistros: Array<string> = linha.split(SEPARADOR_DE_COLUNA)
            this.populaBoletim(tmpRegistros)

        })
    }

    private populaBoletim(arrayDados: Array<string>): void {
        
        for (let i: number = 0; arrayDados.length > i; i++) {
            let tmpBoletim: AlunoInterface = {
                matricula: parseInt(arrayDados[0]),
                nomeAluno: arrayDados[1],
                nota1: parseFloat(arrayDados[2]),
                nota2: parseFloat(arrayDados[3]),
                nota3: parseFloat(arrayDados[4]),
                notaFinal: this.caclulaMedia(parseFloat(arrayDados[2]), parseFloat(arrayDados[3]), parseFloat(arrayDados[4])),
                status: ''
            }

            tmpBoletim.status = tmpBoletim.notaFinal >= MEDIA_APROVACAO ? 'Aprovado' : 'Reprovado'
            this.rsAlunos.push(tmpBoletim)
            this.rsAlunos.sort()
        
        }
    }

    private caclulaMedia(n1: number, n2: number, n3: number): number {

        return parseFloat(((n1 + n2 + n3) / 3).toFixed(2))

    }
}
