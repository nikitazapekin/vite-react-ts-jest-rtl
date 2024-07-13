


import { render, screen } from "@testing-library/react";
import App from "./App";

test("inputs should be initially empty", () => {
  render(<App />);

   const emailInputElement = screen.getByRole<HTMLInputElement>("textbox");
   const passwordInputElement = screen.getByLabelText<HTMLInputElement>(/password/i);

   expect(emailInputElement.value).toBe("");
   expect(passwordInputElement.value).toBe("");
});
/*
*/