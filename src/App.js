
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
function App() {

  //<>
  //<Home></Home>
  //</>
  return (
    <><h1>Login or signup!</h1><Fragment>
      
      <Link to="/Login"><h1>Login</h1></Link>
      <Link to="/Signup"><h1>Signup</h1></Link>
    </Fragment></>
  );
}

export default App;
