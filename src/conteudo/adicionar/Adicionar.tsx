import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { adicionar } from "../../store/reducers/contato"
import * as S from './styles'

const Adicionar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const adicionarContato = (evento: FormEvent) => {
        evento.preventDefault()
        dispatch(adicionar({nome, email, tel}))
        navigate('/')
    }

    return (
        <S.adicionar>
            <h2>Adicionar</h2>
            <form onSubmit={adicionarContato}>
                <input
                    value={nome}
                    onChange={({target})=>setNome(target.value)}
                    type="text"
                    placeholder="Nome Completo"
                    />
                <input
                    value={email}
                    onChange={({target})=>setEmail(target.value)}
                    type="email"
                    placeholder="E-mail"
                    />
                <input
                    value={tel}
                    onChange={({target})=>setTel(target.value)}
                    type="tel"
                    placeholder="Telefone"
                    />
                <button type="submit">Adicionar Contato</button>
            </form>
        </S.adicionar>
    )
}

export default Adicionar