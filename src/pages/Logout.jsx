import { useNavigate } from "react-router-dom";
import "../css/logout.css"; // Import file CSS terpisah

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
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
