import React from 'react';
import CSVInput from "./CSVInput"
// import ReactFileReader from 'react-file-reader';

class Upload extends React.Component {

	handleChange(e) {

		e.preventDefault();
		console.log(e, 'handleChange')
	}

	render() {
		return (
			<form className="upload-form" method="post">
				<CSVInput />
				<button 
					className="upload-submit"
					onClick={(e) => this.handleChange(e)}>
				submit</button>
			</form>
		)
	}
}

export default Upload