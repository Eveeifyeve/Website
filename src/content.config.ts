import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

type NixResource = {
	name: string;
	url: string;
	key: string;
	other?: boolean;
};

const blog = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		pubDate: z.date(),
	}),
});

const positions = defineCollection({
	loader: file("src/content/roles.json", {
		parser: (text: string): NixResource[] =>
			JSON.parse(text).map((e: NixResource, i: number) => ({
				...e,
				id: `${i}`,
			})),
	}),
	schema: z.object({
		name: z.string(),
		business: z.string(),
		current: z.boolean().optional(),
		"start-date": z.string(),
		"end-date": z.string().optional()
	}),
});

const nixResourcesCollection = defineCollection({
	loader: file("src/content/nixos-resources.json", {
		parser: (text: string): NixResource[] =>
			JSON.parse(text).map((e: NixResource, i: number) => ({
				...e,
				id: `${i}`,
			})),
	}),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		url: z.string().url(),
		key: z.string(),
		other: z.boolean().optional(),
	}),
});

export const collections = {
	blog,
	"nix-resources": nixResourcesCollection,
	careers: positions
};
