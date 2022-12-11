import { render, screen } from "@testing-library/react";
import LoginModal from "../Components/loginModal";



test("Should render modals", () => {
  render(<LoginModal />);

  //* logged out
  const loginElement3 = screen.getByTestId("loginElement3");
  expect(loginElement3).toBeInTheDocument();

  //* sign up
  const loginElement11 = screen.getByTestId("loginElement11");
  expect(loginElement11).toBeInTheDocument();

  //* forgot password
  const loginElement13 = screen.getByTestId("loginElement13");
  expect(loginElement13).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<LoginModal />);

  //* log in
  const loginElement4 = screen.getByTestId("loginElement4");
  expect(loginElement4).toBeInTheDocument();

  //* email
  const loginElement6 = screen.getByTestId("loginElement6");
  expect(loginElement6).toBeInTheDocument();

  //* password
  const loginElement8 = screen.getByTestId("loginElement8");
  expect(loginElement8).toBeInTheDocument();

  const loginElement10 = screen.getByTestId("loginElement10");
  expect(loginElement10).toBeInTheDocument();

  const loginElement12 = screen.getByTestId("loginElement12");
  expect(loginElement12).toBeInTheDocument();

  const loginElement14 = screen.getByTestId("loginElement14");
  expect(loginElement14).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<LoginModal />);

  
  const loginElement5 = screen.getByTestId("loginElement5");
  expect(loginElement5).toBeInTheDocument();

  const loginElement7 = screen.getByTestId("loginElement7");
  expect(loginElement7).toBeInTheDocument();
});

test("Should render log in button", () => {
  render(<LoginModal />);
  const loginElement9 = screen.getByTestId("loginElement9");
  expect(loginElement9).toBeInTheDocument();
});
