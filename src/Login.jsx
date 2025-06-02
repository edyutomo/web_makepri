import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && password === "12345678") {
            setAlertMessage("Login sukses!");
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
                navigate("/dashboard");
            }, 2000);
        } else {
            setAlertMessage("Email atau Sandi salah!!");
            setAlertVisible(true);
            setTimeout(() => {
                setAlertVisible(false);
            }, 2000);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-left">
                <div className="logo-circle">
                    <div className="logo-content">
                        <div className="logo-symbol">$</div>
                        <div className="logo-text">MAKEPRI</div>
                    </div>
                </div>
                <h3>SELAMAT DATANG DI</h3>
                <h2>MANAJEMEN KEUANGAN PRIBADI</h2>
            </div>
            <div className="login-right">
                <h2 className="login-title">MASUK</h2>
                {alertVisible && (
                    <div className="alert-popup">
                        <p>{alertMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="form-grouplog">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-grouplog password-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Sandi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="toggle-passwordlog"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            👁️
                        </span>
                    </div>
                    <button type="submit" className="login-button">
                        MASUK
                    </button>
                </form>
                <div className="login-links">
                    <Link to="/register">Buat Akun Baru</Link>
                    <Link to="/forgot-password">Lupa Sandi</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
