import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function EarnWithBike() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(
            'service_3g0b23t',
            'template_4ttcmji',
            form.current,
            '9aXXwPnnbuE42CEKd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.result(false);
        e.preventDefault();
    };



    return (
        <div>
            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-4xl font-semibold leading-none text-center">পার্সেল এর তথ্য দিন </h1>
                <p className='text-gray-700 mt-4'>পার্সেল পাঠান আমাদের মাধ্যমে আর থাকুন চিন্তা মুক্ত </p>
                <p className='text-gray-700 mt-4 font-bold'> <br /> আপনার পণ্যের বিস্তারিত তথ্য দিয়ে আমাদের সাহায্য করুন। </p>
            </div>
            <div >
                <section className="relative bg-white overflow-hidden">

                    <div className="relative z-10 flex flex-wrap m-8">

                        <div className="w-full  p-10">

                            <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">


                                <form ref={form} onSubmit={sendEmail} className="md:max-w-lg mx-auto text-start" >

                                    <label className="block mb-4">

                                        <p className="mb-2 text-gray-900 font-semibold leading-normal text-center">বিস্তারিত তথ্য দিন</p>

                                        <textarea name="message" id="signInInput1-1" cols="30" rows="10" className="px-3 py-3 w-full h-40 text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300"></textarea>

                                    </label>

                                    <button
                                        type='submit'
                                        className="mt-2 mb-9 py-4 px-9 w-full text-white font-semibold border border-red-700 rounded-xl shadow-4xl focus:ring focus:ring-red-300 bg-red-600 hover:bg-red-700 transition ease-in-out duration-200"
                                    >
                                        Send
                                    </button>



                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default EarnWithBike;