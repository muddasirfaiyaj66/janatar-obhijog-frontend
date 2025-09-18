import React from 'react';
import Banner from '../Banner/Banner';
import CallToAction from '../CallToAction/CallToAction';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import RoleBasedSection from '../RoleBasedSection/RoleBasedSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CallToAction></CallToAction>
            <FeaturesSection></FeaturesSection>
            <RoleBasedSection></RoleBasedSection>
        </div>
    );
};

export default Home;