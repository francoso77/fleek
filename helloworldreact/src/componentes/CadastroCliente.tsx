import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroCliente.css';

interface rsClientesInterface {
  nome: string
  empresa: string
}

interface UFsInterface {
  id: number
  nome: string
  sigla: string
  regiao: {
    id: number
    nome: string
    sigla: string
  }
}
function CadastroCliente() {

  const URL_IBGE_UFS: string = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

  const [isPendente, SetIsPendente] = useState<boolean>(true)
  const [isErro, SetIsErro] = useState<boolean>(false)
  const [UFs, SetUfs] = useState <Array<String>>([])
  
  useEffect(() => {
    fetch(URL_IBGE_UFS).then(Dados => {

      SetIsPendente(false)
      return Dados.json()

    }).then((Dados: Array<UFsInterface>) => {
      let tmpUFs: Array<string> = []
      
      Dados.forEach((uf) => {
        tmpUFs.push(uf.sigla)
      })
      SetUfs(tmpUFs.sort())
      
    }).catch(err => {

      SetIsPendente(false)  //aqui muda o estado da aplicação que será rendirizado condicionalmente 
      SetIsErro(true)

    })
    return function cleanup() {

    }
  }, []) //aqui dentro dos colchetes pode-se colocar um conjuntos de registros, ou apenas um campo


  const [rsClientes, setRsCliente] = useState<rsClientesInterface>({
    nome: '',
    empresa: 'JB TEXTIL'
  })

  const txtNomeonChange = (e: ChangeEvent<HTMLInputElement>) => {

    // a instrução com "..." desconstroi o objeto podendo assim passar somente um campo 
    setRsCliente({
      ...rsClientes,
      nome: e.target.value
    })
  }

  const mostrarNome = () => {
    alert('olá, '.concat(rsClientes.nome))
  }
  return (

    <div className='CadastroCliente'>

      <h1>Componente de Cadastro de cliente</h1>

      <label htmlFor="txtNome">Nome</label>
      <input type="text" name="txtNome" id="txtNome" onChange={txtNomeonChange} />
      <label htmlFor="txtUF">UF</label>
      <select name="txtUF" id="">
        <option> Selecione uma UF</option>
        {UFs.map((uf, i) => <option key={i}>{uf}</option>)}
      </select>
      <input type="button" value="Exibir Nome" onClick={mostrarNome} /><br />
      <p>{rsClientes.nome}</p>
      {isPendente && <div>Lendo dados do servidor</div>}
      {isErro && <div>Erro ao ler os dados do servidor</div>}
    </div>
  );
}

export default CadastroCliente;