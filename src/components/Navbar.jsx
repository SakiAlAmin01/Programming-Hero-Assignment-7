import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition ${
      isActive
        ? "bg-green-800 text-white shadow"
        : "text-gray-600 hover:text-green-700 hover:bg-green-100"
    }`;

  return (
    <nav className="bg-white border-b">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-800">
          <span>Keen</span>
          <span className="text-[#244D3F]">Keeper</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkStyle}>
            <Home size={16} /> Dashboard
          </NavLink>

          <NavLink to="/timeline" className={linkStyle}>
            <Clock size={16} /> Timeline
          </NavLink>

          <NavLink to="/stats" className={linkStyle}>
            <BarChart size={16} /> Stats
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkStyle}>
            <Home size={16} /> Dashboard
          </NavLink>

          <NavLink to="/timeline" onClick={() => setOpen(false)} className={linkStyle}>
            <Clock size={16} /> Timeline
          </NavLink>

          <NavLink to="/stats" onClick={() => setOpen(false)} className={linkStyle}>
            <BarChart size={16} /> Stats
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;