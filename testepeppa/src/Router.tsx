import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CadastroProduto from './Cadastros/CadastroProduto'
import ListagemProduto from './Cadastros/ListagemProduto'
import Erro404 from './Pages/Erro404'
import Layout from './Layout/Layout'
import Mensagem from './Pages/Mensagem'
import Login from './Login/Login'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "cadastroproduto",
                element: <CadastroProduto />,
                errorElement: <Login />
            },
            {
                path: "listagemproduto",
                element: <ListagemProduto />,
                errorElement: <Login />
            },
            {
                path: "/mensagem",
                element: <Mensagem />,
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



