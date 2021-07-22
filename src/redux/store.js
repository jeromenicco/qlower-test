import { configureStore } from '@reduxjs/toolkit'
import propertiesReducer from './properties/propertiesSlice'

export default configureStore({
  reducer: {
    properties: propertiesReducer
  }
})
