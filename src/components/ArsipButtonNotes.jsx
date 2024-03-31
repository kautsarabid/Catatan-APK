import React from "react";

export default function ArsipButtonNotes({
	id,
	onArchived,
	archived,
	onUnArchived,
}) {
	return (
		<button
			className="note-item__archive-button"
			onClick={() => (archived ? onUnArchived(id) : onArchived(id))}

			// if (archived) {
			// 	onUnArchived(id);
			// } else {
			// 	onArchived(id);
			// }
		>
			{archived ? "Pisahkan" : "Arsipkan"}
		</button>
	);
}
