import React from 'react'
//import './About.css'
import image1 from '../images/iron_1.jpg'
//import image2 from '../images/iron_4.jpg'

const About = () => {
    
    return (
        <section>
        <div style={{
               height:'300px', width:'400px', float:'left',
               overflow:'hidden', padding:'10px',  margin:'20px',
           }}>
           <img src={image1} style={{height:'100%', width:'100%', overflow:'hidden' }}   />
        </div>
        <div>
            <h2 style={{margin:'10px'}}>About Us</h2>
            <p style={{padding:'10px'}}>
            Since Sep. 1997, we have been meeting the changing needs of steel customers. Today with plants in Vishvakarma Industrial Area(Rajasthan) and Bagru Industrial Area(Rajasthan), we produce the widest range of steel products among steel manufacturers having a annual turnover of over Rs.500 crore which speaks of our production muscle.</p>
<p>
We employ a variety of processes, such as Hot Rolling, Cold Drawing, Thermo-Mechanical Treatment (TMT), Peeling & Grinding and Machining to produce steel to your specification. Our products are used extensively for Automobile Components, Engineering Industries, Infrastructure and Railways. We produce steel of customized shapes, size and characteristics.
</p>
<p>
We are registered to supply steel throughout India with ISO 9001:2015 quality management systems certify that our manufacturing processes are at par with the world, as does our growing export market.
            </p>
        </div>
        </section>
    )
}

export default About
