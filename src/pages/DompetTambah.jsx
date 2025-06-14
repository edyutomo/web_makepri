import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dompettambah.css";

function DompetTambah() {
  const [nama, setNama] = useState("");
  const [saldo, setSaldo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch("https://apitugas3.xyz/api/dompet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ nama, saldo }),
      });

      const result = await response.json();

      // Hanya alert jika respons status == false atau terjadi error validasi
      if (!response.ok || result.status === false) {
        alert("Gagal menambahkan dompet: " + (result.message || "Terjadi kesalahan."));
        return;
      }

      // Sukses
      alert(result.message || "Dompet berhasil ditambahkan!");
      navigate("/dompet");

    } catch (error) {
      console.error("Network Error:", error);
      alert("Terjadi kesalahan jaringan atau server.");
    }
  };

  return (
    <div className="dompet-tambah-container">
      <div className="dompet-tambah-box">
        <h1 className="dompet-tambah-title">Tambah Dompet</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nama Dompet:</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Saldo Awal:</label>
            <input
              type="number"
              value={saldo}
              onChange={(e) => setSaldo(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="dompet-tambah-button">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}

export default DompetTambah;
