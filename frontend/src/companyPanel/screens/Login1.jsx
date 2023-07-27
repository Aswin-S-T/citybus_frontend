import React from 'react'
// import "../styles/UserLogin.css";
import './UserLogin.css';
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import { BACKEND_URL } from "../../Api";




const Login1 = () => {


  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginData = {
      email,
      password,
    };
    setLoading(true);
    await axios
      .post(`${BACKEND_URL}/api/v1/user/signin`, loginData)
      .then((res) => {
        if (res && res.data.status == 200) {
          setLoading(false);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          localStorage.setItem("loggedIn", true);
          Swal.fire({
            title: "Success!",
            text: "Successfully loggedIn",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            localStorage.setItem("loggedIn", true);
            navigate("/company");
            window.location.reload();
          });
        } else if (res && res.data.status == 400) {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong.",
            icon: "error",
            confirmButtonText: "Ok",
          }).then(() => {
            setLoading(false);
          });
        }
      });
  };

  return <>
    <div className='main'>
        <div className='logo_div'></div>
       
        <h1 className='heading_div'>
          Welcome to the one stop solution for all your Buses problems !!
        </h1>
        
        <div className ='image_1'></div>
            
        <div className='side_div'>
           <h1 className='create_heading'>Create Account </h1>
           
              <button className='google_auth'>
              
                <i class="fa fa-google fa-3x google_logo" aria-hidden="true"></i>
                <p className='sign_up'>Sign in With google</p>
              </button>
      
           <button className='facebook_auth'>
           <i class="fa fa-facebook fa-3x google_logo" aria-hidden="true"></i>
               <p className='sign_up'>Sign in with Facebook</p>
           </button>
 
           <div className='OR'>-OR-</div>
           <div
              // className="formBx "
              style={{ top: "105px", position: "relative" }}
            >
              {/* <h3 className="form-control">Login Here</h3> */}
              {/* <h3 className="text-center">Login Here</h3> */}
              <form onSubmit={handleSubmit} className='form_design'>
                <div >
                  {/* <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label> */}
                  <input
                    type="email"
                    className="email_input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                  />
                  <hr className='hr_line'></hr>
                  <div id="emailHelp" className="Email_msg">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div >
                  {/* <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label> */}
                  <input
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    className="password_input"
                    // className={`form-control ${showPassword ? "show" : "no"}`}
                    id="exampleInputPassword1"
                    placeholder="Password ****"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <hr className='hr_line2'></hr>
                  {/* <VisibilityIcon
										onClick={() => setShowPassword(!showPassword)}
										className="eye"
									/> */}
                </div>

                <button type="submit" className="submitBtn">
                  {loading ? <>Loading....</> : <>Login</>}
                </button>
                <div className="new_account">
                  <a href="/register" style={{ color: "#111" }}>
                    Create new Account ?{" "}
                  </a>
                </div>
              </form>
            </div>
        </div>
    </div>
  </>
}

export default Login1