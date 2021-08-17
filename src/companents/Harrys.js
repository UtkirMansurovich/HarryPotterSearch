import React from 'react'
import Harry from './Harry'

const Harrys = ({data, close}) => {
    
    return (
        <div className="container">
            <div className="box">
                <h1 className="title">&#x2728; Harry Potter Charecters &#x2728;</h1>
                <input type="text" placeholder="Search for a charecters" /> 
            </div>
            <div className="bigCard">
            
                {data.map(el=>{
                    return(
                        <Harry close={close} el={el}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Harrys
