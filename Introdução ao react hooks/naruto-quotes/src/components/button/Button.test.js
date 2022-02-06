import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with", () => {
  render(<Button>Parara</Button>);

  const buttonEl = screen.getByText("Parara");

  expect(buttonEl).toBeInTheDocument();
});
