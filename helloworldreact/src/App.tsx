import React from 'react';
import './App.css';
import CadastroCliente from './componentes/CadastroCliente';

function App() {

  const UFS: Array<string> = ['MG', 'SP', 'RJ', 'SC']

  const CIDADES: Array<string> = ['Divinópolis', 'Campinas', 'Macaé', 'Balneário Camburio']

  const mostrarDados: boolean = true

  const empresa: string = "Agility LAB"

  const rsClientes = {
    nome: "Frank",
    tel: '98417-4869',
    site: 'http://www.jbtextil.com'
  }

  return (
    <div className='App'>

      <h1> Primeiro projeto React</h1>
      {/*renderização condicional */}
      {mostrarDados &&
        <div>
          <h3>{empresa}</h3>
          <p>{10}</p>
          <p>{rsClientes.nome}</p>
          <p>{rsClientes.tel}</p>
          <p>10 + 45 = {10 + 45} passando como ninja</p>
          <a href={rsClientes.site}>Site da JB TEXTIL</a>
          <CadastroCliente />
        </div>}
      <CadastroCliente />

      {UFS.map((uf, i) => <p key={i}>{uf}</p>)}
      <CadastroCliente />
      
      {CIDADES.map((cidade, i) => {

        return <p key={i}>{cidade}</p>

      })}
      <select name="UF" id="">
        <option disabled selected>UF</option>
        {UFS.map((uf, i) => <option key={i}>{uf}</option>)}
      </select>
    
    </div>
  );
}

export default App;
