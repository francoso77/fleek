import React, { ChangeEvent } from 'react';
import './CadastroCliente.css';

function CadastroCliente() {
    
  let txtMsg: string = ""
  
  const txtNomeonChange = (e: ChangeEvent<HTMLInputElement>) =>{
    txtMsg = e.target.value
    console.log(txtMsg)
  }

  const mostrarNome  = () =>{
    alert('olá, '.concat(txtMsg))
  }
  return (

    <div className='CadastroCliente'>
      
      <h1>Componente de Cadastro de cliente</h1>
      
      <label htmlFor="txtNome">Nome</label>
      <input type="text" name="txtNome" id="txtNome" onChange={txtNomeonChange}/>
      <span>{txtMsg}</span>
      <input type="button" value="Exibir Nome" onClick={mostrarNome}/>
    
    </div>
  );
}

export default CadastroCliente;