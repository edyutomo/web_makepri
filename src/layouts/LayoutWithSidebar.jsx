import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar";

function ProfileMenu() {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate("/profile");
    };

    const handleLogoutClick = () => {
        navigate("/logout");
    };

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <button
                style={{
                    padding: "10px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                }}
                onClick={handleProfileClick}
            >
                Profile
            </button>
            <button
                style={{
                    padding: "10px 20px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                }}
                onClick={handleLogoutClick}
            >
                Logout
            </button>
        </div>
    );
}

function LayoutWithSidebar({ children }) {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ flex: 1, padding: "20px", position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                    }}
                >
                    <ProfileMenu />
                </div>
                {children}
            </div>
        </div>
    );
}

export default LayoutWithSidebar;
