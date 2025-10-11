import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("can add a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new todo");
        const button = screen.getByText("Add Todo");

        fireEvent.change(input, { target: { value: "Test new todo" } });
        fireEvent.click(button);

        expect(screen.getByText("Test new todo")).toBeInTheDocument();
    });

    test("can toggle todo completion", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: line-through");

        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle("text-decoration: none");
    });

    test("can delete a todo", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");
        const deleteButton = screen.getByTestId(/delete-1/i);

        fireEvent.click(deleteButton);
        expect(todoItem).not.toBeInTheDocument();
    });
});
