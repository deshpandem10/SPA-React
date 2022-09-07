import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';

import logo from './assets/resources/logo_transprntbk.png';

import './scss/navbar.scss';

class Main extends Component {
    componentDidMount() {
        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
         * Easy event listener function
         */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        /**
         * Easy on scroll event listener 
         */
        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        /**
         * Toggle .header-scrolled class to #header when page is scrolled
         */
        let selectHeader = select('#header')
        if (selectHeader) {
            const headerScrolled = () => {
                if (window.scrollY > 100) {
                    selectHeader.classList.add('header-scrolled')
                } else {
                    selectHeader.classList.remove('header-scrolled')
                }
            }
            window.addEventListener('load', headerScrolled)
            onscroll(document, headerScrolled)
        }
    }

    render() {
      return (
        <HashRouter>
            <div>
                <header className="header" id="header">
                    <Container>
                        <div className="d-flex align-ietms-center justify-content-between">
                            <div href="" className="logo my-auto">
                                {/* <img src={logo} alt="logo"/> */}
                                <h4>Lorem Ipsum</h4>
                            </div>
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
                    </Container>
                </header>

                <div className="clear"></div>

                <div className="content pt-5">
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