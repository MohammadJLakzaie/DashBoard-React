import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons"
import { NavLink } from "react-router-dom";
const NAV_ITEMS = ["داشبورد", "جریان داده", "تحلیل ها", "کاربران"];

export default function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item : string) => {
    setActive(item );
    setMenuOpen(false); // close menu after click on mobile
  };

  const navigate = useNavigate();
  const HandleExit = () => {
    navigate('/') ;
    localStorage.setItem( "isLoggedIn", "false");
  }


  return (
    <nav className="bg-indigo-600 shadow-lg w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between h-14 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">T</span>
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
            📤
          </button>
          <Buttons name={'خروج'} width={'shrink-0'} onClick={() => HandleExit()} color={'mb-2 border-red-200 bg-indigo-600 px-4 py-2 text-sm font-medium text-black-600 hover:bg-red-700 '}/>

          {/* Hamburger button - visible only on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 rounded text-indigo-200 hover:text-white hover:bg-white/10">
            {/* Simple hamburger icon (☰) or X when open */}
            {menuOpen ? "✖" : "☰"}
          </button >
          {/* this button will open sidebar */}
          
        </div>
      </div>

      {/* Mobile dropdown menu - only shown when menuOpen is true */}
      {menuOpen && (
        <div className="sm:hidden border-t flex flex-col justify-center border-indigo-500 bg-indigo-600">
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
          <div>
                    <ul className="flex flex-col px-4 py-2 gap-1">
          <li>
            <NavLink
              to="home"
              className={`flex items-center justify-start gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors text-indigo-200 `}
            >
              خانه
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/app/profile"
              className="flex items-center justify-start gap-2.5 px-3 py-1.5 rounded-lg text-sm transition-colors text-indigo-200"
            >
              پروفایل
            </NavLink>
          </li>
        </ul>
          </div>
        </div>
      )}
    </nav>
  );
}