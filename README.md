# Portfolio

Personal portfolio website showcasing projects, skills and contact information. Clean, responsive, and easy to customize — built to show your work and get hired.

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Personal%20Website-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

**Live Demo:** [Soon to buy a domain name](https://your-portfolio-url.com)

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Preview](#-preview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

### 🎯 About

This repository contains my personal portfolio website. It highlights projects, experience, and contact info so recruiters and collaborators can quickly see what I build. The layout is responsive and optimized for fast loading and accessibility.

### ✨ Features

- **Hero Section** - Eye-catching landing with intro and call-to-action
- **Projects Gallery** - Showcase of completed projects with links and descriptions
- **Skills Section** - Visual representation of technical stack and competencies
- **About/Timeline** - Professional experience and educational background
- **Contact Form** - Direct communication channel with form validation
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Engaging scroll interactions and transitions
- **Dark/Light Mode** - Theme toggle for better user experience
- **SEO Optimized** - Meta tags and structured data for better visibility
- **Performance Focused** - Lazy loading, optimized images, and fast load times

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) - Lightning fast HMR and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Router** - Client-side routing
- **React Icons** - Popular icon libraries

### Tools & Libraries
- **React Hook Form** - Form validation
- **AOS** - Animate on scroll library

### Deployment
- **Vercel/Netlify** - Continuous deployment
- **GitHub Actions** - CI/CD pipeline

## 📸 Preview

### Desktop View
![Desktop Screenshot](./assets/images/desktop-preview.png)

### Mobile View
![Mobile Screenshot](./assets//images/mobile-preview.png)

### Features Demo
![Features GIF]

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (>= 16.0.0)
- **npm** (>= 8.0.0) or **yarn** (>= 1.22.0)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BelhiaSofiane/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 📜 Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode with hot reload.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
Locally preview the production build.

### `npm run lint`
Runs ESLint to check for code quality issues.

### `npm run format`
Formats code using Prettier.

### `npm test`
Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
Portfolio/
├── public/              # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── common/     # Shared components
│   │   ├── sections/   # Page sections
│   │   └── ui/         # UI elements
│   ├── data/           # Static data/content
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   ├── utils/          # Helper functions
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── .env.example        # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🌐 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BelhiaSofiane/Portfolio)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/BelhiaSofiane/Portfolio)

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Sofiane Belhia**

- GitHub: [@BelhiaSofiane](https://github.com/BelhiaSofiane)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/sofiane-belhia/)
- Email: sofianemekkibelhia@gmail.com
- Portfolio: [sofianebelhia.com](https://your-portfolio-url.com)

---

⭐ If you find this portfolio helpful, please consider giving it a star!

**Made with ❤️ by Sofiane Belhia**
