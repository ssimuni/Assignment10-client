import React from 'react'

import Swal from 'sweetalert2';
import { FaAddressCard } from "react-icons/fa";
const Feedback = () => {

  const feedback = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank you for your feedback.'
    });
  }
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-white lg:mt-5 ">
        <div className="container mx-auto my-4 px-4 lg:px-40">
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">Give your feedback</h1>
            </div>
            <div className="relative mt-5">
              <input id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />

              <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
            </div>
            <div className=" mt-5">
              <div className="relative mt-5">
                <input
                  id="email"
                  name="email"

                  type="email"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
              </div>

              <div className="relative mt-5">
                <textarea id="description" name="description" type="text" className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Short Description of your Item" />
                <label for="password" className="absolute left-0 -top-3.5 mb-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your Feedback</label>
              </div>

            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button onClick={feedback} className="uppercase mt-5 text-sm font-bold tracking-wide bg-opacity-10 bg-black bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline">
                Submit
              </button>
            </div>
          </div>

          <div className="w-full mb-20 lg:mb-0 lg:-mt-64 lg:w-2/6 ml-auto rounded-2xl bg-[url('2.jpg')] bg-cover">
            <div className="p-6 sm:p-16 bg-opacity-50 rounded-2xl bg-black">

              <div class="text-white">
                <h1 class="font-bold uppercase text-4xl mb-4">Drop in our office</h1>
                <div class="flex mt-4 w-2/3 lg:w-">

                  <div>
                    <FaAddressCard className='w-6 h-6 mr-4' />
                  </div>
                  <p class="text-white">5555 Tailwind RD, Pleasant Grove, UT 73533</p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback