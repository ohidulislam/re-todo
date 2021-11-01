import { useState, useReducer } from "react";
import Todo from "./Todo";
import "./App.css";

function reducer(todos, action) {
	switch (action.type) {
		case "ADD_TODO":
			return [...todos, action.payload];
		case "TOGGLE_COMPLETE":
			return todos.map((todo) => {
				return todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo;
			});
		case "DELETE_TODO":
			return todos.filter((todo) => todo.id !== action.payload.id);
		default:
			return todos;
	}
}

function App() {
	const [title, setTitle] = useState("");
	const [todos, dispatch] = useReducer(reducer, [
		{ id: 1635785671453, title: "Need to add search bar", complete: false },
		{ id: 1635785738404, title: "need to add calendar picker for individual todo", complete: false },
		{ id: 1635785843041, title: "Need to add history list", complete: false },
		{ id: 1635786086775, title: "Need to add priority option and priority filter", complete: false },
		{ id: 1635786100631, title: "Drag and drop feature", complete: false },
	]);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
		dispatch({ type: "ADD_TODO", payload: { id: Date.now(), title, complete: false } });
	};

	return (
		<div className="App">
			<div className="todo-form">
				<form onSubmit={handleFormSubmit}>
					<input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Write a todo..." />
				</form>
			</div>

			{todos.map((todo) => {
				return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
			})}
		</div>
	);
}

export default App;
