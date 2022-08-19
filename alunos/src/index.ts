import { match } from "assert"
import ClsLeituraArquivo from "./entity/ClsLerArquivo"
import { AlunoInterface } from "./interfaces/AlunoInterfaces"

let fileCsv: string = ''

let clsLeitor: ClsLeituraArquivo = new ClsLeituraArquivo()

clsLeitor.lerArquivo('alunos.txt').then(temAlunos =>{
    if (temAlunos)
    { 
        console.log('vai')
        geraResultados(clsLeitor.rsAlunos)
    }
}).catch(err =>{
    console.log(err)
})


/*fileCsv = GeraCsv(dadosAlunos)
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

function geraResultados(tmpAlunos: Array<AlunoInterface>): void{
    let totalAlunosAprovados: number = 0
    let totalAlunosReprovados: number = 0
    let NOTAS: Array<number> =[]
    
    tmpAlunos.forEach(alunos => {
        
        alunos.status =='Aprovado' ? totalAlunosAprovados++ : totalAlunosReprovados++
        if (!NOTAS.includes(alunos.notaFinal))
        {
            NOTAS.push(alunos.notaFinal)
        }
    })
    NOTAS.sort()
    console.log('*****************************************************\n\n')
    console.log('Quantidade de Alunos Apravodos: ', totalAlunosAprovados)
    console.log('Quantidade de Alunos Repravodos: ', totalAlunosReprovados)
    console.log('Maior Média de notas: ', NOTAS[NOTAS.length-2])
    console.log('Menor Média de notas: ', NOTAS[0])
    console.log('\n\n*****************************************************')
}