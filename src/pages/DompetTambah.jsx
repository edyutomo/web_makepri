import React from "react";

function DompetTambah() {
  return (
    <div style={{ padding: "20px", marginLeft: "250px" }}>
      <div
        style={{
          padding: "20px",
          background: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "#4CAF50" }}>Tambah Dompet</h1>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>Nama Dompet:</label>
            <input
              type="text"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>Saldo Awal:</label>
            <input
              type="number"
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "100%",
              }}
            />
          </div>
          <button
            style={{
              padding: "10px 20px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.background = "#3e8e41")}
            onMouseOut={(e) => (e.target.style.background = "#4CAF50")}
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default DompetTambah;