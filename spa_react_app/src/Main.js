import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

import logo from './assets/resources/jstudio_transparentBK.PNG';

import './scss/navbar.scss';

class Main extends Component {
    render() {
      return (
        <HashRouter>
            <div>
                <header className="header mb-5">
                    <div className="container-fluid d-flex align-ietms-center justify-content-between">
                        <a href="" className="logo">
                            <img src={logo} alt="logo"/>
                        </a>
                        <ul className="navbar">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stuff">Stuff</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </header>

                <div className="clear"></div>

                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
      );
    }
}

export default Main;