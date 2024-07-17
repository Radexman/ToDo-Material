import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/test-utils";

describe("App component should", () => {
  test("render correctly", () => {
    renderWithProviders(<App />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /hello world/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
