import React from 'react'
import './home.css';
import patternSvg from '../../img/pattern.svg';
import { useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory()

    const moveToDashboard = () =>{
        history.push('/dashboard');
    }

    return (
        <div className="container">
            <div>
                <h1 className="logo">Colorly</h1>
                <h3 className="home-details">Your Favourite Color Factory</h3>
                {/* <Link to="/dashboard"> */}
                    <button onClick={moveToDashboard} className="btn-primary">Start Here</button>
                {/* </Link> */}
            </div>
            <img className="home-pattern-img" src={patternSvg} alt=""/>
        </div>
    )
}

export default Home;
