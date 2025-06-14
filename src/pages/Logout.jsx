import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/logout.css";
import Sidebar from "../component/Sidebar"; // ✅ Tambahkan Sidebar

function Logout() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // ✅ Sidebar toggle

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Anda telah logout!");
        navigate("/login");
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`logout-container ${
                    isSidebarOpen ? "with-sidebar" : "full-width"
                }`}
            >
                <div className="logout-box">
                    <h2 className="logout-title">Logout</h2>
                    <p className="logout-text">
                        Apakah Anda yakin ingin logout dari aplikasi?
                    </p>
                    <div className="button-group">
                        <button
                            className="logout-button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <button
                            className="cancel-button"
                            onClick={() => navigate("/dashboard")}
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logout;
