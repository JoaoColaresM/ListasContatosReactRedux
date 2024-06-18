import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import Contato from '../modelo/modeloDeContato'
import { deletar } from "../store/reducers/contato"
import * as S from './styles'

type Props = Contato

const ComponenteContato = ({ id, nome, email, tel }: Props) => {
    const dispatch = useDispatch()
    const [estaEditando, setEstaEditando] = useState(false)
    const [novoNome, setNovoNome] = useState('')
    const [novoEmail, setNovoEmail] = useState('')
    const [novoTel, setNovoTel] = useState('')

    useEffect(() => {
        setNovoNome(nome)
        setNovoEmail(email)
        setNovoTel(tel)
    }, [])

    function cancelarEdicao() {
        setEstaEditando(false)
        setNovoNome(nome)
        setNovoEmail(email)
        setNovoTel(tel)
    }

    return (
        <S.cartaoContato>
            <S.cartao>
                <ul key={id}>
                    <li>
                        <textarea
                            disabled={!estaEditando}
                            value={novoNome}
                            onChange={(e) => setNovoNome(e.target.value)}
                        >
                        </textarea>
                        <textarea
                            disabled={!estaEditando}
                            value={novoEmail}
                            onChange={(e) => setNovoEmail(e.target.value)}
                        ></textarea>
                        <textarea
                            disabled={!estaEditando}
                            value={novoTel}
                            onChange={(e) => setNovoTel(e.target.value)}
                        ></textarea>
                    </li>
                </ul>
            </S.cartao>
            <S.botoes>
                {estaEditando ? (
                    <>
                        <button className="salvar" onClick={() => setEstaEditando(false)}>Salvar</button>
                        <button className="cancelar" onClick={() => {
                            cancelarEdicao()
                        }
                        }
                        >
                            Cancelar
                        </button>
                    </>
                ) : (
                    <>
                        <button className="editar" onClick={() => setEstaEditando(true)}>Editar</button>
                        <button className="deletar" onClick={() => dispatch(deletar(id))}>Deletar</button>
                    </>
                )
                }
            </S.botoes>
        </S.cartaoContato>
    )
}

export default ComponenteContato