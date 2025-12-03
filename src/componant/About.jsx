
import React from "react"
import Herosection from "./about/Herosection"
function About(){
    const product = {
        name:'Smart Gaget',
        price:'200'

    }

    const arrays =["Rohim", "Korhim", "Habu", "Mondol"]

    const producted = [

        {name:'Nokia-50', price: '5000'},
        {name: 'Samsung-A16 pro', price: '10000'},
        {name: 'Oppo-A17 Pro max', price: '20000'},
        
    ];

    return (
        <div>
            <Herosection 
            Aproduct ={product}
            arrays ={arrays}
            producted ={producted}
            >

            </Herosection>
        </div>
    )
}

export default About