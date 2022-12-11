import { render, screen } from "@testing-library/react";
import ForgotModal from "../Components/forgotModal";


test("Should render modal", () => {
  render(<ForgotModal />);
  const forgotElement1 = screen.getByTestId("forgotElement1");
  expect(forgotElement1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<ForgotModal />);

  const forgotElement2 = screen.getByTestId("forgotElement2");
  expect(forgotElement2).toBeInTheDocument();


  const forgotElement4 = screen.getByTestId("forgotElement4");
  expect(forgotElement4).toBeInTheDocument();


  const forgotElement6 = screen.getByTestId("forgotElement6");
  expect(forgotElement6).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<ForgotModal />);
  const forgotElement3 = screen.getByTestId("forgotElement3");
  expect(forgotElement3).toBeInTheDocument();
});

test("Should render send button", () => {
  render(<ForgotModal />);
  const forgotElement5 = screen.getByTestId("forgotElement5");
  expect(forgotElement5).toBeInTheDocument();
});
