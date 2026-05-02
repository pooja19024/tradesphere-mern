import React from 'react';

//Importing all homepage sections
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

//Home Page Component (Main Container)
function HomePage() {
  return ( 
    <>
     <Hero/>
     <Awards/>
     <Stats/>
     <Pricing/>
     <Education/>
     <OpenAccount/>
    </>
   );
}

export default HomePage;