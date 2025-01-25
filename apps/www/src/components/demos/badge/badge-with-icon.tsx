import { Monicon } from "@monicon/react"

import { Badge } from "@/components/ui/badge"

export default function BadgeWithIcon() {
	return (
		<div className="flex justify-center">
			<Badge variant="info" className="gap-1">
				<Monicon name="ri:star-fill" size={14} />
				Featured
			</Badge>
		</div>
	)
}
