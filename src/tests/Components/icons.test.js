import { render, screen } from "@testing-library/react";
import Icons from "../../Components/pageIcons";

test("Should render animation", () => {
  render(<Icons />);
  const I1 = screen.getByTestId("I1");
  expect(I1).toBeInTheDocument();
});
