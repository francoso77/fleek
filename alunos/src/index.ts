import ClsLeituraArquivo from "./entity/ClsLerArquivo"

let fileCsv: string = ''

let clsLeitor: ClsLeituraArquivo = new ClsLeituraArquivo('alunos.txt')

clsLeitor.lerArquivo()


/*for (var i: number = 0; dadosAlunos.length > i; i++) {
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
}*/