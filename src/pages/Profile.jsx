import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ padding: "20px", marginLeft: "250px", textAlign: "center" }}>
      <div
        style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#2196F3" }}>Profil Pengguna</h2>
        <div style={{ marginBottom: "20px" }}>
          <img
            src={profile.fotoProfile}
            alt="Foto Profile"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              transition: "all 0.3s ease",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => (e.target.style.boxShadow = "0 0 10px rgba(33, 150, 243, 0.5)")}
            onMouseOut={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)")}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong>Username:</strong> {profile.username}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong>Email:</strong> {profile.email}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <strong>Saldo:</strong> Rp {profile.saldo.toLocaleString()}
        </div>
        <button
          style={{
            padding: "10px 20px",
            background: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1976D2")}
          onMouseOut={(e) => (e.target.style.background = "#2196F3")}
          onClick={handleEditProfile}
        >
          Edit Profil
        </button>
      </div>
    </div>
  );
}

export default Profile;