import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className=" text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col  sm:px-8 lg:px-12 xl:px-32  text-start ">
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-7 mb-4 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">How do I contact the deliverer?</summary>
                            <div className="px-4 pb-4">
                                <p>After accepting your request, you will see the deliverers' name, picture and user rating appear on your phone screen, along with a phone icon. Press the phone icon beside the contact number to call the deliverer.</p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl mb-4'>
                            <summary className="py-7 mb-4 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">How do I request for a delivery?</summary>
                            <div className="px-4 pb-4">
                                <p>To request a ride, you will have to select Pathao Parcels from the vertical button at the top of the screen. Then, you will have to select your pickup and drop-off location, fill in detailed information about the receiver of the item and select any one of the predefined product category which is closest to the item you are sending. Then you can review information before you request for a delivery pickup, after which Pathao Parcels can find the nearest deliverer around you and send them your way.</p>
                            </div>
                        </details>
                        <details className='border-2 border-red-300 rounded-2xl shadow-10xl '>
                            <summary className="py-7 px-8 bg-white bg-opacity-60  shadow-10xl text-2xl">How do I know how much to pay? </summary>
                            <div className="px-4 pb-4 ">
                                <p>After you choose your pick-up, drop-off location, receiver information and product category, your phone screen will display Estimated Distance Travelled and the corresponding total payable fare that you have to pay the deliverer while handing them your item during pickup.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;