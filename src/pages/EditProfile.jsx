import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/editProfile.css";

function EditProfile() {
  const [username, setUsername] = useState("");
  const [passwordLama, setPasswordLama] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [fotoProfile, setFotoProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Silakan login terlebih dahulu.");
      return;
    }

    fetch("https://apitugas3.xyz/api/user", {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data) {
          setUsername(data.data.name || "");
        } else {
          throw new Error("Gagal ambil data profil");
        }
      })
      .catch((err) => {
        console.error("ERROR:", err);
        alert("Gagal mengambil data profil. Silakan cek koneksi atau token Anda.");
      });
  }, [navigate]);

  const handleSimpan = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Silakan login terlebih dahulu.");
    navigate("/login");
    return;
  }

  if (passwordBaru && passwordBaru.length < 6) {
    alert("Password baru minimal 6 karakter!");
    return;
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("_method", "PUT"); // 🔥 Ini yang WAJIB untuk spoof method PUT
  formData.append("name", username);
  if (passwordBaru) {
    formData.append("password", passwordBaru);
    formData.append("password_lama", passwordLama); // jika nanti kamu validasi password lama
  }
  if (fotoProfile) {
    formData.append("foto_profile", fotoProfile);
  }

  fetch("https://apitugas3.xyz/api/user", {
    method: "POST", // tetap POST tapi di-spoof ke PUT
    headers: {
      Authorization: "Bearer " + token,
    },
    body: formData,
  })
    .then(async (res) => {
      setLoading(false);
      if (res.status === 401) {
        alert("Unauthorized. Silakan login ulang.");
        navigate("/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        alert("Profil berhasil diperbarui!");
        navigate("/profile");
      } else {
        alert(data.message || "Gagal memperbarui profil.");
      }
    })
    .catch(() => {
      setLoading(false);
      alert("Terjadi kesalahan jaringan.");
    });
};

  const handleBatal = () => {
    navigate("/profile");
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-box">
        <h2 className="edit-profile-title">Edit Profil</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label>Password Lama:</label>
          <input
            type="password"
            value={passwordLama}
            onChange={(e) => setPasswordLama(e.target.value)}
            disabled={loading}
            placeholder="Tidak wajib diisi"
          />
        </div>
        <div className="form-group">
          <label>Password Baru:</label>
          <input
            type="password"
            value={passwordBaru}
            onChange={(e) => setPasswordBaru(e.target.value)}
            disabled={loading}
            placeholder="Kosongkan jika tidak ingin ganti password"
          />
        </div>
        <div className="form-group">
          <label>Foto Profil:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFotoProfile(e.target.files[0])}
            disabled={loading}
          />
        </div>
        <div className="button-group">
          <button className="save-button" onClick={handleSimpan} disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
          <button className="cancel-button" onClick={handleBatal} disabled={loading}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
