import { render, screen } from "@testing-library/react";
import SignupModal from "../../Components/signupModal";

//! add backend test

test("Should render modals", () => {
  render(<SignupModal />);
  const SM1 = screen.getByTestId("SM1");
  expect(SM1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<SignupModal />);

  //* sign up
  const SM2 = screen.getByTestId("SM2");
  expect(SM2).toBeInTheDocument();

  //* email
  const SM4 = screen.getByTestId("SM4");
  expect(SM4).toBeInTheDocument();

  //* password
  const SM6 = screen.getByTestId("SM6");
  expect(SM6).toBeInTheDocument();

  //* confirm password
  const SM8 = screen.getByTestId("SM8");
  expect(SM8).toBeInTheDocument();

  //* sign up button
  const SM10 = screen.getByTestId("SM10");
  expect(SM10).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<SignupModal />);

  //* email
  const SM3 = screen.getByTestId("SM3");
  expect(SM3).toBeInTheDocument();

  //* password
  const SM5 = screen.getByTestId("SM5");
  expect(SM5).toBeInTheDocument();

  //* confirm password
  const SM7 = screen.getByTestId("SM7");
  expect(SM7).toBeInTheDocument();
});

test("Should render log in button", () => {
  render(<SignupModal />);
  const SM9 = screen.getByTestId("SM9");
  expect(SM9).toBeInTheDocument();
});
