import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import ResetPassword from "../../Pages/resetPass";

//! add backend test

test("Should render page", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );
  const RP1 = screen.getByTestId("RP1");
  expect(RP1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );

  //* reset password
  const RP2 = screen.getByTestId("RP2");
  expect(RP2).toBeInTheDocument();

  //* password
  const RP4 = screen.getByTestId("RP4");
  expect(RP4).toBeInTheDocument();

  //* confirm password
  const RP6 = screen.getByTestId("RP6");
  expect(RP6).toBeInTheDocument();

  //* reset password
  const RP8 = screen.getByTestId("RP8");
  expect(RP8).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );

  //* password
  const RP3 = screen.getByTestId("RP3");
  expect(RP3).toBeInTheDocument();

  //* confirm password
  const RP5 = screen.getByTestId("RP5");
  expect(RP5).toBeInTheDocument();
});

test("Should render reset password button", () => {
  render(
    <Router>
      <ResetPassword />
    </Router>
  );
  const RP7 = screen.getByTestId("RP7");
  expect(RP7).toBeInTheDocument();
});
