# Digital Horizons 📚

## Description

Digital Horizons is a tech blog site built with **Next.js** and **Tailwind CSS**. It features **Next Auth** for authentication, supports comments and reactions, and utilizes **MDX** for rich content. The site is designed with both light and dark modes, is SEO friendly, and fully responsive.

## Features

- Light and dark mode
- Next Auth for secure authentication
- Commenting system for user engagement
- Reactions to posts
- Fully responsive design
- SEO friendly for better visibility
- MDX support for enhanced content creation

## Technologies

- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Next Auth**: Authentication for Next.js applications.
- **MDX**: Markdown with JSX support for rich content.
- **React Icons**: A library of icons for React applications.
- **React Hook Form**: A library for managing forms in React.
- **Sonner**: A notification library for React.
- **Framer Motion**: A library for animations in React.

## Getting Started

To get started with Digital Horizons, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Yuzu02/Digital-Horizons
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up Husky and lint-staged:

   ```bash
   npm run prepare
   # or
   yarn prepare
   # or
   pnpm prepare
   # or
   bun run prepare
   ```

4. Configure environment variables:

   ```bash
   cp .env.local.example .env.local
   ```

   Fill in the required environment variables in the `.env.local` file.

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Scripts

The following scripts are available in the project:

- **dev**: Starts the development server.
- **build**: Builds the application for production.
- **start**: Starts the production server.
- **lint**: Lints the codebase.
- **format**: Checks formatting with Prettier.
- **format:fix**: Fixes formatting issues with Prettier.
- **pre-push**: Runs linting and formatting before pushing changes.
- **prepare**: Sets up Husky for Git hooks.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss improvements or features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
