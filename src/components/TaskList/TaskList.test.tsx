import { screen } from "@testing-library/dom";
import { renderWithProviders } from "../../utils/test-utils";
import TaskList from "./TaskList";
import type { Todo } from "../../types/appTypes.types";

describe("TaskList component should", () => {
  test("render correctly", () => {
    renderWithProviders(<TaskList />);

    const headingElement = screen.getByRole("heading", {
      level: 2,
      name: /tasks for today/i,
    });

    expect(headingElement).toBeInTheDocument();
  });
  test("render correct amount of todos", () => {
    const initailState: Todo[] = [
      {
        name: "Clean room",
        date: "25.07.2024",
        isDone: true,
        id: "1",
      },
      {
        name: "Walk the dog",
        date: "26.07.2024",
        isDone: false,
        id: "2",
      },
      {
        name: "Read book",
        date: "27.07.2024",
        isDone: true,
        id: "3",
      },
      {
        name: "Workout",
        date: "27.07.2024",
        isDone: false,
        id: "4",
      },
    ];

    renderWithProviders(<TaskList />);

    const todoElements = screen.getAllByTestId("todo");
    expect(todoElements).toHaveLength(initailState.length);
  });

  test("not render ' No Tasks Yet' is there are items in the tasks array", () => {
    renderWithProviders(<TaskList />);

    const textElement = screen.queryByRole("heading", {
      level: 5,
      name: /no tasks yet/i,
    });

    expect(textElement).not.toBeInTheDocument();
  });
});
