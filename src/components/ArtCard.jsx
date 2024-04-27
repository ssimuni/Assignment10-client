import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";



const ArtCard = ({ painting }) => {

    const { name, email, imgurl, itemname, subcat, price, rating, customization, processingtime, stock, description } = painting;

    return (
        <div>
            <Card className="rounded-3xl w-full lg:max-w-[26rem]">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                </div>

                <div className='relative shadow-lg border bg-white rounded-3xl'>
                    <CardHeader floated={false} color="blue-gray">
                        <span className="absolute right-0 top-0 z-10 mr-3 mt-3 inline-flex select-none rounded-lg bg-gradient-to-l from-blue-400 to-blue-900  px-3 py-2 text-sm font-bold text-white ">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {rating}</span>
                        <img
                            src={imgurl} className='lg:w-96 md:w-full md:h-[500px] lg:h-[300px]'
                            alt="ui/ux review check"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography variant="h5" color="blue-gray" className="font-medium">
                                {itemname}
                            </Typography>
                            <Typography
                                className="flex items-center font-bold"
                            >
                                {price}
                                <HiMiniCurrencyDollar />
                            </Typography>
                        </div>
                        <Typography color="gray" className='font-semibold mb-2'>
                            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                <IoColorPalette />
                                <span className="xl:mt-0 ml-3"> {subcat} </span>
                            </p>
                        </Typography>
                        <div className="group inline-flex flex-wrap items-center gap-3">

                            <span className="text-gray-900 mb-5">
                                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                    <IoTime />
                                    <span className="xl:mt-0 ml-3"> {processingtime} </span>
                                </p>
                                <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                    <MdOutlineLocalGroceryStore />
                                    <span className="xl:mt-0 ml-3"> {stock} </span>
                                </p>
                            </span>

                        </div>


                        <div className="mt-2 grid grid-cols-1 grid-rows-2 gap-4 border-b border-t border-gray-400 pb-3 pt-3">
                            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                <FaUserTie />
                                <span className="xl:mt-0 ml-3"> {name} </span>
                            </p>

                            <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                                <IoIosMail />
                                <span className="mt-0 ml-3">{email}</span>
                            </p>
                        </div>

                    </CardBody>
                    <CardFooter className="pt-3">
                        <Link className='btn bg-gradient-to-r from-blue-400 to-blue-900 text-white w-full' >
                            View Details
                        </Link>
                    </CardFooter>
                </div>

            </Card>
        </div>
    )
}

export default ArtCard