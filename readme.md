# mongoose-ai Landing Page

A modern, responsive landing page for the mongoose-ai plugin built with Next.js 15, Tailwind CSS v4.1, and TypeScript.

## Features

- **Modern Design**: Clean, professional interface with beautiful typography
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Dynamic code examples with tab switching
- **Performance**: Optimized with Next.js and Tailwind CSS
- **SEO Optimized**: Complete meta tags and structured data
- **Type Safe**: Full TypeScript implementation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4.1
- **Typography**: Outfit, Plus Jakarta Sans, JetBrains Mono
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jmndao/mongoose-ai.git
cd mongoose-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page composition
│   ├── globals.css         # Global styles and animations
│   └── favicon.svg         # Custom favicon
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── HeroSection.tsx     # Hero section with stats
│   ├── CodeExamples.tsx    # Interactive code showcase
│   ├── CapabilitiesSection.tsx # Feature highlights
│   ├── SolutionsSection.tsx # Use cases
│   ├── CTASection.tsx      # Call to action
│   ├── Footer.tsx          # Footer with links
│   └── index.ts            # Component exports
└── lib/
    └── version.ts          # GitHub version fetching
```

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript checks
```

## Deployment

The site is automatically deployed to Vercel when changes are pushed to the main branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jmndao/mongoose-ai)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## About mongoose-ai

This landing page showcases the mongoose-ai plugin, which adds AI capabilities to MongoDB through Mongoose schemas. Features include:

- Intelligent document summarization
- Semantic search capabilities
- Universal function calling
- Multi-provider AI support (OpenAI, Anthropic)
- Production-ready with TypeScript

Visit [npmjs.com/package/@jmndao/mongoose-ai](https://www.npmjs.com/package/@jmndao/mongoose-ai) to get started.
