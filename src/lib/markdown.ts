import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export async function loadMarkdown(slug: string): Promise<{ title?: string; html: string }>{
  const filePath = path.join(contentDir, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  const processed = await remark().use(html).process(content);
  return { title: data.title as string | undefined, html: processed.toString() };
}

export type MdProject = { title: string; description: string; tech: string[]; github?: string; demo?: string };

export function loadProjectsFromMarkdown(): MdProject[] {
  const filePath = path.join(contentDir, "projects.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const lines = content.split(/\r?\n/).filter(Boolean);
  const projects: MdProject[] = [];
  let current: Partial<MdProject> | null = null;
  for (const line of lines) {
    if (line.startsWith("- title:")) {
      if (current && current.title) projects.push(current as MdProject);
      current = { title: line.replace("- title:", "").trim() };
    } else if (current && line.startsWith("description:")) {
      current.description = line.replace("description:", "").trim();
    } else if (current && line.startsWith("tech:")) {
      const arr = line.replace("tech:", "").trim();
      current.tech = arr.replace(/^\[/, "").replace(/\]$/, "").split(/,\s*/).map((s) => s.replace(/^"|"$/g, ""));
    } else if (current && line.startsWith("github:")) {
      current.github = line.replace("github:", "").trim();
    } else if (current && line.startsWith("demo:")) {
      current.demo = line.replace("demo:", "").trim();
    }
  }
  if (current && current.title) projects.push(current as MdProject);
  return projects;
}



