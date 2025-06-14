// Sidebar.jsx
import { Link } from "react-router-dom";
import "../component/sidebar.css";

function Sidebar({ isSidebarOpen, onToggle }) {
    return (
        <>
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
