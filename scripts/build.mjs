import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceFiles = ["tokens.css", "themes.css", "base.css", "components.css"];
await mkdir(path.join(root, "dist"), { recursive: true });

const banner = `/* Stupid Design System v0.1.0 | MIT | generated — do not edit */\n`;
const contents = await Promise.all(sourceFiles.map((file) => readFile(path.join(root, "src", file), "utf8")));

for (let index = 0; index < sourceFiles.length; index += 1) {
  await writeFile(path.join(root, "dist", sourceFiles[index]), banner + contents[index]);
}

await writeFile(path.join(root, "dist", "stupid-design-system.css"), banner + contents.join("\n"));
console.log(`Built ${sourceFiles.length + 1} CSS files in dist/.`);

