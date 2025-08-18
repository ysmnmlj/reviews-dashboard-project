// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Property from "./pages/Property";
import Layout from "./components/Layout";
import PropertyPage from "./pages/PropertyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with Navbar applied to all children */}
        <Route element={<Layout />}>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/property" element={<Property />} />

          {/* Property page (dynamic id) */}
          <Route path="/property/:id" element={<PropertyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
