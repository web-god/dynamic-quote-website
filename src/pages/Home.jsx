import React from 'react'

const Home = () => {

  
  

  return (
    <>
    
     <div className='w-screen h-screen flex justify-center  '>
        <img src="images/bg3.jpg" alt="" className='w-full h-full '/>
        <div className='w-4/5 h-4/5 bg-black absolute top-28  opacity-60  '>
            <div className='flex justify-between'>

            <div className='text-white text-9xl  px-32 py-10 '>''</div>
            <img src="images/twitter.jpg" alt="" id="tweetMe"  className="w-32 h-32"/>
            </div>
            <div  id="quotes" className='text-white text-9xl  px-32 text-justify '>I have lowest K/D but still I think I'm pro</div>
            <div className='flex py-16 justify-end px-8'>
            
            <div  className='text-white text-6xl pl-32 pr-8  pt-28'>By</div>
            
            <div  id="author"  className='text-white text-6xl pt-28'>Piyush Chaubey</div>
           
            </div>
            <div id="newQ" className=' bg-gray-900 w-full h-24 text-white text-6xl text-center py-2 '>New Quote</div>
            
        </div>
     </div>
    </>
   
  )
  
}

export default Home