import { getCollection } from "astro:content";

export async function GET() {
	try {
		const roles = await getCollection("careers");
		const cleaned = roles.map(({ data }) => ({
			name: data.name,
			business: data.business,
			current: data.current ?? false,
			startDate: data["start-date"],
			endDate: data["end-date"] ?? null,
		}));

		return new Response(JSON.stringify(cleaned), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(
			JSON.stringify({ code: 500, message: String(error) }),
			{ status: 500 }
		);
	}
}

