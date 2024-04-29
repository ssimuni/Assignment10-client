import React from 'react'
import { Link } from 'react-router-dom';

const AllArtCraftTable = ({ painting }) => {

    const { _id, name, email, imgurl, itemname, subcat, price, rating, customization, processingtime, stock, description } = painting;

    return (
        <div>
            <tr className='border-none'>
                <td class="p-4 border-b border-blue-gray-50">
                    <div class="flex items-center gap-3">
                        <img src={imgurl} alt="Spotify" class="w-20 h-14" />
                        <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">{itemname}</p>
                    </div>
                </td>
                <td class="p-4 border-b ">
                    <p class="font-sans text-blue-gray-900 font-normal">{subcat}</p>
                </td>

                <td class="p-4 border-b ">
                    <div class="w-max">
                        <div class="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
                            <span class="">{rating}</span>
                        </div>
                    </div>
                </td>
                <td class="p-4 border-b mb-4">
                    <div class="flex items-center gap-3">

                        <div class="flex flex-col">
                            <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">{price}$</p>
                        </div>
                    </div>
                </td>
                <td class="p-4 border-b">
                    <Link className='btn bg-gradient-to-r from-blue-400 to-blue-900 text-white ml-auto flex mt-5' to={`/details/${_id}`}  >
                        View Details
                    </Link>
                </td>
            </tr>
        </div>
    )
}

export default AllArtCraftTable