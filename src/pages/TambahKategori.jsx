import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dompettambah.css"; // Tetap pakai styling yang sama

function TambahKategori() {
  const [nama, setNama] = useState("");
  const [tipe, setTipe] = useState("");
  const navigate = useNavigate();

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
    <div className="dompet-tambah-container">
      <div className="dompet-tambah-box">
        <h1 className="dompet-tambah-title">Tambah Kategori</h1>
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
          <button type="submit" className="dompet-tambah-button">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default TambahKategori;
