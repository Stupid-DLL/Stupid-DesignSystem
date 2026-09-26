# Button

Use para ações imediatas. Prioridade por tela: um `primary`, poucos `secondary/outline` e `ghost` para ações de baixo peso.

```html
<button class="sd-button sd-button--primary">Salvar mudança</button>
<button class="sd-button sd-button--primary" aria-busy="true">Salvando</button>
```

Variantes: `primary`, `secondary`, `outline`, `ghost`, `danger`. Tamanhos: `sm`, padrão, `lg`.

- Use verbo específico; “Salvar projeto” é melhor que “OK”.
- Para loading, use `aria-busy="true"` e mantenha a largura/rótulo compreensíveis.
- Use `disabled` apenas quando a razão estiver evidente; prefira validação e mensagem.
- Não use cor de perigo em ações reversíveis ou neutras.

