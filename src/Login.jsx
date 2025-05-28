import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import file CSS yang terpisah

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "12345678") {
      alert("Login sukses!");
      navigate("/dashboard");
    } else {
      alert("Email atau password salah.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <br />
        <p>
          Belum punya akun?{" "}
          <Link to="/register" className="link">
            Daftar di sini
          </Link>
        </p>
        <p>
          <Link to="/forgot-password" className="link">
            Lupa password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
