// Sidebar.jsx
// Pure HTML + Tailwind, no JS logic — drop into any React project.
// Active state is controlled via the `active` prop on <NavItem>.
// import { useState } from "react";
import { NavLink } from "react-router-dom";
// const [Dashboard , setDasboard] = useState(null) ;
// const [menuOpen, setMenuOpen] = useState(false);

// const MyDashboard = [{emoji="✅" , label="Monthly OKRs"} , emoji="💡" label="Product Key Drivers" , emoji="✏️" label="Design Team ORKs"]


const NavItem = ({ emoji, label, active = false, muted = false }) => (
  <li>
    <a
      href="#"
      className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors
        ${active
          ? "bg-indigo-100 text-indigo-700 font-medium"
          : muted
          ? "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
        }`}
    >
      <span className="text-base leading-none">{emoji}</span>
      <span>{label}</span>
    </a>
  </li>
);


const SectionLabel = ({ children }) => (
  <p className="px-3 pt-4 pb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-1">
    <span>▾</span>
    {children}
  </p>
);

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-56 h-screen bg-[#F5F4FF] border-r border-slate-200 py-4 shrink-0">

      {/* Workspace header */}
      <div className="flex items-center gap-2.5 px-4 pb-4">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
          K
        </div>
        <span className="text-sm font-semibold text-slate-800 truncate">
          KDesign Workspace
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2">

        {/* Favorites */}
        <SectionLabel>My Pages</SectionLabel>
        <ul className="space-y-0.5">
          <NavLink to="home" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors">Home</NavLink>
          <NavLink to="/app/profile" className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors">Profile</NavLink>
          
        </ul>

        {/* My Dashboard */}
        <SectionLabel>My Dashboard</SectionLabel>
        <ul className="space-y-0.5">
          <NavItem emoji="✅" label="Monthly OKRs" />
          <NavItem emoji="💡" label="Product Key Drivers" />
          <NavItem emoji="✏️" label="Design Team ORKs" />
        </ul>

        {/* New dashboard */}
        <button
          type="button"
          className="flex items-center gap-2 mt-2 px-3 py-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors w-full"
          
        >
          <span className="text-base leading-none">+</span>
          <span>New dashboard</span>
        </button>
      </nav>

      {/* Bottom actions */}
      <div className="px-2 border-t border-slate-200 pt-3 space-y-0.5">
        <ul>
          <NavItem emoji="⚙️" label="Config Layout" muted />
          <NavItem emoji="🗂️" label="All Dashboards" muted />
        </ul>

        {/* Collapse hint */}
        <div className="flex justify-end px-3 pt-2">
          <span className="text-slate-300 text-xs">«</span>
        </div>
      </div>

    </aside>
  )
}
