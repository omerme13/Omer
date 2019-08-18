import React from 'react'

import Home from  '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import './Layout.scss';

const layout = props => (
    <div className={props.isBlurred ? 'layout--blurred' : 'layout'}>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
    </div>
)

export default layout;