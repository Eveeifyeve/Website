import { liveFeedLoader } from "@ascorbic/feed-loader";
import { defineLiveCollection } from "astro:content";

const teaclientUpdates = defineLiveCollection({
	type: "live",
	loader: liveFeedLoader({ url: "https://teaclient.net/news.xml" })
})


export const collections = { teaclientUpdates };
