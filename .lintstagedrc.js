const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  // Type check TypeScript files
  "**/*.{ts,tsx}": () => "npx tsc --noEmit",
  // Format files with prettier
  "*.{js,jsx,ts,tsx,json,md,prettierrc,css,scss}": [
    "npx prettier --write --config .prettierrc --ignore-path .gitignore",
  ],
  // Lint JS/TS files
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
