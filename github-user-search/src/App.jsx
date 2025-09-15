import React from "react";
import Search from "./components/Search";

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}
