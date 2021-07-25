import React from 'react'
import { useHistory } from "react-router-dom"
import { useSelector } from 'react-redux'
import PropertyCard from '../components/PropertyCard'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import EditIcon from '@material-ui/icons/Edit'
import './HomePage.css'

const HomePage = () => {
  let history = useHistory()
  const propertiesList = useSelector(state => state.properties)

  return (
    <div className='home-container'>
      <div className='header-container'>
        <h3>Mes propriétés (Juillet)</h3>
        <div className='inner-header-contenair'>
          <p>Gérer mes propriétés</p>
          <EditIcon />
        </div>
      </div>
      <div className='add-button-container'>
        <button
          className='add-button'
          onClick={() => { history.push('/add-property') }}
        >
          <div className='inside-button'>
            <AddCircleOutlineOutlinedIcon />
            <p>Ajouter une propriété</p>
          </div>
        </button>
      </div>
      <div className='my-simulations-container' >
        <p className='title-simulations'>Mes simulations</p>
        <div className='simu-card-container'>
          <PropertyCard title='T3 vide Qlower' cardType='simulation' />
        </div>
      </div>
      {
        [...propertiesList].reverse().map((item, index) => {
          return (
            <div key={index}>
              <PropertyCard title={item.name} item={item} propertiesList={propertiesList} cardType='property' />
            </div>
          )
        })
      }
    </div>
  )
}

export default HomePage
