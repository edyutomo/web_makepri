import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css"; // Import file CSS terpisah
import makepriImage from "../assets/makepri.png"; // Impor gambar

function Profile() {
  const [profile, setProfile] = useState({
    username: "bludUser123",
    email: "bluduser@example.com",
    saldo: 500000,
    fotoProfile: "https://makepri", // contoh foto profile
  });

  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2 className="profile-title">Profil Pengguna</h2>
        <div className="profile-image-container">
          <img src={makepriImage} alt="Foto Profile" className="profile-image" />
        </div>
        <form className="profile-form">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={profile.username} readOnly />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={profile.email} readOnly />
          </div>
          <div className="form-group">
            <label>Saldo:</label>
            <input type="text" value={`Rp ${profile.saldo.toLocaleString()}`} readOnly />
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
