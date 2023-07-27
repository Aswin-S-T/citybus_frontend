import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import { BACKEND_URL } from "../../Api";

function LoginScreen() {
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
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div
              className="formBx p-4 mt-5 card"
              style={{ top: "105px", position: "relative" }}
            >
              {/* <h3 className="form-control">Login Here</h3> */}
              <h3 className="text-center">Login Here</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                  />
                  <div id="emailHelp" className="form-text text-success">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    // type="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    // className={`form-control ${showPassword ? "show" : "no"}`}
                    id="exampleInputPassword1"
                    placeholder="Password ****"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* <VisibilityIcon
										onClick={() => setShowPassword(!showPassword)}
										className="eye"
									/> */}
                </div>

                <button type="submit" className="submitBtn">
                  {loading ? <>Loading....</> : <>Login</>}
                </button>
                <div className="mt-2">
                  <a href="/register" style={{ color: "#111" }}>
                    Create new Account ?{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
