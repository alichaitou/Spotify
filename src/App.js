import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import React from 'react'

const code =new URLSearchParams(window.location.search).get('code');

function App() {
  
  return(
    <React.Fragment>
    <NavBar/>
    {code ? <Dashboard code={code}/> : <Login />}
    </React.Fragment>
    );//if we have code then go to dashboard else to login page

}

export default App;
