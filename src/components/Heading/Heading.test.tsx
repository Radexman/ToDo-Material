import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/test-utils";
import Heading from "./Heading";

describe("Heading component should", () => {
  test("render correctly", () => {
    renderWithProviders(<Heading />);

    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /todo list/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
