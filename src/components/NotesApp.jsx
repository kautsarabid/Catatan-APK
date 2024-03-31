import React from "react";
import NotesNavbar from "./NotesNavbar";
import NotesList from "./NotesList";
import NotesInput from "./NotesInput";

// Mengambil data
import { getInitialData } from "../utils/index";

class NotesApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
			archived: false,
			search: "",
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);

		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);

		this.onArchivedHandler = this.onArchivedHandler.bind(this);

		this.onUnArchivedHandler = this.onUnArchivedHandler.bind(this);

		this.onSearchHandler = this.onSearchHandler.bind(this);
	}

	onSearchHandler(e) {
		const searchKeyword = e.target.value.toLowerCase();
		this.setState({
			search: searchKeyword,
		});
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		this.setState({ notes });
	}

	onArchivedHandler(id) {
		this.setState((prevState) => {
			return {
				notes: prevState.notes.map((note) =>
					note.id === id ? { ...note, archived: true } : note
				),
				archived: !prevState.archived,
			};
		});
	}

	onUnArchivedHandler(id) {
		this.setState((prevState) => {
			return {
				notes: prevState.notes.map((note) =>
					note.id === id ? { ...note, archived: false } : note
				),
				archived: !prevState.archived,
			};
		});
	}

	onAddNoteHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title,
						body,
						createdAt: new Date().toISOString(),
						archived: false,
					},
				],
			};
		});
	}

	render() {
		const { notes, search } = this.state;
		const filteredNotes = notes.filter((note) =>
			note.title.toLowerCase().includes(search.toLowerCase())
		);
		const activeNotes = filteredNotes.filter((note) => !note.archived);
		const archivedNotes = filteredNotes.filter((note) => note.archived);
		return (
			<>
				<header>
					<NotesNavbar onChangeSearch={this.onSearchHandler} />
				</header>

				<main className="note-app__body">
					<div className="note-input">
						<h2>Buat Catatan</h2>
						<NotesInput addNote={this.onAddNoteHandler} />
					</div>

					<h2>Catatan Aktif</h2>
					<NotesList
						notes={activeNotes}
						onDelete={this.onDeleteHandler}
						onArchived={this.onArchivedHandler}
					/>

					<h2>Arsip</h2>
					<NotesList
						notes={archivedNotes}
						onDelete={this.onDeleteHandler}
						onArchived={this.onArchivedHandler}
						onUnArchived={this.onUnArchivedHandler}
					/>
				</main>
			</>
		);
	}
}

export default NotesApp;
