import React from 'react';
import {  FaArrowRight,FaMoneyBillAlt  } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Features = () => {
    return (
        <div>
            <section className=" text-gray-800">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-start">
                        <div>
                            <h3 className=" font-logo text-3xl lg:text-4xl leading-tight text-gray-900">Currently available in Chattogram</h3>
                            <p className="mt-3 text-lg text-gray-600">We are currently available in Dhaka and Chattogram. We are constantly expanding to more places! Parcel will cover more places soon.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">On Demand Delivery</h4>
                                        <p className="mt-2 text-gray-600">Left your charger or keys at home? Have it delivered to you on Pathao Parcel, without any hassle!</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">Trust Us</h4>
                                        <p className="mt-2 text-gray-600">You can trust us to deliver your most confidential documents to the desired place absolutely intact right on time!</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 text-gray-900">Emergency? Deliver via Parcel!</h4>
                                        <p className="mt-2 text-gray-600">With Pathao Parcel, you can get your item in the quickest time. Because your emergencies are Parcel’s biggest concern!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://img.freepik.com/free-vector/delivery-service-with-mask-concept_23-2148505104.jpg?w=740&t=st=1678765717~exp=1678766317~hmac=68da457b7cc2ac0268b51a259bc9c1dbce36db83f879ad9820ce14f138167a1a" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2 text-start">
                                <h3 className="font-logo  lg:text-4xl text-3xl text-gray-900">Deliver & Earn</h3>
                                {/* <p className="mt-3 text-lg text-gray-600">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p> */}
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-900">Work When You Want</h4>
                                            <p className="mt-2 text-gray-600">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-900">Less labor earn more within a short time</h4>
                                            <p className="mt-2 text-gray-600">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-red-600 text-gray-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 text-gray-900">Extra earning with bonus keeps you smiling</h4>
                                            <p className="mt-2 text-gray-600">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                                        </div>

                                    </div>
                                    <div className='flex flex-col items-center md:flex-row'>
                                    <Link
                                to='/earn-with-bike'
                                className='inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none'
                            >
                                < FaMoneyBillAlt />
                                <span className='ml-2 mr-3 lg:mr-6'> Deliver & Earn</span>
                                <FaArrowRight />
                            </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://img.freepik.com/free-vector/flat-design-cash-delivery_23-2148808917.jpg?w=740&t=st=1678766353~exp=1678766953~hmac=c15e446f9f4e49ffb40c10da9e01a3f09a9c15c877cf19fb9b2f6b728bb996b0" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;