import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MyArtCard from './MyArtCard';
import { AuthContext } from '../providers/AuthProvider';


const ArtList = () => {
  const paintings = useLoaderData();
  const { user } = useContext(AuthContext);

  const [filterCustomization, setFilterCustomization] = useState('all');

  const userPaintings = paintings.filter(painting => {
    return (
      painting.name === user.displayName &&
      painting.email === user.email
    );
  });


  const filteredPaintings = userPaintings.filter(painting => {
    if (filterCustomization === 'all') {
      return true;
    } else {
      return painting.customization === filterCustomization;
    }
  });

  const handleFilterChange = event => {
    setFilterCustomization(event.target.value);
  };

  const customizationOptions = Array.from(
    new Set(userPaintings.map(painting => painting.customization))
  );

  return (
    <div>
      <h1 className='font-bold uppercase text-5xl bg-gradient-to-r from-blue-400 to-blue-900 
            text-center my-10 text-transparent bg-clip-text'>My Paintings and Drawings</h1>

      <div className='flex justify-center border rounded-lg w-64 h-12 mx-auto items-center my-10  bg-gradient-to-r from-blue-400 to-blue-900 text-white'>
        <label htmlFor='customizationFilter' className='mr-3 font-bold '>
          Filter by Customization:
        </label>
        <select
          id='customizationFilter'
          value={filterCustomization}
          onChange={handleFilterChange}
          className='text-black'
        >
          <option value='all'>All</option>
          {customizationOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>



      <div className='flex justify-around'>
        <div className='lg:grid lg:grid-cols-2 gap-20'>
          {
            filteredPaintings.map(painting => <MyArtCard
              key={painting._id}
              painting={painting}
            ></MyArtCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default ArtList