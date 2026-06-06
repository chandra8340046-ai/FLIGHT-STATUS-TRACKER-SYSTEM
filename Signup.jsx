import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/");
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: "550px", margin: "80px auto" }}>
        <h1>📝 Create Account</h1>

        <br />

        <input type="text" placeholder="Full Name" />
        <br /><br />

        <input type="email" placeholder="Email Address" />
        <br /><br />

        <input type="text" placeholder="Mobile Number" />
        <br /><br />

        <input type="password" placeholder="Password" />
        <br /><br />

        <input type="password" placeholder="Confirm Password" />
        <br /><br />

        <button onClick={handleSignup}>
          Create Account
        </button>

        <br /><br />

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;