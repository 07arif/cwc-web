import React from 'react';
import banner from '../../assets/banner.png';

const About = () => {
    return (
        <div>
            <div>
                <img className="w-full grid lg:gap-8 lg:grid-cols-2 lg:items-center text-start" src={banner} alt="" />
            </div>
        </div>
    );
};

export default About;