import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/dompettambah.css";
import "../css/header.css";
import Sidebar from "../component/Sidebar"; // Tambahkan import Sidebar

function DompetTambah() {
    const [nama, setNama] = useState("");
    const [saldo, setSaldo] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State sidebar
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

            if (!response.ok || result.status === false) {
                alert(
                    "Gagal menambahkan dompet: " +
                        (result.message || "Terjadi kesalahan.")
                );
                return;
            }

            alert(result.message || "Dompet berhasil ditambahkan!");
            navigate("/dompet");
        } catch (error) {
            console.error("Network Error:", error);
            alert("Terjadi kesalahan jaringan atau server.");
        }
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`dompet-tambah-container ${
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
                    <h1 className="head-title-text">Tambah Dompet</h1>
                    <div className="title-right"></div>
                </div>
                <div className="dompet-tambah-box">
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
        </div>
    );
}

export default DompetTambah;
