import './Home1.css';
import React from 'react';
import Lottie from 'lottie-react'
import animation from '../../assets/cwc.json'
import { Link } from 'react-router-dom';

// import Premium from '../../assets/premium-services.png';
// import Flexible from '../../assets/flexibility (1).png';




const Home1 = () => {
    return (
        <section className=" text-gray-800">
            <div className="container max-w-xl px-3 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-start">
                    <div>
                        <p className='lg:text-3xl text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-600 mb-3 to-pink '>স্বাগতম</p>

                        <h2 className='heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to- orange-400 mb-6 to-purple-700  text-left font-logo text-gray-900 text-2xl lg:text-4xl '>
                            CARRYwithCARE 2.0<br /> <span className='lg:text-2xl text-2xl font-extrabold text-transparent bg-clip-text bg-blue-400 mb-6 to-pink'>প্রিমিয়াম <span className='bg-clip-text bg-blue-400 mb-6 to-pink'>ডেলিভারি সার্ভিস</span></span>
                        </h2>

                        <p className="mt-3 text-lg text-gray-600">চট্টগ্রামে প্রথম প্রিমিয়াম হোম ডেলিভারি সার্ভিস। ঠিক সময়ে আপনার পণ্য সরবরাহ করার জন্য আমাদের একটি অভিজ্ঞ এবং পেশাদার দল রয়েছে!</p>

                        <div className='flex flex-col items-center md:flex-row mt-3' >
                           
                            {/* <Link
                                to='https://www.facebook.com/photo/?fbid=197842976448700&set=a.100766562823009'
                                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-cyan-500 hover:to-cyan-500 focus:shadow-outline focus:outline-none'
                            >

                                <img className="mx-2" src={Premium} alt="" /> Premium Service

                            </Link>
                            <Link
                                to='https://www.facebook.com/photo?fbid=198840479682283&set=a.100766562823009'
                                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-cyan-500 hover:to-cyan-500 focus:shadow-outline focus:outline-none'
                            >

                                <img className="mx-2" src={Flexible} alt="" />    Flexible Service

                            </Link> */}

                            <Link
                                to='https://www.facebook.com/CarrywithCare2.0'
                                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-cyan-500 hover:to-green-500 focus:shadow-outline focus:outline-none'
                            >

                                {/* <img className="mx-2" src={Flexible} alt="" />    */}
                                 Tap for Booking

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