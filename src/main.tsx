import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lista from './conteudo/lista/Lista.tsx'
import Adicionar from './conteudo/adicionar/Adicionar.tsx'
import { Provider } from 'react-redux'
import store from './store/index.tsx'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Lista/>
      },
      {
        path: '/adicionar',
        element: <Adicionar/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rotas}/>
    </Provider>
  </React.StrictMode>,
)
