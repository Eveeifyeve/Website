import json

lang_skils = [
    "ts",
    "js",
    "html",
    "css",
    "sass",
    "astro",
    "svelte",
    "swift",
    "go",
    "cpp",
    "react",
    "kotlin",
    "lua",
    "rust",
    "zig",
    "vue",
    "java",
    "svg",
    "nix",
    "gleam",
    "python",
    "bash",
    "dart",
]
tool_skils = [
    "maven",
    "gradle",
    "bootstrap",
    "godot",
    "nextjs",
    "supabase",
    "replit",
    "tailwind",
    "tauri",
    "electron",
    "vercel",
    "vite",
    "webpack",
    "prisma",
    "gatsby",
    "nginx",
    "nodejs",
    "cmake",
    "githubactions",
    "flutter",
    "jquery",
    "angular",
    "solidjs",
    "bun",
    "discordjs",
]

db_skils = [
    "mongodb",
    "sqlite",
    "postgresql",
    "surrealdb",
]


other_skils = [
    "vim",
    "neovim",
    "idea",
    "vscode",
    "docker",
    "postman",
    "github",
    "gimp",
    "pr",
    "davinci",
    "arcbrowser",
    "zen",
    "firefox",
    "chrome",
]


def initJson(input_skill):
    return [
        {"skillName": "", "experience": "", "skillIcon": skill, "color": ""}
        for skill in input_skill
    ]


result = {
    "languages": initJson(lang_skils),
    "tools": initJson(tool_skils),
    "database": initJson(db_skils),
    "other": initJson(other_skils),
}

with open("skills.json", "w", encoding="utf-8") as f:
    json.dump(result, f, indent=4, ensure_ascii=False)

print("JSON data has been written to skills.json")
