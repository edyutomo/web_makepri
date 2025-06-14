import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import TambahKategori from "./pages/TambahKategori";
import Kategori from "./pages/Kategori";
import EditKategori from "./pages/EditKategori";
import Dashboard from "./pages/Dashboard";
import ChartCard from "./pages/ChartCard";
import Dompet from "./pages/Dompet";
import DompetTambah from "./pages/DompetTambah";
import LaporanKeuangan from "./pages/LaporanKeuangan";
import Transaksi from "./pages/Transaksi";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Logout from "./pages/Logout";

function App() {
    return (
        <Router>
            <Routes>
                {/* Rute tanpa sidebar */}
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />

                {/* Rute dengan sidebar panggil manual di dalam file */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/laporan-keuangan" element={<LaporanKeuangan />} />
                <Route path="/dompet" element={<Dompet />} />
                <Route path="/dompet-tambah" element={<DompetTambah />} />
                <Route path="/transaksi" element={<Transaksi />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/tambahkategori" element={<TambahKategori />} />
                <Route path="/kategori" element={<Kategori />} />
                <Route path="/editkategori/:id" element={<EditKategori />} />
            </Routes>
        </Router>
    );
}

export default App;
