# Input

Um campo sempre tem label persistente; placeholder é exemplo, não rótulo. Ajuda e erro ficam imediatamente depois do controle e devem ser ligados por `aria-describedby` em produção.

```html
<label class="sd-field">
  <span class="sd-label">Nome</span>
  <input class="sd-input" aria-describedby="name-hint" />
  <span class="sd-hint" id="name-hint">Como aparecerá publicamente.</span>
</label>
```

Para erro, adicione `sd-field--error` ao grupo e `aria-invalid="true"` ao input. Não valide enquanto a pessoa ainda digita, salvo requisitos em tempo real claramente explicados.

