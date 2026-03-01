// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const ProtectedRoute = ({ children, allowedRole }) => {
//   const { user, token, loading } = useContext(AuthContext);

//   // 🔹 Wait until auth finishes loading
//   if (loading) return null;

//   // 🔹 If not logged in
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // 🔹 If role restriction exists
//   if (allowedRole && user?.role !== allowedRole) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, token, loading } = useContext(AuthContext);

  console.log("TOKEN:", token);
  console.log("USER:", user);
  console.log("ALLOWED ROLE:", allowedRole);

  if (loading) return null;

  if (!token) {
    console.log("❌ No token");
    return <Navigate to="/" replace />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    console.log("❌ Role mismatch");
    return <Navigate to="/" replace />;
  }

  console.log("✅ Access granted");
  return children;
};
export default ProtectedRoute;
