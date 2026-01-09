import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Error");
      alert(data.message || "User added!");
      setFormData({ name: "", email: "", password: "" });
      // notify user table to refresh
      window.dispatchEvent(new Event("usersUpdated"));
    } catch (err) {
      alert(err.message || "Failed to add user");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card register-card">
      <div className="header">
        <div className="logo">U</div>
        <div>
          <div className="title">Create User</div>
          <div className="subtitle">Quickly add a new user to the database</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" required value={formData.name} onChange={handleChange} placeholder="Full name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input name="password" type="password" required value={formData.password} onChange={handleChange} placeholder="••••••••" />
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Saving..." : "Create user"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => setFormData({ name: "", email: "", password: "" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
