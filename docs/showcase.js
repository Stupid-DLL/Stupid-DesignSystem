const root = document.documentElement;
const brandButtons = [...document.querySelectorAll("[data-set-brand]")];
const modeToggle = document.querySelector("#mode-toggle");
const modeLabel = document.querySelector("#mode-label");
const modal = document.querySelector("#demo-modal");

function applyTheme(brand, theme) {
  root.dataset.brand = brand;
  root.dataset.theme = theme;
  brandButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.setBrand === brand)));
  modeLabel.textContent = theme === "dark" ? "Escuro" : "Claro";
  localStorage.setItem("sd-showcase-theme", JSON.stringify({ brand, theme }));
}

brandButtons.forEach((button) => button.addEventListener("click", () => applyTheme(button.dataset.setBrand, root.dataset.theme)));
modeToggle.addEventListener("click", () => applyTheme(root.dataset.brand, root.dataset.theme === "dark" ? "light" : "dark"));
document.querySelector("#open-modal").addEventListener("click", () => modal.showModal());
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => modal.close()));

try {
  const saved = JSON.parse(localStorage.getItem("sd-showcase-theme"));
  if (["pickle", "admin"].includes(saved?.brand) && ["light", "dark"].includes(saved?.theme)) applyTheme(saved.brand, saved.theme);
} catch { /* localStorage pode estar indisponível; o tema padrão continua funcional. */ }

