import { type SidebarNavGroup } from "@/types/nav"

export interface NavConfig {
	sidebarNav: SidebarNavGroup[]
}

export const navConfig: NavConfig = {
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/getting-started/introduction",
				},
				{
					title: "Installation",
					href: "/docs/getting-started/installation",
					disabled: true,
				},
				{
					title: "Theming",
					href: "/docs/getting-started/theming",
					disabled: true,
				},
				{
					title: "Dark mode",
					href: "/docs/getting-started/dark-mode",
					disabled: true,
				},
				{
					title: "Changelog",
					href: "/docs/changelog",
					disabled: true,
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Accordion",
					href: "/docs/components/accordion",
				},
				{
					title: "Alert Dialog",
					href: "/docs/components/alert-dialog",
				},
				{
					title: "Alert",
					href: "/docs/components/alert",
				},
				{
					title: "Aspect Ratio",
					href: "/docs/components/aspect-ratio",
				},
				{
					title: "Avatar",
					href: "/docs/components/avatar",
				},
				{
					title: "Badge",
					href: "/docs/components/badge",
				},
				{
					title: "Breadcrumbs",
					href: "/docs/components/breadcrumbs",
				},
				{
					title: "Button",
					href: "/docs/components/button",
				},
				{
					title: "Calendar",
					href: "/docs/components/calendar",
				},
				{
					title: "Card",
					href: "/docs/components/card",
				},
				{
					title: "Carousel",
					href: "/docs/components/carousel",
				},
				{
					title: "Checkbox",
					href: "/docs/components/checkbox",
				},
				{
					title: "Collapsible",
					href: "/docs/components/collapsible",
				},
				{
					title: "Context Menu",
					href: "/docs/components/context-menu",
				},
				{
					title: "Dialog",
					href: "/docs/components/dialog",
				},
				{
					title: "Dropdown",
					href: "/docs/components/dropdown",
				},
				{
					title: "Form",
					href: "/docs/components/form",
				},
				{
					title: "Input",
					href: "/docs/components/input",
				},
				{
					title: "Input OTP",
					href: "/docs/components/input-otp",
				},
				{
					title: "Menubar",
					href: "/docs/components/menubar",
				},
				{
					title: "Popover",
					href: "/docs/components/popover",
				},
				{
					title: "Preview Card",
					href: "/docs/components/preview-card",
				},
				{
					title: "Progress",
					href: "/docs/components/progress",
				},
				{
					title: "Radio Group",
					href: "/docs/components/radio-group",
				},
				{
					title: "Scroll Area",
					href: "/docs/components/scroll-area",
				},
				{
					title: "Select",
					href: "/docs/components/select",
				},
				{
					title: "Separator",
					href: "/docs/components/separator",
				},
				{
					title: "Sheet",
					href: "/docs/components/sheet",
				},
				{
					title: "Skeleton",
					href: "/docs/components/skeleton",
				},
				{
					title: "Slider",
					href: "/docs/components/slider",
				},
				{
					title: "Switch",
					href: "/docs/components/switch",
				},
				{
					title: "Table",
					href: "/docs/components/table",
				},
				{
					title: "Tabs",
					href: "/docs/components/tabs",
				},
				{
					title: "Textarea",
					href: "/docs/components/textarea",
				},
				{
					title: "Toast",
					href: "/docs/components/toast",
				},
				{
					title: "Toggle",
					href: "/docs/components/toggle",
				},
				{
					title: "Toggle Group",
					href: "/docs/components/toggle-group",
				},
				{
					title: "Tooltip",
					href: "/docs/components/tooltip",
				},
			],
		},
	],
}
