# Integração shadcn/ui

`src/themes.css` expõe os aliases esperados em HSL sem wrapper `hsl()`: `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring` e `--radius`.

No Tailwind:

```js
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" }
},
borderRadius: { lg: "var(--radius)" }
```

Aplique `data-brand="admin"` no `html` para painéis. Componentes shadcn preservam comportamento e acessibilidade Radix; este repositório fornece a camada visual, não faz fork desses componentes.

