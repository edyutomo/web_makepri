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
                <div className="head-title-bar">
                    <div className="title-left">
                        <button
                            className="sidebar-toggle"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <h1 className="head-title-text">Logout</h1>
                    <div className="title-right"></div>
                </div>
                <div className="logout-box">
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
