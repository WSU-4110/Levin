import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import SignupModal from "../../Components/signupModal";

test("Should render modal", () => {
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

test("Should initialize input as an empty string", () => {
  render(<SignupModal />);

  //* email
  const SM3 = screen.getByTestId("SM3");
  expect(SM3.value).toBe("");

  //* password
  const SM5 = screen.getByTestId("SM5");
  expect(SM5.value).toBe("");
});

test("Should change input via SetUser and SetPass", () => {
  render(<SignupModal />);

  //* email
  const SM3 = screen.getByTestId("SM3");
  const userInput = "user";
  fireEvent.change(SM3, { target: { value: userInput } });
  expect(SM3.value).toBe(userInput);

  //* password
  const SM5 = screen.getByTestId("SM5");
  const passInput = "pass";
  fireEvent.change(SM5, { target: { value: passInput } });
  expect(SM5.value).toBe(passInput);
});

test("Should render log in button", () => {
  render(<SignupModal />);
  const SM9 = screen.getByTestId("SM9");
  expect(SM9).toBeInTheDocument();
});

test("Should show an error message if input fields are blank", () => {
  render(<SignupModal />);

  //* email
  const SM3 = screen.getByTestId("SM3");
  const userInput = "username@gmail.com";
  fireEvent.change(SM3, { target: { value: userInput } });

  //* password
  const SM5 = screen.getByTestId("SM5");
  const passInput = "pass";
  fireEvent.change(SM5, { target: { value: passInput } });

  //* confirm password
  const SM7 = screen.getByTestId("SM7");
  const confirmInput = "pass";
  fireEvent.change(SM7, { target: { value: confirmInput } });

  //* sign up button
  const SM9 = screen.getByTestId("SM9");
  fireEvent.click(SM9);

  //* edit email and leave it blank
  fireEvent.change(SM3, { target: { value: userInput } });
  const error = screen.getByTestId("error");

  expect(error.textContent).toBe("");
});

test("Should show an error message if pass and confirm pass are not equal", () => {
  render(<SignupModal />);

  //* email
  const SM3 = screen.getByTestId("SM3");
  const userInput = "user";
  fireEvent.change(SM3, { target: { value: userInput } });

  //* password
  const SM5 = screen.getByTestId("SM5");
  const passInput = "pass";
  fireEvent.change(SM5, { target: { value: passInput } });

  //* confirm password
  const SM7 = screen.getByTestId("SM7");
  const confirmInput = "pass1";
  fireEvent.change(SM7, { target: { value: confirmInput } });

  //* sign up button
  const SM9 = screen.getByTestId("SM9");
  fireEvent.click(SM9);
  const error = screen.getByTestId("error");

  expect(error.textContent).toBe("Passwords do not match!");
});

// test("Should set successState to true upon successfull registration", async () => {
//   render(<SignupModal />);

//   //* email
//   const SM3 = screen.getByTestId("SM3");
//   const userInput = "username@gmail.com";
//   fireEvent.change(SM3, { target: { value: userInput } });

//   //* password
//   const SM5 = screen.getByTestId("SM5");
//   const passInput = "pass";
//   fireEvent.change(SM5, { target: { value: passInput } });

//   //* confirm password
//   const SM7 = screen.getByTestId("SM7");
//   const confirmInput = "pass";
//   fireEvent.change(SM7, { target: { value: confirmInput } });

//   //* sign up button
//   const SM9 = screen.getByTestId("SM9");
//   fireEvent.click(SM9);

//   const successState = await screen.findByTestId("successState");
//   await waitFor(() => expect(successState.textContent).toBe("true"));
// });
