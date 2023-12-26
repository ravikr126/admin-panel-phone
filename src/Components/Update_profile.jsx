import React from 'react'

const Update_profile = () => {
  return (
    <>
    <div className='w-full items-start h-screen flex'>
    {/* left side containt */}
    <div className='h-full flex flex-col p-20 text-center'>

        <h1 className='text-blue-950 font-bold text-5xl p-5'> Welcome</h1>
        <h2 className='text-green-950 text-3xl p-5'>Sign In</h2>
        <h3 className='text-green-950 text-3xl p-5'>Sign In to Logo. to continue</h3>
        <div className='flex flex-col text-center justify-center'>
            <input type="email" placeholder='Email id' className='border p-3 m-3 rounded-lg border-black'/>
            <input type="password" placeholder='Password'  className='border p-3 m-3 rounded-lg border-black' />
           
        </div>
        
        <button className='bg-blue-500 rounded-lg m-5 text-3xl p-5'> Sign Up</button>
        
</div>
</div>
    
    </>
  )
}

export default Update_profile;