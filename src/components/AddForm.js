import React, { useState } from 'react'
import './AddForm.css'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addProperty } from '../redux/properties/propertiesSlice'

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

  const dispatch = useDispatch()

  let history = useHistory()

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    console.log('PROPERTY ->', value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(value)
    // properties.unshift(JSON.stringify(value))
    
  }

  const handleBackToHome = (e) => {
    e.preventDefault()
    history.push('/')
    if (value) {
      dispatch(addProperty({
        value
      }))
    }
  }
  

  return (
    <div className='add-property-container'>
      <form
        onSubmit={handleSubmit}
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
          onClick={handleBackToHome}
          className='continue-btn'
        >
          Continuer
        </button>
      </form>
    </div>
  )
}

export default AddForm
