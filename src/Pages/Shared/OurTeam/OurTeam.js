import React from 'react';
import teamMember1 from '../../../assets/team/1.png'
import teamMember0 from '../../../assets/team/0.png'

const OurTeam = () => {
    return (
        <div>
            <section className="pt-6 py-6  text-gray-800">
                <div className="container flex flex-col items-center justify-center py-3 px-2 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-logo text-center sm:text-5xl">Meet Our Team</h1>
                    <p className="max-w-2xl text-center text-gray-600">ক্যারি উইথ কেয়ার এ আমাদের এমন একটি প্রফেশনাল ডেলিভারী টিম আছে, যারা সারাদিন প্রচন্ড পরিশ্রম করার মতো প্রস্তুত থাকে সবসময়। যাতে আপনার কাস্টমারকে খুব দ্রুত সার্ভিস দিতে পারে। যতো কষ্টই হোক না কেনো, পুরো টিম সবসময় আপনাদেরকে সঠিক সময়ে ডেলিভারী দেয়ার জন্যে অঙ্গীকারাবদ্ধ।</p>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember1} />
                        <p className="text-xl font-semibold leading-tight">Mozammel Mithu</p>
                        <p className="text-gray-600"> Founder </p>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Meheraj Islam</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Minhaz Uddin</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Joy Das</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight"> Md.Emon</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Ridwanul Karim</p>
                            <p className="text-gray-600"> Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">+
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Pranto Dhar</p>
                            <p className="text-gray-600"> Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Shahadat Hossen Tushar</p>
                            <p className="text-gray-600"> Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Md. Jahid Hossain</p>
                            <p className="text-gray-600"> Rider</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurTeam;