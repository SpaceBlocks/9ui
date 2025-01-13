import { Button, toast } from "9ui"

export default function ToastPromise() {
	return (
		<Button
			onClick={() =>
				toast.promise(
					new Promise((resolve) => {
						setTimeout(() => {
							resolve("Request sent")
						}, 2000)
					}),
					{
						loading: "Sending request...",
						success: "Request sent",
					}
				)
			}
		>
			Show Toast
		</Button>
	)
}
