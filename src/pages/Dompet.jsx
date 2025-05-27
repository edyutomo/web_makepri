import React from "react";
import { Link } from "react-router-dom";

function Dompet() {
  const dompetData = [
    {
      id: 1,
      nama: "Dompet Utama",
      saldo: 1000000,
    },
    {
      id: 2,
      nama: "Dompet Wisata",
      saldo: 500000,
    },
    {
      id: 3,
      nama: "Dompet Pendidikan",
      saldo: 2000000,
    },
  ];

  return (
    <div style={{ padding: "20px", marginLeft: "250px" }}>
      <h1 style={{ color: "#2196F3" }}>Dompet</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {dompetData.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "20px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "200px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.target.style.boxShadow = "0 4px 8px rgba(33, 150, 243, 0.5)";
              e.target.style.border = "1px solid #2196F3";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
              e.target.style.border = "1px solid #ddd";
              e.target.style.transform = "translateY(0)";
            }}
          >
            <h3 style={{ color: "#2196F3" }}>{item.nama}</h3>
            <p style={{ color: "#666" }}>Saldo: Rp {item.saldo.toLocaleString()}</p>
          </div>
        ))}
        <Link
          to="/dompet-tambah"
          style={{
            padding: "20px",
            background: "#2196F3",
            color: "#fff",
            borderRadius: "8px",
            width: "200px",
            textAlign: "center",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#1976D2";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 4px 8px rgba(33, 150, 243, 0.5)";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "#2196F3";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          <span style={{ fontSize: "24px" }}>+</span> Tambah Dompet
        </Link>
      </div>
    </div>
  );
}

export default Dompet;