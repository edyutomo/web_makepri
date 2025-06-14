import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/header.css";

function EditKategori() {
    const { id } = useParams();
    const [nama, setNama] = useState("");
    const [tipe, setTipe] = useState("");
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch(`https://apitugas3.xyz/api/kategori/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Respon API:", result); // ✅ Debug respons GET

                if (result.success) {
                    setNama(result.data.nama);
                    setTipe(result.data.tipe);
                } else {
                    alert("Gagal memuat data kategori.");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Terjadi kesalahan saat memuat data.");
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://apitugas3.xyz/api/kategori/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                nama,
                tipe,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Respon PUT:", result); // ✅ Debug respons PUT

                if (result.success) {
                    alert("Kategori berhasil diperbarui!");
                    navigate("/kategori");
                } else {
                    alert("Gagal memperbarui kategori.");
                }
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Terjadi kesalahan saat mengedit.");
            });
    };

    return (
        <div
            style={{
                maxWidth: "500px",
                margin: "50px auto",
                padding: "20px",
                border: "2px solid #000",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
        >
            <div className="head-title-bar">
                <h1 className="head-title-text">Edit kategori</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Nama Kategori</label>
                    <br />
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label>Tipe</label>
                    <br />
                    <select
                        value={tipe}
                        onChange={(e) => setTipe(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px" }}
                    >
                        <option value="">Pilih Tipe</option>
                        <option value="pemasukan">Pemasukan</option>
                        <option value="pengeluaran">Pengeluaran</option>
                    </select>
                </div>
                <div style={{ textAlign: "right" }}>
                    <button
                        type="submit"
                        style={{
                            padding: "8px 16px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Simpan Perubahan
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/kategori")}
                        style={{
                            marginLeft: "10px",
                            padding: "8px 16px",
                            backgroundColor: "#6c757d",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditKategori;
