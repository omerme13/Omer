import React, { Component } from 'react';

import Navigation from './UI/Navigation/Navigation';
import Layout from './Layout/Layout';
// import Home from '../components/Home/Home';
// import Work from '../components/Work/Work';
// import About from '../components/About/About';
// import Skills from '../components/Skills/Skills';
// import Contact from '../components/Contact/Contact';
// import Footer from '../components/Footer/Footer';

import './Page.scss';

class Page extends Component {

    state = {
        isNavOpen: false
    }

    toggleNavHandler = () => {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return (
            <div className="page">
                <Navigation 
                    toggleNav={this.toggleNavHandler} 
                    show={this.state.isNavOpen}
                />
                <Layout isBlurred={this.state.isNavOpen} />
                {/* <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
                <Footer /> */}
            </div>
        );
    }
}

export default Page;

