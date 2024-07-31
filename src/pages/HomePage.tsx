import React from 'react';
import Hero from '../components/Hero';
import HomeEvents from '../components/events/HomeEvents';
import Partners from '../components/Partners';
import Faq from '../components/Faq';
import Reviews from '../components/Reviews';

const HomePage: React.FC = () => {
    return (
        <main>
            <Hero />
            <HomeEvents />
            <Partners />
            <Reviews />
            <Faq />
        </main>
    );
};

export default HomePage;
