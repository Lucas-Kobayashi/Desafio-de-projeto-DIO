import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";

const response = { speaker: "Speaker", quote: "Test quote" };

const server = setupServer(
  rest.get("http://127.0.0.1:5000", (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

test("render the app with a image, a quote and a button", () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  const imageEl = screen.getByRole("img");
  const textEl = screen.getByText(/Loading speaker.../);

  expect(buttonEl).toBeInTheDocument();
  expect(imageEl).toBeInTheDocument();
  expect(textEl).toBeInTheDocument();
});

test("calls api on button click and update its text", async () => {
  render(<App />);

  const buttonEl = screen.getByRole("button");
  fireEvent.click(buttonEl);
});
