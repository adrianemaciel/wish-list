import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import GuestPage from "./pages/GuestPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/guest" element={<GuestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
