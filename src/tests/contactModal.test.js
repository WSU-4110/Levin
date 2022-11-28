import { render, screen } from "@testing-library/react";
import ContactModal from "../Components/contactModal.js";

test("Should render contact modal", () => {
  render(<ContactModal />);
  const CM1 = screen.getByTestId("CM1");
  expect(CM1).toBeInTheDocument();
});

test("Should render contact title", () => {
  render(<ContactModal />);
  const CM2 = screen.getByTestId("CM2");
  expect(CM2).toBeInTheDocument();
});

test("Should render email input", () => {
  render(<ContactModal />);
  const CM3 = screen.getByTestId("CM3");
  expect(CM3).toBeInTheDocument();
});

test("Should render email title", () => {
  render(<ContactModal />);
  const CM4 = screen.getByTestId("CM4");
  expect(CM4).toBeInTheDocument();
});

test("Should render subject input", () => {
  render(<ContactModal />);
  const CM5 = screen.getByTestId("CM5");
  expect(CM5).toBeInTheDocument();
});

test("Should render subject title", () => {
  render(<ContactModal />);
  const CM6 = screen.getByTestId("CM6");
  expect(CM6).toBeInTheDocument();
});

test("Should render description input", () => {
  render(<ContactModal />);
  const CM7 = screen.getByTestId("CM7");
  expect(CM7).toBeInTheDocument();
});

test("Should render description title", () => {
  render(<ContactModal />);
  const CM8 = screen.getByTestId("CM8");
  expect(CM8).toBeInTheDocument();
});

test("Should render send button", () => {
  render(<ContactModal />);
  const CM9 = screen.getByTestId("CM9");
  expect(CM9).toBeInTheDocument();
});

test("Should render send title", () => {
  render(<ContactModal />);
  const CM10 = screen.getByTestId("CM10");
  expect(CM10).toBeInTheDocument();
});
