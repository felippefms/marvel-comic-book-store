import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nome: '',
  capa: '',
  descricao: '',
}

export const GetHqSlice = createSlice({
  name: 'SelectedHq',
  initialState,
  reducers: {
    SelectHq: (state, action) => {
      state.nome = action.payload.nome
      state.capa = action.payload.capa
      state.descricao = action.payload.descricao
    },
  },
})

export const { SelectHq } = GetHqSlice.actions

export default GetHqSlice.reducer