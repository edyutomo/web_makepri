import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../component/Sidebar"; // Pastikan path benar
import "../css/header.css";

function EditKategori() {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [tipe, setTipe] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(`https://apitugas3.xyz/api/kategori/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setNama(result.data.nama);
          setTipe(result.data.tipe);
        } else {
          alert("Gagal memuat data kategori.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Terjadi kesalahan saat memuat data.");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://apitugas3.xyz/api/kategori/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nama, tipe }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          alert("Kategori berhasil diperbarui!");
          navigate("/kategori");
        } else {
          alert("Gagal memperbarui kategori.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Terjadi kesalahan saat mengedit.");
      });
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
          <h1 className="head-title-text">Edit Kategori</h1>
          <div className="title-right"></div>
        </div>

        <div
          style={{
            maxWidth: "500px",
            margin: "30px auto",
            padding: "20px",
            border: "2px solid #000",
            borderRadius: "8px",
            backgroundColor: "#fff",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label>Nama Kategori</label>
              <br />
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label>Tipe</label>
              <br />
              <select
                value={tipe}
                onChange={(e) => setTipe(e.target.value)}
                required
                style={{ width: "100%", padding: "8px" }}
              >
                <option value="">Pilih Tipe</option>
                <option value="pemasukan">Pemasukan</option>
                <option value="pengeluaran">Pengeluaran</option>
              </select>
            </div>
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Simpan Perubahan
              </button>
              <button
                type="button"
                onClick={() => navigate("/kategori")}
                style={{
                  marginLeft: "10px",
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

export default EditKategori;
