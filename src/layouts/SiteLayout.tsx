import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased">
      <Header />

      <main className="flex-1 w-full py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
