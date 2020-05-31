import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Error() {
    return <Hero>
    <Banner title='page not found'>
        <Link to='/'>back</Link>
    </Banner>
    </Hero>
}

export default Error
