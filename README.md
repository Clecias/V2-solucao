# V2-solucao

Landing page criada com Vite + React + Tailwind CSS, pronta para deploy no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Build

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

O deploy é feito automaticamente via GitHub Actions quando há push na branch `main`.

1. Garanta que o repositório esteja com GitHub Pages configurado p/ **GitHub Actions**.
2. Atualize o `base` no `vite.config.js` se o nome do repositório mudar.
3. Faça push na branch `main` e aguarde o workflow `Deploy to GitHub Pages` finalizar.

A página ficará disponível em:

```
https://<seu-usuario>.github.io/V2-solucao/
```
