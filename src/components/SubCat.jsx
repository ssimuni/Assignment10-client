import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArtCard from './ArtCard';

const Subcat = () => {

    const { sub_name } = useParams();
    const [arts, setArts] = useState([]);

    useEffect(() => {
        const fetchArts = async () => {
            try {
                const response = await fetch(`https://assignment10-server-ssimunis-projects.vercel.app/newart/subcategory/${sub_name}`);
                if (response.ok) {
                    const data = await response.json();
                    setArts(data);
                } else {
                    throw new Error('Failed to fetch arts');
                }
            } catch (error) {
                console.error('Error fetching arts:', error);
            }
        };

        fetchArts();
    }, [sub_name]);

    return (
        <div>
            <h1 className="font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 
            text-center my-10 text-transparent bg-clip-text">{sub_name}</h1>
            <div className="grid grid-cols-2 gap-4">
                {arts.map(painting => (
                    <ArtCard key={painting._id} painting={painting} />
                ))}
            </div>
        </div>
    );
};

export default Subcat;
