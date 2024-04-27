import React from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider'
import { Navigate } from 'react-router-dom';

const AddArt = () => {
    const { user } = useContext(AuthContext);
    const handleAddArt = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const imgurl = form.imgurl.value;
        const itemname = form.itemname.value;
        const subcat = form.subcat.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingtime = form.processingtime.value;
        const stock = form.stock.value;
        const description = form.description.value;

        const newArt = { name, email, imgurl, itemname, subcat, price, rating, customization, processingtime, stock, description };

        console.log(newArt);

        fetch('http://localhost:5000/newart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully added painting!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:mx-auto">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative border px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="lg:w-full mx-auto">
                            <form onSubmit={handleAddArt} className="">
                                <div className="flex">
                                    <h1 className="font-bold uppercase text-5xl text-center bg-gradient-to-r from-blue-400 to-blue-900 inline-block text-transparent bg-clip-text mx-auto">Add your Painting or Drawing</h1>
                                </div>
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <div className="relative mt-5">
                                        <input id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" value={user.displayName} />

                                        <label for="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email" value={user.email} />

                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="imgurl" name="imgurl" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Image URL" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Image URL</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="itemname" name="itemname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Item Name" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Item Name</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="subcat" name="subcat" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Sub-category Name" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Sub-category Name</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="price" name="price" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Price" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Price</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="rating" name="rating" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Rating" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Rating</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="customization" name="customization" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Customization(yes or no)" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Cusmotization(yes or no)</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="processingtime" name="processingtime" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Processing Time" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Processing Time</label>
                                    </div>
                                    <div className="relative mt-5">
                                        <input id="stock" name="stock" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Stock (In stock or Made to order)" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Stock (In stock or Made to order)</label>
                                    </div>
                                </div>
                                <div className="relative mt-5">
                                    <textarea id="description" name="description" type="text" className="peer placeholder-transparent h-32 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Short Description of your Item" />
                                    <label for="password" className="absolute left-0 -top-3.5 mb-2 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Short Description of your Item</label>
                                </div>
                                <div className="my-2 w-1/2 lg:w-1/4 mx-auto">
                                    <button className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-blue-400 to-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                        Add Item
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddArt