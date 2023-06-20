interface Props {
	setCount: React.Dispatch<React.SetStateAction<number>>
	count: number
}
export function BuyButton(props: Props) {

	function increment() {
		if (props.count < 10) {
			props.setCount((count: number) => count + 1)
		} else if (props.count < 50) {
			props.setCount((count: number) => count + 5)
		} else {
			props.setCount((count: number) => count + 10)
		}

	}
	return (
		<div>
			<button onClick={() => increment()}>CLICK !!</button>
		</div>
	)
}
