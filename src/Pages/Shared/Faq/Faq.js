import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="text-gray-800">
                <div className="container flex flex-col justify-center p-7 mx-auto md:p-8">
                    <h2 className="mb-7 text-2xl font-bold leading-none text-center sm:text-2xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col  sm:px-8 lg:px-12 xl:px-32  text-start ">
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-4 mb-4 px-4 bg-white bg-opacity-60  shadow-10xl text-2xl">আপনাদের অফিস কোথায় ?</summary>
                            <div className="px-4 pb-4">
                                <h3>Chittagong HeadOffice:</h3> <br />
                                <p>Shop No. 213, 1st Floor, K Plaza, Mirzarpul, Muradpur, Chattogram.</p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-7 mb-4 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">আমি কিভাবে পার্সেল বুকিং দিবো?</summary>
                            <div className="px-4 pb-8">
                                <p>আমরা বর্তমানে ম্যানুয়ালি বুকিং গ্রহণ করছি। <br />

                                    খুব শীঘ্রই আমাদের ওয়েবসাইটের মাধ্যমে আমরা সকল কার্যক্রম পরিচালনা করবো। আমাদের সাথেই থাকুন। <br />

                                    যোগাযোগ করুন: +৮৮০ ১৮৮৩-২৭৭৩৩৯
                                </p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl '>
                            <summary className="py-7 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">আপনারা কিভাবে টাকা পরিশোধ করেন ?</summary>
                            <div className="px-4 pb-4 ">
                                <p>আমরা প্রতিদিনের টাকা প্রতিদিন পরিশোধ করে দেই। আমরা বিকাশ/নগদ এর মাধ্যমে টাকা পাঠিয়ে থাকি। </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;