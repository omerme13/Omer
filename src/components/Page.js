import React, { Component } from 'react';

import Home from '../components/Home/Home';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

import './Page.scss';

class Page extends Component {

    render() {
        return (
            <div className="page">
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Page;

