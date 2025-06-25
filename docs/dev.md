# Background

## Resources

- Build An AI Resume Builder SaaS Application (Next.js 15, Stripe Checkout, Hook Form, TypeScript)

1. https://www.youtube.com/watch?v=ySqesLjz6K0
2. https://github.com/codinginflow/nextjs-15-ai-resume-builder

- Development

1. https://ui.shadcn.com

## Setup (Quick Start)

```shell
git clone --branch 0-Starting-point https://github.com/codinginflow/nextjs-15-ai-resume-builder.git resume-builder
cd resume-builder && rm -rf .git

pnpm i
pnpm dev

```

## Setup (Step by Step)

```shell
npx create-next-app@latest  # create-next-app@15.0.3
# ts yes; eslint yes; tailwind yes; src yes; app-router yes; turbopack no; import-alias no;

pnpm i
pnpm dev

# Dependencies
pnpm add prisma @prisma/client @vercel/blob openai @t3-oss/env-nextjs date-fns next-themes react-color react-to-print @dnd-kit/core @dnd-kit/sortable @dnd-kit/modifiers stripe zustand @clerk/nextjs @clerk/themes --legacy-peer-deps
pnpm add --save-dev @tailwindcss/typography @types/react-color prettier prettier-plugin-tailwindcss eslint-config-prettier --legacy-peer-deps

# ShadCN
# https://ui.shadcn.com/docs/installation/next
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button badge breadcrumbs card dialog dropdown-menu form input label popover textarea toast  # sonner
# ShadCN - Theme
# https://ui.shadcn.com/themes
# https://ui.shadcn.com/docs/theming
# globals.css: @layer base { ... }

```

## Setup (dev)

```shell
# Prisma
npx prisma init
# Database
# https://vercel.com/

# Auth
# Clerk
# https://dashboard.clerk.com/

```

## Project Structure

```shell
# tree -L 3 -I node_modules
.
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── prettier.config.js
├── README.md
├── src
│   ├── app  # Next-App
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── opengraph-image.png
│   │   └── page.tsx
│   ├── assets
│   │   ├── logo.png
│   │   └── resume-preview.jpg
│   ├── components
│   │   └── ui  # Shared UI components
│   ├── hooks
│   │   └── use-toast.ts
│   └── lib
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json

```
