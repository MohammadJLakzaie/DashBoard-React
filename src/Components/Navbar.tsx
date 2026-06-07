import { useState } from "react";

const NAV_ITEMS = [
  { label: "داشبورد", 
    badge: false },

  { label: "جریان داده", 
    badge: false },

  { label: "تحلیل ها", 
    badge: true },

  { label: "کاربران",
     badge: false },
];

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r=".5" fill="currentColor" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/*
  Animated hamburger: three bars morph into an X using CSS transforms.
  - Top bar:    rotates +45deg and translates down
  - Middle bar: fades out + shrinks
  - Bottom bar: rotates -45deg and translates up
*/
function HamburgerIcon({ open }) {
  return (
    <div className="w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
      {/* Top bar */}
      <span
        className="block h-[2px] w-5 bg-current rounded-full origin-center transition-all duration-300 ease-in-out"
        style={{
          transform: open ? "translateY(7px) rotate(45deg)" : "none",
        }}
      />
      {/* Middle bar */}
      <span
        className="block h-[2px] w-5 bg-current rounded-full transition-all duration-300 ease-in-out"
        style={{
          opacity: open ? 0 : 1,
          transform: open ? "scaleX(0)" : "scaleX(1)",
        }}
      />
      {/* Bottom bar */}
      <span
        className="block h-[2px] w-5 bg-current rounded-full origin-center transition-all duration-300 ease-in-out"
        style={{
          transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
        }}
      />
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-indigo-600 shadow-lg relative">



   






      {/* ── Top bar ── */}
      <div className="flex items-center h-11 px-4">

       {/* Right — Icons + Hamburger */}
        <div className="flex items-center gap-1 w-[120px] justify-end shrink-0">
          {[
            { icon: <SearchIcon />, label: "Search" },
            { icon: <HelpIcon />, label: "Help" },
            { icon: <SettingsIcon />, label: "Settings" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10 transition-colors duration-150"
            >
              {icon}
            </button>
          ))}

          {/* Hamburger — mobile only */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="sm:hidden p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10 transition-colors duration-150"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>

        {/* Center — Nav links (sm and above) */}
        <ul className="hidden sm:flex flex-1 items-center justify-center gap-1">
          {NAV_ITEMS.map(({ label, badge }) => {
            const isActive = active === label;
            return (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(label)}
                  className={`
                    relative flex items-center px-3 py-2 text-sm rounded transition-colors duration-150
                    ${isActive ? "text-white font-bold" : "text-indigo-200 font-normal hover:text-white"}
                  `}
                >
                  {label}
                  {badge && (
                    <span className="absolute top-1.5 -right-0.5 w-2 h-2 rounded-full bg-red-400 border border-indigo-600" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Spacer on mobile */}
        <div className="flex sm:hidden flex-1" />

      {/* Left — Logo */}
        <div className="flex items-center gap-2 w-[120px] shrink-0">
          <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold leading-none">L</span>
          </div>
          <span className="text-white font-semibold text-sm tracking-wide">Trello</span>
        </div>

      </div>

      {/* ── Mobile dropdown ── */}
      {/*
        We always render the <ul> but clip its height.
        grid-rows trick: 0fr → 1fr animates the height smoothly without
        needing JS to measure the element's natural height.
      */}
      <div
        className="sm:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          display: "grid",
          gridTemplateRows: menuOpen ? "1fr" : "0fr",
        }}
      >
        <ul className="overflow-hidden border-t border-indigo-500 bg-indigo-600 flex flex-col px-4 py-2 gap-1">
          {NAV_ITEMS.map(({ label, badge }) => {
            const isActive = active === label;
            return (
              <li key={label}>
                <button
                  onClick={() => handleNavClick(label)}
                  className={`
                    w-full text-left flex items-center gap-2 px-3 py-2.5 text-sm rounded transition-colors duration-150
                    ${isActive
                      ? "text-white font-bold bg-white/10"
                      : "text-indigo-200 font-normal hover:text-white hover:bg-white/10"}
                  `}
                >
                  {label}
                  {badge && (
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

    </nav>
  );
}
