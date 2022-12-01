import { render, screen } from "@testing-library/react";
import ForgotModal from "../../Components/forgotModal";

//! add backend test

test("Should render modal", () => {
  render(<ForgotModal />);
  const FM1 = screen.getByTestId("FM1");
  expect(FM1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<ForgotModal />);

  //* forgot password
  const FM2 = screen.getByTestId("FM2");
  expect(FM2).toBeInTheDocument();

  //* email
  const FM4 = screen.getByTestId("FM4");
  expect(FM4).toBeInTheDocument();

  //* send
  const FM6 = screen.getByTestId("FM6");
  expect(FM6).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<ForgotModal />);
  const FM3 = screen.getByTestId("FM3");
  expect(FM3).toBeInTheDocument();
});

test("Should render send button", () => {
  render(<ForgotModal />);
  const FM5 = screen.getByTestId("FM5");
  expect(FM5).toBeInTheDocument();
});
