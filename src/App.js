import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Profile from "./pages/Profile";  
import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]); // Add new student to list
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students students={students} />} />
            <Route path="/add-student" element={<AddStudent onAddStudent={handleAddStudent} />} />
            {/* ✅ Added Profile Route */}
            <Route path="/profile" element={<Profile />} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
