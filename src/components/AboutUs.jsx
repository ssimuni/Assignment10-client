import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <div>

            <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
                <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-8/12 lg:max-w-full lg:absolute xl:px-0">
                    <svg
                        className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                        viewBox="0 0 100 100"
                        fill="currentColor"
                        preserveAspectRatio="none slice"
                    >
                        <path d="M50 0H100L50 100H0L50 0Z" />
                    </svg>
                    <img
                        className=" object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                        src="2.jpg"
                        alt=""
                    />
                </div>
                <div className="left relative flex flex-col items-start w-full max-w-xl px-4 mx-auto ml-8 md:px-0 lg:px-8 lg:max-w-screen-xl">
                    <div className="lg:my-20 lg:max-w-lg lg:pr-5">
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none uppercase bg-gradient-to-r from-blue-400 to-blue-900 
 my-10 text-transparent bg-clip-text">
                            Everything you
                            <br className="hidden md:block" />
                            can imagine{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                is real
                            </span>
                        </h2>
                        <p className="pr-10 mb-5 text-base text-gray-700 md:text-lg">
                            Welcome to ArtFlick, where creativity comes to life through vibrant colors and imaginative strokes. Dive into a world of artistic expression with our curated collection of paintings and drawings, showcasing a diverse range of styles and subjects.
                        </p>
                        <div className="flex items-center">
                            <button className='btn bg-gradient-to-r from-blue-400 to-blue-900 text-white mr-3' >
                                View Details
                            </button>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" my-10 text-center">
                <h3 className="font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 
            text-center my-10 text-transparent bg-clip-text">Meet our team</h3>
                <p className="  max-w-2xl mx-auto dark:text-gray-600 ">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
            </div>
            <div className='flex justify-around'>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 text-blue-800">

                    <Card className="even-row rounded-3xl w-full lg:max-w-[26rem]">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                        </div>
                        <div className='relative shadow-lg border bg-white rounded-3xl'>
                            <CardBody>
                                <div class="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                    <div class="w-full md:w-2/5 h-70">
                                        <img class="object-center object-cover w-full h-full" src="w1.jpg" alt="photo" />
                                    </div>
                                    <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                                        <p class="text-xl text-gray-800 font-bold">Lucas Bennett</p>
                                        <p class="text-base text-gray-800 font-normal">Artist</p>
                                        <p class="text-base leading-relaxed text-gray-500 font-normal">Lucas Bennett is a contemporary artist known for his vibrant abstract paintings. Bennett's art frequently explores themes of urban life and human emotion, earning him recognition in the modern art scene worldwide.</p>
                                        <div class="flex justify-start space-x-2">
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaFacebook className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaInstagram className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaTwitter className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaGithub className='w-6 h-6' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>

                    </Card>

                    <Card className="odd-row rounded-3xl w-full lg:max-w-[26rem]">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                        </div>
                        <div className='relative shadow-lg border bg-white rounded-3xl'>
                            <CardBody>
                                <div class="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                    <div class="w-full md:w-2/5 h-70">
                                        <img class="object-center object-cover w-full h-full" src="w2.jpg" alt="photo" />
                                    </div>
                                    <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                                        <p class="text-xl text-gray-800 font-bold">Gabriel Martinez</p>
                                        <p class="text-base text-gray-800 font-normal">Portrait Painter</p>
                                        <p class="text-base leading-relaxed text-gray-500 font-normal">Gabriel Martinez is a skilled portrait painter recognized for his classical style and meticulous attention to detail. Hailing from Madrid trained under renowned masters of his subjects through his lifelike portraits. </p>
                                        <div class="flex justify-start space-x-2">
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaFacebook className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaInstagram className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaTwitter className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaGithub className='w-6 h-6' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>

                    </Card>

                    <Card className="even-row rounded-3xl w-full lg:max-w-[26rem]">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                        </div>
                        <div className='relative shadow-lg border bg-white rounded-3xl'>
                            <CardBody>
                                <div class="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                    <div class="w-full md:w-2/5 h-70">
                                        <img class="object-center object-cover w-full h-full" src="w3.jpg" alt="photo" />
                                    </div>
                                    <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                                        <p class="text-xl text-gray-800 font-bold">Adam Nguyen</p>
                                        <p class="text-base text-gray-800 font-normal">Illustrator</p>
                                        <p class="text-base leading-relaxed text-gray-500 font-normal">Adam Nguyen is an emerging illustrator and graphic artist renowned for his imaginative illustrations and comic book art. Based in Los Angeles, Nguyen's unique style blends influences from Asian pop culture.</p>
                                        <div class="flex justify-start space-x-2">
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaFacebook className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaInstagram className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaTwitter className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaGithub className='w-6 h-6' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>

                    </Card>

                    <Card className="odd-row rounded-3xl w-full lg:max-w-[26rem]">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                        </div>
                        <div className='relative shadow-lg border bg-white rounded-3xl'>
                            <CardBody>
                                <div class="w-full rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                                    <div class="w-full md:w-2/5 h-70">
                                        <img class="object-center object-cover w-full h-full" src="w4.jpg" alt="photo" />
                                    </div>
                                    <div class="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                                        <p class="text-xl text-gray-800 font-bold">Oliver Taylor</p>
                                        <p class="text-base text-gray-800 font-normal">landscape painter</p>
                                        <p class="text-base leading-relaxed text-gray-500 font-normal">Oliver Taylor is a landscape painter celebrated for his serene and atmospheric interpretations of nature. Residing in the English countryside, Taylor draws inspiration from the landscapes around him.</p>
                                        <div class="flex justify-start space-x-2">
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaFacebook className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaInstagram className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaTwitter className='w-6 h-6' />
                                            </a>
                                            <a href="#" class="text-gray-900 hover:text-gray-600">
                                                <FaGithub className='w-6 h-6' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>

                    </Card>

                </div>
            </div>
        </div>
    )
}

export default AboutUs