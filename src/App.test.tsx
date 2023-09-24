import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

xtest("renders home page", () => {
  render(<App />);
  const catchyPhrase = screen.getByText(/Your Friendly Assistant/i);
  expect(catchyPhrase).toBeInTheDocument();
});
