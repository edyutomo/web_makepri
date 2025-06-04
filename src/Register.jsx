import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Password dan konfirmasi tidak cocok!");
            return;
        }

        try {
            const response = await fetch("https://apitugas3.xyz/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registrasi berhasil! Silakan login.");
                navigate("/");
            } else {
                alert(data.message || "Terjadi kesalahan saat registrasi.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Gagal terhubung ke server.");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2 className="register-title">Halaman Daftar</h2>
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
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
