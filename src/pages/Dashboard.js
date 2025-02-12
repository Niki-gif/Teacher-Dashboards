import React, { useState } from "react";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./Dashboard.css"; // Import custom CSS

const Dashboard = () => {
  // Dummy Student Data
  const [students] = useState([
    { id: 1, name: "Nikita", age: 28, course: "Computer Science", present: true },
    { id: 2, name: "Prajakta", age: 25, course: "Mathematics", present: true },
    { id: 3, name: "Sabir", age: 25, course: "Physics", present: false },
    { id: 4, name: "Sanket", age: 24, course: "Biology", present: true },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null); // Store the student profile

  const totalStudents = students.length;
  const presentStudents = students.filter((s) => s.present).length;
  const absentStudents = totalStudents - presentStudents;

  // Chart Data
  const data = [
    { name: "Present Students", value: presentStudents },
    { name: "Absent Students", value: absentStudents },
  ];
  const COLORS = ["#4CAF50", "#FF5252"];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Student Management Dashboard</h2>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card blue">
          <FaUsers className="stat-icon" />
          <div>
            <h3>{totalStudents}</h3>
            <p>Total Students</p>
          </div>
        </div>
        <div className="stat-card green">
          <FaUserGraduate className="stat-icon" />
          <div>
            <h3>{presentStudents}</h3>
            <p>Present Students</p>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="chart-container">
        <ResponsiveContainer width="50%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Student List */}
      <h3 className="table-title">Recent Students</h3>
      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Status</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td className={student.present ? "present" : "absent"}>
                {student.present ? "Present" : "Absent"}
              </td>
              <td>
                <button className="profile-btn" onClick={() => setSelectedStudent(student)}>
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Student Profile Modal */}
      {selectedStudent && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedStudent.name}'s Profile</h2>
            <p><strong>ID:</strong> {selectedStudent.id}</p>
            <p><strong>Age:</strong> {selectedStudent.age}</p>
            <p><strong>Course:</strong> {selectedStudent.course}</p>
            <p><strong>Status:</strong> {selectedStudent.present ? "Present" : "Absent"}</p>
            <button className="close-btn" onClick={() => setSelectedStudent(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
