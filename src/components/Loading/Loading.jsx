export default function Loading() {
	return (
		<div
			style={{
				display: "block",
				zIndex: 1000,
				width: "80px",
				height: "80px",
				borderRadius: "50%",
				borderBottom: "6px solid green",
				borderTop: "6px solid orange",
				borderLeft: "6px solid red",
				borderRight: "6px solid blueviolet",
				animation: "rotate 1.5s infinite linear",
				position: "fixed",
				top: "45%",
				left: "45%",
				transform: "translate(-50%, -50%)"
			}}>
			<style>
				{`
				@keyframes rotate {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
				`}
			</style>
		</div>
	);
}
