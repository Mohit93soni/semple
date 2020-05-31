import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
//import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Hero>
                <Banner subtitle='26 years of par excellence at your service'/>
            </Hero> 
            <Services/>
        </div>
    )
}

export default Home
