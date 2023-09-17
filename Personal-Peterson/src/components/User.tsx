import React from 'react'
import photo  from '../assets/photo.png';
import './User.css'

const User = () => {
  return (
    <div className='userr'>
         
         <img src={photo} alt="" />
        <div className='name'>
           Manyata
        </div>
        <div className='descrp'>
             Manyata describes herself as bubbly , girl-next Door.
             She holds interest in reading fiction.
        </div>
        <div className='fear'>
            Her Deepest fear is perfectionism.
        </div>
        <div className='act'>
            Suggestive Activity to soothe your mind
        </div>
        
    </div>
  )
}

export default User
