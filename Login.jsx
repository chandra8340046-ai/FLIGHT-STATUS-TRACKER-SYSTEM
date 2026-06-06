import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: "500px", margin: "80px auto" }}>
        <h1>🔐 Flight Tracker Login</h1>

        <br />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <br /><br />

        <button onClick={handleLogin}>
          Login
        </button>

        <br /><br />

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;