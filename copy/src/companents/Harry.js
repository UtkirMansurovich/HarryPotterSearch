import React from 'react'

const Harry = ({el}) => {
   
    return (
        <div className="card">
            <div className="image">
                <img src={el.image}/>
            </div>
            <div className="about">
            
                <h3>{el.name}</h3>
                <h4>{el.house}</h4>
                <div className="text">
                    <p><span>True name</span><span className="dot">..............</span>{el.actor}</p>
                    <p><span>Date of birth</span><span className="dot">..............</span>{el.dateOfBirth}</p>
                    <p><span>Color eye</span><span className="dot">..............</span>{el.eyeColour}</p>
                    <p><span>Gender</span><span className="dot">..............</span>{el.gender}</p>
                    <p><span>Hair color</span><span className="dot">..............</span>{el.hairColour}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Harry
