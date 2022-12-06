import { render, screen } from "@testing-library/react";
import LoginModal from "../../Components/loginModal";

//! add backend test

test("Should render modals", () => {
  render(<LoginModal />);

  //*   //* logged in
  //*   const LM1 = screen.getByTestId("LM1");
  //*   expect(LM1).toBeInTheDocument();

  //* logged out
  const LM3 = screen.getByTestId("LM3");
  expect(LM3).toBeInTheDocument();

  //* sign up
  const LM11 = screen.getByTestId("LM11");
  expect(LM11).toBeInTheDocument();

  //* forgot password
  const LM13 = screen.getByTestId("LM13");
  expect(LM13).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<LoginModal />);

  //*   //* logged in successful
  //*   const LM2 = screen.getByTestId("LM2");
  //*   expect(LM2).toBeInTheDocument();

  //* log in
  const LM4 = screen.getByTestId("LM4");
  expect(LM4).toBeInTheDocument();

  //* email
  const LM6 = screen.getByTestId("LM6");
  expect(LM6).toBeInTheDocument();

  //* password
  const LM8 = screen.getByTestId("LM8");
  expect(LM8).toBeInTheDocument();

  //* login button
  const LM10 = screen.getByTestId("LM10");
  expect(LM10).toBeInTheDocument();

  //* sign up
  const LM12 = screen.getByTestId("LM12");
  expect(LM12).toBeInTheDocument();

  //* forgot password
  const LM14 = screen.getByTestId("LM14");
  expect(LM14).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<LoginModal />);

  //* email
  const LM5 = screen.getByTestId("LM5");
  expect(LM5).toBeInTheDocument();

  //* password
  const LM7 = screen.getByTestId("LM7");
  expect(LM7).toBeInTheDocument();
});

test("Should render log in button", () => {
  render(<LoginModal />);
  const LM9 = screen.getByTestId("LM9");
  expect(LM9).toBeInTheDocument();
});
