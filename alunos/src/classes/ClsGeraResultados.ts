//Importação de fs para leitura e gravação de arquivo e Interfaces
import fs from 'node:fs'
import { AlunoInterface } from "../interfaces/AlunoInterfaces"
/**
 * Faz a apuração da quantidade de alunos aprovados e reprovados, maior e menor notas e gera um arquivo CSV com todos os alunos
 */
export default class clsGeraResultados
{
    /**
     * Apura os alunos aprovados e reprovados, maior e menor nota e ordena os dados por nome do aluno
     * @param tmpAlunos um Array do tipo AlunoInterface
     */
    public geraResultados(tmpAlunos: Array<AlunoInterface>): void{
        
        let totalAlunosAprovados: number = 0
        let totalAlunosReprovados: number = 0
        let NOTAS: Array<number> =[]
        let csv: string = 'Matricula;Aluno;NotaFInal;Status\n'
        
        //ordena o array por ordem de nome crescente
        tmpAlunos.sort( function(x, y)
        {

            let a = x.nomeAluno.toLowerCase(),
                b = y.nomeAluno.toLowerCase();

            return a == b ? 0 : a > b ? 1 : -1
        })

        tmpAlunos.forEach(alunos => {
            
            alunos.status =='Aprovado' ? totalAlunosAprovados++ : totalAlunosReprovados++
            if (!NOTAS.includes(alunos.matricula))
            {
                //coloquei as notas finais em um array do tipo número para apurar maior e menor nota
                NOTAS.push(alunos.notaFinal)
                csv += alunos.matricula.toString().concat(';')
                csv += alunos.nomeAluno.concat(';')
                csv += alunos.notaFinal.toFixed(2).toString().concat(';')
                csv += alunos.status.concat(';')
                csv += '\n'
            }
        })
        NOTAS.sort()
        console.log('*****************************************************\n\n')
        console.log('Quantidade Total de Alunos: ', totalAlunosAprovados + totalAlunosReprovados)
        console.log('Quantidade de Alunos Apravodos: ', totalAlunosAprovados)
        console.log('Quantidade de Alunos Repravodos: ', totalAlunosReprovados)
        console.log('Maior Média de notas: ', NOTAS[NOTAS.length-2])
        console.log('Menor Média de notas: ', NOTAS[0])
        console.log('\n\n*****************************************************')
        if (!csv)
        {       
            console.log('Arquivo CSV vazio!')
        }
        else
        {
            //Grava um arquivo em formado CSV
            fs.writeFile('alunos.csv', csv, err =>{
            (err)? console.log(err.message) : console.log('Arquivo CSV, gerado com sucesso.')
             })
        }
    }
}