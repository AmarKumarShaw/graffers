import React from 'react'
import "./Cards/Cards.css";

const Cr = ({name,height,mass,hair,skin,eye}) => {
    return (
        <>
            <div className="card-content">
                <div className="card-heading">
                    <h1>{name}</h1> 
                </div>
                <div className="card-info">
                    <p>Height: {height} </p>
                    <p>Mass: {mass} </p>
                    <p>Hair Color: {hair}</p>
                    <p>Skin: {skin} </p>
                    <p>Eye Color: {eye}</p>
                </div>
                </div>
        </>
    )
}

export default Cr
