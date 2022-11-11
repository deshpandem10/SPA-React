import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import Home from './contents/Home';
import About from './contents/About';
import Experience from './contents/Experience';
import Contact from './contents/Contact';

import logo from './assets/resources/logo_transprntbk.png';

import './assets/scss/navbar.scss';

class App extends Component {
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
        let selectHeader = select('header')
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

        /**
         * Mobile nav toggle
         */
        on('click', '.mobile-nav-toggle', function(e) {
            select('#navbar').classList.toggle('navbar-mobile')
            this.classList.toggle('bx-list-ul')
            this.classList.toggle('bx-x')
        })

        /**
         * Mobile nav dropdowns activate
         */
        on('click', '.navbar .dropdown > a', function(e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)
    }

    render() {
      return (
        <HashRouter>
            <div>
                <header>
                    <Container>
                        <div href="" className="logo my-auto">
                            {/* <img src={logo} alt="logo"/> */}
                            <h2>MD</h2>
                        </div>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li>
                                    <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/expedu" className={({ isActive }) => isActive ? "active" : ""}>Work Experience &amp; Education</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <i className="bx bx-list-ul mobile-nav-toggle"></i>
                    </Container>
                </header>

                <div className="clear"></div>

                <Container>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/expedu" component={Experience}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </Container>
            </div>
        </HashRouter>
      );
    }
}

export default App;