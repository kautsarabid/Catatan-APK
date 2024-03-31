import React from "react";

export default function DeleteButtonNotes({ id, onDelete }) {
	return (
		<button
			className="note-item__delete-button"
			onClick={() => {
				onDelete(id);
			}}
		>
			Delete
		</button>
	);
}
