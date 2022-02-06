import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("render the app with a image, a quote and a button", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");
  const textEl = screen.getByText(/ok/);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});
