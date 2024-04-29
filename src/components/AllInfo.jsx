import React from 'react'
import { useLoaderData } from 'react-router-dom'
import InfoCard from './InfoCard';

const AllInfo = () => {
    const infos = useLoaderData();
    console.log(infos);
    return (
        <div>
            <div className='my-10 lg:ml-20 ml-5 crt-card-table mx-auto justify-center place-content-center place-items-center'>
                <div className='lg:grid lg:grid-cols-2'>
                    {infos.map((info, index) => (
                        <tr key={info._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                            <td>
                                <InfoCard info={info} />
                            </td>
                        </tr>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllInfo