import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ArtCard from './ArtCard';

const Home = () => {
    const paintings = useLoaderData();
    return (
        <div>
            data: {paintings.length}
            <div className='flex justify-around'>
                <div className='lg:grid lg:grid-cols-2 gap-20'>
                    {
                        paintings.map(painting => <ArtCard
                            key={painting._id}
                            painting={painting}
                        ></ArtCard>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home