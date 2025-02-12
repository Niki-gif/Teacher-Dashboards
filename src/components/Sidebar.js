import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // ✅ Import Sidebar CSS

const Sidebar = () => {
  const location = useLocation(); // ✅ Get current route for active link

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Teacher Dashboard</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
            Profile
          </Link>
        </li>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/students" className={location.pathname === "/students" ? "active" : ""}>
            Students
          </Link>
        </li>
        <li>
          <Link to="/add-student" className={location.pathname === "/add-student" ? "active" : ""}>
            Add Student
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
