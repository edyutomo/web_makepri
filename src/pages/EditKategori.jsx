import React, { useState, useEffect } from "react";
import axios from "axios";

function KategoriEdit() {
  const [kategori, setKategori] = useState([]);
  const [filter, setFilter] = useState(null); // null | "pemasukan" | "pengeluaran"

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    axios.get("https://apitugas3.xyz/api/kategori", { headers })
      .then(res => setKategori(res.data.data))
      .catch(err => console.error("Gagal ambil kategori:", err));
  }, []);

  // Filter kategori sesuai tipe pemasukan/pengeluaran
  const kategoriFiltered = filter
    ? kategori.filter(k => k.tipe === filter) // misal di backend ada tipe field "pemasukan"/"pengeluaran"
    : [];

  return (
    <div style={{
      width: "600px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#fff",
      border: "2px solid black",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      fontFamily: "Inter, sans-serif"
    }}>
      <h2 style={{ fontSize: "21px", color: "#000", marginBottom: "16px" }}>
        Kategori
      </h2>

      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setFilter("pemasukan")} style={{ marginRight: 10 }}>
          Tampilkan Kategori Pemasukan
        </button>
        <button onClick={() => setFilter("pengeluaran")}>
          Tampilkan Kategori Pengeluaran
        </button>
        <button onClick={() => setFilter(null)} style={{ marginLeft: 10 }}>
          Tampilkan Semua
        </button>
      </div>

      {filter && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>ID</th>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>Nama Kategori</th>
              <th style={{ borderBottom: "1px solid #000", padding: "8px" }}>Tipe</th>
            </tr>
          </thead>
          <tbody>
            {kategoriFiltered.length > 0 ? (
              kategoriFiltered.map(k => (
                <tr key={k.id}>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.id}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.nama}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{k.tipe}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan={3} style={{ padding: "8px" }}>Tidak ada kategori {filter}</td></tr>
            )}
          </tbody>
        </table>
      )}

      {!filter && (
        <p>Pilih tombol pemasukan atau pengeluaran untuk menampilkan kategori terkait.</p>
      )}
    </div>
  );
}

export default KategoriEdit;
