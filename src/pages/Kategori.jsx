import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../component/Sidebar"; // pastikan path-nya benar

function Kategori() {
  const [kategori, setKategori] = useState([]);
  const [filter, setFilter] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://apitugas3.xyz/api/kategori", { headers })
      .then((res) => setKategori(res.data.data))
      .catch((err) => console.error("Gagal ambil kategori:", err));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Yakin ingin menghapus kategori ini?");
    if (!confirm) return;

    try {
      await axios.delete(`https://apitugas3.xyz/api/kategori/${id}`, { headers });
      fetchData(); // refresh data
    } catch (err) {
      console.error("Gagal hapus kategori:", err);
      alert("Terjadi kesalahan saat menghapus.");
    }
  };

  const kategoriFiltered = filter
    ? kategori.filter((k) => k.tipe === filter)
    : [];

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
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <h1 className="head-title-text">Kategori</h1>
          <div className="title-right">
            <button
              onClick={() => navigate("/tambahkategori")}
              style={{
                padding: "8px 12px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              + Tambah Kategori
            </button>
          </div>
        </div>

        <div
          style={{
            width: "90%",
            maxWidth: "800px",
            margin: "30px auto",
            padding: "20px",
            backgroundColor: "#fff",
            border: "2px solid black",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
  <button
    onClick={() => setFilter("pemasukan")}
    className="button-primary"
    style={{ marginRight: "10px" }}
  >
    Tampilkan Kategori Pemasukan
  </button>
  <button
    onClick={() => setFilter("pengeluaran")}
    className="button-primary"
  >
    Tampilkan Kategori Pengeluaran
  </button>
</div>


          {filter && (
            <table className="transaksi-table">
  <thead>
    <tr className="table-header">
      <th>ID</th>
      <th>Nama Kategori</th>
      <th>Tipe</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody>
    {kategoriFiltered.map((k) => (
      <tr key={k.id}>
        <td>{k.id}</td>
        <td>{k.nama}</td>
        <td>{k.tipe}</td>
        <td>
          <button
            onClick={() => navigate(`/editkategori/${k.id}`)}
            className="button-primary"
            style={{ marginRight: "8px" }}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(k.id)}
            className="button-secondary"
          >
            Hapus
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          )}

          {!filter && (
            <p>
              Pilih tombol pemasukan atau pengeluaran untuk menampilkan kategori terkait.
            </p>
          )}

          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <button
              onClick={() => navigate("/transaksi")}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              ← Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kategori;
