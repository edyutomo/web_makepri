import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Kategori() {
  const [kategori, setKategori] = useState([]);
  const [filter, setFilter] = useState(null);
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
    <div
      style={{
        width: "700px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#fff",
        border: "2px solid black",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontSize: "21px", color: "#000" }}>Kategori</h2>
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

      <div style={{ marginBottom: "16px", marginTop: "10px" }}>
        <button onClick={() => setFilter("pemasukan")} style={{ marginRight: 10 }}>
          Tampilkan Kategori Pemasukan
        </button>
        <button onClick={() => setFilter("pengeluaran")}>
          Tampilkan Kategori Pengeluaran
        </button>
      </div>

      {filter && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>ID</th>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>Nama Kategori</th>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>Tipe</th>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kategoriFiltered.length > 0 ? (
              kategoriFiltered.map((k) => (
                <tr key={k.id}>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.id}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.nama}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.tipe}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>
                    <button
                      onClick={() => navigate(`/editkategori/${k.id}`)}
                      style={{
                        marginRight: "8px",
                        padding: "4px 8px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(k.id)}
                      style={{
                        padding: "4px 8px",
                        backgroundColor: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} style={{ padding: "8px" }}>
                  Tidak ada kategori {filter}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {!filter && (
        <p>Pilih tombol pemasukan atau pengeluaran untuk menampilkan kategori terkait.</p>
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
  );
}

export default Kategori;
