import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './Data'
import Pricing from '../../Pricing'


function SignUp() {
  return (
    <div>

     
      <HeroSection {...homeObjOne} />
    </div>
  );
}

export default SignUp;
