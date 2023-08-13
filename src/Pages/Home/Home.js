import React from 'react'
import Service from '../Service/Service';
import Features from '../Shared/Features/Features';
import Faq from '../Shared/Faq/Faq';
import OurTeam from '../Shared/OurTeam/OurTeam';
import ContactUs from '../Shared/ContactUs/ContactUs';
import Stats from '../Shared/Stats/Stats';
import Home1 from './Home1';

const Home = () => {
  return (
    <div>
      <Home1></Home1>
      <Service></Service>
      <Features></Features>
      <OurTeam></OurTeam>
      <Stats></Stats>
      <Faq></Faq>
      <ContactUs></ContactUs>
    </div>
  )
}

export default Home