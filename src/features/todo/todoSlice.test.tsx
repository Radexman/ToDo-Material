import { store } from "../../app/store";
import {
  addTask,
  completeTask,
  deleteTask,
  deleteAllTasks,
  startEditTask,
  saveTask,
  cancelEditTask,
} from "./todoSlice";

describe("todoSlice should", () => {
  test("add new todo", () => {
    let state = store.getState().todo;
    const initialTodoCount = state.tasks.length;

    store.dispatch(
      addTask({
        name: "Test Name",
        date: "Test Date",
        isDone: false,
        id: "5",
      }),
    );
    state = store.getState().todo;
    const newTodo = state.tasks.find(state => state.id === "5");

    expect(newTodo?.name).toBe("Test Name");
    expect(newTodo?.date).toBe("Test Date");
    expect(newTodo?.isDone).toBeFalsy();
    expect(state.tasks.length).toBeGreaterThan(initialTodoCount);
  });

  test("update a todo isDone propery with id", () => {
    let state = store.getState().todo;
    const unchangedTodo = state.tasks.find(task => task.id === "1");

    expect(unchangedTodo?.name).toBe("Clean room");
    expect(unchangedTodo?.date).toBe("2024-07-25");
    expect(unchangedTodo?.isDone).toBeFalsy();

    store.dispatch(completeTask(unchangedTodo!));
    state = store.getState().todo;
    let changedTodo = state.tasks.find(task => task.id === "1");

    expect(changedTodo?.isDone).toBeTruthy();
  });

  test("delete a todo from the list with todo item", () => {
    let state = store.getState().todo;
    let todo = state.tasks.find(task => task.id === "1");
    const initialTodoCount = state.tasks.length;

    store.dispatch(deleteTask(todo!));
    state = store.getState().todo;

    expect(state.tasks.length).toBeLessThan(initialTodoCount);
  });

  test("delete all todos", () => {
    let state = store.getState().todo.tasks;
    const initialLength = state.length;

    store.dispatch(deleteAllTasks());
    state = store.getState().todo.tasks;
    const newLength = state.length;

    expect(initialLength).toBeGreaterThan(newLength);
    expect(newLength).toBe(0);
  });

  test("cancel editing", () => {
    let state = store.getState().todo;
    let editMode = state.taskBeingEdited;
    expect(editMode).toBeNull();

    store.dispatch(
      startEditTask({
        id: "1",
        name: "Clean Room",
        date: "2024-07-25",
        isDone: false,
      }),
    );

    store.dispatch(cancelEditTask());

    state = store.getState().todo;
    editMode = state.taskBeingEdited;
    expect(editMode).toBeNull();
  });

  test.skip("edit todo", () => {
    let state = store.getState().todo;
    let todo = state.tasks[0];

    expect(todo?.name).toBe("Clean room");
    expect(todo?.date).toBe("2024-07-25");

    store.dispatch(
      startEditTask({
        id: "1",
        name: "Clean Room",
        date: "2024-07-25",
        isDone: false,
      }),
    );
    store.dispatch(
      saveTask({
        id: "1",
        name: "Clean the room thoroughly",
        date: "2024-07-26",
        isDone: false,
      }),
    );

    state = store.getState().todo;
    todo = state.tasks[0];

    expect(todo?.name).toBe("Clean the room thoroughly");
    expect(todo?.date).toBe("2024-07-26");
  });
});
