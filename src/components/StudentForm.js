import { useState } from "react";

const StudentForm = () => {
  const [student, setStudent] = useState({ name: "", age: "", course: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Added: ${student.name}, ${student.age}, ${student.course}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <h2 className="text-xl font-bold">Add Student</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="block border p-2 mt-2 w-full" />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} className="block border p-2 mt-2 w-full" />
      <input type="text" name="course" placeholder="Course" onChange={handleChange} className="block border p-2 mt-2 w-full" />
      <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default StudentForm;
