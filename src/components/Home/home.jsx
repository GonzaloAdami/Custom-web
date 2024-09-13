import React from "react";

import About from '../About/about';
import Product from '../Product/product';
import Contact from '../Contact/contact';

const Home = () => {

    return (
        <main>
            <section id="about">
                <About />
            </section>
            <section id="products">
                <Product />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
};

export default Home;