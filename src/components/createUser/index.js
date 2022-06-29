import React, {Fragment, useState} from 'react';
import { useNavigate, Link, Navigate} from 'react-router-dom'
import Axios from 'axios';


function Signup() {

const[usernameSign, setUsernameSign] = useState("")
const[passwordSign, setPasswordSign] = useState("")
const[emailSign, setemailSign] = useState("")
const [redirect, setRedirect] = useState(false) //redirect to main page


const users = () => {
    Axios.post("http://localhost:5000/createUser" , {
username: usernameSign,
password: passwordSign,
email: emailSign
}).then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error); 
})
}



if (redirect) {
    return (<Navigate to="/login"/>) //redirect to home upon correct login 
  }



  return ( //return statement
  <Fragment>
      <div className="bg5">
      <div data-aos = "flip-right" className="homeboxes pt-5">
        <div className="container mt-5">
        <div className="text-center ">
    
<div className="Signup ">
    <h1> Signup</h1>
    <label 
    type="Username" 
    className="form-label">
    Username:{" "} 
    </label>

    <input 
    type="text"
    className=" form-control"
    placeholder=" Enter Username..."
    onChange={(e) => {
        setUsernameSign(e.target.value);
    }}
    />
    </div>

    
    <div className="email">
  
    <label 
    type="email" 
    className="form-label">
    Email:{" "}
    </label>

    <input 
    type="text"
    className=" form-control"
    placeholder=" Enter email..."
    onChange={(e) => {
        setemailSign(e.target.value);
    }}
    />
    </div>





<label 
text = "password"
text="passwordSign" 
className="form-label mt-2"> 
Password:{" "}
</label>
<input
type= "password"
 className="mb-3"
 className="form-control"
 placeholder="Enter Password..."
onChange={(e) => {
    setPasswordSign(e.target.value)
}}
/>


<button 
onClick={users}
 className="btn btn-primary mt-3">
     {" "} Sign up {" "} 
     </button>
</div>


<em> Already have an account? <Link to="/login">Click here to Log in!</Link></em>
{/* <div className="d-flex justify-content-center">
            <button className="button btn btn-primary mt-1" onClick={redirectLogin}>Log in</button>
            </div> */}
</div>
</div>
</div>
  </Fragment>
  );
}
export default Signup;