import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/dompet.css";
import "../css/header.css";
import axios from "axios";
import Sidebar from "../component/Sidebar"; // Tambahkan Sidebar

function Dompet() {
    const [dompetData, setDompetData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Tambahkan untuk kontrol sidebar

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("Silakan login terlebih dahulu!");
                window.location.href = "/login";
                return;
            }

            try {
                const response = await axios.get(
                    "https://apitugas3.xyz/api/dompet",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setDompetData(response.data.data || []);
            } catch (error) {
                console.error("Gagal mengambil data:", error);
                alert("Terjadi error saat mengambil data dompet.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ display: "flex" }}>
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
                />
                <div
                    className={`dompet-container ${
                        isSidebarOpen ? "with-sidebar" : "full-width"
                    }`}
                >
                    Memuat data...
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`dompet-container ${
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
                    <h1 className="head-title-text">Dompet</h1>
                    <div className="title-right"></div>
                </div>

                <div className="dompet-list">
                    {dompetData.length === 0 ? (
                        <p>Belum ada data dompet.</p>
                    ) : (
                        dompetData.map((item) => (
                            <div key={item.id} className="dompet-card">
                                <h3>{item.nama}</h3>
                                <p>
                                    Saldo: Rp{" "}
                                    {item.saldo.toLocaleString("id-ID")}
                                </p>
                            </div>
                        ))
                    )}
                    <Link to="/dompet-tambah" className="dompet-add">
                        <span className="dompet-add-icon">+</span> Tambah Dompet
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Dompet;
