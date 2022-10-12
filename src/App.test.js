import React from "react";
import { render, screen } from "@testing-library/react";
4;
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/WEB APP - JUEZSW/i);
  expect(linkElement).toBeInTheDocument();
});
