import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div style={{ padding: "20px", marginLeft: "250px", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#2196F3" }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              background: "#2196F3",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.background = "#1976D2")}
            onMouseOut={(e) => (e.target.style.background = "#2196F3")}
          >
            Login
          </button>
        </form>
        <br />
        <p>
          Belum punya akun?{" "}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "#2196F3",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1976D2")}
            onMouseOut={(e) => (e.target.style.color = "#2196F3")}
          >
            Daftar di sini
          </Link>
        </p>
        <p>
          <Link
            to="/forgot-password"
            style={{
              textDecoration: "none",
              color: "#2196F3",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1976D2")}
            onMouseOut={(e) => (e.target.style.color = "#2196F3")}
          >
            Lupa password?
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;