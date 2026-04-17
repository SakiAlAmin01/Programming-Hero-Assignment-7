import { NavLink } from "react-router-dom";
import { Home, Clock, BarChart } from "lucide-react";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition ${
      isActive
        ? "bg-green-800 text-white shadow"
        : "text-gray-600 hover:text-green-700 hover:bg-green-100"
    }`;

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        <span>Keen</span><span className="text-[#244D3F]">Keeper</span> 
      </h1>

      {/* Links */}
      <div className="flex items-center gap-4">
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
    </nav>
  );
};

export default Navbar;