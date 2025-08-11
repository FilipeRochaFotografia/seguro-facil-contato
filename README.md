### FACILITE Proteção Veicular – Landing Page

Este projeto é uma landing page em React + Vite com Tailwind e shadcn-ui.

### Como rodar

```sh
npm i
npm run dev
```

### Organização e manutenção

- **Dados da empresa**: centralizados em `src/config/company.ts`.
  - Telefones, CNPJ, endereço, URLs, e caminhos dos assets públicos.
  - Atualize `company.urls.site` e `company.urls.canonical` quando o domínio final estiver definido.
  - Ícones do grid de coberturas usam imagens da pasta `public` definidas em `features` no mesmo arquivo.
- **Páginas**: landing principal em `src/pages/Index.tsx`. Página 404 em `src/pages/NotFound.tsx`.
- **Estilos**: tokens e utilitários em `src/index.css` e `tailwind.config.ts`.
- **Componentes UI**: botões e utilitários em `src/components/ui/*`.

### Assets

Coloque logotipo, selo SUSEP, ícones e hero na pasta `public/`. Os nomes atualmente esperados:

- `logoreta.png` (logo principal)
- `logobranca.png` (marca d’água usada no card laranja da seção de referência)
- `carrofundo.png` (imagem do carro+moto)
- `selofacilite.png` (selo SUSEP)
- Ícones do grid: `assistencia.png`, `perda total.png`, `guincho.png`, `cobertura para vidros.png`, `colisao.png`, `fenomenos naturais.png`, `incendio.png`, `carro reserva.png`, `furto roubo.png`, `cobertura em todo Brasil.png`

Se os nomes mudarem, ajuste em `src/config/company.ts`.

### SEO

- Metadados base em `index.html`.
- JSON-LD de organização inserido em `src/pages/Index.tsx` a partir de `company`.

### Notas de layout (hero & seções)

- Hero com degradê azul cobrindo topo e header embutido.
- Título em Roboto, bold, e bullets alinhados com ícones laranja.
- Imagem do carro/moto invade levemente a borda inferior do box branco.
- Seção “Por que a Facilite…”: card laranja com `logobranca.png` como marca d’água (opacidade 10%) atrás do `funcionario.png`, que ultrapassa discretamente o topo do card.

### Contatos

- Assistência 24h: 0800 591 5328
- Financeiro: 73 973 8803-0570
- WhatsApp para cotação: +55 73 9139-5417
- CNPJ: 51.012.452/0001-24
- Endereço: Rua Jose Bonifacio, 26 - Centro, Itamaraju - BA
