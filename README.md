<div align="center">
  <img src="public/logo.png" alt="Hillstar Logo" width="150" />
  
  <h1>Hillstar Nigeria Ltd - Corporate Website</h1>
  
  <p>
    A modern, responsive, and feature-rich corporate website for <strong>Hillstar Nigeria Limited</strong>, a leading infrastructure and real estate company.
  </p>

  <p>
    <a href="#-about-the-project">About</a> •
    <a href="#-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a>
  </p>
</div>

---

## 📖 About The Project

This project is the official corporate website for **Hillstar Nigeria Limited**. It serves as a digital gateway for clients, partners, and stakeholders to explore the company's extensive portfolio, services, and history. 

The application is built with a modern tech stack, focusing on performance, aesthetics, and a seamless user experience. It showcases the company's expertise in general contracting, real estate development, telecommunications, renewable energy, hospitality, and procurement services, while also featuring an interactive portfolio of luxury properties available for sale or rent.

---

## ✨ Features

- 📱 **Responsive Design:** Fully optimized for a seamless experience on desktops, tablets, and mobile devices.
- ⚡ **Dynamic Content:** Data-driven sections for services and properties, making content easy to manage from `src/constants.ts`.
- 🎨 **Interactive Animations:** Smooth and engaging animations powered by Motion to enhance user interaction.
- 🏢 **Property Listings:** A dedicated section to browse featured properties with details, images, and project status.
- 📄 **Detailed Views:** Individual pages for services and properties for in-depth information.
- 🚀 **Client-Side Routing:** Fast and smooth navigation between pages using React Router.

---

## 🛠️ Tech Stack

**Core Framework & Language:**
- React 19
- TypeScript
- Vite 6

**Styling & UI:**
- Tailwind CSS 4
- Lucide React (Icons)
- Motion (Animations)

**Routing:**
- React Router DOM 7

---

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v18.x or later recommended)
- npm (comes with Node.js) or yarn/pnpm

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/hillstar-website.git
   cd hillstar-website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000` (or the port specified by Vite).

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode with hot module replacement (HMR).
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Serves the production build locally to preview.
- `npm run lint`: Runs TypeScript type checking.

---

## 📁 Project Structure

The project follows a standard Vite + React structure, organized for modularity and maintainability.

```text
hillstar/
├── public/               # Static assets (e.g., logo.png)
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
│   ├── pages/            # Top-level page components for routing
│   ├── types/            # TypeScript interfaces and type definitions
│   ├── App.tsx           # Main application wrapper and routing configuration
│   ├── constants.ts      # Centralized static data (Properties, Services, Nav items)
│   ├── index.css         # Global styles and Tailwind imports
│   └── main.tsx          # Application entry point
├── package.json          # Project metadata, scripts, and dependencies
├── vite.config.ts        # Vite build configuration
└── README.md             # Project documentation
```
