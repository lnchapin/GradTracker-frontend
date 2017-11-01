import React from "react";
// import ReactFileReader from 'react-file-reader';
// import FileInput from "react-file-input";
import Papa from "papaparse";


class Upload extends React.Component {
	
	handleFiles(e) {
		const csvString = e.target.files[0];
    console.log(csvString)
    Papa.parse(csvString, {
      header: true,
      complete: function(results) {
        console.log(results.data, 'papaparse')
      }
    })
  }
  
  

  render() {
    return <div>
        <input type="file" accept=".csv" className="csv-upload" onChange={e => this.handleFiles(e)} />
        {/* <input
          className="csv-input"
          type="file"
          accept=".csv"
          onChange={(e) => this.handleFiles(e)}
        /> */}
      </div>;
  }
}

export default Upload;
