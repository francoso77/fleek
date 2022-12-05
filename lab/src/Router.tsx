import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CadastroCliente from './Cadastros/CadastroCliente'
import CadastroFornecedor from './Cadastros/CadastroFornecedor'
import CadastroEscola from './Cadastros/CadastroEscola'
import Erro404 from './Layout/Erro404'
import Layout from './Layout/Layout'
import Login from './Login/Login'


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Login />,
        children: [
            {
                path: "cadastrocliente",
                element: <CadastroCliente />,
                errorElement: <Login />
            },
            {
                path: "cadastrofornecedor",
                element: <CadastroFornecedor />,
                errorElement: <Login />
            },
            {
                path: "cadastroescola",
                element: <CadastroEscola />,
                errorElement: <Login />
            },
  
        ],
    },
    {
        path: "*",
        element: <Erro404 />,
        errorElement: <Login />
    }
])