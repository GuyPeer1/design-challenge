import React from 'react';
import { Route, Routes } from 'react-router'

import { NavBar } from './cmps/nav-bar.jsx'
import { AppHeader } from './cmps/app-header.jsx'
import { Build } from './cmps/build.jsx'
import { Deliver } from './cmps/deliver.jsx'
import { Ready } from './cmps/ready.jsx'
import { Footer } from './cmps/footer.jsx'

export function RootCmp() {
    return (
        <section className="app">
            <NavBar/>
            <AppHeader/>
            <Build/>
            <Deliver />
            <Ready />
            <Footer />
        </section >
    )
}