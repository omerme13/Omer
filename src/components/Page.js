import React, { Component } from 'react';

import Navigation from './UI/Navigation/Navigation';
import Layout from './Layout/Layout';

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
            </div>
        );
    }
}

export default Page;

