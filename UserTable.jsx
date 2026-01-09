import React, { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    fetchUsers();
    const handler = () => fetchUsers();
    window.addEventListener("usersUpdated", handler);
    return () => window.removeEventListener("usersUpdated", handler);
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/get-users");
      const data = await res.json();
      setUsers(data || []);
    } catch (err) {
      console.error(err);
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`http://localhost:3000/delete-user/${id}`, { method: "DELETE" });
      const data = await res.json();
      alert(data.message || "Deleted");
      fetchUsers();
    } catch (err) {
      alert("Delete failed");
    }
  }

  function startEdit(user) {
    setEditing(user._id);
    setEditForm({ name: user.name, email: user.email, password: user.password || "" });
  }

  function closeEdit() {
    setEditing(null);
    setEditForm({ name: "", email: "", password: "" });
  }

  async function submitEdit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/update-user/${editing}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Update failed");
      alert(data.message || "Updated");
      closeEdit();
      fetchUsers();
    } catch (err) {
      alert(err.message || "Update failed");
    }
  }

  return (
    <div className="card">
      <div className="space-between" style={{ marginBottom: 12 }}>
        <div>
          <h3 style={{ margin: 0 }}>Registered Users</h3>
          <div className="small">Manage, edit or delete users</div>
        </div>
        <div className="kv">Total: {users.length}</div>
      </div>

      <div className="table-wrap">
        {loading ? (
          <div className="empty">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="empty">No users found. Add one on the left.</div>
        ) : (
          <table className="table" cellSpacing="0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th style={{ width: 160 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td className="muted">{u.email}</td>
                  <td className="muted">{u.password ? "●●●●●●" : <span className="muted">—</span>}</td>
                  <td>
                    <div className="row-actions">
                      <button className="btn btn-ghost" onClick={() => startEdit(u)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => handleDelete(u._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="modal-backdrop" onMouseDown={closeEdit}>
          <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
            <div className="space-between" style={{ marginBottom: 8 }}>
              <div>
                <div style={{ fontWeight: 700 }}>{editForm.name || "Edit user"}</div>
                <div className="small">Change the user's info and click Save</div>
              </div>
              <div>
                <button className="btn btn-ghost" onClick={closeEdit}>Close</button>
              </div>
            </div>

            <form onSubmit={submitEdit}>
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} required />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" value={editForm.password} onChange={(e) => setEditForm({ ...editForm, password: e.target.value })} />
                <div className="small" style={{ marginTop: 6 }}>Leave password empty to keep current password.</div>
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button className="btn btn-primary" type="submit">Save changes</button>
                <button className="btn btn-ghost" type="button" onClick={closeEdit}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
