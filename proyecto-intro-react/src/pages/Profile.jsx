import React from "react";

const Profile = () => {
  const email = "lorenaguzmanelgueta@gmail.com"; 

  const handleLogout = () => {
    alert("Has cerrado sesión.");
    
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Perfil</h1>
      <p><strong>Email:</strong> {email}</p>
      <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
