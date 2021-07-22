import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { properties } from '../../mock.json'
import axios from 'axios'


const initialState = properties


export const fetchData = createAsyncThunk('properties/fetchProperties', async () => {
  const response = await axios.get('http://localhost:3001/properties')
    console.log(response.data)
  return response.data
})


const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addProperty(state, action) {
      console.log('', action)
      state.unshift(action.payload.value)
    }
  }
})

export const { addProperty } = propertiesSlice.actions

export default propertiesSlice.reducer