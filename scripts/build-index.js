import fs from "fs";
import path from "path";
import matter from "gray-matter";

const promptsDir = path.join(process.cwd(), "prompts");
const templatesDir = path.join(process.cwd(), "templates");

function loadItems(dir) {
  const files = fs.readdirSync(dir);
  const items = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(raw);

    // Extract first non-empty line in the content as title
    const lines = content
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean); // remove empty lines

    const extractedTitle = lines[0] || null;

    items.push({
      title: extractedTitle,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || null,
    });
  }

  return items;
}

const result = {
  prompts: loadItems(promptsDir),
  templates: loadItems(templatesDir),
};

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.json", JSON.stringify(result, null, 2));
