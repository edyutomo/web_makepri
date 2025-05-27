// src/Register.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

        // Simulasi proses registrasi
        console.log("Data pendaftaran:", form);
        alert("Registrasi berhasil! Silakan login.");
        navigate("/");
    };

    return (
        <div style={{ padding: "20px", marginLeft: "250px" }}>
        <div>
            <h2>Halaman Daftar</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label><br />
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <div>
                    <label>Konfirmasi Password:</label><br />
                    <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit">Daftar</button>
            </form>

            <br />
            <p>Sudah punya akun? <Link to="/">Login di sini</Link></p>
        </div>
        </div>
    );
}

export default Register;
