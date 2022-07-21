import { Fragment } from "react";
import './PleaseVerifyCSS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function pleaseVerify() {

    return(<Fragment><title>Verification Required</title>
    
    <body className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
            <h4>Please click the link sent to your email to verify your account.</h4>
            <br></br>
            <h5>After you are finished, click {<Link to="/Login">here</Link>}to login</h5>
            </div>
        
    </body>
    
    
    </Fragment>
        
        
        
        )
}

export default pleaseVerify; 