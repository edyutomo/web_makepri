import React, { useState } from "react";
import "../css/laporankeuangan.css";
import "../css/header.css";
import Sidebar from "../component/Sidebar";

// Data dummy transaksi keuangan
const transaksiData = [
    {
        tanggal: "2025-04-01",
        keterangan: "Donasi Acara",
        jenis: "Pemasukan",
        jumlah: 2000000,
        kategori: "Donasi",
    },
    {
        tanggal: "2025-04-03",
        keterangan: "Biaya Sewa Tempat",
        jenis: "Pengeluaran",
        jumlah: 750000,
        kategori: "Operasional",
    },
    {
        tanggal: "2025-04-05",
        keterangan: "Donasi Tambahan",
        jenis: "Pemasukan",
        jumlah: 1000000,
        kategori: "Donasi",
    },
    {
        tanggal: "2025-04-06",
        keterangan: "Pembelian Konsumsi",
        jenis: "Pengeluaran",
        jumlah: 500000,
        kategori: "Operasional",
    },
];

// Contoh data budget per kategori dan bulan (dummy)
const budgetData = [
    { kategori: "Donasi", bulan: "2025-04", jumlah: 2500000 },
    { kategori: "Operasional", bulan: "2025-04", jumlah: 1500000 },
];

// Format mata uang
function formatRupiah(angka) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(angka);
}

function LaporanKeuangan() {
    // Toggle untuk buka/tutup sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Total pemasukan dari data transaksi
    const totalPemasukan = transaksiData
        .filter((item) => item.jenis === "Pemasukan")
        .reduce((acc, curr) => acc + curr.jumlah, 0);

    // Total pengeluaran dari data transaksi
    const totalPengeluaran = transaksiData
        .filter((item) => item.jenis === "Pengeluaran")
        .reduce((acc, curr) => acc + curr.jumlah, 0);

    // Ambil bulan laporan (contoh: "2025-04")
    const bulanTerpilih = "2025-04";

    // Hitung realisasi pengeluaran per kategori pada bulan terpilih
    const realisasiPerKategori = transaksiData
        .filter(
            (t) =>
                t.jenis === "Pengeluaran" && t.tanggal.startsWith(bulanTerpilih)
        )
        .reduce((acc, t) => {
            acc[t.kategori] = (acc[t.kategori] || 0) + t.jumlah;
            return acc;
        }, {});

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            <div
                className={`laporan-container ${
                    isSidebarOpen ? "with-sidebar" : "full-width"
                }`}
            >
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
                    <h1 className="head-title-text">Laporan Keuangan</h1>
                    <div className="title-right"></div>
                </div>

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
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0 ? "even-row" : "odd-row"
                                }
                            >
                                <td>{item.tanggal}</td>
                                <td>{item.keterangan}</td>
                                <td>{item.jenis}</td>
                                <td>{formatRupiah(item.jumlah)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2 className="transaksi-title">
                    Laporan Budget vs Realisasi Bulan {bulanTerpilih}
                </h2>
                <table className="transaksi-table">
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Budget</th>
                            <th>Realisasi</th>
                            <th>Selisih</th>
                        </tr>
                    </thead>
                    <tbody>
                        {budgetData.map((budget, index) => {
                            const realisasi =
                                realisasiPerKategori[budget.kategori] || 0;
                            const selisih = budget.jumlah - realisasi;
                            return (
                                <tr key={index}>
                                    <td>{budget.kategori}</td>
                                    <td>{formatRupiah(budget.jumlah)}</td>
                                    <td>{formatRupiah(realisasi)}</td>
                                    <td
                                        style={{
                                            color:
                                                selisih < 0 ? "red" : "green",
                                        }}
                                    >
                                        {formatRupiah(selisih)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LaporanKeuangan;
