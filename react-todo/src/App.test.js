import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders Todo App heading", () => {
  render(<App />);
  expect(screen.getByText(/My Todo App/i)).toBeInTheDocument();
});
