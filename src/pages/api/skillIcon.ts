import json from "../../data/skills.json";

export async function GET() {
	try {
		const response = json;
		const skills: Set<string> = new Set();

		Object.entries(response).forEach(([_, categoryData]) => {
			Object.values(categoryData).forEach(item => {
				const skillIcon = (item)?.skillIcon ?? '';
				skills.add(skillIcon);
			});
		});

		const combinedSkills: string[] = Array.from(skills).sort();

		return new Response(
			JSON.stringify(combinedSkills), {
			status: 200,
			headers: {
				"Content-Type": "application/json"
			}
		});
	} catch (error) {
		return new Response(JSON.stringify({ code: 505, errorMessage: error }))
	};

}
