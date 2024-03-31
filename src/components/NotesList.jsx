import React from "react";
import NotesItem from "./NotesItem";

export default function NotesList({
	notes,
	onDelete,
	onArchived,
	onUnArchived,
}) {
	if (notes.length === 0) {
		return <p className="notes-list__empty-message">Belum terdapat catatan.</p>;
	}
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NotesItem
					key={note.id}
					id={note.id}
					onDelete={onDelete}
					onArchived={onArchived}
					onUnArchived={onUnArchived}
					{...note}
				/>
			))}
		</div>
	);
}
