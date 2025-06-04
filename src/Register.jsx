import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css"; // Import file CSS terpisah

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Password dan konfirmasi tidak cocok!");
            return;
        }

        console.log("Data pendaftaran:", form);
        alert("Registrasi berhasil! Silakan login.");
        navigate("/");
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Halaman Daftar</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-groupreg">
                        <label>Nama:</label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-groupreg">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-groupreg">
                        <label>Sandi:</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-groupreg">
                        <label>Konfirmasi Sandi:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">
                        Daftar
                    </button>
                </form>
                <p className="register-link">
                    Sudah punya akun? <Link to="/">Masuk di sini</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
