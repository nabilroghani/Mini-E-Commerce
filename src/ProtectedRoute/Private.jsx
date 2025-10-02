import { Navigate, Outlet } from "react-router-dom";

export default function Private() {
  const users = localStorage.getItem("currentUser");

  return users ? <Outlet /> : <Navigate to={"/login"} />;
}
