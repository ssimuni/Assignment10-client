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


const InfoCard = ({ info }) => {
    const { _id, image, sub_name, origins, key_elements } = info;
    console.log(info);
    return (
        <div>
            <Link to={`/subcat/${info.sub_name}`}>
                <Card className="rounded-3xl w-96 lg:max-w-[23rem] my-10 mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl">
                    </div>

                    <div className='relative shadow-lg border bg-white rounded-3xl pb-3'>

                        <div className='mx-auto justify-center'>
                            <CardHeader floated={false} color="" className='h-[300px]'>


                                <img
                                    src={image} className='lg:w-96 h-full'
                                    alt="ui/ux review check"
                                />

                                <div className="to-bg-black-10 absolute inset-0  w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

                            </CardHeader>
                            <CardBody >
                                <div >
                                    <div className="mb-3 text-center">
                                        <Typography variant="h5" color="blue-gray" className="font-bold">
                                            {sub_name}
                                        </Typography>

                                    </div>
                                    <Typography color="gray" className='font-semibold mb-2'>
                                        <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">

                                            <span className="xl:mt-0 ml-3">Origin: {origins} </span>
                                        </p>
                                    </Typography>


                                    <Typography color="gray" className='font-semibold mb-2'>
                                        <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">

                                            <span className="xl:mt-0 ml-3">Key Elements: {key_elements} </span>
                                        </p>
                                    </Typography>

                                </div>
                            </CardBody>

                        </div>

                    </div>

                </Card >
            </Link>
        </div>
    )
}

export default InfoCard