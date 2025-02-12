import React from "react";
import "./students.css"; // ✅ Import the CSS file

const Students = ({ students }) => {
  return (
    <div className="students-container">
      <h2 className="students-title">Student List</h2>
      {students.length === 0 ? (
        <p className="no-students">No students added yet.</p>
      ) : (
        <ul className="students-list">
          {students.map((student) => (
            <li key={student.id}>
              <strong>{student.name}</strong> - {student.age} years old - {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Students;
