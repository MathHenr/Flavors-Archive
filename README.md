<!-- Descrição do Projeto: Recipe Vault

O Recipe Vault é uma plataforma interativa e intuitiva para entusiastas da culinária compartilharem suas criações gastronômicas. A página permite que usuários insiram receitas completas, detalhando ingredientes, etapas de preparo, fotos e até mesmo vídeos demonstrativos. Além disso, os usuários podem adicionar dicas especiais que personalizem a experiência de cada prato, como sugestões de substituições, acompanhamentos ou segredos de preparo.

Com um design moderno e organizado, o Recipe Vault busca ser um espaço de troca de conhecimento culinário, promovendo a criatividade e a conexão entre pessoas que amam cozinhar. Seja para registrar sua receita de família, inovar na cozinha ou se inspirar em novas ideias, o Recipe Vault será sua fonte confiável e prática.

Principais Funcionalidades:
Inserção de Receitas: Permita que os usuários adicionem título, descrição, tempo de preparo e porções.
Galeria Visual: Upload de fotos dos pratos prontos para destacar os resultados finais.
Vídeos de Preparo: Integre vídeos diretamente na receita para uma orientação mais clara e envolvente.
Dicas e Personalizações: Um campo dedicado para usuários adicionarem suas sugestões e segredos.
Pesquisa e Categorias: Filtragem por ingredientes, tipos de pratos, dificuldade e mais.
Objetivo:
Criar uma comunidade apaixonada por culinária, onde qualquer pessoa possa compartilhar, aprender e reinventar receitas de forma prática e divertida. -->

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
