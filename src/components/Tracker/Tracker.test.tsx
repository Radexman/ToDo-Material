import { screen } from "@testing-library/dom";

import { renderWithProviders } from "../../utils/test-utils";
import Tracker from "./Tracker";
import type { Todo } from "../../types/appTypes.types";

describe("Tracker component should", () => {
  test("render correctly", () => {
    renderWithProviders(<Tracker />);
    const trackerElement = screen.getByTestId("tracker");
    expect(trackerElement).toBeInTheDocument();
  });

  test("render correct amount of tasks", () => {
    const tasks: Todo[] = [
      {
        name: "Clean room",
        date: "2024-07.25",
        isDone: false,
        id: "1",
      },
      {
        name: "Walk the dog",
        date: "2024-07.25",
        isDone: false,
        id: "2",
      },
      {
        name: "Read book",
        date: "2024-07.25",
        isDone: false,
        id: "3",
      },
      {
        name: "Workout",
        date: "2024-07.25",
        isDone: false,
        id: "4",
      },
    ];

    renderWithProviders(<Tracker />);

    const trackerElement = screen.getByTestId("tracker");

    expect(trackerElement).toHaveTextContent(tasks.length.toString());
  });
});
