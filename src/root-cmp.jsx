import React from 'react';
import { Route, Routes } from 'react-router'

import { NavBar } from './cmps/nav-bar.jsx'
import { Footer } from './cmps/footer.jsx'
import { HomePage } from './pages/home-page.jsx'

export function RootCmp() {
    return (
        <section className="app main-layout">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer />
        </section >
    )
}