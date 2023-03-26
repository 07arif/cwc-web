import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";


const EarnWithBike = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "replace with service id",
                "replace with template id",
                form.current,
                "replace with user id"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div>
            <section className="">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center">পার্সেল এর তথ্য দিন </h1>
                    <p className='text-gray-700 mt-4'>পার্সেল পাঠান আমাদের মাধ্যমে আর থাকুন চিন্তা মুক্ত </p>
                    <p className='text-gray-700 mt-4 font-bold'> <br /> আপনার পণ্যের বিস্তারিত তথ্য দিয়ে আমাদের সাহায্য করুন।
                        নিচের উল্লেখিত তথ্য দিন : <br />
                        ১. আপনার নাম ,<br />
                        ২. আপনার মোবাইল নম্বর ,<br />
                        ৩. এখানে বিস্তারিত লিখবেন<br />
                        ( পার্সেল গ্রহণকারির নাম , ঠিকানা , মোবাইল নম্বর, পার্সেল কি যাবে, পার্সেল
                        এর ওজন কত  )<br />
                        <br />
                        এইসব তথ্য দেয়ার সাথে সাথে আমাদের পক্ষ থেকে আপনার সাথে যোগাযোগ করা হবে.</p>
                </div>
                <div >
                    <section class="relative bg-white overflow-hidden">
                        <div class="relative z-10 flex flex-wrap -m-8">

                            <div class="w-full  p-10">
                                <div class="p-4 py-16 flex flex-col justify-center bg-blueGray-100 h-full">

                                    {/* form section start  */}

                                    <form ref={form} onSubmit={sendEmail} class="md:max-w-lg mx-auto text-start">

                                        <label class="block mb-4">

                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">আপনার নাম</p>
                                            <input class="px-3 py-3 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300"
                                                id="signInInput1-1"
                                                type="text"
                                                placeholder="আপনার নাম লিখুন"
                                            />

                                        </label>
                                        <label class="block mb-4">
                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">আপনার মোবাইল নম্বর</p>
                                            <input class="px-3 py-3 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300"
                                                id="signInInput1-1"
                                                type="email"

                                                placeholder="+880 1*********" />
                                        </label>
                                        <label class="block mb-4">
                                            <p class="mb-2 text-gray-900 font-semibold leading-normal">পণ্যের বিস্তারিত তথ্য দিন</p>
                                            <input class="px-3 py-3 w-80 h-80 text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-red-300"
                                                id="signInInput1-1"
                                                type="text"

                                            />
                                        </label>

                                        {/* <button to
                                            class="mt-2 mb-9 py-4 px-9 w-full text-white font-semibold border border-red-700 rounded-xl shadow-4xl focus:ring focus:ring-red-300 bg-red-600 hover:bg-red-700 transition ease-in-out duration-200"
                                            type='submit'>
                                            Send Request
                                        </button> */}
                                        <Link class="mt-2 mb-9 py-4 px-9 w-full text-white font-semibold border border-red-700 rounded-xl shadow-4xl focus:ring focus:ring-red-300 bg-red-600 hover:bg-red-700 transition ease-in-out duration-200" to='https://www.facebook.com/CTGAlauddinImon'>Send</Link>


                                    </form>

                                    {/* form section end  */}


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