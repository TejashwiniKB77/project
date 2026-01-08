import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  }

  return (
    <div style={{ padding: "20px", width: "300px", margin: "auto" }}>
      <h2>User Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          style={{ marginBottom: "10px", width: "100%" }}
        />

        <button type="submit" style={{ width: "100%" }}>
          Register
        </button>
      </form>
    </div>
  );
}