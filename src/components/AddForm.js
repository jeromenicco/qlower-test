import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { postProperties, propertiesReducer } from '../redux/properties/propertiesSlice'
import { useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import './AddForm.css'

const propertyType = [
  {
    label: 'Appartement'
  },
  {
    label: 'Maison'
  }
]

const AddForm = () => {
  const [ value, setValue ] = useState({
    type: propertyType[0].label,
    name: '',
    address: '',
    additionalAddress: '',
    zip: '',
    city: '',
  })
  
  let history = useHistory()
  const formRef = React.useRef()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const addProperty = (e) => {
    e.preventDefault()
    if (value) {
      dispatch(propertiesReducer({ value }))
      postProperties(value)
    }
    history.push('/')
  }

  return (
    <div className='add-property-container'>
      <form
        ref={formRef}
        onSubmit={addProperty}
        className='form-wrapper'
        autoComplete="off"
      >
        <div className='form-item-container'>
          <TextField
            select
            label='Select'
            defaultValue={value.type}
            onChange={handleChange}
            variant='outlined'
            name='type'
            required
          >
          {
            propertyType.map((type, index) => (
              <MenuItem key={index} value={type.label}>
                {type.label}
              </MenuItem>
            ))
          }
          </TextField>
        </div>
        <div className='form-item-container'>
          <TextField
            onChange={handleChange}
            defaultValue={value.name}
            id='outlined-basic'
            label='Nom de la propriété'
            required
            name='name'
            variant='outlined'
          />
        </div>
        <div className='form-item-container'>
          <TextField
            onChange={handleChange}
            defaultValue={value.address}
            id='outlined-basic'
            label="Adresse de la propriété"
            required
            name='address'
            variant='outlined'
          />
        </div>
        <div className='form-item-container'>
          <TextField
            onChange={handleChange}
            defaultValue={value.additionalAddress}
            id='outlined-basic'
            label='Complément d&apos;adresse'
            variant='outlined'
            name='additionalAddress'
          />
        </div>
        <div className='horizontal-items'>
          <TextField
            onChange={handleChange}
            defaultValue={value.zip}
            id='outlined-basic'
            label='Code postal'
            variant='outlined'
            required
            name='zip'
          />
          <div className='dummy-space' />
          <TextField
            onChange={handleChange}
            defaultValue={value.city}
            id='outlined-basic'
            label='Ville'
            variant='outlined'
            required
            name='city'
          />
        </div>
        <button
          type='submit'
          onClick={() => formRef.current.reportValidity() && addProperty}
          className='continue-btn'
        >
          Continuer
        </button>
      </form>
    </div>
  )
}

export default AddForm
