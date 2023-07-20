import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosSlice = {
  itens: Contato[]
}

const initialState: ContatosSlice = {
  itens: [
    {
      nome: 'João Paulo',
      telefone: '119874562406',
      email: 'joaopaulo@gmail.com',
      id: 1
    },
    {
      nome: 'Alicia',
      telefone: '1142552562778',
      email: 'alicia@email.com',
      id: 2
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (t: { id: number }) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
