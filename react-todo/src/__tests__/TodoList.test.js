import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    // Test 1: Initial Render
    test('renders TodoList component with initial todos', () => {
        render(<TodoList />);

        // Check if component renders
        expect(screen.getByTestId('todo-list')).toBeInTheDocument();

        // Check if initial todos are displayed
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
        expect(screen.getByText('Write Tests')).toBeInTheDocument();

        // Check if form is present
        expect(screen.getByTestId('add-todo-form')).toBeInTheDocument();
        expect(screen.getByTestId('todo-input')).toBeInTheDocument();
        expect(screen.getByTestId('add-button')).toBeInTheDocument();
    });

    // Test 2: Adding Todos
    test('adds a new todo when form is submitted', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        // Add a new todo
        await user.type(input, 'New Test Todo');
        await user.click(addButton);

        // Check if new todo is added
        expect(screen.getByText('New Test Todo')).toBeInTheDocument();

        // Check if input is cleared after submission
        expect(input).toHaveValue('');
    });

    test('does not add empty todo', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const initialTodoCount = screen.getAllByText(/todo/i).length;

        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        // Try to add empty todo
        await user.type(input, '   '); // Only spaces
        await user.click(addButton);

        // Check that no new todo was added
        expect(screen.getAllByText(/todo/i).length).toBe(initialTodoCount);
    });

    // Test 3: Toggling Todos
    test('toggles todo completion status when clicked', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const todoText = screen.getByText('Learn React');
        const todoItem = todoText.closest('[data-testid^="todo-item-"]');

        // Initially should not be completed
        expect(todoItem).not.toHaveClass('completed');

        // Click to toggle completion
        await user.click(todoText);

        // Should now be completed
        expect(todoItem).toHaveClass('completed');

        // Click again to toggle back
        await user.click(todoText);

        // Should not be completed again
        expect(todoItem).not.toHaveClass('completed');
    });

    // Test 4: Deleting Todos
    test('deletes a todo when delete button is clicked', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const todoToDelete = 'Learn React';
        expect(screen.getByText(todoToDelete)).toBeInTheDocument();

        const deleteButton = screen.getByTestId('delete-button-1');

        // Delete the todo
        await user.click(deleteButton);

        // Check that todo is removed
        expect(screen.queryByText(todoToDelete)).not.toBeInTheDocument();
    });

    // Test 5: Statistics Display
    test('displays correct todo statistics', () => {
        render(<TodoList />);

        const stats = screen.getByText(/Total: 3 \| Completed: 1 \| Pending: 2/);
        expect(stats).toBeInTheDocument();
    });

    // Test 6: Form Submission with Enter Key
    test('adds todo when Enter key is pressed', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const input = screen.getByTestId('todo-input');

        // Type and press Enter
        await user.type(input, 'Todo with Enter{enter}');

        // Check if new todo is added
        expect(screen.getByText('Todo with Enter')).toBeInTheDocument();
    });

    // Test 7: Empty State
    test('displays empty state when no todos', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        // Delete all todos
        const deleteButtons = screen.getAllByTestId(/delete-button-/);

        for (const button of deleteButtons) {
            await user.click(button);
        }

        // Check empty state message
        expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
    });
});

describe('AddTodoForm Component', () => {
    test('add button is disabled when input is empty', () => {
        render(<TodoList />);

        const addButton = screen.getByTestId('add-button');
        expect(addButton).toBeDisabled();
    });

    test('add button is enabled when input has text', async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const input = screen.getByTestId('todo-input');
        const addButton = screen.getByTestId('add-button');

        await user.type(input, 'New Todo');

        expect(addButton).not.toBeDisabled();
    });
});