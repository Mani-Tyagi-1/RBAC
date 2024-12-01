import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminPage from "./AdminPage.jsx";
import UserPage from "./UserPage.jsx";
import ManagerPage from "./ManagerPage.jsx";

const Dashboard = () => {
  const [role, setRole] = useState("user"); // Role state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found.Please login.");
          setLoading(false);
          return;
        }

        // List of endpoints to check
        const roleEndpoints = [
          { role: "admin", url: "http://localhost:7001/api/user/admin" },
          { role: "manager", url: "http://localhost:7001/api/user/manager" },
          { role: "user", url: "http://localhost:7001/api/user/user" },
        ];

        for (const endpoint of roleEndpoints) {
          try {
            // Try accessing each role-specific endpoint
            const response = await axios.get(endpoint.url, {
              headers: { Authorization: `Bearer ${token}` },
            });
            console.log(response);

            if (response.status === 200) {
              setRole(response.data.role); // Set role based on successful response
              break;
            }
          } catch (err) {
            // Ignore errors for endpoints the user is not authorized to access
            continue;
          }
        }

        if (!role) {
          setError("Failed to determine user role.");
        }
      } catch (err) {
        console.error("Error checking role endpoints:", err);
        setError("Failed to determine user role.");
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  switch (role) {
    case "admin":
      return <AdminPage />;
    case "manager":
      return <ManagerPage role={role} />;
    case "user":
      return <UserPage />;
    default:
      return <h2>Unknown role. Please contact support.</h2>;
  }
};

export default Dashboard;
