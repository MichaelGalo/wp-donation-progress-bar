import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div></div>
			<h1>Hello World</h1>
			<div>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
			<p>Don't click the button.</p>
		</>
	);
}

export default App;
