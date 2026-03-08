import { Home, Plug, Settings, User, Sun, Moon } from "lucide-react";
import NavigationItem from "./Sidebar/NavigationItem";
import DockItem from "./Sidebar/DockItem";

import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
    const { dark, toggle } = useTheme();

    return <aside className="w-sidebar min-w-sidebar h-full bg-bg-surface border-r border-border flex flex-col shrink-0 font-mono overflow-y-auto">
        <nav className="flex-1 pt-3.5">
            <p className="px-[18px] pt-1.5 pb-1 text-2xs text-text-section tracking-widest">MAIN</p>

            <NavigationItem Label="Dashboard" LinksTo="/" Icon={Home} Active={true} />
        </nav>

        <div className="border-t border-border px-[18px] py-[11px] flex items-center justify-between">
            <DockItem Icon={User} LinksTo="/" />
            <DockItem Icon={Settings} LinksTo="/" />
            <DockItem Icon={Plug} LinksTo="/" />
            <button onClick={toggle} className="text-text-whisper hover:text-text-faint transition-colors duration-150 p-1 rounded">
                {dark ? <Sun size={14} strokeWidth={1.5}/> : <Moon size={14} strokeWidth={1.5}/>}
            </button>
        </div>
    </aside>
}