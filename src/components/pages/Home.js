import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Description from '../Description';
import Cards from '../Cards';
import Footer from '../Footer';


function Home () {
    return(
        <>
            <HeroSection />
            <Description />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;