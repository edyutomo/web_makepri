import React from "react";
import { Link } from "react-router-dom";
import "../css/dompet.css"; // Import file CSS terpisah

function Dompet() {
  const dompetData = [
    { id: 1, nama: "Dompet Utama", saldo: 1000000 },
    { id: 2, nama: "Dompet Wisata", saldo: 500000 },
    { id: 3, nama: "Dompet Pendidikan", saldo: 2000000 },
  ];

  return (
    <div className="dompet-container">
      <h1 className="dompet-title">Dompet</h1>
      <div className="dompet-list">
        {dompetData.map((item) => (
          <div key={item.id} className="dompet-card">
            <h3>{item.nama}</h3>
            <p>Saldo: Rp {item.saldo.toLocaleString()}</p>
          </div>
        ))}
        <Link to="/dompet-tambah" className="dompet-add">
          <span className="dompet-add-icon">+</span> Tambah Dompet
        </Link>
      </div>
    </div>
  );
}

export default Dompet;
