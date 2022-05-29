import React from 'react'

export const Sectiongrid = () => {
  return (
      <>

    <div className='flex flex-col justify-around px-2 md:flex-row' >
    <div className="flex flex-col">
<div className="max-w-xl bg-hero flex  card">
{/* text */}
<div
 className="card-text">
Trusted by Small and Medium Businesses Worldwide
</div>
{/* image */}
<div className="max-w-2xl md:w-1/2  ml-3    pb-16">
<div className="max-w-md flex justify-center  items-center">
<img
className='w-48 pt-4  h-48 mx-auto md:mx-0 md:w-auto md:h-auto'  
src='https://topship.africa/static/media/trusted-by-small-businesses.8c50a64e7378adf2eb15fe9a57c37bc7.svg'
// src='https://www.designfreelogoonline.com/wp-content/uploads/2016/05/000718-Free-Logo-creator-Free-bag-shopping-logo-maker-03.png'
alt='bag'
/>
</div>
</div>
</div>

{/* second card  */}
<div className="max-w-xl bg-hero flex flex-row-reverse bg-tyellow  card">
{/* text */}
<div
 className="card-text text-tblue ">
Reliable and friendly customer support representatives that care about you
</div>
{/* image */}
<div className="max-w-2xl md:w-1/2  ml-3    pb-16">
<div className="max-w-md flex justify-center  items-center">
<img
className='w-48 pt-4  h-48 mx-auto md:mx-0 md:w-auto md:h-auto'  
src='https://topship.africa/static/media/reliable-customer-support.fd64f29c0f3e2eca0b1df8a6abdbf1c3.svg'
alt='bag'
/>
</div>
</div>
</div>



    </div>

    <div className="max-w-xl bg-hero flex flex-col bg-tpurple  card">
{/* text */}
<div
 className="card-text  text-lg mb-2 h-1/3">
Over 5,000 shipments successfully delivered across multiple locations Worldwide
</div>
{/* image */}
<div className="max-w-2xl md:h-2/3  ml-3    pb-16">
<div className="max-w-md flex justify-center  items-center">
<img
className='w-96  h-96 mx-auto md:mx-0 md:w-auto'  
src='https://topship.africa/static/media/over-3000-successful-shipments.077af7bc39d17e00c712bcae7a6ceceb.svg'
alt='bag'
/>
</div>
</div>
</div>

    </div>
    </>

  )
}
