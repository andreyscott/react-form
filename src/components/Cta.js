import React from 'react'
// import man from 'logo512.png';

function Cta() {
  return (
  
<div class="dark:bg-gray-800 bg-syellowLight flex relative z-20 items-center overflow-hidden">
    <div class="container mx-auto  flex flex-col items-center md:flex-row md:justify-between relative py-14">
        <div class="sm:w-2/4 lg:w-2/5 flex flex-col md:px-6 pb-4 relative z-20">
        <div class="flex flex-col items-center">
            <p class="justify-center text-center xl:text-3xl text-3xl h-24 xl:h-28 xl:py-3 w-96  font-black block  dark:text-white font-pop pb-2 text-sblue">
     
            Send and Receive items from your doorstep to any location in the world
           
            </p>   
            {/* dark:text-white */}
            <p class="justify-center text-center xl:text-xl text-md h-24  px-2  font-black block  dark:text-white font-pop pb-2 text-gray-800">
          
            Welcome to the Soft life! Use Topship to send items to your customers, friends, and family in Lagos, Abuja, London, Ghana, New York, Dubai and 200+ more cities. Say goodbye to stressful shipping forever!
            </p>
            </div>

            <div class="inline-flex justify-center items-center justify-items-center mt-8 overflow-hidden">
                <a href="#" class="button bg-sblue border-2 border-transparent p-1 text-white text-md mr-4 hover:bg-syellow focus:outline-none focus:shadow-outline">
                 learn More
                </a>
                <a href="#" class="button bg-transparent border-2 border-syellow text-sblue font-semibold dark:text-white hover:bg-sblue hover:text-white hover:border-transparent text-md">
                    Sign in    
                </a>
            </div>
        </div>
        <div class="sm:block sm:w-2/4 lg:w-3/5 pt-2 justify-center h-fit items-center relative">
            <img 
                        src='https://www.designfreelogoonline.com/wp-content/uploads/2016/05/000718-Free-Logo-creator-Free-bag-shopping-logo-maker-03.png'
    alt='bag'
             class="max-w-xs md:max-w-sm m-auto"/>
        </div>
    </div>
</div>

  )
}

export default Cta