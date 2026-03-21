# Portfolio — Next.js 14

Portfólio pessoal para freelance, feito com Next.js 14 + TypeScript.

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Abrir no browser
# http://localhost:3000
```

## ✏️ O que você precisa personalizar

Busca por `YOUR_NAME`, `YOUR_EMAIL`, `YOUR_FIVERR`, `YOUR_GITHUB` em todos os arquivos e substitui pelos seus dados reais.

### Arquivo `app/page.tsx`
- **`YOUR_NAME`** → seu nome ou marca
- **`YOUR_EMAIL@gmail.com`** → seu email
- **`YOUR_FIVERR`** → seu username no Fiverr
- **`YOUR_GITHUB`** → seu username no GitHub
- **Projetos** → atualiza o array `PROJECTS` com seus projetos reais
- **Preços** → ajusta os preços nos serviços conforme você quiser

### Arquivo `app/layout.tsx`
- Atualiza o `title` e `description` com seu nome real

## 📦 Deploy no Vercel

```bash
# 1. Sobe o projeto no GitHub
# 2. Vai em vercel.com → New Project → importa do GitHub
# 3. Vercel detecta Next.js automaticamente
# 4. Deploy feito!
```

## 🗂️ Estrutura

```
portfolio/
├── app/
│   ├── globals.css    # Todo o CSS
│   ├── layout.tsx     # Layout raiz + metadata
│   └── page.tsx       # Página principal
├── package.json
├── next.config.js
└── tsconfig.json
```
