# @salesup/ui

Shared UI-componenten en design tokens voor salesUp platformen (Marketing, Training, Calling AI).

Gebaseerd op salesUp BrandBook 2025. Gebouwd op Tailwind CSS, React 18 en Next.js 14.

## Installatie in een platform

In je Replit terminal of GitHub-project:

```bash
npm install github:JOUW-GITHUB-USERNAME/salesup-ui
npm install lucide-react
```

## Setup

### 1. Tailwind config

In `tailwind.config.js`:

```js
const preset = require('@salesup/ui/tailwind.preset');

module.exports = {
  presets: [preset],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@salesup/ui/components/**/*.{js,jsx}',
  ],
};
```

### 2. Global CSS

In `pages/_app.js`:

```js
import '@salesup/ui/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### 3. Components gebruiken

```jsx
import { Layout, StatsCard, StatusBadge, Button } from '@salesup/ui';
import { LayoutDashboard, Users } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Klanten', href: '/clients', icon: Users },
];

export default function HomePage() {
  return (
    <Layout navigation={navigation}>
      <h1 className="text-2xl font-bold">Welkom!</h1>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <StatsCard title="Actieve klanten" value={12} icon={Users} color="orange" />
      </div>
    </Layout>
  );
}
```

## Componenten

| Component | Doel |
|---|---|
| `Layout` | App shell met sidebar, client selector, main content |
| `StatsCard` | Metric tile voor dashboards |
| `StatusBadge` | Status chip met NL-labels (Te reviewen, Actief, …) |
| `Button` | primary / secondary / danger / ghost / outline variants |
| `Card` | Generic card wrapper met optional title/subtitle/actions |
| `Modal` | Overlay dialog met ESC-support en body-scroll-lock |
| `FormInput` | text / textarea / select / number / email / date |
| `EmptyState` | "Nog geen data" placeholder |
| `ContentEditor` | Inline-edit met async onSave callback |
| `ReviewActions` | Goedkeuren / Feedback / Afwijzen voor review-workflow |

## Brand-kleuren (uit BrandBook 2025)

- **Up Orange** `#EF7D00` — primary accent, CTAs
- **Up Blue** `#193C6C` — primary brand blue
- **Dark Blue** `#151E35` — sidebar, donkere backgrounds
- **Ghost White** `#F6F6FC` — app-background

Gebruik als Tailwind classes: `bg-up-orange`, `text-up-blue`, `bg-up-blue-dark`, `bg-ghost-white`.

## Font

Poppins wordt automatisch geladen via Google Fonts in `styles/globals.css`. Geen extra setup nodig.

## Versioning

Deze package volgt semver: MAJOR bij breaking changes, MINOR bij nieuwe componenten, PATCH bij fixes.

## Toevoegen / wijzigen

1. Clone deze repo
2. Voeg component toe in `components/`
3. Export in `components/index.js`
4. Bump versie in `package.json`
5. Commit en push naar GitHub
6. In platforms: `npm update @salesup/ui`
