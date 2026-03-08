import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { useTheme } from "../context/ThemeContext";

export default function Layout() {
  const { dark } = useTheme();

  return (
    <div className={`flex flex-col h-screen overflow-hidden bg-bg-base ${dark ? '' : 'theme-light'}`}>
      <Header />
      <div className="flex flex-row flex-1 min-h-0 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-7 font-mono text-text-secondary">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
