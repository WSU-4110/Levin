import { render, screen } from "@testing-library/react";
import ContactModal from "../../Components/contactModal.js";

//! add backend test

test("Should render modal", () => {
  render(<ContactModal />);
  const CM1 = screen.getByTestId("CM1");
  expect(CM1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<ContactModal />);

  //* contact
  const CM2 = screen.getByTestId("CM2");
  expect(CM2).toBeInTheDocument();

  //* email
  const CM4 = screen.getByTestId("CM4");
  expect(CM4).toBeInTheDocument();

  //* subject
  const CM6 = screen.getByTestId("CM6");
  expect(CM6).toBeInTheDocument();

  //* description
  const CM8 = screen.getByTestId("CM8");
  expect(CM8).toBeInTheDocument();

  //* send
  const CM10 = screen.getByTestId("CM10");
  expect(CM10).toBeInTheDocument();
});

test("Should render input fields", () => {
  render(<ContactModal />);

  //* email
  const CM3 = screen.getByTestId("CM3");
  expect(CM3).toBeInTheDocument();

  //* subject
  const CM5 = screen.getByTestId("CM5");
  expect(CM5).toBeInTheDocument();

  //* description
  const CM7 = screen.getByTestId("CM7");
  expect(CM7).toBeInTheDocument();
});

test("Should render send button", () => {
  render(<ContactModal />);
  const CM9 = screen.getByTestId("CM9");
  expect(CM9).toBeInTheDocument();
});
