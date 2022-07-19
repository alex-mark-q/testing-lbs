import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

// test('renders learn react link', () => {
//   // 1. render the component we want to test
//   render(<App />);
//   // 2. finding the elements
//   const linkElement = screen.getByText(/Email address/i);
//   // 3. 
//   expect(linkElement).toBeInTheDocument();
// });

// test("inputs should be initially empty", () => {
//   render(<App/>);
//   const passwordInputElement = screen.getByLabelText("Password");
//   const confirmPasswordInpurElement = screen.getByLabelText(/confirm password/i);
//   expect(passwordInputElement.value).toBe("");
//   expect(confirmPasswordInpurElement.value).toBe("");
// });

// test("should be able to type an email", () => {
//   render(<App/>);
//   const emailInputElement = screen.getByRole("textbox", {
//     name: /email/i,
//   });
//   userEvent.type(emailInputElement, "selena@gmail.com");
//   expect(emailInputElement.value).toBe("selena@gmail.com");
// });