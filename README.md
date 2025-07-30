# Riyaz J - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion. This portfolio showcases my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Built with Next.js for optimal performance
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Modular Architecture**: Clean, maintainable component structure
- **SEO Optimized**: Proper meta tags and structured data
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Intersection Observer** - Trigger animations on scroll

### Tools & Libraries
- **Lucide React** - Beautiful, customizable icons
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix handling

### Deployment
- **Vercel** - Optimized for Next.js applications
- **Netlify** - Alternative deployment option

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── common/              # Reusable components
│   │   └── LoadingScreen.tsx
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/            # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       └── Contact.tsx
├── public/                  # Static assets
├── lib/                     # Utility functions
└── types/                   # TypeScript type definitions
```

## 🎨 Design Features

- **3D Effects**: Subtle 3D transformations on hover
- **Gradient Backgrounds**: Beautiful gradient overlays
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Animation**: Engaging loading screen
- **Typing Animation**: Dynamic text animation in hero section
- **Timeline Layout**: Interactive experience timeline
- **Glass Effect**: Modern glassmorphism design elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/riyazashik/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality. The project uses static data and doesn't require external APIs.

### Customization
To customize the portfolio for your own use:

1. **Personal Information**: Update contact details in `components/sections/Contact.tsx`
2. **Social Links**: Modify social media links in `components/layout/Navbar.tsx`
3. **Projects**: Add your projects in `components/sections/Projects.tsx`
4. **Skills**: Update your skills in `components/sections/Skills.tsx`
5. **Experience**: Modify work experience in `components/sections/Experience.tsx`

## 📱 Sections

### Hero Section
- Animated profile picture with rotating border
- Typing animation with multiple roles
- Call-to-action buttons
- Smooth scroll indicator

### About Section
- Personal story and journey
- Key statistics and achievements
- Core values and principles
- Professional profile image

### Experience Section
- Interactive timeline layout
- Work experience with achievements
- Education background
- Certifications and courses

### Projects Section
- Featured project showcase
- Project cards with live demos
- Technology stack display
- GitHub repository links

### Skills Section
- Categorized skill sets
- Progress bars with animations
- External links to technologies
- Skill level indicators

### Contact Section
- Contact form with validation
- Social media links
- Contact information
- Interactive animations

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as they enter viewport
- **Minimal Bundle Size**: Optimized imports and tree shaking
- **SEO Optimization**: Proper meta tags and structured data

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 SEO Features

- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Environment Setup
The project is configured for static export, making it compatible with any static hosting service.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: riyazashik07@gmail.com
- **Phone**: +91 8122327733
- **LinkedIn**: [Riyaz J](https://www.linkedin.com/in/riyaz-ashik-bb435b250)
- **GitHub**: [riyazashik](https://github.com/riyazashik)

---

Built with ❤️ and lots of coffee by Riyaz J