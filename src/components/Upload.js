import React from "react";
import Papa from "papaparse";
import axios from "axios";
import "./styles/upload.css";
// import CSVInput from "./CSVInput"

const localhost = "http://localhost:3000";
// const heroku = "https://secret-mountain-48217.herokuapp.com";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      season: "",
      grad_class: "null",
      students: [],
      file: [],
      status: ''
    };
    this.handleFiles = this.handleFiles.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  handleYearChange(e) {
    e.preventDefault();
    this.setState({ year: e.target.value });
  }

  handleSeasonChange(e) {
    e.preventDefault();
    this.setState({ season: e.target.value });
  }

  updateFile(file) {
    console.log(file.data);
    this.setState({ file: file.data });
  }

  handleFiles(csv) {
    Papa.parse(csv, {
      header: true,
      complete: results => this.updateFile(results),
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      grad_class: `${this.state.year}_${this.state.season}`,
    });

    var csvFile = document.getElementsByClassName("csv-upload")[0].files[0];
    this.handleFiles(csvFile);

    if (this.state.grad_class !== "null") {
      axios
        .post(`${localhost}/gradclass/add/`, {
          class_name: this.state.grad_class,
        })
        .then(data => {
          return data;
        })
        .then(data => {
          let id = parseInt(data.data);
          this.state.file.map(student => {
            axios.post(`${localhost}/graduates/add`, {
              class_name: id,
              ...student,
            });
          });
        })
        .then(() => console.log("added"));
    }
   return this.setState({ status: 'complete' }) 
    // console.log(e, "handleChange");
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
            <option></option>
            <option>Fall</option>
            <option>Spring</option>
          </select>
        </div>
        <div>
          <input type="file" accept=".csv" className="csv-upload" />
        </div>

        <button className="upload-submit" onClick={e => this.handleSubmit(e)}>
          add class
        </button>
      </form>
    );
  }
}

export default Upload;
