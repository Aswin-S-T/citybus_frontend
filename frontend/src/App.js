import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BusDeatailScreen from "./screens/BusDeatailScreen";
import Dashboard from "./companyPanel/screens/Dashboard";
import LoginScreen from "./companyPanel/screens/LoginScreen";
import RegisterScreen from "./companyPanel/screens/RegisterScreen";
import UserRegister from "./components/UserRegister";
import Login1 from "./companyPanel/screens/Login1";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          {/* <Header /> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/details/:id" element={<BusDeatailScreen />} />
            {/* Company related Routes */}
            <Route path="/company" element={<Dashboard />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<RegisterScreen />} />
            {/* User related routes */}
            <Route path="/register" element={<UserRegister />} />
            <Route  path="/login1" element={<Login1 />}/>

          </Routes>
        </main>

        {/* <footer>
          <p className="text-white">All the rights are reserved @ 2023</p>
        </footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
