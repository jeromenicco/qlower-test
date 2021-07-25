import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { properties } from '../../db.json'
import axios from 'axios'

// start API server cmd: json-server --watch src/db.json --port 3001
export const getProperties = createAsyncThunk('properties/getProperties', async () => {
  const response = await axios.get('http://localhost:3001/properties')
  return response.data
})

export const postProperties = ( data ) => {
  axios.post('http://localhost:3001/properties', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

const initialState = properties

const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    propertiesReducer(state, action) {
      console.log('', action)
      state.push(action.payload.value)
    }
  }
})

export const { propertiesReducer } = propertiesSlice.actions

export default propertiesSlice.reducer