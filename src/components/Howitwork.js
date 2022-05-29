import React from 'react'

export const Howitwork = () => {
  return (
    <section className=" bg-tbluedark  flex items-center">
        <div className=" w-full">
          <div className="flex flex-col mx-auto md:px-16 px-10  py-0 w-full">
            <h3 className='text-white pt-20 pb-12  text-5xl font-semibold text-left' >Here's how it works</h3>
            <div className="flex justify-between my-0 mx-auto w-full">
              <div className="text-white cursor-pointer w-full flex flex-col justify-center text-left py-8 ">
                <div
                  className="py-2"
                >
                  <h4 className='text-2xl py-5 font-semibold text-left'>Create Account</h4>
                  <p className='text-md pb-2 font-normal   ' >Log on to our web app and create your account</p>
                </div>
                <div
                  className="py-2"
                >
                  <h4 className='text-2xl py-4 font-semibold text-left '>Book</h4>
                  <ol className='py-2'>
                    <li className='text-sm py-3 font-normal text-left" '>1.  Select ‘Ship Now’ or ‘Book an Export’</li>
                    <li className='list'> 2. 
                      Select whether you want to drop-off at one of our hubs or
                      you want us to pick up from your location
                    </li>
                    <li className='list'>3.  Enter details of sender and receiver </li>
                    <li className='list'>4. Declare the item type and weight</li>
                  </ol>
                </div>
                <div
                >
                  <h4 className='header'>Make Payment</h4>
                  <p className='list'>
                    Pay and that’s it! Your package is on it’s way to the
                    receiver
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
