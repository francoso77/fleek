import React from 'react'

import { createBrowserRouter } from 'react-router-dom';
import ErroAplicacao from '../Layout/ErroAplicacao';
import Layout from '../Layout/Layout';
import ExemploMenu from '../exemplo_apagar/menu';
import Perfil from '../View/Crud/Perfil';
import TesteBox from '../exemplo_apagar/TesteBox';

export const router = createBrowserRouter( [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErroAplicacao />,
    children: [{
      path: "perfil",
      element: <Perfil />,
      errorElement: <ErroAplicacao />
    }
    ]
  },
  {
    path: "/ExemploMenu",
    element: <ExemploMenu />
  },
  {
    path: "/TesteBox",
    element: <TesteBox />
  }

  /*
    {
      path: "/",
      element: <LayOut />,
      errorElement: <ErroAplicacao />,
      children: [
        {
          path: "cadastrocliente/:idCliente",
          element: <CadastroCliente />,
          errorElement: <ErroAplicacao />
        },
        {
          path: "cadastrofornecedor",
          element: <CadastroFornecedor />,
          errorElement: <ErroAplicacao />
        }
      ],
    },
    {
      path: "*",
      element: <ErroNavegacao />
    }
    */
] );