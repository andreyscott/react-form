import React from 'react'
//import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
// import { FaGraduationCap } from 'react-icons/fa';
// import {FiRadio} from 'react-icons/fi';
// import { BsQuestionCircleFill, } from "react-icons/bs";
// import { IoMdBriefcase} from "react-icons/io";
import icon from '../assests/icon.png';
import check from '../assests/check.png';
import travel from '../assests/travel.png';

const features = [
  {
    name: 'Local & Inter-state Deliveries',
    description:
      'Inter-state delivery within Nigeria and same-day delivery within Lagos, Ibadan, and Abuja.',
    icon: icon,
  },
  {
    name: 'Exports',
    description:
    'International shipping from Nigeria to over 200+ cities worldwide',

    icon: check,
  },
  {
    name: 'Importst',
    description:
    ' Shop from UK & US stores and ship to Nigeria. Express &Cargo delivery options available.',
        icon: travel,
  },
//   {
//     name: 'Mobile notifications',
//     description:
//     'Lorem ipsum, edit perferendis suscipit iste dolor cupiditate blanditiis ratione.',
//     icon: FiRadio,
//   },
]

function ServiceSection() {
  return (
    <div>
        <div className="overflow-hidden  pt-7 p-2  flex flex-col">
  <div className="w-full p-12 text-center    lg:text-left">
    <div className="max-w-xl mx-auto lg:ml-0 ">
    <h1 className="font-bebas-neue my-4 text-4xl sm:text-5xl text-left font-bold block text-tblue leading-none dark:text-white pb-2"> 
       Our Services
            </h1>

    </div>
  </div>

  <div className="items-center justify-center w-full  lg:h-auto">
    <dl className="flex flex-col sm:flex-row text-center md:ml-0 content-center justify-around items-center overflow-hidden">
            {features.map((feature) => (
              <div key={feature.name} className="flex pl-3 flex-col border-white border-3 rounded-xl md:w-80 xl:w-auto  w-80  h-fit py-5 pr-2 shadow-2xl">
                <dt>
                  <div className="flex flex-col   items-center justify-center justify-self-center h-12 w-12 rounded-3xl text-white">
                    <div className="h-14 w-14 text-yellow-100" aria-hidden="true">
                        <img src={feature.icon} alt="icon" />
                        </div> 
                  </div>
                </dt>
                <p className="text-lg pt-5 pb-3 leading-6 text-left font-bold text-gray-900">{feature.name}</p>

                <dd className=" mt-2 text-base bottom-0 pb-3 text-left text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
  
</div>
    </div>
  )
}

export default ServiceSection