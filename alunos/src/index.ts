//Importação das classes 
import clsGeraResultados from "./classes/ClsGeraResultados"
import ClsLeituraArquivo from "./classes/ClsLerArquivo"

let clsLeitor: ClsLeituraArquivo = new ClsLeituraArquivo()
let clsResultados: clsGeraResultados = new clsGeraResultados()

clsLeitor.lerArquivo('alunos.txt').then(temAlunos => {
    if (temAlunos) {
        clsResultados.geraResultados(clsLeitor.rsAlunos)
    }
}).catch(err => {
    console.log(err)
})