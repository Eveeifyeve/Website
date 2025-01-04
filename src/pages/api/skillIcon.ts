import json from "../../data/skills.json";

export async function GET() {
	try {
		const skills: Array<string> = [];
		json.languages.forEach(item => skills.push(item.skillIcon))
		json.tools.forEach(item => skills.push(item.skillIcon))
		json.database.forEach(item => skills.push(item.skillIcon))
		json.other.forEach(item => skills.push(item.skillIcon))

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
