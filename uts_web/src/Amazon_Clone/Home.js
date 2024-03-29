import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import Hero from './Hero';
import Partners from './Partners';
import Properties from './Properties';

function Home() {
    const picture = "./imagesCart/shop.jpg"
    return ( 
        <>
            <Hero 
                image = {picture}
                buttonText="Start Shopping"
                quote="If you are getting bored!"
                link="/products"
            />
            <FeaturedProducts />
            <Properties />
            <Partners />
        </>
     );
}

export default Home;