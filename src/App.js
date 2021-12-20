import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Login from "./Pages/Admin/Login";
import RequireAdminAuth from "./RequireAdminAuth";
import AdminPortal from "./Pages/Admin/AdminPortal";
import "./App.css";
import "./firebase";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RequireAdminAuth redirectTo="/admin/login">
                <AdminPortal />
              </RequireAdminAuth>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
