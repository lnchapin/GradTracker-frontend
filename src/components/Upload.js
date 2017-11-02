import React from "react";
import Papa from "papaparse";
import axios from "axios";
// import CSVInput from "./CSVInput"

const localhost = "http://localhost:3000/graduates/add";
const heroku = "https://secret-mountain-48217.herokuapp.com/";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      season: "",
    };
  }

  handleYearChange(e) {
    e.preventDefault();
    this.setState({ year: e.target.value });
  }

  handleSeasonChange(e) {
    e.preventDefault();
    this.setState({ season: e.target.value });
  }

  handleFiles(e) {
    const csvString = e.target.files[0];
    console.log(csvString);
    Papa.parse(csvString, {
      header: true,
      complete: function(results) {
        console.log(results.data, "papaparse");
        results.data.map(student => {
          student = {
            ...student,
            class_name: 2,
          };
          console.log(student);
          let encodedURI = window.encodeURI(localhost);
          axios.post(encodedURI, student, { crossdomain: true });
        });
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e, "handleChange");
  }

  render() {
    return (
      <form className="upload-form" method="post">
        <div>
          <label>Year Graduated</label>
          <input
            type="text"
            placeholder="2017"
            name="year"
            onChange={e => this.handleYearChange(e)}
          />
        </div>
        <div>
          <label>Season Graduated</label>
          <select
            type="text"
            name="season"
            onChange={e => this.handleSeasonChange(e)}
          >
            <option>Fall</option>
            <option>Spring</option>
          </select>
        </div>
        <div>
          <input
            type="file"
            accept=".csv"
            className="csv-upload"
            onChange={e => this.handleFiles(e)}
          />
        </div>
        <button className="upload-submit" onClick={e => this.handleSubmit(e)}>
          add class
        </button>
      </form>
    );
  }
}

export default Upload;
