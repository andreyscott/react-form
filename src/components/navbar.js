import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//   'https://topship.africa/static/media/topship-blue-logo.60f5b066b88bb63ead71af792b89a08d.svg'
// }
const navigation = [
  { name: 'About', href: '/about', current: true },
  { name: 'FAQs', href: '/faq', current: false },
  
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full sticky top-0">
        <Disclosure as="nav" className=" bg-white border-b-2 shadow-sm">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-cente px-3">
                    <div className="flex-shrink-0 px-3">
                  <h1
                  className='text-3xl font-bold text-[#22428f]'
                  >topShip</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-lg text-white'
                                : 'text-black text-lg hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                 
                  </div>
                  <div className="hidden  md:flex ">
                  <div className="ml-4 flex  justify-center text-center items-center md:ml-6">
                  <button 
                    className='flex-shrink-0 text-lg bg-[#ffd708] text-[#22428f] font-medium py-2 m-3 flex text-center items-center justify-center   rounded-lg min-w-max h-9  w-36   focus:outline-none focus:text-gray-900'>
                        Sign In
                    </button>
                    <button 
                    className='flex-shrink-0 text-lg text-white bg-[#22428f] font-medium py-2 m-3 flex text-center items-center justify-center   rounded-lg min-w-max h-9  w-36   focus:outline-none focus:text-gray-900'>
                        Get Started
                    </button>
                    </div>
                    <div className="ml-4 flex items-center md:ml-6">
        

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-">
                            <span className="sr-only">Open user menu</span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button 
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-yellow-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? ' text-gray-600' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md flex justify-end text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pb-3 ">
                  <div className="flex items-center justify-end px-1">
                  <div className="ml-1 flex flex-col justify-start  items-end md:ml-6">
                  <button 
                  className='btn btny'>
                        Sign In
                    </button>
                    <button 
                    className='btn btnb'>
                        Get Started
                    </button>
                    </div>
                
                  </div>
                  <div className="mt-3 px-2 space-y-1">
          
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

     
   
      </div>
    </>
  )
}
