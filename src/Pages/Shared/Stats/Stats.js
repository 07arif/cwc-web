import React from 'react';
import { Link } from 'react-router-dom';
import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.jpg';
import p3 from '../../../assets/p3.jpg';
import p4 from '../../../assets/p4.jpg';
import p5 from '../../../assets/p5.jpg';


const Stats = () => {
    return (
        <div>
            <section className="p-6 text-gray-800 mb-20">
                <div className="container p-4 mx-auto text-center">
                    <h2 className="text-4xl font-bold">Our Loyal Partners</h2>
                </div>
                <div className="container flex flex-wrap justify-center mx-auto text-red-300">

                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5">
                        <Link to='https://www.facebook.com/profile.php?id=100083308270630'>
                            <img src={p1} className="fill-current w-30 h-30 border-solid border-2 border-indigo-600 rounded-full" alt="" />
                            <p className='mt-4 text-black font-semibold'>Ready For Cooking</p>
                        </Link>
                    </div>


                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5">
                        <Link to='https://www.facebook.com/tanuzzorganickitchen'>
                            <img src={p2} className="fill-current w-30 h-30 border-solid border-2 border-indigo-600 rounded-full" alt="" />
                            <p className='mt-4 text-black font-semibold'>Sister's Gourmet Kitchen</p>

                        </Link>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5">
                        <Link to='https://www.facebook.com/purpledcookery'>
                            <img src={p3} className="fill-current w-30 h-30 border-solid border-2 border-indigo-600 rounded-full" alt="" />
                            <p className='mt-4 text-black font-semibold'>Purple's Kitchenette
                            </p>

                        </Link>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5">
                        <Link to='https://www.facebook.com/henna.by.meher.1'>
                            <img src={p4} className="fill-current w-30 h-30 border-solid border-2 border-indigo-600 rounded-full" alt="" />
                            <p className='mt-4 text-black font-semibold'>Meher's Henna</p>

                        </Link>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/5">
                        <Link to='https://www.facebook.com/Choco-savouries-104185018724516'>
                            <img src={p5} className="fill-current w-30 h-30 border-solid border-2 border-indigo-600 rounded-full" alt="" />
                            <p className='mt-4 text-black font-semibold'>Choco savouries
                            </p>

                        </Link>
                    </div>
                    {/* <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={p1} className="fill-current w-14 h-14" alt="" />

                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={p1} className="fill-current w-14 h-14" alt="" />

                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                        <img src={p1} className="fill-current w-14 h-14" alt="" />

                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Stats;