import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../component/Sidebar";
import { Chart, registerables } from "chart.js";
import "../css/dasboard.css";

Chart.register(...registerables);

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [data] = useState({
        pemasukan: 5000000,
        pengeluaran: 3000000,
    });

    const chartData = {
        labels: ["Pemasukan", "Pengeluaran"],
        datasets: [
            {
                label: "Keuangan",
                data: [data.pemasukan, data.pengeluaran],
                backgroundColor: ["#4CAF50", "#0081D1"],
            },
        ],
    };

    return (
        <div style={{ display: "flex" }}>
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <div
                className={`dashboard-container ${
                    isSidebarOpen ? "with-sidebar" : "full-width"
                }`}
            >
                {/* HEADER */}
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
                    <h1 className="head-title-text">Dashboard</h1>
                    <div className="title-right"></div>
                </div>

                {/* KONTEN */}
                <div className="dashboard-content" style={{ padding: "20px" }}>
                    <p style={{ marginBottom: "20px" }}>
                        Selamat datang di aplikasi keuanganmu!
                    </p>

                    <div
                        className="financial-summary"
                        style={{
                            display: "flex",
                            gap: "20px",
                            marginBottom: "30px",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            className="financial-card income"
                            style={{
                                backgroundColor: "#4CAF50",
                                padding: "15px 20px",
                                borderRadius: "8px",
                                color: "white",
                                flex: "1 1 200px",
                            }}
                        >
                            <h3>Pemasukan</h3>
                            <p>Rp {data.pemasukan.toLocaleString()}</p>
                        </div>
                        <div
                            className="financial-card expense"
                            style={{
                                backgroundColor: "#0081D1",
                                padding: "15px 20px",
                                borderRadius: "8px",
                                color: "white",
                                flex: "1 1 200px",
                            }}
                        >
                            <h3>Pengeluaran</h3>
                            <p>Rp {data.pengeluaran.toLocaleString()}</p>
                        </div>
                    </div>

                    <div
                        className="chart-container"
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Bar data={chartData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
