import React from "react";
import Papa from "papaparse";
// import CSVInput from "./CSVInput"

function CSVInput() {
  return (
    <div>
      <input
        type="file"
        accept=".csv"
        className="csv-upload"
        onChange={e => this.handleFiles(e)}
      />
    </div>
  );
}

class Upload extends React.Component {
  handleChange(e) {
    e.preventDefault();
    console.log(e, "handleChange");
  }

  handleFiles(e) {
    const csvString = e.target.files[0];
    console.log(csvString);
    Papa.parse(csvString, {
      header: true,
      complete: function(results) {
        console.log(results.data, "papaparse");
      },
    });
  }

  render() {
    return (
      <form className="upload-form" method="post">
        <CSVInput />
        <button className="upload-submit" onClick={e => this.handleChange(e)}>
          submit
        </button>
      </form>
    );
  }
}

export default Upload;
