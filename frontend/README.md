# Catholic Convent Registry Frontend (SvelteKit)

This is the frontend application for the Catholic Convent Registry, built with SvelteKit, TypeScript, and Tailwind CSS.

## 🚀 Conversion from Next.js to SvelteKit

This application has been successfully converted from Next.js to SvelteKit. The conversion includes:

### ✅ What's been converted:
- **Package.json**: Updated to use SvelteKit dependencies instead of Next.js
- **Layout**: Converted from `layout.tsx` to `+layout.svelte` with equivalent SEO and meta tags
- **Components**: Created Header and Footer components in Svelte
- **Styling**: Maintained all Tailwind CSS styling with updated configuration
- **Configuration**: Added SvelteKit, Vite, PostCSS, ESLint, and Prettier configurations
- **Project Structure**: Reorganized to follow SvelteKit conventions

### 🎨 Features:
- **TypeScript**: Full TypeScript support
- **Tailwind CSS**: Complete design system with custom colors and utilities
- **Responsive Design**: Mobile-first responsive layout
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Modern UI**: Clean, professional design with smooth animations
- **Component System**: Reusable components with proper TypeScript types

## 🛠️ Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run Svelte/TypeScript checks
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
frontend/
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── layout/
│   │           ├── Header.svelte
│   │           └── Footer.svelte
│   ├── routes/
│   │   ├── +layout.svelte
│   │   └── +page.svelte
│   ├── app.css
│   └── app.html
├── static/
│   └── favicon.png
├── svelte.config.js
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.cjs
└── .prettierrc
```

## 🎯 Key Differences from Next.js

1. **File-based routing**: Uses `+page.svelte` and `+layout.svelte` instead of `page.tsx` and `layout.tsx`
2. **Component syntax**: Uses Svelte's reactive syntax instead of React hooks
3. **Styling**: Global styles in `app.css` instead of `globals.css`
4. **Configuration**: Uses `svelte.config.js` and `vite.config.ts` instead of `next.config.ts`
5. **Build tool**: Uses Vite instead of Next.js webpack

## 🔧 Configuration

### Path Aliases
The following path aliases are configured:
- `@/*` → `./src/*`
- `@/components/*` → `./src/lib/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/utils/*` → `./src/utils/*`
- `@/types/*` → `../shared/src/types/*`

### Tailwind CSS
Custom color scheme and utilities are configured in `tailwind.config.ts` including:
- Primary, secondary, and accent colors
- Success, warning, and error colors
- Custom fonts (Inter, Crimson Text)
- Shadow utilities
- Animation utilities

## 🌐 Deployment

To deploy the application:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `build/` directory and can be deployed to any static hosting service.

## 📝 Next Steps

After the conversion, you may want to:
- Install dependencies with `npm install`
- Test the application with `npm run dev`
- Add additional pages and components as needed
- Integrate with the backend API
- Add authentication and user management
- Implement the community search and donation features

## 🤝 Contributing

Please ensure all code follows the established patterns and passes linting:
```bash
npm run check
npm run lint
```

## 📄 License

This project is licensed under the same terms as the original Next.js application.