import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [username, setUsername] = useState("bludUser123");
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const navigate = useNavigate();

  const handleSimpan = () => {
    // Logika untuk menyimpan perubahan
    navigate("/profile");
  };

  const handleBatal = () => {
    // Logika untuk membatalkan perubahan
    navigate("/profile");
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
        <h2 style={{ marginBottom: "20px", color: "#2196F3" }}>Edit Profil</h2>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2196F3")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>Password Lama:</label>
          <input
            type="password"
            value={passwordLama}
            onChange={(e) => setPasswordLama(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2196F3")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "10px" }}>Password Baru:</label>
          <input
            type="password"
            value={passwordBaru}
            onChange={(e) => setPasswordBaru(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #2196F3")}
            onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          />
        </div>
        <button
          style={{
            padding: "10px 20px",
            background: "#2196F3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#1976D2")}
          onMouseOut={(e) => (e.target.style.background = "#2196F3")}
          onClick={handleSimpan}
        >
          Simpan
        </button>
        <button
          style={{
            padding: "10px 20px",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e91e63")}
          onMouseOut={(e) => (e.target.style.background = "#f44336")}
          onClick={handleBatal}
        >
          Batal
        </button>
      </div>
    </div>
  );
}

export default EditProfile;