import React, { useState } from "react";
import "./addStudent.css"; // ✅ Import the CSS file

const AddStudent = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !course) {
      alert("Please fill all fields.");
      return;
    }

    const newStudent = { id: Date.now(), name, age, course };

    if (typeof onAddStudent === "function") {
      onAddStudent(newStudent); // ✅ Ensure this function exists
    } else {
      console.error("onAddStudent is not a function");
    }

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <div className="add-student-container">
      <h2 className="add-student-title">Add Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
