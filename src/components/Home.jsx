import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const paintings = useLoaderData();
    return (
        <div>data: {paintings.length}</div>
    )
}

export default Home