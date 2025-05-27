import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus sesi atau data yang diperlukan
    alert("Anda telah logout!");
    navigate("/login"); // Kembali ke halaman login
  };

  return (
    <div style={{ padding: "20px", marginLeft: "250px", textAlign: "center" }}>
      <div
        style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#4CAF50" }}>Logout</h2>
        <p style={{ marginBottom: "20px" }}>
          Apakah Anda yakin ingin logout dari aplikasi?
        </p>
        <button
          style={{
            padding: "10px 20px",
            background: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.background = "#e91e63")}
          onMouseOut={(e) => (e.target.style.background = "#f44336")}
          onClick={handleLogout}
        >
          Logout
        </button>
        <button
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.background = "#3e8e41")}
          onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
          onClick={() => navigate("/dashboard")}
        >
          Batal
        </button>
      </div>
    </div>
  );
}

export default Logout;