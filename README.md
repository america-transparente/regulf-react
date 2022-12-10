# regulf-react

[![Linting CI](https://github.com/america-transparente/regulf-react/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/america-transparente/regulf-react/actions/workflows/pipeline.yml)

Frontend for [Reguleque](https://reguleque.cl), a search engine for chilean public workers records' as obtained through transparency databases.

## Get started

To run this project locally, install the dependencies and run the local server:

```sh
npm install
npm run dev
```

Open http://localhost:5173 to see your app.

To build for production:

```sh
npm run build
```

## Technologies

- [React](https://beta.reactjs.org/) with TypeScript, using Vite for fast builds.
- [Tailwind CSS](https://tailwindcss.com/) for styling, pair with [Headless UI](https://headlessui.com/) for unstyled accessible components, and [Heroicons](https://github.com/tailwindlabs/heroicons) for svg icons.
- [America Transparente React Component Library](https://github.com/america-transparente/ui) for custom [InstantSearch](https://www.algolia.com/doc/api-reference/widgets/react-hooks/) components and to maintain a unified design system.

## Contributors

- René Cáceres ([@panquequelol](https://github.com/panquequelol/)) - Re-wrote [the legacy front-end app](https://github.com/america-transparente/regulf-neo) to React and developed [America Transparente React Component Library](https://github.com/america-transparente/ui).
