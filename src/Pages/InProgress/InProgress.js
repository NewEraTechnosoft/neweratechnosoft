import React from 'react'
import { workInProgress } from '../../Assets'

const InProgress = () => {
  return (
    <div className='container'>
        <div className='py-3'>
            <img src={workInProgress} alt="Work In Progress " className='img-fluid mx-auto' />
        </div>
    </div>
  )
}

export default InProgress
