import React, { Component } from 'react'
import {FaShuttleVan, FaHiking, FaCocktail } from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        Services:[
            {
                icon: <FaCocktail/>,
                title: 'free Cocktails',
                info: ' hey EveryOne..this is my app'

            },
            {
                icon: <FaShuttleVan/>,
                title: 'free Shuttle Van',
                info: ' hey EveryOne..this is my app'

            },{
                icon: <FaHiking/>,
                title: 'lot of Hiking',
                info: ' hey EveryOne..this is my app'

            }
        ]
    }
    render() {
        return (
            <section className='services'>
            <Title title='Services'/>
            <div className='services-center'>
                {this.state.Services.map((item,index)=>
                {return(
                    <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                )
                })}
            </div>
        </section>
    
        )
    }
}
