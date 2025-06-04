import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Import file CSS terpisah

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Link reset password telah dikirim ke ${email}`);
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2 className="forgot-password-title">Lupa Sandi</h2>
                <p className="forgot-password-text">
                    Masukkan email Anda untuk mendapatkan link reset sandi.
                </p>
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <div className="form-groupfor">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="forgot-password-button">
                        Kirim Link
                    </button>
                </form>
                <button className="back-button" onClick={() => navigate("/")}>
                    Kembali Masuk
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;
