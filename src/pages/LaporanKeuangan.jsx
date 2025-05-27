// src/pages/LaporanKeuangan.jsx
import React from "react";

const transaksiData = [
  {
    tanggal: "2025-04-01",
    keterangan: "Donasi Acara",
    jenis: "Pemasukan",
    jumlah: 2000000,
  },
  {
    tanggal: "2025-04-03",
    keterangan: "Biaya Sewa Tempat",
    jenis: "Pengeluaran",
    jumlah: 750000,
  },
  {
    tanggal: "2025-04-05",
    keterangan: "Donasi Tambahan",
    jenis: "Pemasukan",
    jumlah: 1000000,
  },
  {
    tanggal: "2025-04-06",
    keterangan: "Pembelian Konsumsi",
    jenis: "Pengeluaran",
    jumlah: 500000,
  },
];

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(angka);
}

const thStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "2px solid #ccc",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #eee",
};

function LaporanKeuangan() {
  const totalPemasukan = transaksiData
    .filter((item) => item.jenis === "Pemasukan")
    .reduce((acc, curr) => acc + curr.jumlah, 0);

  const totalPengeluaran = transaksiData
    .filter((item) => item.jenis === "Pengeluaran")
    .reduce((acc, curr) => acc + curr.jumlah, 0);

  return (
    <div style={{ padding: "20px", marginLeft: "250px" }}>
      <h1 style={{ marginBottom: "20px", color: "#2196F3" }}>Laporan Keuangan</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#2196F3",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#fff" }}>Total Pemasukan</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "#fff" }}>
            {formatRupiah(totalPemasukan)}
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            background: "#FF9800",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#fff" }}>Total Pengeluaran</h3>
          <p style={{ fontWeight: "bold", fontSize: "20px", color: "#fff" }}>
            {formatRupiah(totalPengeluaran)}
          </p>
        </div>
      </div>

      <h2 style={{ marginBottom: "10px" }}>Daftar Transaksi</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <thead>
          <tr style={{ backgroundColor: "#2196F3", color: "#fff" }}>
            <th style={thStyle}>Tanggal</th>
            <th style={thStyle}>Keterangan</th>
            <th style={thStyle}>Jenis</th>
            <th style={thStyle}>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {transaksiData.map((item, index) => (
            <tr key={index} style={index % 2 === 0 ? { backgroundColor: "#f9f9f9" } : { backgroundColor: "#fff" }}>
              <td style={tdStyle}>{item.tanggal}</td>
              <td style={tdStyle}>{item.keterangan}</td>
              <td style={tdStyle}>{item.jenis}</td>
              <td style={tdStyle}>{formatRupiah(item.jumlah)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKeuangan;