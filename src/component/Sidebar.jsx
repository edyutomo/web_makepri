// src/components/Sidebar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const sidebarStyle = {
        height: "100vh",
        width: "250px",
        backgroundColor: "#3498db", // Warna biru
        color: "#fff",
        paddingTop: "20px",
        position: "fixed",
        top: "0",
        left: isSidebarOpen ? "0" : "-250px",
        transition: "left 0.3s",
    };

    const menuListStyle = {
        listStyleType: "none",
        padding: "0",
        marginTop: "30px",
    };

    const linkStyle = {
        display: "block",
        color: "#fff",
        textDecoration: "none",
        padding: "12px 20px",
        borderBottom: "1px solid #2980b9", // Warna biru tua
        transition: "background-color 0.3s",
    };

    const linkHoverStyle = {
        backgroundColor: "#2980b9", // Warna biru tua
    };

    return (
        <>
            <button
                style={{
                    position: "fixed",
                    top: "10px",
                    left: "10px",
                    zIndex: "1",
                    backgroundColor: "#3498db", // Warna biru
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                    cursor: "pointer",
                }}
                onClick={toggleSidebar}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
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
            <div style={sidebarStyle}>
                <h3 style={{ color: "#fff", textAlign: "center", marginBottom: "20px" }}>MANKEPRI</h3>
                <ul style={menuListStyle}>
                    <li>
                        <Link
                            to="/dashboard"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/laporan-keuangan"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Laporan Keuangan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dompet"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Dompet
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/transaksi"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Transaksi
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/logout"
                            style={linkStyle}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "")}
                            onClick={toggleSidebar}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;