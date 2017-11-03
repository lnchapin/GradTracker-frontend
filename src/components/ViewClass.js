import React, { Component } from 'react';
import './styles/ViewClass.css'
import axios from 'axios';
import questions from './Questions'

class ViewClass extends Component {
  constructor(props) {
    super(props);

      this.state = {
        answers:[],
        graduates: [],
      }
  }
    componentDidMount(){
      axios.get('https://secret-mountain-48217.herokuapp.com/answers')
        .then(res => {
          var answers = res.data
          this.setState({answers})
          console.log(answers)
        })
        axios.get('https://secret-mountain-48217.herokuapp.com/graduates')
        .then(res => {
          var graduates = res.data
          this.setState({graduates})

        })

       function compare(answers, graduates){
          for(var i = 0; i < answers.length; i++){
            if(graduates[i].id === answers.student_id){
              var names = graduates.first_name + " " + graduates.last_name
              console.log(names)
              this.setState({names})
              return names;

            }
          }
        }
        console.log(this.state.graduates)
     }

render() {
  const { answers, graduates } = this.state;
  console.log(this.state)
	return (

		<div id="answerWrapper">
      <table className="topTable">
        <tbody>
        <tr className="tr">
          <th>Name</th>
          <th>Question</th>
          <th>Answer</th>
        </tr>
        {answers.map((data) => (
        <tr className="tr" key={data.id}>
          <td> {data.student_id}</td>
          <td id="tdQuestion">{data.question_id} </td>
          <td id="tdBoby"> {data.twilio_body} </td>
        </tr>
      ))}
      </tbody>
      </table>
        {/* <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
          {graduates.map((data) => (  <tr>
            <td>{data.first_name} {data.last_name}</td>
            </tr>
            ))}
          </tbody>
        </table> */}

      <button id="getAnswer"><a href='/viewClass'>getAnswer</a></button>
    </div>

	)
}
}

export default ViewClass;
