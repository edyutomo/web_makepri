import makepriImage from "../assets/makepri.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import Sidebar from "../component/Sidebar"; // Pastikan path sesuai

function Profile() {
    const [profile, setProfile] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Tambahkan ini
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                console.warn("Token tidak ditemukan, redirect ke login...");
                navigate("/login");
                return;
            }

            try {
                const response = await fetch("https://apitugas3.xyz/api/user", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: "application/json",
                    },
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    setProfile(result.data);
                } else {
                    console.error("Gagal mengambil profil:", result);
                    alert("Gagal mengambil data profil. Silakan login ulang.");
                    localStorage.removeItem("token");
                    navigate("/login");
                }
            } catch (error) {
                console.error("Error saat fetch profile:", error);
                alert("Terjadi kesalahan saat mengambil profil.");
                navigate("/login");
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleEditProfile = () => {
        navigate("/edit-profile");
    };

    if (!profile) {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                />
                <div
                    className={`profile-container ${
                        isSidebarOpen ? "with-sidebar" : "full-width"
                    }`}
                >
                    Memuat profil...
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`profile-container ${
                    isSidebarOpen ? "with-sidebar" : "full-width"
                }`}
            >
                <div className="profile-box">
                    <h2 className="profile-title">Profil Pengguna</h2>
                    <div className="profile-image-container">
                        <img
                            src={
                                profile.foto_profile
                                    ? profile.foto_profile
                                    : "https://apitugas3.xyz/foto_profile/default.jpg"
                            }
                            alt="Foto Profile"
                            className="profile-image"
                        />
                    </div>
                    <form className="profile-form">
                        <div className="form-group">
                            <label>Username:</label>
                            <input type="text" value={profile.name} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={profile.email}
                                readOnly
                            />
                        </div>
                    </form>
                    <button
                        className="edit-profile-button"
                        onClick={handleEditProfile}
                    >
                        Edit Profil
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
