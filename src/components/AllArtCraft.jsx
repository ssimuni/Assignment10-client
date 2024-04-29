import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AllArtCraftTable from './AllArtCraftTable'
const AllArtCraft = () => {
    const paintings = useLoaderData();
    return (
        <div>
            <div className='flex mx-auto justify-center '>
                <table className='border border-gray-400'>

                    <tbody className='border border-gray-400'>
                        {paintings.map((painting, index) => (
                            <tr key={painting._id} className={index % 2 === 0 ? 'left' : 'right'}>
                                <td>
                                    <AllArtCraftTable painting={painting} />
                                </td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default AllArtCraft