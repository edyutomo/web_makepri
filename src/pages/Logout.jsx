import { useNavigate } from "react-router-dom";
import "../css/logout.css";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token dan info user dari localStorage (jika disimpan di sana)
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Anda telah logout!");
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h2 className="logout-title">Logout</h2>
        <p className="logout-text">Apakah Anda yakin ingin logout dari aplikasi?</p>
        <div className="button-group">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <button className="cancel-button" onClick={() => navigate("/dashboard")}>Batal</button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
