# 🚀 Node.js Typescript Starter

## 🌟 Introduction

Welcome to Node.js TypeScript Boilerplate 2025 – a simple and ready-to-use starting point for building backend services with TypeScript.

Based on: https://github.com/edwinhern/express-typescript

## 💡 Why We Made This

This starter kit helps you:

- ✨ Start new projects faster
- 📊 Write clean, consistent code
- ⚡ Build things quickly
- 🛡️ Follow best practices for security and testing

## 🚀 What's Included

- 📁 Well-organized folders: Files grouped by feature so you can find things easily
- 💨 Fast development: Quick code running with `tsx` and error checking with `tsc`
- 🌐 Latest Node.js: Uses the newest stable Node.js version from `.tool-versions`
- 🔧 Safe settings: Environment settings checked with Zod to prevent errors
- 🔗 Short import paths: Clean code with easy imports using path shortcuts
- 🔄 Auto-updates: Keeps dependencies up-to-date with Renovate
- 📊 Easy tracking: Built-in logging with `pino`
- 🧪 Ready-to-test: Testing tools with Vitest already set up
- ✅ Clean code: Consistent coding style with `Biomejs`
- 🐳 Easy deployment: Ready for Docker containers
- 📝 Input checking: Validation using Zod

## 🛠️ Getting Started

### Step-by-Step Guide

#### Step 1: 🚀 Initial Setup

- Clone the repository: `git clone https://github.com/jamg44/node-typescript-starter.git`
- Navigate: `cd node-typescript-starter`
- Install dependencies: `pnpm install`
- Remove .git folder and run
```sh
git init && git add . && git commit -m 'feat: initial commit'
```

#### Step 2: ⚙️ Environment Configuration

- Create `.env`: Copy `.env.template` to `.env`
- Update `.env`: Fill in necessary environment variables

#### Step 3: 🏃‍♂️ Running the Project

- Development Mode: `pnpm dev`
- Building: `pnpm build`
- Production Mode: Set `NODE_ENV="production"` in `.env` then `pnpm build && pnpm start:prod`

## 🤝 Feedback and Contributions

We'd love to hear your feedback and suggestions for further improvements. Feel free to contribute and join us in making backend development cleaner and faster!

🎉 Happy coding!

## 📁 Folder Structure

```code
├── biome.json
├── Dockerfile
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── src
│   ├── common
│   │   └── utils
│   │       ├── __tests__
│   │       ├── commonValidation.ts
│   │       ├── envConfig.ts
│   │       └── logger.ts
│   └── index.ts
├── tsconfig.json
└── vite.config.mts
```
