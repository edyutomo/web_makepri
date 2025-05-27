import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Sidebar from "../component/Sidebar";
import { Chart, registerables } from "chart.js";

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
        <div style={{ 
            display: "flex", 
            backgroundImage: "url('https://example.com/background-image.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            height: "100vh", 
            width: "100vw" 
        }}>
            <Sidebar />
            <div style={{ 
                marginLeft: "250px", 
                padding: "20px", 
                width: "calc(100% - 250px)", 
                backgroundColor: "rgba(255, 255, 255, 0.7)", 
                backdropFilter: "blur(10px)" 
            }}>
                <h2>Dashboard</h2>
                <p>Selamat datang di aplikasi keuanganmu!</p>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                    <div style={{ padding: "10px", background: "#4CAF50", color: "#fff", borderRadius: "5px" }}>
                        <h3>Pemasukan</h3>
                        <p>Rp {data.pemasukan.toLocaleString()}</p>
                    </div>
                    <div style={{ padding: "10px", background: "#0081D1", color: "#fff", borderRadius: "5px" }}>
                        <h3>Pengeluaran</h3>
                        <p>Rp {data.pengeluaran.toLocaleString()}</p>
                    </div>
                </div>
                <div style={{ marginTop: "20px", width: "80%", marginLeft: "auto", marginRight: "auto" }}>
                    <Bar data={chartData} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
