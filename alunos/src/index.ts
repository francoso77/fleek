//import ClsLeituraArquivo from "./entity/ClsLerArquivo"
//let clsLeitura: ClsLeituraArquivo = new ClsLeituraArquivo('alunos.txt')
//console.log(clsLeitura.lerArquivo())
import fs from 'node:fs';
import ClsLeituraArquivo from "./entity/ClsLerArquivo";
import { AlunoInterface } from "./interfaces/AlunoInterfaces";

let fileCsv: string = ''

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
    nota1: 6.7,
    nota2: 10.0,
    nota3: 8.5,
    notaFinal: 0,
    status: ''
}]
for (var i: number = 0; dadosAlunos.length > i; i++) {
    dadosAlunos[i].notaFinal = (dadosAlunos[i].nota1 + dadosAlunos[i].nota2 + dadosAlunos[i].nota3) / 3
    dadosAlunos[i].notaFinal >= 7 ? dadosAlunos[i].status = 'Aprovado' : dadosAlunos[i].status = 'Reprovado'
}

fileCsv = GeraCsv(dadosAlunos)
if (!fileCsv)
{
    console.log('Arquivo CSV vazio!')
}
else
{
    fs.writeFile('alunos.csv', fileCsv, err =>{
        (err)? console.log(err.message) : console.log('Arquivo CSV, gerado com sucesso.')
    })
}

function GeraCsv(obj: Array<AlunoInterface>): string {
    
    let csv: string = 'Matricula;Aluno;NotaFInal;Status\n'
    obj.forEach((row) => {
        csv += row.matricula.concat(';')
        csv += row.nomeAluno.concat(';')
        csv += row.notaFinal.toFixed(2).toString().concat(';')
        csv += row.status.concat(';')
        csv += '\n'
    })
    return csv
}