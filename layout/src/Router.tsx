import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CadastroCliente from './Cadastros/CadastroCliente'
import CadastroFornecedor from './Cadastros/CadastroFornecedor'
import Erro404 from './Layout/Erro404'
import Layout from './Layout/Layout'
import Login from './Login/Login'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "cadastrocliente/:idCliente",
                element: <CadastroCliente />,
            },
            {
                path: "cadastrofornecedor",
                element: <CadastroFornecedor />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "*",
        element: <Erro404 />,
    }
])



