# Health Care

A modern health and wellness tracking application built with React 19 and powered by a JSON Server mock API.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Pages & Components](#pages--components)

## 🎯 Overview

Health Care is a personal health management application that helps users track their daily health activities including:
- Meal records with photo documentation
- Body metrics and progress charts
- Exercise activities with calorie tracking
- Personal health diary entries
- Health-related articles and columns

## ✨ Features

### 🍽️ Meal Tracking
- Record meals with photos (Morning, Lunch, Dinner, Snack)
- Visual meal gallery with filtering options
- Date-based meal history

### 📊 Body Metrics
- Interactive charts for body measurements
- Multiple time-based views (Daily, Weekly, Monthly, Yearly)
- Dual-line comparison charts for tracking trends

### 💪 Exercise Logging
- Record exercise activities with duration
- Automatic calorie calculation
- Exercise history and summaries

### 📝 Health Diary
- Personal health journal entries
- Date-based diary organization
- Text-based health notes

### 📰 Health Column
- Health and nutrition articles
- Tagged content for easy discovery
- Image-rich posts

## 🛠️ Tech Stack

### Frontend (react-app)
- **React 19.1** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development
- **Vite 7.1** - Lightning-fast build tool
- **TailwindCSS 4.1** - Utility-first CSS framework
- **React Router 7** - Client-side routing
- **TanStack Query 5** - Server state management
- **Recharts 3** - Data visualization
- **Radix UI** - Accessible UI components
- **Axios** - HTTP client
- **Day.js** - Date manipulation
- **Lucide React** - Icon library

### Backend (server)
- **JSON Server 1.0** - Mock REST API
- **Faker.js** - Test data generation

### Development Tools
- **pnpm** - Fast, disk-efficient package manager
- **ESLint 9** - Code linting
- **Prettier 3** - Code formatting
- **TypeScript ESLint** - TypeScript linting

## 📁 Project Structure

```
health-care/
├── react-app/                # Frontend React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── icon/        # Icon components
│   │   │   └── layouts/     # Layout components (Header, Footer, etc.)
│   │   ├── pages/           # Page components
│   │   │   ├── home/        # Home page with meal gallery
│   │   │   ├── my-record/   # Health records and charts
│   │   │   └── column/      # Health articles
│   │   ├── router/          # React Router configuration
│   │   ├── services/        # API services
│   │   ├── helper/          # Utility functions
│   │   ├── types/           # TypeScript type definitions
│   │   └── shadcn/          # Shadcn UI components
│   └── public/
│       └── photos/          # Meal and article images
│
├── server/                  # Mock API server
│   ├── db.json             # Mock database
│   └── seed-db.js          # Data seeding script
│
├── pnpm-workspace.yaml     # Monorepo workspace config
├── package.json            # Root package configuration
└── .prettierrc.json        # Code formatting rules
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd health-care
```

2. Install dependencies:
```bash
pnpm install
```

3. Seed the mock database (optional):
```bash
pnpm --filter server seed-db
```

### Running the Application

#### Start both frontend and backend:
```bash
pnpm dev
```

#### Start individually:
```bash
# Start React app (http://localhost:5173)
pnpm dev:react

# Start JSON Server (http://localhost:3001)
pnpm dev:server
```

## 📜 Available Scripts

### Root Level
- `pnpm dev` - Run both frontend and backend concurrently
- `pnpm dev:react` - Run React app only
- `pnpm dev:server` - Run JSON Server only
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### React App (`react-app/`)
- `pnpm dev` - Start Vite development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format and fix code

### Server (`server/`)
- `pnpm start` - Start JSON Server on port 3001
- `pnpm seed-db` - Regenerate mock data

## 🔌 API Endpoints

Base URL: `http://localhost:3001`

### Meals
- `GET /meals` - Get all meal records
- `GET /meals?type=Morning` - Filter meals by type

### Body Reports
- `GET /body-report` - Get body metrics data
  - `/body-report/y` - Yearly data
  - `/body-report/m` - Monthly data
  - `/body-report/w` - Weekly data
  - `/body-report/d` - Daily data

### Exercises
- `GET /exercises` - Get all exercise records

### Diaries
- `GET /diaries` - Get all diary entries

### Posts
- `GET /post` - Get all health column posts

### Yearly Report
- `GET /yearly-report` - Get yearly health summary

## 📱 Pages & Components

### Home (`/`)
- **HeroSection** - Main banner with health statistics
- **MealGallery** - Grid display of meal records
- **MealSelector** - Filter meals by type
- **YearlyLineChart** - Annual health progress visualization

### My Record (`/my-record`)
- **RecordCategories** - Category navigation (Body Record, Exercise, Diary)
- **RecordChart** - Interactive body metrics chart with time period selection
- **Exercise** - Exercise activity log
- **Diary** - Personal health journal entries

### Column (`/column`)
- **Posts** - Health article feed
- **Recommended** - Suggested articles

### Layouts
- **MainLayout** - Common layout wrapper
- **Header** - Top navigation bar
- **Footer** - Bottom footer with menu
- **Navbar** - Navigation links
- **ScrollTopButton** - Scroll to top functionality

## 🎨 Styling

The project uses **TailwindCSS 4.1** with:
- Utility-first approach
- Responsive design
- Custom animations via `tw-animate-css`
- Prettier plugin for automatic class sorting

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/` for `src/`)
- ES2020 target

### Vite
- React plugin with SWC
- SVG as React components (via vite-plugin-svgr)
- Hot Module Replacement (HMR)

## 📦 Monorepo Management

This project uses **pnpm workspaces** for efficient monorepo management:
- Shared dependencies are hoisted to root
- Each package has isolated dependencies
- Fast installation and linking
- Workspace filtering for targeted commands

## 🤝 Contributing

1. Follow the Prettier configuration for code formatting
2. Run ESLint before committing
3. Use conventional commit messages
4. Keep components modular and reusable

## 📄 License

This project is private and not licensed for public use.

---

Built with ❤️ using React 19 and Modern Web Technologies
