import './App.css'
import { BuyButton } from './components/BuyButton/BuyButton'
import { Score } from './components/Score/Score'
import { useState } from "react"


function App() {

	const [count, setCount] = useState(0);

	return (
		<>
			<BuyButton count={count} setCount={setCount} />
			<Score score={count} />
		</>
	)
}

export default App
