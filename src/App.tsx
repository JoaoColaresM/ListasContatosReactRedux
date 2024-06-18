import NavBar from './conteudo/barraNavegacao/NavBar'
import { Outlet } from 'react-router-dom'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal/>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default App
