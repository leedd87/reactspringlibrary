import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";

function Scrolling() {
	const [flip, set] = useState(false);

	const words = ["We", "came.", "We", "saw.", "We", "kicked", "its", "ass."];

	const { scroll } = useSpring({
		scroll: (words.length - 1) * 50,
		from: { scroll: 0 },
		reset: true,
		reverse: flip,
		delay: 200,
		config: config.molasses,
		onRest: () => set(!flip),
	});

	return (
		<animated.div
			style={{
				position: "relative",
				width: "100%",
				height: 200,
				overflow: "auto",
				fontSize: "5em",
			}}
			scrollTop={scroll}
		>
			{words.map((word, i) => (
				<div
					key={`${word}_${i}`}
					style={{
						width: "100%",
						height: 100,
						textAlign: "center",
					}}
				>
					{word}
				</div>
			))}
		</animated.div>
	);
}

export default Scrolling;
