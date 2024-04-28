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
import { Link } from 'react-router-dom';
import { FaUserTie } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { HiMiniCurrencyDollar } from "react-icons/hi2";



const ArtCard = ({ painting }) => {

    const { _id, name, email, imgurl, itemname, subcat, price, rating, customization, processingtime, stock, description } = painting;

    return (
        <div>
            <tr className='flex items-center'>
                <td class="p-4 ">
                    <img src={imgurl} alt="" class="  w-20 h-14 p-1" />
                </td>
                <td>
                    <p class="text-blue-gray-900 font-bold">{itemname}</p>
                </td>
                <td class="p-4">
                    <Typography
                        className="flex items-center font-bold"
                    >
                        <HiMiniCurrencyDollar />
                        {price}

                    </Typography>
                </td>
                <td class="p-4 items-center  flex">
                    <IoColorPalette />
                    <span className="xl:mt-0"> {subcat} </span>
                </td>
                <td class="p-4 flex items-center">
                    <span className="right-0 top-0 z-10 mr-3  inline-flex font-bold ">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className=" h-5 w-5 "
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {rating}
                    </span>
                </td>

                <td class="p-4  ">
                    <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                        <FaUserTie />
                        <span className="xl:mt-0 ml-3"> {name} </span>
                    </p>
                </td>
                <td class="p-4  ">
                    <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                        <IoIosMail />
                        <span className="mt-0 ml-3">{email}</span>
                    </p>
                </td>
                <td>
                    <Link className="text-sm font-bold tracking-wide bg-opacity-10 bg-black bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" to={`/details/${_id}`}>
                        View Details
                    </Link>
                </td>
            </tr>
        </div>
    )
}

export default ArtCard