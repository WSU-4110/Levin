import { render, screen } from "@testing-library/react";
import TutorialModal from "../Components/tutorialModal.js";

test("Should render tutorial modal", () => {
  render(<TutorialModal />);
  const TM1 = screen.getByTestId("TM1");
  expect(TM1).toBeInTheDocument();
});

test("Should render tutorial title", () => {
  render(<TutorialModal />);
  const TM2 = screen.getByTestId("TM2");
  expect(TM2).toHaveTextContent("Tutorials");
});

test("Should render tutorial video 1 container", () => {
  render(<TutorialModal />);
  const TM3 = screen.getByTestId("TM3");
  expect(TM3).toBeInTheDocument();
});

test("Should render tutorial video 1 content", () => {
  render(<TutorialModal />);
  const TM4 = screen.getByTestId("TM4");
  expect(TM4).toBeInTheDocument();
});

test("Should render tutorial video 2 container", () => {
  render(<TutorialModal />);
  const TM5 = screen.getByTestId("TM5");
  expect(TM5).toBeInTheDocument();
});

test("Should render tutorial video 2 content", () => {
  render(<TutorialModal />);
  const TM6 = screen.getByTestId("TM6");
  expect(TM6).toBeInTheDocument();
});

test("Should render tutorial video 3 container", () => {
  render(<TutorialModal />);
  const TM7 = screen.getByTestId("TM7");
  expect(TM7).toBeInTheDocument();
});

test("Should render tutorial video 3 content", () => {
  render(<TutorialModal />);
  const TM8 = screen.getByTestId("TM8");
  expect(TM8).toBeInTheDocument();
});

test("Should render tutorial video 4 container", () => {
  render(<TutorialModal />);
  const TM9 = screen.getByTestId("TM9");
  expect(TM9).toBeInTheDocument();
});

test("Should render tutorial video 4 content", () => {
  render(<TutorialModal />);
  const TM10 = screen.getByTestId("TM10");
  expect(TM10).toBeInTheDocument();
});
