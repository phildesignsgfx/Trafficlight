import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColors, setSelectedColors] = useState("yellow");
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColors("red")}
				className={
					"light red" + (selectedColors === "red" ? "glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColors("yellow")}
				className={
					"light yellow" + (selectedColors === "yellow" ? "glow" : "")
				}></div>
			<div
				onClick={() => setSelectedColors("green")}
				className={
					"light green" + (selectedColors === "green" ? "glow" : "")
				}></div>
		</div>
	);
}

export default Home;
