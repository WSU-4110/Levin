import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import Signup from "../Components/signupModal";


test("username input field should be rendered", () => {
    render(<Signup />);
    const usernameInputField = screen.getByTestId("username");
    expect(usernameInputField).toBeInTheDocument();
  });

  test("password input field should be rendered", () => {
    render(<Signup />);
    const passwordInputField = screen.getByTestId("password");
    expect(passwordInputField).toBeInTheDocument();
  });

  test("username input should be initialized as an empty string", () => {
    render(<Signup />);
    const username = screen.getByTestId("username");
    expect(username.value).toBe("");
  });
  
  test("password input should be initialized as an empty string", () => {
    render(<Signup />);
    const password = screen.getByTestId("password");
    expect(password.value).toBe("");
  });

  //method 1: SetUser
  test("username input value should change via SetUser", () => {
    render(<Signup />);
    const username = screen.getByTestId("username");
    const testInput = "user";
  
    fireEvent.change(username, { target: { value: testInput } });
    expect(username.value).toBe(testInput);
  });
  
  //method 2: SetPass
  test("password input value should change via SetPass", () => {
    render(<Signup />);
    const password = screen.getByTestId("password");
    const testInput = "pass";
  
    fireEvent.change(password, { target: { value: testInput } });
    expect(password.value).toBe(testInput);
  });
  

  //method 3: SetErrorMsg
  test("Error Message should appear via SetErrorMsg if password and confirm-password are not equal", 
  () => {
    render(<Signup />);

    //enter user
    const username = screen.getByTestId("username");
    const testUser = "user";
    fireEvent.change(username, { target: { value: testUser } });

    //enter pass
    const password = screen.getByTestId("password");
    const testPass = "pass";
    fireEvent.change(password, { target: { value: testPass } });

    //enter confirm pass
    const confirmPass = screen.getByTestId("confirmPass");
    const testConfirmPass = "pass1";
    fireEvent.change(confirmPass, { target: { value: testConfirmPass } });

    //click sign up button
    const submitButton = screen.getByTestId("submit");
    fireEvent.click(submitButton);
    const error = screen.getByTestId("error");

    expect(error.textContent).toBe("Passwords do not match!");
  });


  //method 4:handleSubmit
  //method 5: SetSuccessState
  test("Success State should be set to true using setSuccessState upon successfull registration in handleClick()", 
  async () => {
    render(<Signup />);

    //enter user
    const username = screen.getByTestId("username");
    const testUser = "username@gmail.com";
    fireEvent.change(username, { target: { value: testUser } });

    //enter pass
    const password = screen.getByTestId("password");
    const testPass = "pass";
    fireEvent.change(password, { target: { value: testPass } });

    //enter confirm pass
    const confirmPass = screen.getByTestId("confirmPass");
    const testConfirmPass = "pass";
    fireEvent.change(confirmPass, { target: { value: testConfirmPass } });

    //click sign up button
    const submitButton = screen.getByTestId("submit");
    fireEvent.click(submitButton);

    
    const successState = await screen.findByTestId("successState");

    await waitFor(() => expect(successState.textContent).toBe("true"));
    
  });
  

  //method 6: UseEffect
  test("UseEffect should render the error message to blank string after editing username/password input fields after an error", 
  () => {
    render(<Signup />);

    //enter user
    const username = screen.getByTestId("username");
    const testUser = "username@gmail.com";
    fireEvent.change(username, { target: { value: testUser } });

    //enter pass
    const password = screen.getByTestId("password");
    const testPass = "pass";
    fireEvent.change(password, { target: { value: testPass } });

    //enter confirm pass
    const confirmPass = screen.getByTestId("confirmPass");
    const testConfirmPass = "pass";
    fireEvent.change(confirmPass, { target: { value: testConfirmPass } });

    //click sign up button
    const submitButton = screen.getByTestId("submit");
    fireEvent.click(submitButton);

    //edit username input field
    fireEvent.change(username, { target: { value: testUser } });
    const error = screen.getByTestId("error");

    expect(error.textContent).toBe("");
    
  });
  