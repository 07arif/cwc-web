import React from 'react';
import Lottie from 'lottie-react'
import Food from '../../assets/fast-food.json'
import Gift from '../../assets/gift-boxes.json'
import cake from '../../assets/cake.json';
import Document from '../../assets/document-icon-lottie-animation.json'
import ServiceDetails from './ServiceDetails';


const Service = () => {
	return (
		<div>
			<section className="py-2 text-gray-900">
				<div className="container mx-auto sm:p-10">
					<div className="mb-16 space-y-4 text-center">
						<h1 className="text-3xl font-logo  leading-tight">আপনি কি পাঠাতে পারেন?</h1>
						<p className="px-4 sm:px-8 lg:px-24">আমরা আপনার চাহিদা মেটাতে বিস্তৃত পরিসরের ডেলিভারি পরিষেবা অফার করি। আপনি কি পার্সেল, একটি অফিসিয়াল ডকুমেন্টস, বা একটি স্পেশাল সারপ্রাইস পাঠাতে কাউকে খুঁজছেন?
							এখানে আমাদের কিছু গুরুত্বপূর্ণ পরিষেবা রয়েছে:</p>

					</div>
					<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-4 px-3 ">
						<div className="relative z-0 flex flex-col items-center p-8 border-2 hover:border-red-400   rounded-md">
							<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-gradient-to-r from-green-400 to-blue-500 text-gray-50">FOODS</span>
							<span><Lottie animationData={Food} loop={true} /></span>

						</div>
						<div className="relative z-0 flex flex-col items-center p-8 border-2 hover:border-red-400   rounded-md">
							<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-gradient-to-r from-green-400 to-blue-500 text-gray-50">Cake & Dessert</span>
							<span><Lottie animationData={cake} loop={true} /></span>
						</div>
						<div className="relative z-0 flex flex-col items-center p-8 border-2 hover:border-red-400   rounded-md">
							<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-gradient-to-r from-green-400 to-blue-500 text-gray-50">DOCUMENT</span>
							<span><Lottie animationData={Document} loop={true} /></span>
						</div>
						<div className="relative z-0 flex flex-col items-center p-8 border-2 hover:border-red-400   rounded-md">
							<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg bg-gradient-to-r from-green-400 to-blue-500 text-gray-50">GIFT</span>
							<span className='mt-3'><Lottie animationData={Gift} loop={true} /></span>

						</div>


					</div>
					<ServiceDetails></ServiceDetails>
				</div>
			</section>
		</div>
	);
};

export default Service; <h3>THis is Service</h3>