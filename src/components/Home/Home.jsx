import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Home | Book Vibe</title>
            </Helmet>
            <Banner />
            <Books />
        </div>
    );
};

export default Home;