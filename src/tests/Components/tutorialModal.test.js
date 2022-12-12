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

  //* Tutorial Modal Showcase
  const TM4 = screen.getByTestId("TM4");
  expect(TM4).toBeInTheDocument();

  //* Drag Background and Containers
  const TM6 = screen.getByTestId("TM6");
  expect(TM6).toBeInTheDocument();

  //* Manipulating Containers
  const TM8 = screen.getByTestId("TM8");
  expect(TM8).toBeInTheDocument();

  //* TDownload Sitemap as an Image
  const TM10 = screen.getByTestId("TM10");
  expect(TM10).toBeInTheDocument();
});

test("Should render videos", () => {
  render(<TutorialModal />);

  //* Tutorial Modal Showcase
  const TM3 = screen.getByTestId("TM3");
  expect(TM3).toBeInTheDocument();

  //* Drag Background and Containers
  const TM5 = screen.getByTestId("TM5");
  expect(TM5).toBeInTheDocument();

  //* Manipulating Containers
  const TM7 = screen.getByTestId("TM7");
  expect(TM7).toBeInTheDocument();

  //* TDownload Sitemap as an Image
  const TM9 = screen.getByTestId("TM9");
  expect(TM9).toBeInTheDocument();
});
