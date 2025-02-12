import { useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ashraf", age: 26, course: "Computer Science" },
    { id: 2, name: "Jane Smith", age: 23, course: "Mathematics" },
    { id: 3, name: "Bharati", age: 27, course: "History" },
  ]);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">Student List</h2>
      <table className="w-full mt-3 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.age}</td>
              <td className="border p-2">{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
