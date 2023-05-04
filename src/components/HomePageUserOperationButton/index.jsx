import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePageUserOperationButton = ({text, route}) => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${route}`);
    }

  return (
    <button
    className='font-mont p-4 m-2 border border-gray-300 hover:bg-gray-300 hover:text-black transition duration-500'
    onClick={handleNavigate}
    >
        {text}
    </button>
  )
}

export default HomePageUserOperationButton