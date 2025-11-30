
import React from "react"
import Herosection from "./about/Herosection"
function About(){
    const product = {
        name:'Smart Gaget',
        price:'200'

    }

    return (
        <div>
            <Herosection Aproduct ={product}></Herosection>
        </div>
    )
}

export default About