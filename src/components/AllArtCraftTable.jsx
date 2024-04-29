import React from 'react'
import { Link } from 'react-router-dom';

const AllArtCraftTable = ({ painting }) => {

    const { _id, name, email, imgurl, itemname, subcat, price, rating, customization, processingtime, stock, description } = painting;

    return (
        <div>
            <tr className='border-none'>
                <td class="p-4 border-b ">
                    <img src={imgurl} alt="Spotify" class="w-20 h-14" />
                </td>

                <td class="p-4 border-b ">
                    <p class=" font-sans text-blue-gray-900 font-bold">{itemname}</p>
                </td>
                <td class="p-4 border-b ">
                    <p class="font-sans text-blue-gray-900 font-normal">{subcat}</p>
                </td>


                <td class="p-4 border-b mb-4">

                    <p class="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">{price}$</p>

                </td>
                <td class="p-4 justify-end ml-auto border-b flex items-center">
                    <Link className="btn bg-gradient-to-r from-blue-400 to-blue-900 text-white flex mt-5 py-2 px-4 rounded-md" to={`/details/${_id}`}  >
                        View Details
                    </Link>
                </td>
            </tr>
        </div>
    )
}

export default AllArtCraftTable