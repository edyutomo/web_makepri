import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";
import makepriImage from "../assets/makepri.png";

function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("https://apitugas3.xyz/api/user", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        const result = await response.json();

        if (result.success) {
          setProfile(result.data);
        } else {
          alert("Gagal mengambil data profil");
          console.error(result);
        }
      } catch (error) {
        console.error("Error saat fetch profile:", error);
        alert("Terjadi kesalahan saat mengambil profil.");
      }
    };

    fetchProfile();
  }, []);

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  if (!profile) {
    return <div className="profile-container">Memuat profil...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2 className="profile-title">Profil Pengguna</h2>
        <div className="profile-image-container">
          <img
            src={profile.foto_profile || makepriImage}
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
            <input type="email" value={profile.email} readOnly />
          </div>
          <div className="form-group">
            <label>Saldo:</label>
            <input
              type="text"
              value={`Rp ${parseInt(profile.saldo).toLocaleString()}`}
              readOnly
            />
          </div>
        </form>
        <button className="edit-profile-button" onClick={handleEditProfile}>
          Edit Profil
        </button>
      </div>
    </div>
  );
}

export default Profile;
