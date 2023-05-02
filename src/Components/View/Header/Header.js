import React from 'react'
import { headerImage } from '../../../Assets';


const Header = () => {
  return (
    <div className='container'>
      .<div className="row justify-content-center align-items-center g-2">
        <div className="col-12 col-md-6 text-center text-md-start">
            <div className="header-content" data-aos="fade-right">
                <h4 className='text-xl text-neweraBlue font-medium' >We're Creative</h4>
                <h2 className='text-3xl font-titleFont md:text-6xl text-black font-bold mb-3'>Cutting-Edge Software</h2>
                <h3 className='text-2xl font-bodyFont md:text-5xl text-neweraOrange font-bold'>Solution</h3>
                <span className='font-bodyFont text-black font-semibold '>Custom Development For Modern Business Success</span>
            </div>
        </div>
        <div className="col-12 col-md-6 ">
            <div className="header-image" data-aos="fade-left">
                <img src={headerImage} alt="New Era Technosoft Header Media" className=' img-fluid'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
