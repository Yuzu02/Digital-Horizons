# Tech Blog 📚

## Description

A tech blog using Next.js, TypeScript & Tailwind CSS. This project is a work in progress.

## Features

- Light and dark mode
- Next Auth for authentication

## How to use

- Clone the repository

```bash
git clone https://github.com/Yuzu02/tech-blog.git
```

- Install the dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Husky and Lint-staged setup

```bash
npm run prepare
# or
yarn prepare
# or
pnpm prepare
# or
bun run prepare
```

## Get the environment variables

```ts
const url = "https://pastebin.com/4aEHVDJP";

const password = "51VBxt7YQd";
```

## Environment Variables setup

```bash
cp .env.local.example .env.local
```

- Fill in the environment variables in the `.env.local` file

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
