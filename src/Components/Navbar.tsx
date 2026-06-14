import { useState } from "react";

const NAV_ITEMS = ["داشبورد", "جریان داده", "تحلیل ها", "کاربران"];

export default function SimpleNavbar() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    setActive(item);
    setMenuOpen(false); // close menu after click on mobile
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      {/* Top bar */}
      <div className="flex items-center justify-between h-11 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <span className="text-white font-semibold text-sm">Trello</span>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <ul className="hidden sm:flex gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleClick(item)}
                className={`px-3 py-2 text-sm rounded transition-colors duration-150 ${
                  active === item
                    ? "text-white font-bold"
                    : "text-indigo-200 hover:text-white"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side icons + hamburger */}
        <div className="flex items-center gap-1">
          {/* Simple icon buttons */}
          <button className="p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10">
            🔍
          </button>
          <button className="p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10">
            ❓
          </button>
          <button className="p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10">
            ⚙️
          </button>

          {/* Hamburger button - visible only on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10">
            {/* Simple hamburger icon (☰) or X when open */}
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu - only shown when menuOpen is true */}
      {menuOpen && (
        <div className="sm:hidden border-t border-indigo-500 bg-indigo-600">
          <ul className="flex flex-col px-4 py-2 gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleClick(item)}
                  className={`w-full text-left px-3 py-2.5 text-sm rounded transition-colors duration-150 ${
                    active === item
                      ? "text-white font-bold bg-white/10"
                      : "text-indigo-200 hover:text-white hover:bg-white/10"
                  }`}
                    >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}