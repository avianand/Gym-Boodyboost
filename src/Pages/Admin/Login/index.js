import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const location = useLocation();
  const auth = getAuth();
  const user = auth.currentUser;

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (userDetails) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // if (path) {
      //   navigate(path);
      // }
      if (location.state) {
        navigate(location.state);
      }
      navigate("/admin");
    } else {
      // No user is signed in.
    }
  }, [userDetails]);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserDetails(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="login">
      <div className="login">
        <div className="form">
          <form onSubmit={handleLogin} className="login-form">
            <span className="material-icons">Login</span>
            <input
              type="text"
              placeholder="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
