import React from 'react';

const EarnWithBike = () => {
    return (
        <div>
            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">Earn with Your Bike or Cycle</h1>
                    <p className='text-gray-700 mt-4'>Become a captain, rider or foodman on the highest earning platform!</p>
                </div>
                <div >
                    <section class="relative bg-white overflow-hidden">
                        {/* <img class="absolute left-0 top-0" src="flaro-assets/images/sign-in/gradient.svg" alt="" /> */}
                        <div class="relative z-10 flex flex-wrap -m-8">

                            <div class="w-full md:w-1/2 p-8">
                                <div class="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">
                                    <form class="md:max-w-lg mx-auto text-start">
                                        <label class="block mb-4">
                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">Full Name *</p>
                                            <input class="px-3 py-3 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300" id="signInInput1-1" type="text" placeholder="Enter Full Name" />
                                        </label>
                                        <label class="block mb-4">
                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">Mobile Number *</p>
                                            <input class="px-3 py-3 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300" id="signInInput1-1" type="text" placeholder="Mobile Number" />
                                        </label>
                                        <label class="block mb-4">
                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">Address</p>
                                            <input class="px-3 py-3 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300" id="signInInput1-1" type="text" placeholder="Enter Address" />
                                        </label>
                                        <label>
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                                    Gender
                                                </label>
                                                <div class="relative">
                                                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        <option>Male</option>
                                                        <option>Female</option>
                                                        <option>Others</option>
                                                       
                                                    </select>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                        </label>
                                        <div class=" -m-2 mb-4">
                                            <div class="w-auto p-2">
                                                <p class="mb-3 mt-2 text-gray-900 font-semibold leading-normal">Service you want to Provide</p>
                                                <div class="flex items-center justify-between">
                                                    <div>
                                                        <input class="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                                                        <label class="ml-2 text-sm text-gray-900 font-medium" for="default-checkbox">Food Delivery</label>
                                                    </div>
                                                    <div class="">
                                                        <input class="w-4 h-4" id="default-checkbox" type="checkbox" value="" />
                                                        <label class="ml-2 text-sm text-gray-900 font-medium" for="default-checkbox">Parcel Delivery</label>
                                                    </div>
                                                </div>
                                                <div className='mt-3 flex justify-between'>
                                                    <p className='font-bold'>Potential Earning Per Month*</p>
                                                    <p className='text-red-600 font-bold'>৳15,000</p>
                                                </div>

                                            </div>

                                        </div>
                                        <button class="mb-9 py-4 px-9 w-full text-white font-semibold border border-red-700 rounded-xl shadow-4xl focus:ring focus:ring-red-300 bg-red-600 hover:bg-red-700 transition ease-in-out duration-200" type="button">Next Step</button>


                                    </form>
                                </div>
                            </div>


                            <div class="w-full md:w-1/2 p-8">
                                <div class="container px-4 mx-auto">
                                    <div class="flex flex-wrap">
                                        <div class="w-full">
                                            <div class="md:max-w-lg mx-auto pt-16 md:pb-32 text-start">

                                                <h2 class="mb-3 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight">Got a bike or Cycle? </h2>
                                                <h3 class=" mb-5 text-xl font-bold font-heading leading-normal">These are the services you can be a part of!</h3>
                                                <ul class="md:max-w-xs">
                                                    <li class="mb-5 flex flex-wrap">
                                                        <svg class="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                                                        </svg>
                                                        <span class="flex-1 font-medium leading-relaxed">Food Man</span>
                                                    </li>
                                                    <li class="mb-5 flex flex-wrap">
                                                        <svg class="mr-2" width="25" height="26" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#4F46E5"></path>
                                                        </svg>
                                                        <span class="flex-1 font-medium leading-relaxed"> Parcel Delivery</span>
                                                    </li>
                                                </ul>
                                                <h2 class="mb-3 text-3xl md:text-4xl font-bold font-heading tracking-px-n leading-tight">Why Join the <span className='text-red-400'>CWC</span> Family?</h2>
                                                <h3 class=" mb-5  font-bold font-heading leading-normal">Being with Pathao means being on the highest earning platform! So, what are you waiting for? Join us to earn the most!</h3>
                                                <ul class="md:max-w-xs"></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </section>
        </div>
    );
};

export default EarnWithBike;