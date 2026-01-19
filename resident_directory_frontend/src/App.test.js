import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Residents page heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: /residents/i });
  expect(heading).toBeInTheDocument();
});
