import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className=" text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col  sm:px-8 lg:px-12 xl:px-32  text-start ">
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-7 mb-4 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">আপনাদের অফিস কোথায় ?</summary>
                            <div className="px-4 pb-4">
                                <h3>Chittagong HeadOffice:</h3> <br />
                                <p>Shop No. 213, 1st Floor, K Plaza, Mirzarpul, Muradpur, Chattogram.</p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-7 mb-4 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">আমি কিভাবে পার্সেল বুকিং দিবো?</summary>
                            <div className="px-4 pb-8">
                                <p>ফেসবুকের মাধ্যমে বুকিং করতে চলে আসতে পারেন আমাদের ফেইসবুক পেইজে। আমরা হোয়াটস্যাপ এর মাধ্যমেও বুকিং নিয়ে থাকি। আপনাদের  সহযোগিতা করতে আমরা আছি 24/7 সর্বদা তৎপর।
                                    আমাদের সাথে যোগাযোগের নম্বর হল: 01883-277339</p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl '>
                            <summary className="py-7 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">আপনারা কিভাবে টাকা পরিশোধ করেন ?</summary>
                            <div className="px-4 pb-4 ">
                                <p>আমরা ক্লায়েন্টের প্রতিদিনের টাকা প্রতিদিন দিয়ে দেয়। আমরা মূলত বিকাশ, নগদ , রকেট এর মাধ্যমে প্রতিদিন টাকা পরিশোধ করে দেয়। আমরা এত নিশ্চিত করি যে ক্লায়েন্টকে ২৪ ঘন্টার মধ্যে পেমেন্ট করে দেয়ার। </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;