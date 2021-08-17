import React from 'react'
import Harry from './Harry'

const Harrys = ({data}) => {
    function close(name){
        const newData = data.filter(el => el.name !== name)
    }
    return (
        <div className="container">
            <div className="box">
                <h1 className="title">&#x2728; Harry Potter Charecters &#x2728;</h1>
                <input type="text" placeholder="Search for a charecters" /> 
            </div>
            <div onClick={()=>close(el.name)} className="bigCard">
            
                {data.map(el=>{
                    return(
                        <Harry el={el}/>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Harrys
