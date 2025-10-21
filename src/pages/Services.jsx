import React from 'react';
import MedicalServices from '../components/Services/MedicalServices';
import Treatment from '../components/Services/Treatment';
import OurServices from '../components/Services/OurServices';
import FeaturedServices from '../components/Services/FeaturedServices';
import FAQ from '../components/Services/FAQ';
import GetStarted from '../components/Services/GetStarted';








const Services = () => {
    return(
        <>
        <MedicalServices/>
        <Treatment/>
        <OurServices/>
        <FeaturedServices/>
        <FAQ/>
        <GetStarted/>

        </>
    )
}

export default Services;
