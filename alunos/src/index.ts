import ClsLeituraArquivo from "./entity/ClsLerArquivo";
import { AlunoInterface } from "./interfaces/AlunoInterfaces";

let dadosAlunos: Array<AlunoInterface> = [{
    matricula: '801',
    nomeAluno: 'Frank',
    nota1: 5.7,
    nota2: 6.2,
    nota3: 9.0,
    notaFinal: 0,
    status: ''
}, {
    matricula: '001',
    nomeAluno: 'Maria',
    nota1: 1.7,
    nota2: 10.0,
    nota3: 8.5,
    notaFinal: 0,
    status: ''
}]

console.log(dadosAlunos)
/*let clsLeitura: ClsLeituraArquivo = new ClsLeituraArquivo('alunos.txt')

clsLeitura.lerArquivo().then(retornoArquivo =>
{
    console.log('o retorno da função leitura:\n', retornoArquivo)
}).catch (err2 =>
{
    console.log('arquivo não encontrado', err2.message)
})*/

for (var i:number = 0; dadosAlunos.length > i; i++)
{
    dadosAlunos[i].notaFinal =  (dadosAlunos[i].nota1 + dadosAlunos[i].nota2 + dadosAlunos[i].nota3)/3
    dadosAlunos[i].notaFinal >= 7? dadosAlunos[i].status = 'Aprovado':dadosAlunos[i].status = 'Reprovado'
}
console.log(dadosAlunos)

GeraCsv(dadosAlunos)

function GeraCsv(obj: Array<AlunoInterface>): void
{
    var csv: string = 'Matricula, Aluno, NotaFInal, Status\n'

    obj.forEach((row) =>{
        csv += row.matricula
        csv += row.nomeAluno
        csv += row.notaFinal
        csv += row.status
        csv += '\n'
    })
}