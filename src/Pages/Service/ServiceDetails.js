import React from 'react';
import Food from '../../assets/Service/food.jpg'
import cake from '../../assets/cake.jpg';

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
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={cake} alt="" className="h-80  object-fill bg-gray-500 " />
                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Cake & Dessert Delivery</h3>
                            <p className="my-6 text-gray-600">আমরা জন্মদিন, বিবাহ এবং অন্যান্য বিশেষ অনুষ্ঠানের জন্য কেক এবং ডেজার্ট ডেলিভারি করে থাকি। আমাদের ডেলিভারি রাইডের টিম নিশ্চিত করবে যে আপনার মিষ্টি খাবারগুলি নিখুঁত অবস্থায় পৌঁছেছে, আপনি এবং আপনার অতিথিরা উপভোগ করার জন্য প্রস্তুত।</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://img.freepik.com/free-photo/cheerful-woman-receiving-parcel-from-courier-smiling-happy-deliveryman-with-yellow-thermal-backpack-wearing-red-uniform-talking-with-female-customer-home-delivery-service-post-concept_74855-11612.jpg?w=740&t=st=1679037812~exp=1679038412~hmac=2362e1eb714eb977345a09a0d6e61d706bf400a0285cd05be04ddb10c1faae7d" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Parcel Delivery</h3>
                            <p className="my-6 text-gray-600">Need to send a parcel? We offer parcel delivery services for both personal and business needs. We make sure your package is handled with care and delivered on time to its intended destination.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://img.freepik.com/free-photo/close-up-client-package-delivery_23-2148890018.jpg?w=740&t=st=1679037805~exp=1679038405~hmac=b32792780d7c8a280128d59e0a5a588b9296fdcfb5b4f3c2a0415b806d19c2f9" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Official Document Delivery</h3>
                            <p className="my-6 text-gray-600">We understand the importance of timely and secure delivery of official documents. That's why we offer official document delivery services, ensuring your documents are delivered safely and on time.</p>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://img.freepik.com/free-photo/young-woman-pointing-heart-shaped-gift-box_144627-62567.jpg?w=740&t=st=1679037914~exp=1679038514~hmac=c2c276bec5c5ad4650d9666c2f543f59ee762762f7a28715e4a572697b5c6838" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 py-6 px-2 bg-gray-50">

                            <h3 className="text-3xl font-bold">Surprise Delivery</h3>
                            <p className="my-6 text-gray-600">Looking to surprise someone special? We offer surprise delivery services, perfect for birthdays, anniversaries, or just because. Let us help you make someone's day with a special delivery of flowers, gifts, or other special items.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;