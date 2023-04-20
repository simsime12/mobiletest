import React from 'react'
import { useNavigate } from 'react-router-dom';
import Pro from '../components/Pro';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
        <div className="container">
        <div className='product'>
            <div onClick={()=>navigate("/product")} className='pBox'></div>
            <div className='pBox'></div>
            <div className='pBox'></div>
        </div>
        </div>
        <Pro />
    </div>
  )
}

export default Main