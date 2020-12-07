import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div>
			<div className="topStick mx-auto" />
			<div
				className="stopLight
				mx-auto
				d-flex
				flex-column
				align-items-center
				justify-content-center">
				<div
					onClick={() => setColor("red")}
					className={
						color === "red" ? "red selected light" : "red light"
					}
				/>
				<div
					onClick={() => setColor("yellow")}
					className={
						color === "yellow"
							? "yellow selected light"
							: "yellow light"
					}
				/>
				<div
					onClick={() => setColor("green")}
					className={
						color === "green"
							? "green selected light"
							: "green light"
					}
				/>
			</div>
		</div>
	);
}
