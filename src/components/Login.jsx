import React, { useState } from 'react';
import { useContext } from "react";
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password)

    signIn(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Successful!',
        });
        setEmail('');
        setPassword('');
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid email or password. Please try again.',
        });
      })
  }
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Google Login Successful!',
      });
      setEmail('');
      setPassword('');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: 'Failed to sign in with Google.',
      });
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'GitHub Login Successful!',
      });
      setEmail('');
      setPassword('');
      navigate(location?.state ? location.state : '/');
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'GitHub Login Failed',
        text: 'Failed to sign in with GitHub.',
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-white lg:mt-5 mt-20">
        <div className="container mx-auto my-4 px-4 lg:px-40">
          <form onSubmit={handleLogin} className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text">Login Here</h1>
            </div>
            <div className=" mt-5">
              <div className="relative mt-5">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
              </div>


              <div className="relative mt-5">
                <input
                  onChange={(e) => setPassword(e.target.value)} id="pass"
                  name="password"
                  value={password}
                  type="password"
                  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                  required />
                <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button className="uppercase mt-5 text-sm font-bold tracking-wide bg-opacity-10 bg-black bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                Login
              </button>
            </div>
          </form>

          <div className="w-full mb-20 lg:mb-0 lg:-mt-64 lg:w-2/6 ml-auto rounded-2xl bg-[url('2.jpg')] bg-cover">
            <div className="p-6 sm:p-16 bg-opacity-50 rounded-2xl bg-black">
              <div className="space-y-4">
                <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" />
                <h2 className="text-2xl text-white font-bold">Sign in to unlock the <br /> best of Tailus.</h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button onClick={handleGoogleLogin} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                  </div>

                </button>
                <button onClick={handleGithubLogin} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute left-0 w-5 text-white" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Github</span>
                  </div>
                </button>
              </div>

              <div className="mt-10 space-y-4 text-white text-center sm:-mb-8">
                <p className="text-xs">Don't have an account?<a href="/register" className="underline"> Register</a> here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login