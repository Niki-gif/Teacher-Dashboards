import React from "react";
import "./Profile.css"; // Import CSS file for styling

const Profile = () => {
  // Dummy Teacher Data
  const teacher = {
    name: "Nikita Jannu",
    email: "nikita.jannu@gmail.com",
    subject: "Mathematics",
    experience: "5 Years",
    phone: "+1234567890",
  };

  return (
    <div className="profile-container">
      <h2>Teacher Profile</h2>
      <div className="profile-card">
        <p><strong>Name:</strong> {teacher.name}</p>
        <p><strong>Email:</strong> {teacher.email}</p>
        <p><strong>Subject:</strong> {teacher.subject}</p>
        <p><strong>Experience:</strong> {teacher.experience}</p>
        <p><strong>Phone:</strong> {teacher.phone}</p>
      </div>
    </div>
  );
};

export default Profile;
