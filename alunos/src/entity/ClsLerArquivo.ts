import fs from 'node:fs/promises'
import { AlunoInterface } from '../interfaces/AlunoInterfaces'
const SEPARADOR_DE_REGISTRO: string = '\r\n'
const SEPARADOR_DE_COLUNA: string = ' '
const MEDIA_APROVACAO: number = 7


export default class ClsLeituraArquivo {
    constructor(private nomeArquivo: string) { }

    private rsAlunos: Array<AlunoInterface> = []

    public lerArquivo(): boolean {

        fs.readFile(this.nomeArquivo).then((conteudo) => {

            let tmpConteudo: Array<string> = conteudo.toString().split(SEPARADOR_DE_REGISTRO)
            this.divideColuna(tmpConteudo)

        })
        return true
    }

    private divideColuna(dadosGeral: Array<string>): void {
        dadosGeral.forEach(linha => {

            let tmpRegistros: Array<string> = linha.split(SEPARADOR_DE_COLUNA)
            this.populaBoletim(tmpRegistros)

        })
    }

    private populaBoletim(ArrayDados: Array<string>): void {

        for (let i: number = 0; ArrayDados.length > i; i++) {
            let tmpBoletim: AlunoInterface = {
                matricula: parseInt(ArrayDados[0]),
                nomeAluno: ArrayDados[1],
                nota1: parseFloat(ArrayDados[2]),
                nota2: parseFloat(ArrayDados[3]),
                nota3: parseFloat(ArrayDados[4]),
                notaFinal: this.caclulaMedia(parseFloat(ArrayDados[2]), parseFloat(ArrayDados[3]), parseFloat(ArrayDados[4])),
                status: ''
            }

            tmpBoletim.status = tmpBoletim.notaFinal >= MEDIA_APROVACAO ? 'Aprovado' : 'Reprovado'
            this.rsAlunos.push(tmpBoletim)
        }
        console.log(this.rsAlunos)
    }

    private caclulaMedia(n1: number, n2: number, n3: number): number {

        return parseFloat(((n1 + n2 + n3) / 3).toFixed(2))

    }


}
