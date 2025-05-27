import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/LayoutWithSidebar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Dashboard from "./pages/Dashboard";
import ChartCard from './pages/ChartCard';
import Dompet from './pages/Dompet';
import DompetTambah from './pages/DompetTambah';
import LaporanKeuangan from "./pages/LaporanKeuangan";
import Transaksi from "./pages/Transaksi";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import Logout from "./pages/Logout";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute tanpa sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Rute dengan sidebar */}
        <Route
          path="/profile"
          element={
            <LayoutWithSidebar>
              <Profile />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <LayoutWithSidebar>
              <EditProfile />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/dashboard"
          element={
            <LayoutWithSidebar>
              <Dashboard />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/laporan-keuangan"
          element={
            <LayoutWithSidebar>
              <LaporanKeuangan />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/dompet"
          element={
            <LayoutWithSidebar>
              <Dompet />
            </LayoutWithSidebar>
          }
        />
        <Route
          path="/dompet-tambah"
          element={
            <LayoutWithSidebar>
              <DompetTambah />
            </LayoutWithSidebar>
          }
        /> 
        <Route
          path="/transaksi"
          element={
            <LayoutWithSidebar>
              <Transaksi />
            </LayoutWithSidebar>
          }
        /> 
        <Route
          path="/logout"
          element={
            <LayoutWithSidebar>
              <Logout />
            </LayoutWithSidebar>
          }
        />
        {/* Tambahkan route lainnya sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

function LayoutWithSidebar({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
}

export default App;