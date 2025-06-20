import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ⬅️ Tambahkan ini
import "../css/transaksi.css";
import Sidebar from "../component/Sidebar"; // ⬅️ Sidebar ditambahkan

function Transaksi() {
    const navigate = useNavigate(); // ⬅️ Untuk navigasi ke /kategori
    const [tampilkanForm, setTampilkanForm] = useState(false);
    const [kategori, setKategori] = useState([]);
    const [dompet, setDompet] = useState([]);
    const [transaksi, setTransaksi] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // ⬅️ Toggle sidebar
    const [form, setForm] = useState({
        tanggal: "",
        kategori: "",
        dompet: "",
        jumlah: "",
        keterangan: "",
    });

    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };

    useEffect(() => {
        axios
            .get("https://apitugas3.xyz/api/kategori", { headers })
            .then((res) => setKategori(res.data.data))
            .catch((err) => console.error("Gagal ambil kategori:", err));

        axios
            .get("https://apitugas3.xyz/api/dompet", { headers })
            .then((res) => setDompet(res.data.data))
            .catch((err) => console.error("Gagal ambil dompet:", err));

        fetchTransaksi();
    }, []);

    const fetchTransaksi = () => {
        axios
            .get("https://apitugas3.xyz/api/transaksi", { headers })
            .then((res) => setTransaksi(res.data.data))
            .catch((err) => console.error("Gagal ambil transaksi:", err));
    };

    const handleTambahTransaksi = () => {
        setTampilkanForm(true);
    };

    const handleKategoriClick = () => {
        navigate("/kategori"); // ⬅️ Arahkan ke halaman kategori
    };

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const simpanTransaksi = () => {
        const data = {
            tanggal: form.tanggal,
            kategori_id: form.kategori,
            dompet_id: form.dompet || null,
            jumlah: form.jumlah,
            keterangan: form.keterangan,
        };

        axios
            .post("https://apitugas3.xyz/api/transaksi", data, { headers })
            .then(() => {
                alert("Transaksi berhasil ditambahkan!");
                setForm({
                    tanggal: "",
                    kategori: "",
                    dompet: "",
                    jumlah: "",
                    keterangan: "",
                });
                setTampilkanForm(false);
                fetchTransaksi();
            })
            .catch((err) => {
                console.error("Gagal simpan transaksi:", err.response?.data);
                alert("Gagal simpan transaksi.");
            });
    };

    function formatTanggal(tgl) {
        if (!tgl) return "-";
        const dateObj = new Date(tgl);
        if (isNaN(dateObj)) return tgl;
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`;
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`container-transaksi ${
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
                    <h1 className="head-title-text">Transaksi</h1>
                    <div className="title-right"></div>
                </div>
                <div className="card-transaksi">
                    {!tampilkanForm && (
                        <>
                            <table className="transaksi-table">
                                <thead>
                                    <tr className="table-header">
                                        <th>Tanggal</th>
                                        <th>Kategori</th>
                                        <th>Dompet</th>
                                        <th>Keterangan</th>
                                        <th>Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transaksi.map((trx) => (
                                        <tr key={trx.id}>
                                            <td>
                                                {formatTanggal(trx.tanggal)}
                                            </td>
                                            <td>{trx.kategori_id}</td>
                                            <td>{trx.dompet_id || "-"}</td>
                                            <td>{trx.keterangan || "-"}</td>
                                            <td>
                                                Rp{" "}
                                                {parseInt(
                                                    trx.jumlah
                                                ).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="button-primary"
                                onClick={handleTambahTransaksi}
                            >
                                + Tambah Transaksi
                            </button>
                        </>
                    )}

                    {tampilkanForm && (
                        <div className="form-transaksi">
                            <h3 className="form-title">Tambah Transaksi</h3>

                            <div>
                                <label>Tanggal:</label>
                                <input
                                    type="date"
                                    name="tanggal"
                                    value={form.tanggal}
                                    onChange={handleChangeForm}
                                    className="input-full"
                                />
                            </div>

                            <div>
                                <label>Kategori:</label>
                                <select
                                    name="kategori"
                                    value={form.kategori}
                                    onChange={handleChangeForm}
                                    className="input-full"
                                >
                                    <option value="">
                                        -- Pilih Kategori --
                                    </option>
                                    {kategori.map((k) => (
                                        <option key={k.id} value={k.id}>
                                            {k.nama}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="button-primary mt-1"
                                    onClick={handleKategoriClick}
                                >
                                    Edit Kategori
                                </button>
                            </div>

                            <div>
                                <label>Dompet:</label>
                                <select
                                    name="dompet"
                                    value={form.dompet}
                                    onChange={handleChangeForm}
                                    className="input-full"
                                >
                                    <option value="">-- Pilih Dompet --</option>
                                    {dompet.map((d) => (
                                        <option key={d.id} value={d.id}>
                                            {d.nama}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label>Jumlah:</label>
                                <input
                                    type="number"
                                    name="jumlah"
                                    value={form.jumlah}
                                    onChange={handleChangeForm}
                                    className="input-full"
                                />
                            </div>

                            <div>
                                <label>Keterangan:</label>
                                <input
                                    type="text"
                                    name="keterangan"
                                    value={form.keterangan}
                                    onChange={handleChangeForm}
                                    className="input-full"
                                />
                            </div>

                            <div className="button-group">
                                <button
                                    className="button-primary"
                                    onClick={simpanTransaksi}
                                >
                                    Simpan
                                </button>
                                <button
                                    className="button-secondary"
                                    onClick={() => {
                                        setTampilkanForm(false);
                                        setForm({
                                            tanggal: "",
                                            kategori: "",
                                            dompet: "",
                                            jumlah: "",
                                            keterangan: "",
                                        });
                                    }}
                                >
                                    Batal
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Transaksi;
