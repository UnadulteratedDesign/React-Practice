import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './Data'
import Pricing from '../../Pricing'


function Products() {
  return (
    <div>

      
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Products;
