# iCakes Studio

A modern, responsive website for iCakes Studio built with React, TypeScript, and Vite.

## Features

- 🎨 Modern and responsive design
- 🛒 Shopping cart functionality
- 📱 Mobile-friendly interface
- 🎓 Course catalog
- 🖼️ Product gallery
- 💬 Customer testimonials
- 📞 WhatsApp integration

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React Icons
- Supabase

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Brandbong/iCakes_studio.git
cd iCakes_studio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run deploy` - Deploy to GitHub Pages

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment (Recommended)

Every push to the `main` branch will automatically trigger a deployment via GitHub Actions.

### Manual Deployment

To manually deploy:

1. Install dependencies:
```bash
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. Your site will be available at: `https://brandbong.github.io/iCakes_studio/`

## Project Structure

```
iCakes_studio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── context/     # React context providers
│   ├── hooks/       # Custom React hooks
│   ├── pages/       # Page components
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Entry point
├── .github/
│   └── workflows/   # GitHub Actions workflows
└── package.json     # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For any inquiries, please contact iCakes Studio.