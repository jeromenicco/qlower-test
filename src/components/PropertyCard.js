import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditIcon from '@material-ui/icons/Edit'
import './PropertyCard.css'

const PropertyCard = ({ title , cardType }) => {
  return (
    <div className='card-container'>
      <div className={ cardType === 'simulation' ? 'img-simu-container' : 'img-container' } />
      <div className='infos-container'>
        <p className='card-title'>{title}</p>
        <div className='icons-modify-container'>
          <div className='icons-container'>
            <div className='alert-icon'>
              <NotificationsIcon fontSize='large' />
            </div>
            <div className='transactions-icon'>
            </div>
            <div className='completude-icon'>
            </div>
          </div>
          <button className='modify-button'>
            <div className='modify-btn-inner-container'>
              <p>Modifier</p>
              <EditIcon fontSize='small' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
