// Sidebar.jsx
import { Link } from "react-router-dom";
import "../component/sidebar.css";

function Sidebar({ isSidebarOpen, onToggle }) {
    return (
        <>
            <button className="sidebar-toggle" onClick={onToggle}>
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
            <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                <h3 className="sidebar-title">MANKEPRI</h3>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/dashboard" className="sidebar-link">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/laporan-keuangan" className="sidebar-link">
                            Laporan Keuangan
                        </Link>
                    </li>
                    <li>
                        <Link to="/dompet" className="sidebar-link">
                            Dompet
                        </Link>
                    </li>
                    <li>
                        <Link to="/transaksi" className="sidebar-link">
                            Transaksi
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="sidebar-link">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" className="sidebar-link">
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
