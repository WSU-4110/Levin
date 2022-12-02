import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import PrivacyPolicy from "../../Pages/privacypol.js";

test("Should render all content", () => {
  render(
    <Router>
      <PrivacyPolicy />
    </Router>
  );
  const PP1 = screen.getByTestId("PP1");
  expect(PP1).toBeInTheDocument();
});
