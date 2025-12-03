import fs from "fs";
import path from "path";
import matter from "gray-matter";

const promptsDir = path.join(process.cwd(), "prompts");
const templatesDir = path.join(process.cwd(), "templates");

function loadPrompts(dir) {
  // Check if directory exists
  if (!fs.existsSync(dir)) {
    return [];
  }

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

function loadTemplates(dir) {
  // Check if directory exists
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  const items = [];

  for (const file of files) {
    if (!file.endsWith(".md")) continue;

    const fullPath = path.join(dir, file);
    const raw = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(raw);

    // Use filename (without .md) as title, or frontmatter title if it exists
    const title = data.title || path.basename(file, ".md");

    // Extract all bullet points (lines starting with "-") as prompts
    const lines = content
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("-"))
      .map((l) => l.replace(/^-\s*/, "")); // Remove the "- " prefix

    items.push({
      title: title,
      prompts: lines,
      tags: Array.isArray(data.tags) ? data.tags : [],
      author: data.author || null,
    });
  }

  return items;
}

const result = {
  prompts: loadPrompts(promptsDir),
  templates: loadTemplates(templatesDir),
};

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.json", JSON.stringify(result, null, 2));
