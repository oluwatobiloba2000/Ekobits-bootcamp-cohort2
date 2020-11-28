import React, { useEffect, useState } from 'react';
import emptySvg from '../../img/undraw_creativity.svg';
import './color-cards.css';

export default function ColorCards() {
    const [color, setColors] = useState([]);
    const [noColor, setNoColorMessage] = useState("");

    useEffect(()=>{
        const localDB = JSON.parse(window.localStorage.getItem("color-factory"));
         if(localDB){
            setColors(localDB);
        }else{
            setNoColorMessage("No colors found, Click on the Add color button to add a color")
        }
    }, [])

    const renderColorCards = () =>{
        if(color){
            return color.map((color, index)=>(
             <div key={`${index}`} className="color-card">
                <div style={{height: "100px", width: "100%", backgroundColor: `${color.colorCode}`}}></div>
                <div className="color-code">
               <p className="color-name">{color.colorName}</p>
               <p style={{margin: "5px 10px 0px"}}>{color.colorCode}</p>
                </div>
              </div>
            ))
        }
    }

    return (
        <div className="color-cards-container">
          {noColor &&( <div>
                       <img src={emptySvg} alt="empty color" height="45%" width="100%"/>
                         <p style={{textAlign: "center", color: "#000a00", fontSize: "25px"}}>{noColor}</p>
                       </div>)
         }
          {renderColorCards()}
        </div>
    )
}
