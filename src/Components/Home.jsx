import React from 'react'
import Sidebar from './Sidebar'
const Home = () => {
  return (
    <>
    <div className=' relative flex '>
    <Sidebar/>

    <div class="h-screen m-20">
   <div class="grid grid-cols-2 md:grid-cols-4 gap-20 pt-4 ">
      <div class="pt-2 pb-8 bg-cyan-300 p-4  rounded-3xl">
         <h2 class="font-semibold text-xl pt-4 text-gray-800">Feature 1</h2>
         <p class="text-gray-500 pt-2">This is some sample text for the purposes
            of this grid demo example. Try viewing on a mobile device and there will be two columns instead of four.
         </p>
      </div>
      <div class="pt-2 pb-8 bg-cyan-300 p-4  rounded-3xl">
         <h2 class="font-semibold text-xl pt-4 text-gray-800">Feature 2</h2>
         <p class="text-gray-500 pt-2">This is some sample text for the purposes
            of this grid demo example. Try viewing on a mobile device and there will be two columns instead of four.
         </p>
      </div>
      <div class="pt-2 pb-8 bg-cyan-300 p-4  rounded-3xl">
         <h2 class="m-auto font-semibold text-xl pt-4 text-gray-800">Feature 3</h2>
         <p class="text-gray-500 pt-2">This is some sample text for the purposes
            of this grid demo example. Try viewing on a mobile device and there will be two columns instead of four.
         </p>
      </div>
      <div class="pt-2 pb-8 bg-cyan-300 p-4  rounded-3xl">
         <h2 class="font-semibold text-xl pt-4 text-gray-800">Feature 4</h2>
         <p class="text-gray-500 pt-2">This is some sample text for the purposes
            of this grid demo example. Try viewing on a mobile device and there will be two columns instead of four.
         </p>
      </div>
        </div>
    </div>
    
    
    </div>
    
    </>
    

  )
}

export default Home