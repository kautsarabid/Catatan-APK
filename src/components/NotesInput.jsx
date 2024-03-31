import React from "react";

class NotesInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);

		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);

		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(e) {
		this.setState(() => {
			return {
				title: e.target.value,
			};
		});
	}

	onBodyChangeEventHandler(e) {
		this.setState(() => {
			return {
				body: e.target.value,
			};
		});
	}

	onSubmitEventHandler(e) {
		e.preventDefault();
		this.props.addNote(this.state);
	}

	render() {
		return (
			<form onSubmit={this.onSubmitEventHandler}>
				<p className="note-input__title__char-limit">Sisa Karakter : 50</p>

				<input
					className="note-input__title"
					type="text"
					placeholder="Masukkan Title..."
					value={this.state.title}
					onChange={this.onTitleChangeEventHandler}
					required
				/>

				<textarea
					className="note-input__body"
					type="text"
					placeholder="Masukkan Catatan Anda"
					value={this.state.body}
					onChange={this.onBodyChangeEventHandler}
					required
				></textarea>

				<button type="submit">Buat</button>
			</form>
		);
	}
}

export default NotesInput;
