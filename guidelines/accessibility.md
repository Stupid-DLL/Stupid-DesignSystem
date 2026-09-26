# Acessibilidade

- Contraste mínimo AA; valide combinações novas antes de entrar em tokens.
- Foco nunca é removido e deve ser visível contra fundo e superfície.
- Alvos interativos têm no mínimo 44×44px, salvo controles densos com alternativa equivalente.
- Ordem visual acompanha a ordem do DOM.
- Ícones críticos recebem rótulo; ícones decorativos usam `aria-hidden="true"`.
- Erros explicam o problema e a correção, ligados ao campo.
- Animações respeitam `prefers-reduced-motion`.
- Modais contêm o foco; toasts não roubam foco.
- Tabelas usam cabeçalhos e caption/nome acessível.

Teste mínimo: teclado completo, zoom 200%, leitor de tela básico, modos claro/escuro e contraste forçado.

