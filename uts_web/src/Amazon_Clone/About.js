import React from 'react';
import Hero from './Hero';

function About() {
    const picture = "./imagesCart/shopStore.jpg"
    return ( 
        <>
            <Hero 
                image={picture}
                buttonText="Contact us"
                quote="If you have any query!"
                link="/contact"
            />
        </>
     );
}

export default About;