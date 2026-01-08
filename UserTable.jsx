import React, { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/get-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Error fetching users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Registered Users</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={styles.td}>{user.name}</td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "90%",
    margin: "20px auto",
    overflowX: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};
