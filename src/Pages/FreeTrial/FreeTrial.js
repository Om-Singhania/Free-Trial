import React from 'react';
import './FreeTrial.css'
import Alert from './Alert/Alert';
import Navbar from '../Shared/Navbar/Navbar';
import FreeTrialAvailable from './FreeTrialAvailable/FreeTrialAvailable';
import Checkout from './Checkout/Checkout';
import Footer from '../Shared/Footer/Footer';

// Images
import crossIcon from '../Images/X_alert.svg';
import brand_logo from '../Images/brand_logo.svg';

const FreeTrial = () => {
  return (
    <div className='free_trial_page'>
        <Alert crossIcon={crossIcon}/>
        <Navbar brand_logo={brand_logo}/>
        <FreeTrialAvailable timerHeading='FREE TRIAL IS STILL AVAILABLE' leftStock='47' days='05' hours='08' minutes='40' seconds='09' />
        <Checkout />
        <Footer />
    </div>
  )
}

export default FreeTrial