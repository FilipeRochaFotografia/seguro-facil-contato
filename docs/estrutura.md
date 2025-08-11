## Estrutura do projeto

- `src/config/company.ts`: fonte única da verdade dos dados (telefones, CNPJ, endereço, URLs e caminhos de assets). Também define a lista de ícones/benefícios exibidos no grid.
- `src/pages/Index.tsx`: landing page. Lê tudo de `company.ts`.
- `src/pages/NotFound.tsx`: página 404 com atalho para WhatsApp.
- `src/index.css` e `tailwind.config.ts`: tokens de cores, gradientes, tipografia e utilitários.
- `public/`: imagens e ícones consumidos diretamente via caminho absoluto (`/arquivo.png`).

## Fluxo de atualização

1) Trocar imagens/ícones em `public/`.
2) Ajustar caminhos/nomes em `src/config/company.ts` (chaves `assets` e `features`).
3) Atualizar números/endereços no mesmo arquivo.
4) Ajustar título/descrição/canonical em `index.html` quando o domínio final estiver definido.

## Build/Dev

```
npm i
npm run dev
npm run build
```


