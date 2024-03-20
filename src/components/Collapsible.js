import React, { useState, useRef } from "react";
import "./Collapsible.css";

const Collapsible = (props) => {
	const [open, setOPen] = useState(false);

	const toggle = () => {
		setOPen(!open);
	};

	const contentRef = useRef();

	return (
		<div className="main-container">
			<button className="Coll-button" onClick={toggle}>{props.label}</button>
			<div
				className="content-parent"
				ref={contentRef}
				style={
					open
						? { height: contentRef.current.scrollHeight + "px" }
						: { height: "0px" }
				}>
				<div className="content">{props.children}</div>
			</div>
		</div>
	);
};

export default Collapsible;
