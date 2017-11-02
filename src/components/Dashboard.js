import React from 'react';
import Upload from "./Upload";

function AddClass() {
	return(
		<div>
				<Upload />
		</div>
	)
}

function ViewClass() {
  return (
		<div>
			<ul>
				<li>Loop over data here</li>
			</ul>
		</div>
	)
}

class Dashboard extends React.Component{
	render() {
		return(
			<div>
				<h1>hi</h1>
				<AddClass />
				{/* <ViewClass /> */}
			</div>
		)
	}
}

export default Dashboard;