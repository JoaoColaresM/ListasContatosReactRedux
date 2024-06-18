import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from '../../modelo/modeloDeContato'

type ContatoState = {
    pessoa: Contato[]
}

const initialState: ContatoState = {
    pessoa: [
        {
            id: 1,
            nome: 'Antônio',
            email: 'antonio@gmail.com',
            tel: '(85)99999-1111'
        },
        {
            id: 2,
            nome: 'Maria',
            email: 'maria@gmail.com',
            tel: '(85)88888-8888'
        }
    ]
}

const contatoSlice = createSlice({
    name: 'contato',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
            const contatoJaExiste = state.pessoa.find(
                (contato) => contato.email === action.payload.email
            )
            if (contatoJaExiste) {
                alert('Contato de e-mail já cadastrado!')
            } else {
                const ultimoContato = state.pessoa[state.pessoa.length - 1]
                const novoContato = {
                    ...action.payload,
                    id: ultimoContato ? ultimoContato.id + 1 : 1
                }
                state.pessoa.push(novoContato)
            }
        },
        deletar: (state, action: PayloadAction<number>) => {
            state.pessoa = state.pessoa.filter(deletar => deletar.id !== action.payload)
        }
    }
})

export const { adicionar, deletar } = contatoSlice.actions
export default contatoSlice.reducer