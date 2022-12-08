import { render, screen } from "@testing-library/react";
import TutorialModal from "../../Components/tutorialModal.js";

test("Should render modal", () => {
  render(<TutorialModal />);
  const TM1 = screen.getByTestId("TM1");
  expect(TM1).toBeInTheDocument();
});

test("Should render titles", () => {
  render(<TutorialModal />);

  //* tutorials
  const TM2 = screen.getByTestId("TM2");
  expect(TM2).toBeInTheDocument();

  //* video name
  const TM4 = screen.getByTestId("TM4");
  expect(TM4).toBeInTheDocument();
});

test("Should render videos", () => {
  render(<TutorialModal />);

  //* video name
  const TM3 = screen.getByTestId("TM3");
  expect(TM3).toBeInTheDocument();
});
