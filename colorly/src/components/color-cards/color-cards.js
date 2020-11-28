import React, { useEffect, useState } from 'react'
import './color-cards.css';

export default function ColorCards() {
    const [color, setColors] = useState([]);

    useEffect(()=>{
        const localDB = JSON.parse(window.localStorage.getItem("color-factory"));
         if(localDB){
            setColors(localDB);
        }
    }, [])

    const renderColorCards = () =>{
        if(color){
            return color.map((color, index)=>(
             <div key={`${index}`} className="color-card">
                <div style={{height: "100px", width: "100%", backgroundColor: `${color.colorCode}`}}></div>
                <div className="color-code">
               <p className="color-name">{color.colorName}</p>
               <p>{color.colorCode}</p>
                </div>
              </div>
            ))
        }
    }

    return (
        <div className="color-cards-container">
          {renderColorCards()}
        </div>
    )
}
