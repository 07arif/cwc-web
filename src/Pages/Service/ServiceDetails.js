import React from 'react';
import Food from '../../assets/Service/food.jpg'
import cake from '../../assets/cake.jpg';
import parcel from '../../assets/parcelD.jpg';
import surprise from '../../assets/surpriseD.jpg';


const ServiceDetails = () => {
    return (
        <div>
            <section className="py-4 px-2 my-7 lg:p-8  text-start text-gray-800">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={Food} alt="" className="h-80 object-fill bg-gray-500 rounded-lg" />
                        <div className="mx-8 flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50 ">

                            <h3 className="text-3xl font-bold">Food Delivery</h3>
                            <p className="my-6 text-gray-600">আমরা খুব দ্রুত এবং নির্ভরযোগ্যভাবে ফুড ডেলিভারি করি, আপনাদের যেকোনো ফুড আমরা দিচ্ছি খুব অল্প সময়ে ডেলিভারি। আমাদের রয়েছে দক্ষ ডেলিভারি রাইডারের দল। যারা যত দ্রুত সম্ভব এবং নিরাপদে আপনার খাবার আপনার কাছে পৌঁছে দিতে প্রতিশ্রুতিবদ্ধ।</p>
                        </div>
                    </div>
                    <div className="mx-8 flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={cake} alt="" className="h-80  object-fill bg-gray-500 " />
                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Cake & Dessert Delivery</h3>
                            <p className="my-6 text-gray-600">আমরা জন্মদিন, বিবাহ এবং অন্যান্য বিশেষ অনুষ্ঠানের জন্য কেক এবং ডেজার্ট ডেলিভারি করে থাকি। আমাদের ডেলিভারি রাইডের টিম নিশ্চিত করবে যে আপনার মিষ্টি খাবারগুলি নিখুঁত অবস্থায় পৌঁছেছে, আপনি এবং আপনার অতিথিরা উপভোগ করার জন্য প্রস্তুত।</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={parcel} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="mx-8 flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Parcel Delivery</h3>
                            <p className="my-6 text-gray-600">শুধু ফুড কিংবা কেক নয়, আমাদের মাধ্যমে আপনি বিভিন্ন ধরণের পার্সেলও ডেলিভারী করতে পারবেন। আর আমাদের প্রিমিয়াম সার্ভিসের সুবিধা থাকায়, পার্সেল ডেলিভারীর ক্ষেত্রেও সময়মতো ডেলিভারীর সুবিধাটি পেয়ে যাচ্ছেন। ফলে আপনাকে কিংবা কাস্টমারকে কখনোই অপেক্ষা করতে হবে না।</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://img.freepik.com/free-photo/close-up-client-package-delivery_23-2148890018.jpg?w=740&t=st=1679037805~exp=1679038405~hmac=b32792780d7c8a280128d59e0a5a588b9296fdcfb5b4f3c2a0415b806d19c2f9" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="mx-8 flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Official Document Delivery</h3>
                            <p className="my-6 text-gray-600">We understand the importance of timely and secure delivery of official documents. That's why we offer official document delivery services, ensuring your documents are delivered safely and on time.</p>
                        </div>
                    </div> */}
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">

                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Surprise Delivery</h3>
                            <p className="my-6 text-gray-600">আমাদের রয়েছে স্পেশাল সারপ্রাইজ ডেলিভারীর সুবিধা। আপনি আমাদের এই সার্ভিসটি ব্যবহারের মাধ্যমে খুব সহজেই ঠিক রাত ১২ টায় আপনার প্রিয় মানুষটিকে সারপ্রাইজ দিতে পারবেন কেক/ চকলেট/ ফুল / চিঠি দেয়ার মাধ্যমে।</p>
                        </div>
                        <img src={surprise} alt="" className="my-8 h-80 bg-gray-500 aspect-video" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;