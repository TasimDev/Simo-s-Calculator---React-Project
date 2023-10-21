import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, Blog, Contact } from './pages'

const App = () => {
    return (

        <Routes>
            <Route path="/" exact component={<Home />} />
            <Route path="/blog" component={<Blog />} />
            <Route path="/contact" component={<Contact />} />
        </Routes>
    )
}

export default App