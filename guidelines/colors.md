# Cores

## Regra de uso

Componentes consomem tokens semânticos (`--sd-color-action-primary`), nunca cores primitivas. Isso permite trocar família e modo sem alterar marcação.

- **Primary:** ação principal, seleção e ênfase funcional.
- **Secondary:** ação de apoio, fundos sutis e seleção leve.
- **Accent:** momento de marca; no Pickle é magenta, no Admin é oliva suave.
- **Surface:** cards, popovers e regiões elevadas.
- **Success / Warning / Error / Info:** somente significado de sistema.

Alvo mínimo WCAG AA: 4.5:1 para texto normal e 3:1 para texto grande/controles. Nunca dependa apenas de cor para comunicar estado.

## Gradientes

Gradientes são decorativos. Pickle pode combinar `primary → secondary` ou `accent → primary` em hero/background. Admin usa gradiente apenas como luz ambiental sutil; nunca em tabelas, inputs ou ações críticas.

