import React from 'react'
 const Daynamic = (props)=> {   
   

    return(
        <div>
            <h5>Daynamic Data</h5>
            <h6>Name: {props.name}</h6>
            <h6>Age: {props.age}</h6>
        </div>
    )
}

export default Daynamic;