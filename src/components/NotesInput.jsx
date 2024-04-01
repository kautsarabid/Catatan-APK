import React from "react";

class NotesInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
			remainingChars: 50,
			isTitleActive: true,
			showLimitMessage: false,
		};

		this.titleInputRef = React.createRef();

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);

		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);

		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

		this.onTitleLimitEventHandler = this.onTitleLimitEventHandler.bind(this);
	}

	onTitleLimitEventHandler(e) {
		const title = e.target.value;
		const remainingChars = 50 - title.length;
		const isTitleActive =
			title.length <= 50 || title.length < this.state.title.length;
		const showLimitMessage = title.length >= 50;
		this.setState({ title, remainingChars, isTitleActive, showLimitMessage });

		if (title.length >= 50) {
			this.titleInputRef.current.value = title.slice(0, 49); // Potong judul menjadi 50 karakter
		}
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
				<p className="note-input__title__char-limit">
					Sisa Karakter : {this.state.remainingChars}
				</p>

				{this.state.showLimitMessage && (
					<p className="note-input__title__char-limit">
						Telah mencapai batas karakter
					</p>
				)}

				<input
					className="note-input__title"
					type="text"
					placeholder="Masukkan Title..."
					value={this.state.title}
					onChange={this.onTitleChangeEventHandler}
					onInput={this.onTitleLimitEventHandler}
					ref={this.titleInputRef}
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
