import React, { useState } from "react";

const dummyKategori = ["Makanan", "Belanja", "Listrik", "Kouta", "Cemilan"];

function Transaksi() {
  const [tampilkanForm, setTampilkanForm] = useState(false);
  const [tampilkanKategori, setTampilkanKategori] = useState(false);
  const [kategori, setKategori] = useState(dummyKategori);
  const [form, setForm] = useState({
    tanggal: "",
    kategori: "",
    jumlah: "",
    keterangan: "",
  });

  const handleTambahTransaksi = () => {
    setTampilkanForm(true);
    setTampilkanKategori(false);
  };

  const handleKategoriClick = () => {
    setTampilkanKategori(true);
    setTampilkanForm(false);
  };

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={{ padding: "20px", marginLeft: "250px" }}>
      <div style={{ padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ marginBottom: "20px", color: "#2196F3" }}>Transaksi</h2>

        {/* Daftar transaksi */}
        {!tampilkanForm && !tampilkanKategori && (
          <>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#2196F3", color: "#fff" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Tanggal</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Kategori</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Keterangan</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd" }}>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                {/* contoh dummy */}
                <tr style={{ background: "#fff" }}>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>2025-04-30</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>Makanan</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>Bakso</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>Rp20.000</td>
                </tr>
              </tbody>
            </table>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#2196F3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
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
              onClick={handleTambahTransaksi}
            >
              + Tambah Transaksi
            </button>
          </>
        )}

        {/* Form Tambah Transaksi */}
        {tampilkanForm && (
          <div style={{ border: "1px solid #ccc", padding: "20px", marginTop: "20px", background: "#fff", borderRadius: "8px" }}>
            <h3 style={{ marginBottom: "20px" }}>Tambah Transaksi</h3>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>Tanggal: </label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChangeForm}
                style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>Kategori: </label>
              <select
                name="kategori"
                value={form.kategori}
                onChange={handleChangeForm}
                style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              >
                {kategori.map((k, i) => (
                  <option key={i} value={k}>
                    {k}
                  </option>
                ))}
              </select>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  background: "#2196F3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
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
                onClick={handleKategoriClick}
              >
                Edit Kategori
              </button>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>Jumlah: </label>
              <input
                type="number"
                name="jumlah"
                value={form.jumlah}
                onChange={handleChangeForm}
                style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>Keterangan: </label>
              <input
                type="text"
                name="keterangan"
                value={form.keterangan}
                onChange={handleChangeForm}
                style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", width: "100%" }}
              />
            </div>
            <button
              style={{
                padding: "10px 20px",
                background: "#2196F3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
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
              Confirm
            </button>
          </div>
        )}

        {/* Manajemen Kategori */}
        {tampilkanKategori && (
          <div style={{ marginTop: "20px" }}>
            <h3 style={{ marginBottom: "20px" }}>Manajemen Kategori</h3>
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {kategori.map((item, idx) => (
                <li key={idx} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
                  {item}
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      background: "#2196F3",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
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
                    Edit
                  </button>
                  <button
                    style={{
                      marginLeft: "10px",
                      padding: "5px 10px",
                      background: "#f44336",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#e91e63";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow = "0 4px 8px rgba(244, 67, 54, 0.5)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "#f44336";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                background: "#2196F3",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
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
              onClick={() => setTampilkanForm(true)}
            >
              ← Kembali ke Transaksi
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Transaksi;