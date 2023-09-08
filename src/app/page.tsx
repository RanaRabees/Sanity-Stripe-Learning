/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react/jsx-key */
'use client'
import React from 'react'
import { Image as IImage } from 'sanity';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
// import getProductData from './getProductData';

import { client } from "./lib/sanityClient"
import StripeCheckOutButton from './Checkout';

const getProductData = async () => {
    const getProductData = await client.fetch(`*[_type== 'product']{
      title,
      description,
      price,
      image
    }`);
    console.log("Data Fetched");
    return getProductData
}

interface ProductInterface {
    title: string;
    description: string;
    price: number;
    image: IImage;
}

export default async function Home() {
    const data: ProductInterface[] = await getProductData()
    // const data = await getProductData()
    console.log(data)
    return (
        <>
            <center>
                <h1 className='text-4xl'>Welcome!!! <br /><br />To Mens Store 😎! <br /> <br /> Buy Any Goods For Mens <br /><br /> 👴👨👮‍♂️💂‍♂️👷‍♂️👳‍♂️👲👱‍♂️👨‍⚕️👨‍🎓👨‍🏫👨‍⚖️👨‍🌾👨‍🍳👨‍🔧👨‍🏭👨‍💼👨‍🔬👨‍💻👨‍🎤👨‍🎨👨‍🚀👨‍✈️👨‍🚒🙍‍♂️🙎‍♂️ </h1>
                <br /><br />
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">🕵️‍♂️</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Any Mens Products..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <br /><br />
            </center>

            <div className="text-center p-10 grid lg:grid-cols-[repeat(3,auto)] md:grid-cols-[repeat(2,auto)] grid-cols-[repeat(1,auto)] justify-center gap-x-10">
                {data.map((data: any) => (
                    <>
                        <div>
                            <Image width={400} height={400} className='h-[400px] w-[400px] object-fill bg-green-200'
                                src={urlForImage(data.image).url()} alt={data.title} />
                            <br /><br />
                            <h1 className='text-xl text-red-600 font-extrabold'>{data.title}</h1><br />
                            <h1 className='text-xl text-red-600 font-extrabold'>{data.description}</h1><br />
                            <h1 className='text-xl text-red-600 font-extrabold'>PKR: {data.price}</h1><br />
                            {/* <button className='text-xl border py-2 px-4 rounded bg-pink-600 text-black font-extrabold'>Add To Cart</button> */}
                            <StripeCheckOutButton />
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}
