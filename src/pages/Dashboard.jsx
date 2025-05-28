import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../component/Sidebar";
import { Chart, registerables } from "chart.js";
import "../css/dasboard.css"; // Import file CSS terpisah

Chart.register(...registerables);

function Dashboard() {
    const [data, setData] = useState({
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
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                <p>Selamat datang di aplikasi keuanganmu!</p>
                <div className="financial-summary">
                    <div className="financial-card income">
                        <h3>Pemasukan</h3>
                        <p>Rp {data.pemasukan.toLocaleString()}</p>
                    </div>
                    <div className="financial-card expense">
                        <h3>Pengeluaran</h3>
                        <p>Rp {data.pengeluaran.toLocaleString()}</p>
                    </div>
                </div>
                <div className="chart-container">
                    <Bar data={chartData} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
