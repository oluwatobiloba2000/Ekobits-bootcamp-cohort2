import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './addColors.css';

function AddColors() {
    const [colorName, setColorName] = useState("");
    const [colorCode, setColorCode] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();

    useEffect(()=>{
       document.querySelector('.App').classList.add('full-height');

       return ()=>{
        document.querySelector('.App').classList.remove('full-height');
       }
    }, [])

   const saveColor = () =>{
       if(colorName && colorCode){
          setError("");
            const localDB = JSON.parse(window.localStorage.getItem("color-factory"));
            let state;

            if(localDB){
                state = [...localDB, {colorName, colorCode}];
               window.localStorage.setItem("color-factory", JSON.stringify(state));
            }else{
                state = [{
                    colorName,
                    colorCode
                }]
                window.localStorage.setItem("color-factory", JSON.stringify(state));
            }

            history.push('/dashboard');
        }else{
            setError("Name Cannot be blank");
        }
    }

    return (
        <div className="add-color-container">
            <div className="add-color-input-container">
            <Link to="/dashboard">Go to Dashboard</Link>
            {error && <div className="error-div">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  {error}
            </div>}

             <label htmlFor="color-name">Color Name</label>
              <input type="text" id="color-name" style={{border: `1px solid ${colorCode ? colorCode : "#FF8800"}`}} className="color-name-input" onChange={(e)=> setColorName(e.target.value)} name="color" />
             
              <br />
              <br />
              <label htmlFor="color-picker">Pick A color</label>
              <input type="color" id="color-picker" onChange={(e)=> setColorCode(e.target.value)} />

              <button className="save-btn" onClick={saveColor}>Save Color</button>
            </div>


            <div style={{backgroundColor: `${colorCode ? colorCode : "#FF8800"}`}} className="color-value">
            <h1 className="colorly-logo">
                POWERED BY
                <Link to="/">Colorly</Link>
            </h1>
            </div>
        </div>
    )
}

export default AddColors;
