import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      <main className="bg-[#FFFDF6]">
        <Outlet />
      </main>
    </div>
  );
}
