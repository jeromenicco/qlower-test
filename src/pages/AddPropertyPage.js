import React from 'react'
import AddForm from '../components/AddForm'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import './AddPropertyPage.css'

const AddPropertyPage = () => {
  return (
    <div className='property-page-container'>
      <div className='form-info-container'>
        <h3>Détailler une propriété</h3>
        <p>Renseignez votre bien en 5 minutes avec les documents suivants</p>
        <ul>
          <li>Bail de location en cours</li>
          <li>Tableaux d'amortissements des crédits associés</li>
        </ul>
      </div>
      <div className='info-help'>
        <TouchAppIcon fontSize='medium' />
        <p>Vous pourrez toujours revenir sur ce bien à tout moment pour le compléter</p>
      </div>
      <AddForm />
    </div>
  )
}

export default AddPropertyPage
