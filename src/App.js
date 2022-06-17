import "./App.css";
import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import Scrolling from "./components/ScrollingSpring";

function App() {
	const [flip, setFlip] = useState(false);

	const props = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		reset: true,
		reverse: flip,
		delay: 200,
		config: config.molasses,
		onRest: () => setFlip(!flip),
	});

	return (
		<>
			<animated.div style={props}>
				<h1>Hello Universo</h1>
			</animated.div>
			<Scrolling />
		</>
	);
}

export default App;
