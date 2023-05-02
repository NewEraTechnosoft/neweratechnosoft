import React from 'react';
import { Loader } from '../../../Assets';

const LoaderCom = () => {
  return (
    <div className='flex justify-center items-center' style={{height:"100vh"}}>
      <img src={Loader} alt="New Era Loader" className='h-16' />
    </div>
  )
}

export default LoaderCom;
