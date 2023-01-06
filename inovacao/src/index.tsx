//TODO - SVN - Upload
//TODO - Arquivos Imagens para Fernando
//TODO - Linha de código da Instalação para DEVs (React | MUI | Fonts | TypeScript)

//TODO - Desenvolver Processo Lookup (Pesquisa Código + Descrição)

//TODO Text Field

//TODO - Barra de Status

//TODO - Menu Superior com Hamburguer On | Off - Menu Lateral

//TODO - Subir Imagem / Foto do Usuário


import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
