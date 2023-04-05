import React from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/cwc.json'
import { FaMoneyBillAlt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Home1 = () => {
    return (
        <section className=" text-gray-800">
            <div className="container max-w-xl px-3 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-start">
                    <div>
                        <p className='lg:text-3xl text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-600 mb-3 to-pink '>স্বাগতম</p>

                        <h2 className=' font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6 to-purple-700  text-left font-logo text-gray-900 text-2xl lg:text-4xl '>
                            CARRYwithCARE 2.0<br /> <span className='lg:text-2xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-6 to-pink'>প্রিমিয়াম <span className='bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6 to-pink'>ডেলিভারি সার্ভিস</span></span>
                        </h2>

                        <p className="mt-3 text-lg text-gray-600">চট্টগ্রামে প্রথম প্রিমিয়াম হোম ডেলিভারি সার্ভিস। ঠিক সময়ে আপনার পণ্য সরবরাহ করার জন্য আমাদের একটি অভিজ্ঞ এবং পেশাদার দল রয়েছে!</p>

                        <div className='flex flex-col items-center md:flex-row mt-3' >
                            <Link
                                to='/bookYourParcel'
                                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-cyan-500 focus:shadow-outline focus:outline-none'
                            >
                                < FaMoneyBillAlt />
                                <span className='ml-2 mr-3 lg:mr-6'>Deliver your Parcel</span>
                                <FaArrowRight />
                            </Link>

                        </div>
                    </div>

                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                        <Lottie animationData={animation} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home1;