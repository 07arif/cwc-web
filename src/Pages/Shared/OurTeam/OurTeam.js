import React from 'react';
import teamMember1 from '../../../assets/team/1.png'
import teamMember0 from '../../../assets/team/0.png'

const OurTeam = () => {
    return (
        <div>
            <section className="pt-6 py-6  text-gray-800">
                <div className="container flex flex-col items-center justify-center py-3 px-2 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-logo text-center sm:text-5xl">Meet Our Team</h1>
                    <p className="max-w-2xl text-center text-gray-600">At Carry With Care, we have a dedicated team of professionals who work tirelessly to provide our customers with fast and reliable delivery services. Our team members bring a wealth of experience and expertise to the table, and they are passionate about ensuring that our customers receive the highest level of service possible.</p>
                    <div className="flex flex-row flex-wrap justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember1} />
                            <p className="text-xl font-semibold leading-tight">Mozammel Mithu</p>
                            <p className="text-gray-600"> Founder </p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Meheraj Islam</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"src={teamMember0} />
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
                            <p className="text-xl font-semibold leading-tight">Md. Rakib</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight"> Alauddin Imon</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Ridwanul Karim</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight">Pranto Dhar </p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={teamMember0} />
                            <p className="text-xl font-semibold leading-tight"> Shahadat Hossen Tushar</p>
                            <p className="text-gray-600">Senior Rider</p>
                        </div>

                       
                    </div>
                </div>

            </section>
        </div>
    );
};

export default OurTeam;