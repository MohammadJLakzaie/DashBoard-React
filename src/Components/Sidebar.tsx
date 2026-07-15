import { NavLink } from "react-router-dom";
import type { sectionLabel } from "../Types/Types" ;
import type { NavItemTypes } from "../Types/Types" ;




const NavItem = ({ emoji, label, active = false, muted = false } : NavItemTypes) => (
  <li>
    <a
      href="#"
      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors justify-end
        ${active
          ? "bg-indigo-100 text-indigo-700 font-medium"
          : muted
          ? "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
        }`}
    >
      <span className="text-base leading-none">{label}</span>
      <span>{emoji}</span>
    </a>
  </li>
);

const SectionLabel = ({ children } : sectionLabel) => (
  <p className="px-3 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-1 justify-start">
    {children}
    <span>▾</span>
  </p>
);

export default function Sidebar() {
  return (
    <aside
      dir="rtl"
      className="flex flex-col w-56 h-screen bg-[#F5F4FF] border-r border-slate-200 py-4 shrink-0"
    >

      {/* Workspace header */}
      <div className="flex items-center gap-2.5 px-4 pb-4 justify-start">

        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
          T
        </div>
        <span className="text-sm font-semibold text-slate-800 truncate text-right">
          CodeMenta Edition
        </span>

        
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2">

        {/* Favorites */}
        <SectionLabel>صفحات</SectionLabel>

        <ul className="space-y-0.5">
          <li>
            <NavLink
              to="home"
              className="flex items-center justify-start gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors text-bold text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            >
              خانه
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/app/profile"
              className="flex items-center justify-start gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors text-slate-600 hover:text-slate-800 hover:bg-slate-100"
            >
              پروفایل
            </NavLink>
          </li>
        </ul>

        {/* My Dashboard */}
        <SectionLabel>My Dashboard</SectionLabel>

        <ul className="space-y-0.5">
          <NavItem emoji="✅" label="Monthly OKRs"   />
          <NavItem emoji="💡" label="Product Key Drivers" />
          <NavItem emoji="✏️" label="Design Team ORKs" />
        </ul>

        {/* New dashboard */}
        <button
          type="button"
          className="flex items-center justify-end gap-2 mt-2 px-3 py-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors w-full"
        >
          <span>New dashboard</span>
          <span className="text-base leading-none">+</span>
        </button>
      </nav>

      {/* Bottom actions */}
      <div className="px-2 border-t border-slate-200 pt-3 space-y-0.5">

        <ul>
          <NavItem emoji="⚙️" label="تنظیم چیدمان" muted />
          <NavItem emoji="🗂️" label="همه ی داشبوردها" muted />
        </ul>

        <div className="flex justify-start px-3 pt-2">
          <span className="text-slate-300 text-xs">»</span>
        </div>

      </div>
    </aside>
  );
}