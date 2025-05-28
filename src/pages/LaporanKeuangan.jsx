import React from "react";
import "../css/laporankeuangan.css"; // Import file CSS terpisah

const transaksiData = [
  { tanggal: "2025-04-01", keterangan: "Donasi Acara", jenis: "Pemasukan", jumlah: 2000000 },
  { tanggal: "2025-04-03", keterangan: "Biaya Sewa Tempat", jenis: "Pengeluaran", jumlah: 750000 },
  { tanggal: "2025-04-05", keterangan: "Donasi Tambahan", jenis: "Pemasukan", jumlah: 1000000 },
  { tanggal: "2025-04-06", keterangan: "Pembelian Konsumsi", jenis: "Pengeluaran", jumlah: 500000 },
];

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(angka);
}

function LaporanKeuangan() {
  const totalPemasukan = transaksiData.filter((item) => item.jenis === "Pemasukan").reduce((acc, curr) => acc + curr.jumlah, 0);
  const totalPengeluaran = transaksiData.filter((item) => item.jenis === "Pengeluaran").reduce((acc, curr) => acc + curr.jumlah, 0);

  return (
    <div className="laporan-container">
      <h1 className="laporan-title">Laporan Keuangan</h1>

      <div className="summary-container">
        <div className="summary-card pemasukan">
          <h3>Total Pemasukan</h3>
          <p>{formatRupiah(totalPemasukan)}</p>
        </div>
        <div className="summary-card pengeluaran">
          <h3>Total Pengeluaran</h3>
          <p>{formatRupiah(totalPengeluaran)}</p>
        </div>
      </div>

      <h2 className="transaksi-title">Daftar Transaksi</h2>
      <table className="transaksi-table">
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Keterangan</th>
            <th>Jenis</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {transaksiData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
              <td>{item.tanggal}</td>
              <td>{item.keterangan}</td>
              <td>{item.jenis}</td>
              <td>{formatRupiah(item.jumlah)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LaporanKeuangan;
