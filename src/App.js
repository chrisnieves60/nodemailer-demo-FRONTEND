
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';

function App() {

  document.body.style = 'background: #196997';
  
  return (
    <body>
    <><h1>Login or signup!</h1><Fragment>
      <Button>hello</Button>
      <Link to="/Login"><h1>Login</h1></Link>
      <Link to="/Signup"><h1>Signup</h1></Link>
      <Link to="/PleaseVerify"><h1>temporary</h1></Link>
    </Fragment></>
    </body>
  );
}

export default App;
