import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar"; // Pastikan path sesuai
import "../css/dompettambah.css";

function TambahKategori() {
  const [nama, setNama] = useState("");
  const [tipe, setTipe] = useState("");
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://apitugas3.xyz/api/kategori", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nama, tipe }),
      });

      const result = await response.json();

      if (!response.ok || result.status === false) {
        alert("Gagal menambahkan kategori: " + (result.message || "Terjadi kesalahan."));
        return;
      }

      alert(result.message || "Kategori berhasil ditambahkan!");
      navigate("/kategori");
    } catch (error) {
      console.error("Network Error:", error);
      alert("Terjadi kesalahan jaringan atau server.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className={`dompet-tambah-container ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
        <div className="head-title-bar">
          <div className="title-left">
            <button
              className="sidebar-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <h1 className="head-title-text">Tambah Kategori</h1>
          <div className="title-right"></div>
        </div>

        <div className="dompet-tambah-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama Kategori:</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Tipe:</label>
              <select
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                required
              >
                <option value="">-- Pilih Tipe --</option>
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>
            </div>
            <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
  <button type="submit" className="dompet-tambah-button">
    Simpan
  </button>
  <button
    type="button"
    onClick={() => navigate("/kategori")}
    style={{
      padding: "8px 16px",
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    }}
  >
    Batal
  </button>
</div>

            
          </form>
        </div>
      </div>
    </div>
  );
}

export default TambahKategori;
