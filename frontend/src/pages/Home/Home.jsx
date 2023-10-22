import React from 'react'
import { Calculator } from '../../components'

const Home = () => {
    return (
        <div id="home">
            <div className="container">

                <div className="title">
                    <h1>Simo's<br />Amazing<br />Calculator</h1>
                </div>
                <div className="calculator">
                    <Calculator />
                </div>

            </div>
        </div>
    )
}

export default Home