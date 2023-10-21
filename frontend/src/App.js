import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, Blog, Contact } from './pages'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={Blog} />
            <Route path="/contact" component={Contact} />
        </Router>
    )
}

export default App