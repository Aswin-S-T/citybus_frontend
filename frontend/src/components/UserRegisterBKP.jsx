import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { BACKEND_URL } from "../Api";
import "../styles/Register.css";
import { FACEBOOK_LOGO, GOOGLE_LOGO } from "../constats/images";

const USER_REGEX = /^[a-zA-Z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^([+]\d{2})?\d{10}$/;

const UserRegister = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState(" ");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState(" ");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [state, setState] = useState("");
  const [stateFocus, setStateFocus] = useState(false);

  const [city, setCity] = useState("");
  const [cityFocus, setCityFocus] = useState(false);

  const [zip, setZip] = useState("");
  const [validZip, setValidZip] = useState(false);
  const [zipFocus, setZipFocus] = useState(false);

  const [role, setRole] = useState("");
  const [validRole, setValidRole] = useState(false);
  const [roleFocus, setRoleFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(firstname);
    console.log(result);
    console.log(firstname);
    setValidName(result);
  }, [firstname]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    const vemail = EMAIL_REGEX.test(email);
    console.log(vemail);
    console.log(email);
    setValidEmail(vemail);
  }, [email]);

  useEffect(() => {
    const phoneValid = PHONE_REGEX.test(phone);
    console.log(phoneValid);
    console.log(phone);
    setValidPhone(phoneValid);
  });

  // useEffect(() => {
  //   const vrole = role;
  //   if(vrole == "User" || vrole == "Company"){
  //     setValidRole(vrole);
  //   }

  // })

  // const identifyRole = () => {
  //   const vrole = role;
  //   if(vrole == "User" || vrole == "Company"){
  //     setValidRole(vrole);
  //   }else{
  //     return setErrMsg("Invalid role selected")
  //   }
  // }

  useEffect(() => {
    const Vrole = role;
    setValidRole(Vrole === "user" || Vrole === "company");
  });

  useEffect(() => {
    setErrMsg("");
  }, [firstname, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(firstname);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PHONE_REGEX.test(phone);
    // const v5 = identifyRole(role);
    if (!v1 || !v2 || !v3 || !v4 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    // console.log(user, pwd);
    // setSuccess(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/register`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        password: pwd,
        state: state,
        city: city,
        zip: zip,
        role: role,
      });
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="registrationContainer">
      <div className="registrationScreen">
        <div className="row">
          <div className="col-md-5">
            <div className="container p-5 ">
              <div className="logo_div"></div>
              <h3 className="title">
                Your journey, our priority. Book a seat and explore the world!
              </h3>
            </div>

            <div className="banner-img m-4" />
          </div>
          <div className="col-md-7">
            <div className="rightSide">
              <div className="image_displaying"></div>
              {success ? (
                <section>
                  <h1>Success!</h1>
                  <p>
                    <a href="/login">Sign In</a>
                  </p>
                </section>
              ) : (
                <section>
                  <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>
                  <div className="container ">
                    <h1>Create Account</h1>

                    <form onSubmit={handleSubmit} className="mt-5">
                      <div className="socialLogin">
                        <button>
                          <img src={GOOGLE_LOGO} className="google-logo" />
                          Sign up with Google
                        </button>
                        <button>
                          <img src={FACEBOOK_LOGO} className="google-logo" />
                          Sign up with Facebook
                        </button>
                      </div>
                      <h4>-OR-</h4>
                      {/* <label htmlFor="username">Full Name</label> */}
                      <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        placeholder="Full Name"
                      />
                      <p
                        id="uidnote"
                        className={
                          userFocus && firstname && !validName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        3 to 24 characters.
                        <br />
                        Only alphabets are allowed.
                      </p>

                      {/* <label htmlFor="lastname">Lastname:</label>
                      <input
                        type="text"
                        id="lastname"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setLastname(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="lidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                      />
                      <p
                        id="lidnote"
                        className={
                          userFocus && lastname && !validName
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        3 to 24 characters.
                        <br />
                        Only alphabets are allowed.
                      </p> */}

                      {/* Email Input Feild Code */}
                      {/* <label htmlFor="email">Email</label> */}
                      <input
                        type="email"
                        id="email"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="eidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                        placeholder="Email Address"
                      />
                      <p
                        id="eidnote"
                        className={
                          emailFocus && email && !validEmail
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter a valid email
                      </p>

                      {/* Phone  Input Feild Code */}
                      {/* <label htmlFor="phone">Phone:</label> */}
                      <input
                        type="phone"
                        id="phone"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        aria-invalid={validPhone ? "false" : "true"}
                        aria-describedby="pidnote"
                        onFocus={() => setPhoneFocus(true)}
                        onBlur={() => setPhoneFocus(false)}
                        placeholder="Phone Number"
                      />
                      <p
                        id="pidnote"
                        className={
                          phoneFocus && phone && !validPhone
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Please enter a 10 digit number
                      </p>

                      {/* PAssword Input feild code */}
                      {/* <label htmlFor="password">Password: </label> */}
                      <input
                        type="password"
                        id="password"
                        autoComplete="on"
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        placeholder="Password"
                      />
                      <p
                        id="pwdnote"
                        className={
                          pwdFocus && !validPwd ? "instructions" : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character
                      </p>

                      {/* Confirm Password input field */}
                      <>
                        {/* <label htmlFor="confirm_pwd">Confirm Password:</label>
                        <input
                          type="password"
                          id="confirm_pwd"
                          autoComplete="on"
                          onChange={(e) => setMatchPwd(e.target.value)}
                          required
                          aria-invalid={validMatch ? "false" : "true"}
                          aria-describedby="confirmnote"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                        />
                        <p
                          id="confirmnote"
                          className={
                            matchFocus && !validMatch
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Must match the first password input field.
                        </p> */}

                        {/* State input field code */}
                        {/* <label htmlFor="state">State:</label>
                        <input
                          type="text"
                          id="state"
                          autoComplete="off"
                          onChange={(e) => setState(e.target.value)}
                          required
                          // aria-invalid={validName ? "false" : "true"}
                          // aria-describedby="uidnote"
                          onFocus={() => setStateFocus(true)}
                          onBlur={() => setStateFocus(false)}
                        /> */}

                        {/* City input feild code */}
                        {/* <label htmlFor="city">City:</label>
                        <input
                          type="text"
                          id="city"
                          autoComplete="off"
                          onChange={(e) => setCity(e.target.value)}
                          required
                          // aria-invalid={validName ? "false" : "true"}
                          // aria-describedby="uidnote"
                          onFocus={() => setCityFocus(true)}
                          onBlur={() => setCityFocus(false)}
                        /> */}

                        {/* Zip input field code */}
                        {/* <label htmlFor="zip">Zip:</label>
                        <input
                          type="text"
                          id="zip"
                          autoComplete="off"
                          onChange={(e) => setZip(e.target.value)}
                          required
                          aria-invalid={validZip ? "false" : "true"}
                          aria-describedby="zidnote"
                          onFocus={() => setZipFocus(true)}
                          onBlur={() => setZipFocus(false)}
                        />
                        <p
                          id="zidnote"
                          className={
                            zipFocus && zip && !validZip
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Please enter a 6 digit value code
                        </p> */}

                        {/* Role Input Field Code */}
                        {/* <label htmlFor="role">Role:</label>
                        <input
                          type="text"
                          id="role"
                          autoComplete="off"
                          onChange={(e) => setRole(e.target.value)}
                          required
                          aria-invalid={validRole ? "false" : "true"}
                          aria-describedby="ridnote"
                          onFocus={() => setRoleFocus(true)}
                          onBlur={() => setRoleFocus(false)}
                        />
                        <p
                          id="ridnote"
                          className={
                            roleFocus && role && !validRole
                              ? "instructions"
                              : "offscreen"
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          Please choose a role from User or Company, anyone !!
                        </p> */}
                      </>

                      <button
                        className="signinBtn mt-4"
                        disabled={
                          !validName ||
                          !validPwd ||
                          !validMatch ||
                          !validEmail ||
                          !validPhone
                            ? true
                            : false
                        }
                      >
                        Create Account
                      </button>
                      <div className="link">
                        <p>Already have an Account ? </p>
                        <a href="/login" className="mt-3 m-1">
                          Login
                        </a>
                      </div>
                    </form>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserRegister;

// import React, { useState } from 'react'
// import { BACKEND_URL } from "../constats/Api";
// import axios from "axios"

// const UserRegister = () => {

//     const [userRegister , setUserRegistration] = useState({
//         username: '',
//         email:'',
//         phone:'',
//         password:''
//     })
//     const [records , setRecords] = useState([]);

//   const handleInputChange = (e) => {
//      const name = e.target.name;
//      const value = e.target.value
//      console.log(name , value);

//      setUserRegistration({...userRegister , [name]:value})
//   }

//   const sendRequest = async ()=> {
//     const res =  await axios.post(`${BACKEND_URL}/api/v1/user/register`,  {
//       name:userRegister.name,
//       email: userRegister.email,
//       phone:userRegister.phone,
//       password: userRegister.password
//     }).catch(err => console.log(err));

//     const data = await res?.data;
//     console.log(data)
//     return data;
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault() ;

//     const newRegisterUser = {...userRegister , id: new Date().getTime().toString() } ;
//     console.log(records);
//     sendRequest(records);

//     setRecords([...records , newRegisterUser])
//     console.log(records);

//     setUserRegistration({username:"" , email:"", phone:"" , password:""})
//   }

//   return (
//     <>
//        <div>
//         <p>Register !!</p>
//        </div>

//     <form action='' onSubmit={handleSubmit} >
//        <div>
//           <label htmlFor='username'>Full name</label>
//           <input type='text'
//           value={userRegister.username}
//           onChange={handleInputChange}
//           name='username' id='username'></input>
//        </div>

//        <div>
//           <label htmlFor='email'>Email</label>
//           <input type='text'
//           value={userRegister.email}
//           onChange={handleInputChange}
//           name='email' id='email'></input>
//        </div>

//        <div>
//           <label htmlFor='phone'>Phone</label>
//           <input type='text'
//           value={userRegister.phone}
//           onChange={handleInputChange}
//           name='phone' id='phone'></input>
//        </div>

//        <div>
//           <label htmlFor='password'>Password</label>
//           <input type='text'
//           value={userRegister.password}
//           onChange={handleInputChange}
//           name='password' id='password'></input>
//        </div>

//        <button type='submit' >Register</button>
//     </form>
//     </>
//   )
// }

// export default UserRegister
