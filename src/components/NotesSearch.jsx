import React from "react";

export default function NotesSearch({ onChange }) {
	return (
		<div className="note-search">
			<input type="search" placeholder="cari catatan..." onChange={onChange} />
		</div>
	);
}
