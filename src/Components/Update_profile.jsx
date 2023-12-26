import React from 'react'
import { FaUserCircle } from "react-icons/fa";


const Update_profile = () => {
  return (
    <>
    <div className=''>
        {/* 1st block */}
        <div className='text-center'>
            <ul>
                <li><FaUserCircle  className='size-40' /></li>
                <li className='text-black'>Name <input type="text" className='rounded-lg border-black p-3' placeholder='Name' /></li>
            </ul>
            

        </div>
    </div>
    </>
  )
}

export default Update_profile