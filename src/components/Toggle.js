import React from "react";
import "./Toggle.css";

const ToggleSwitch = ({ label,onChange }) => {
return (
	<div className="container">
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox" name={label} id={label} onChange={onChange}/>
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;
