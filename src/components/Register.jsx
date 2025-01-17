import React from 'react'
import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { createUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(email, password, name)

    setRegisterError('');

    if (password.length < 6) {
      setRegisterError('Password must be at least 6 character long.');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setRegisterError('Password must contain at least one uppercase letter.');
      return;
    }

    if (!/[a-z]/.test(password)) {
      setRegisterError('Password must contain at least one lowercase letter.');
      return;
    }

    if (password)
      await createUser(email, password, name, photo)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Registration Successful!',
          });
          logOut();
          navigate('/login');
        })
        .catch(error => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: error.message,
          });
        })
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-white lg:mt-5 mt-20">
        <div className="container mx-auto my-4 px-4 lg:px-40">
          <form onSubmit={handleRegister} className="left w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">Register Here</h1>
            </div>
            <div className=" mt-5">
              <div className="relative mt-5">
                <input id="name"
                  name="name"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none       focus:borer-rose-600"
                  placeholder="Name"
                  required />

                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
              </div>
              <div className="relative mt-5">
                <input id="email"
                  name="email"
                  type="email"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
              </div>
              <div className="relative mt-5">
                <input id="photo"
                  name="photo"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Profile Picture UR"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Profile Picture URL</label>
              </div>
              <div className="relative mt-5">
                <input id="pass"
                  name="password"
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              {
                registerError && <p className="text-red-600">{registerError}</p>
              }
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase mt-5 text-sm font-bold tracking-wide bg-opacity-10 bg-black bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100 p-3 rounded-lg w-full 
                    focus:outline-none focus:shadow-outline">
                Register
              </button>
            </div>
          </form>

          <div className="right w-full mb-20 lg:mb-0 lg:-mt-64 lg:w-2/6 ml-auto rounded-2xl bg-[url('/2.jpg')] bg-cover">
            <div className="p-6 sm:p-16 bg-opacity-50 rounded-2xl bg-black">
              <div class=" text-white rounded shadow-lg">
                <div class="">
                  <div class="flex items-end">
                    <select class="text-sm font-medium focus:outline-none -ml-1 bg-transparent" name="" id="">
                      <option value="">Product (Billed Monthly)</option>
                      <option value="">Product (Billed Annually)</option>
                    </select>
                    <span class="text-sm ml-auto font-semibold">$20</span>
                    <span class="text-xs  mb-px">/mo</span>
                  </div>
                  <span class="text-xs  mt-2">Save 20% with annual billing</span>
                </div>

                <div class="px-8 mt-4 border-t pt-4">
                  <div class="flex items-end justify-between">
                    <span class="font-semibold">Today you pay (AUD)</span>
                    <span class="font-semibold">$0</span>
                  </div>
                  <span class="text-xs  mt-2">After 1 month free: $22/mo.</span>
                </div>
                <div class="flex items-center px-8 mt-8">
                  <input id="termsConditions" type="checkbox" required />
                  <label class="text-xs  ml-2" for="termsConditions" />I agree to the terms and conditions.
                </div>

              </div>
              <div className="space-y-4 text-white text-center sm:-mb-8">
                <p className="text-xs mt-5">Already have an account?<a href="/login" className="underline"> Login</a> here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register