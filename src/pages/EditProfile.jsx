import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/editProfile.css"; // Import file CSS terpisah

function EditProfile() {
  const [username, setUsername] = useState("bludUser123");
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const navigate = useNavigate();

  const handleSimpan = () => {
    navigate("/profile");
  };

  const handleBatal = () => {
    navigate("/profile");
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-box">
        <h2 className="edit-profile-title">Edit Profil</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password Lama:</label>
          <input
            type="password"
            value={passwordLama}
            onChange={(e) => setPasswordLama(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password Baru:</label>
          <input
            type="password"
            value={passwordBaru}
            onChange={(e) => setPasswordBaru(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button className="save-button" onClick={handleSimpan}>Simpan</button>
          <button className="cancel-button" onClick={handleBatal}>Batal</button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
