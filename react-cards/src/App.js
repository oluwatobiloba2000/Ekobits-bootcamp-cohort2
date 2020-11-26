import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [networkError, setNetworkError] = useState(false);

    useEffect(()=>{
      setNetworkError({error: false})
      setLoading(true);
      Axios.get(`http://jsonplaceholder.typicode.com/users`)
      .then(function (response) {
        // handle success
        setLoading(false);
        if (response.data) {
          setUsers([...response.data])
        }
        })
        .catch(function (error) {
          setLoading(false);
          console.log("🚀 ~ file: App.js ~ line 38 ~ useEffect ~ error", error)
          if (error.message === "Network Error") {
            setNetworkError({
              error: true,
              message:
              "Could not connect to the internet, looks like you are offline",
            });
          } else {
            setNetworkError({
              error: true,
              message: "Something went wrong, please try again",
            });
          }
        });
      },[])

  const renderCards = () => {
    return users.map((user, index) => {
      
      return (
        <div className="card" key={index}>
          <img className="img" src={`https://ui-avatars.com/api/?name=${user.name}`} alt="" width="70px" height="50px"/>
         <h3 className="name">{user.name}</h3>
  
        <br/>
        <br/>

        <div className="bottom-section">
            <h4 className="username">@{user.username}</h4>
            <h4 className="email">{user.email}</h4>
           <a href={user.website} rel="noreferrer" target={"_blank"}>{user.website}</a>
        </div>

        </div>
      );
    });
  };


  return (
    <div className="App">
      {networkError.error && <div>{networkError.message}</div>}
      {loading ? <div className="water"></div>
      : renderCards()}
    </div>
  );
}

export default App;
