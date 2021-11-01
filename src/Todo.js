import React from "react";

export default function Todo({ todo, dispatch }) {
	// Problem with PROPS>TODO>ID

	return (
		<div className="todo-item">
			<span className={todo.complete ? "completed" : ""}>{todo.title}</span>
			<div className="actions" style={{ marginLeft: "auto" }}>
				<button type="button" onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: { id: todo.id } })}>
					<img src={require("./assets/images/check.png").default} alt="" />
				</button>
				<button type="button" onClick={() => dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })}>
					<img src={require("./assets/images/bin.png").default} alt="" />
				</button>
			</div>
		</div>
	);
}
