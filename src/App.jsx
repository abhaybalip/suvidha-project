"use client"

// Modules
import React, { useState, useEffect, useRef, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Fallback from './Component/Fallback'

// css files
import './Asset/css-files/App_1.css'
import './Asset/css-files/App_2.css'
import './Asset/css-files/_root.css'

// Nav-bar & component
const NavList = [
    { name: 'Home', href: '/', component: React.lazy(() => import('./Component/HomePage')) },
    { name: 'Detail', href: '/detail', component: React.lazy(() => import('./Component/Detail')) },
    { name: 'Paper-Submit', href: '/submit', component: React.lazy(() => import('./Component/Submission')) },
    { name: 'Tracks', href: '/track', component: React.lazy(() => import('./Component/Track')) },
    { name: 'Comittee', href: '/comittee', component: React.lazy(() => import('./Component/Comittee')) },
    { name: 'About', href: '/about', component: React.lazy(() => import('./Component/About')) },
]


function App() {

    // Handeling Navbar for small device
    const [isNavBarOpen, setIsNavBarOpen] = useState(false)
    const navBarRef = useRef(null)

    // Loading Screen
    const [IsLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 0)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    // Handeling Navbar closer
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isNavBarOpen]);

    const handleClickOutside = (event) => {
        if (navBarRef.current && !navBarRef.current.contains(event.target)) {
            setIsNavBarOpen(false);
        }
    }

    // Top button code

    // manage top button visibility
    const [TopButtonVisible, setTopButtonVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [TopButtonVisible])

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setTopButtonVisible(true)
            setTimeout(() => {
                setTopButtonVisible(false)
            }, 2500);
        } else {
            setTopButtonVisible(false)
        }
    }

    // manage top button action
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Header Section
    const Header = () => {
        return (
            <>
                <div className="header">

                    <div
                        id="nav-bar-small"
                        className="nav-bar-small"
                        style={{ display: isNavBarOpen ? 'flex' : 'none' }}
                        ref={navBarRef}
                    >
                        {/* <a className="nav-link-small" href="/">Home</a> */}
                        {NavList.map((value) => {
                            return (
                                <a href={value.href}>
                                    <div className='nav-link-small'>
                                        {value.name}
                                    </div>
                                </a>
                            )
                        })}

                    </div>

                    <img id='menu' alt='suvidha-logo' src={require('./Asset/Image/menu-icon.png')} onClick={() => setIsNavBarOpen(!isNavBarOpen)}></img>

                    <img alt="suvidha-logo" src={require('./Asset/Image/suvidha-logo.png')} className="header-logo" />

                    <div className="nav-bar">

                        {/* <a className="nav-link" href="/">Home</a> */}
                        {NavList.map((value) => {
                            return (
                                <a className='nav-link' href={value.href}>
                                    {value.name}
                                </a>
                            )
                        })}

                    </div>

                    <img className='top-button'
                        src={require('./Asset/Image/top-icon.png')}
                        alt='top-button'
                        style={{
                            visibility: TopButtonVisible ? 'visible' : 'hidden'
                        }}
                        onClick={scrollTop}></img>

                </div>

            </>
        )
    }


    // Footer Section
    const Footer = () => {
        return (
            <>
                <div className='footer'>

                    <div className='footer-tag'> Devloped by @Suvidha-Foundation | Copyright &copy;
                        {new Date().getFullYear()} All Rights Reserved
                    </div>

                </div>
            </>
        )
    }

    // Main App component
    return (
        <div id="app">

            {IsLoading ?
                <>
                    <div className='loader' style={{
                        height: '100vh',
                        width: '100vw',

                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <img src={require('./Asset/Image/Loading.gif')} alt='loading'></img>
                    </div>
                </> :
                <>
                    {Header()}

                    <div id='router' className='router'>
                        <Suspense fallback={Fallback}>
                            <BrowserRouter>
                                <Routes>
                                    {
                                        NavList.map((value) => {
                                            if (value.component) {
                                                return (
                                                    <Route path={value.href} Component={value.component}></Route>
                                                )
                                            } else { return null }
                                        })
                                    }
                                </Routes>
                            </BrowserRouter>
                        </Suspense>
                    </div>

                    {Footer()}
                </>
            }

        </div>
    );
};

export default App;




