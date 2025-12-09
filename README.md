# BBE Prep Hub

A modern website for BBE (Business, Economics & Social Sciences) entrance exam preparation course for WU Vienna.

## About

BBE Prep Hub is a comprehensive preparation platform designed to help students succeed in the WU Vienna entrance exam. The course covers three main subjects:

- **Economics** — Key concepts with clear explanations and practice questions
- **Mathematics** — Essential math skills for business education  
- **English** — Academic English proficiency

## Tech Stack

- **React 18** with TypeScript
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — UI component library
- **Three.js** — Animated background effects
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```sh
# Clone the repository
git clone https://github.com/rybakowaa/bbe-prep-hub.git

# Navigate to project directory
cd bbe-prep-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CourseStructureSection.tsx
│   ├── WhyChooseSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## License

MIT
