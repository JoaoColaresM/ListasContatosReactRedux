import { Link } from "react-router-dom"
import * as S from './styles'

const NavBar = () => {
    return (
        <S.navBar>
            <h1>Meus Contatos</h1>
            <S.link>
                <Link className="link" to='/'>Lista de contatos</Link>
                <Link className="link" to='/adicionar'>Adicionar novo contato</Link>
            </S.link>
        </S.navBar>
    )
}

export default NavBar