import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import ComponenteContato from "../../componentes/componenteContato"
import * as S from './styles'

const Lista = () => {
    const {pessoa} = useSelector((state: RootReducer) => state.contato)

    return (
        <S.contatos>
            <h2>Contatos</h2>
            {pessoa.map((item) => (
                <li key={item.id}>
                    <ComponenteContato
                        id = {item.id}
                        nome = {item.nome}
                        email = {item.email}
                        tel = {item.tel}
                    />
                </li>
            ))}
        </S.contatos>
    )
}

export default Lista