import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import TermsAndConditions from "../../Pages/terms&con.js";

test("Should render all content", () => {
  render(
    <Router>
      <TermsAndConditions />
    </Router>
  );
  const TC1 = screen.getByTestId("TC1");
  expect(TC1).toBeInTheDocument();
});
