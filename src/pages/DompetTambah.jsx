import React from "react";
import "../css/dompettambah.css"; // Import file CSS terpisah

function DompetTambah() {
  return (
    <div className="dompet-tambah-container">
      <div className="dompet-tambah-box">
        <h1 className="dompet-tambah-title">Tambah Dompet</h1>
        <form>
          <div className="form-group">
            <label>Nama Dompet:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Saldo Awal:</label>
            <input type="number" />
          </div>
          <button className="dompet-tambah-button">Simpan</button>
        </form>
      </div>
    </div>
  );
}

export default DompetTambah;
