import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Sidebar from "../../Components/sidebar.js";

//! add backend test

test("Should render modals", () => {
  render(
    <Router>
      <Sidebar />
    </Router>
  );
  const SB1 = screen.getByTestId("SB1");
  expect(SB1).toBeInTheDocument();
});
