import React from "react";
import NotesSearch from "./NotesSearch";

export default function NotesNavbar({ onChangeSearch }) {
	return (
		<>
			<nav className="note-app__header">
				<h1>NOTES</h1>
				<NotesSearch onChange={onChangeSearch} />
			</nav>
		</>
	);
}
