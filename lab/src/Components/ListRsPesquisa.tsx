import React, { useContext } from 'react'
import { ContextoGlobal } from '../Contextos/ContextoGlobal'
import { EscolasInterface } from '../Interfaces/EscolasInterface'
import { GlobalStateInterface } from '../Interfaces/GlobalStateInterface'


const listRsPesquisa = (DadosPesquisa: Array<EscolasInterface>) => {
    
     
    //const globalContexto = (useContext(ContextoGlobal) as GlobalStateInterface)

    return(
        <>
            {/*!DadosPesquisa ? <></> : DadosPesquisa.map((escola) => {
            <tr key={escola.idEscola}>
                <td>{escola.escola}</td>
                <td>{escola.cnpj}</td>
                <td>{escola.email}</td>
                <td><input type="button" value="Editar" onClick={(e) => btEditarExcluir(escola.idEscola, 'editando')} /></td>
                <td><input type="button" value="Excluir" onClick={(e) => btEditarExcluir(escola.idEscola, 'excluindo')} /></td>
            </tr>
            )*/}
        </>
    )
}