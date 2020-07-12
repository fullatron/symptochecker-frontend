import React from "react";
import "./App.css";
import Records from "./components/Records";

function App() {
	return (
		<div className="container">
			<div className="card shadow-lg">
				<div className="card-header text-center">Symptom Checker</div>
				<div id="step-container" className="card-block overflow-auto">
					<Records />
				</div>
				<div className="card-footer">
					<button
						id="next-step"
						className="btn btn-primary float-right"
					>
						Next <i className="fa fa-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
