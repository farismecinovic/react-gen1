import React, { createContext } from "react";
import "./App.css";
import BottomNavigation from "@mui/material/BottomNavigation";

import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import SingleNews from "./pages/NewsPage/SingleNews";

export const UserContext = createContext();

export default function App() {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    address: "",
    role: "",
  });

  const value = { user, setUser };

  let activeStyle = {
    textDecoration: "underline",
    color: "red",
  };

  let activeClassName = "underline";

  return (
    <div className="card-container">
      <h1>Welcome to React Router!</h1>
      <BottomNavigation showLabels>
        <NavLink
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>Home </h4>
        </NavLink>

        <NavLink
          to="/news"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <h4>News </h4>
        </NavLink>
      </BottomNavigation>

      <UserContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<SingleNews />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
