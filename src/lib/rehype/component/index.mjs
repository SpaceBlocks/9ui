import fs from "fs"
import path from "path"
import strip from "strip-comments"
import { visit } from "unist-util-visit"

export function rehypeRawString() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "pre") {
				const [codeEl] = node.children

				if (codeEl.tagName !== "code") {
					return
				}

				node.__rawString__ = codeEl.children?.[0].value

				if (codeEl.data && codeEl.data.meta) {
					const __title__ = codeEl.data.meta.match(/title="([^"]+)"/)
					if (__title__) {
						node.__title__ = __title__[1]
					}
					codeEl.data.meta = codeEl.data.meta.replace(/title="([^"]+)"/, "")
				}

				// npm install.
				if (node.__rawString__?.startsWith("npm install")) {
					const npmCommand = node.__rawString__
					node.__npmCommand__ = npmCommand
					node.__yarnCommand__ = npmCommand.replace("npm install", "yarn add")
					node.__pnpmCommand__ = npmCommand.replace("npm install", "pnpm add")
					node.__bunCommand__ = npmCommand.replace("npm install", "bun add")
				}
			}
		})
	}
}

export function rehypeComponentSource() {
	return async (tree) => {
		visit(tree, async (node) => {
			if (node.name === "ComponentSource") {
				const name = getNodeAttributeByName(node, "name")?.value

				if (!name) {
					return null
				}

				const filePath = path.join(
					process.cwd(),
					"src/components/ui",
					`${name}.tsx`
				)

				try {
					const source = fs.readFileSync(filePath, "utf8")
					const formattedSource = strip(source)

					node.attributes?.push({
						name: "content",
						value: formattedSource,
						type: "mdxJsxAttribute",
					})
				} catch (error) {
					console.error(error)
				}
			}
		})
	}
}

export function rehypeCommandProperties() {
	return (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "figure") {
				if (!("data-rehype-pretty-code-figure" in node.properties)) {
					return
				}

				const preElement = node.children.at(-1)
				if (preElement.tagName !== "pre") {
					return
				}

				preElement.properties["__rawString__"] = node.__rawString__
				preElement.properties["__npmCommand__"] = node.__npmCommand__
				preElement.properties["__yarnCommand__"] = node.__yarnCommand__
				preElement.properties["__pnpmCommand__"] = node.__pnpmCommand__
				preElement.properties["__bunCommand__"] = node.__bunCommand__
				preElement.properties["__title__"] = node.__title__
			}
		})
	}
}

function getNodeAttributeByName(node, name) {
	return node.attributes?.find((attribute) => attribute.name === name)
}
