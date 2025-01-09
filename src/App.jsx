import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import NoPage from "./Pages/NoPage";
import Admin from "./Navbar/AdminNavbar";
import AdminProduct from "./AdminPages/AdminProduct";
import AddProduct from "./AdminPages/AddProduct";
import EditProduct from "./AdminPages/EditProduct";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminProduct />} />
            <Route path="add" element={<AddProduct />} />
            <Route patg="edit" element={<EditProduct/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
