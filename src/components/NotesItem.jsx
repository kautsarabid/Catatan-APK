import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButtonNotes from "./DeleteButtonNotes";
import ArsipButtonNotes from "./ArsipButtonNotes";

export default function NotesItem({
	id,
	title,
	body,
	createdAt,
	onDelete,
	onArchived,
	archived,
	onUnArchived,
}) {
	return (
		<div className="note-item">
			<NotesItemBody title={title} createdAt={createdAt} body={body} />

			<div className="note-item__action">
				<DeleteButtonNotes id={id} onDelete={onDelete} />
				<ArsipButtonNotes
					id={id}
					onArchived={onArchived}
					archived={archived}
					onUnArchived={onUnArchived}
				/>
			</div>
		</div>
	);
}
