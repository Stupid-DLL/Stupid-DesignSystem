import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const required = ["README.md", "src/index.css", "docs/index.html", "assets/brand/pickle-classic.png", "assets/brand/pickle-king.png"];
const errors = [];

for (const file of required) {
  try { await access(path.join(root, file)); } catch { errors.push(`Missing required file: ${file}`); }
}

for (const directory of ["tokens", "themes"]) {
  for (const file of (await readdir(path.join(root, directory))).filter((name) => name.endsWith(".json"))) {
    try { JSON.parse(await readFile(path.join(root, directory, file), "utf8")); }
    catch (error) { errors.push(`Invalid JSON: ${directory}/${file} (${error.message})`); }
  }
}

function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map((part) => Number.parseInt(part, 16) / 255);
  const linear = channels.map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(first, second) {
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

for (const file of (await readdir(path.join(root, "themes"))).filter((name) => name.endsWith(".json"))) {
  const theme = JSON.parse(await readFile(path.join(root, "themes", file), "utf8"));
  const pairs = [["text", "background"], ["onPrimary", "primary"], ["onSecondary", "secondary"]];
  for (const [foreground, background] of pairs) {
    const ratio = contrast(theme.color[foreground], theme.color[background]);
    if (ratio < 4.5) errors.push(`${file}: ${foreground}/${background} contrast is ${ratio.toFixed(2)}:1; expected at least 4.5:1`);
  }
}

const themes = await readFile(path.join(root, "src/themes.css"), "utf8");
for (const selector of ['data-brand="pickle"', 'data-brand="admin"', 'data-theme="light"', 'data-theme="dark"']) {
  if (!themes.includes(selector)) errors.push(`Theme selector not found: ${selector}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Design system checks passed.");

