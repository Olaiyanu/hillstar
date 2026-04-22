<h1 align="center">Hillstar Nigeria Ltd - Corporate Website</h1>

<p align="center">
  A modern, responsive, and feature-rich corporate website for Hillstar Nigeria Limited, a leading infrastructure and real estate company.
  <br />
  <br />
  <a href="#-key-features">Key Features</a> ·
  <a href="#-technology-stack">Tech Stack</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-project-structure">Project Structure</a>
</p>

---

## 📖 About The Project

This project is the official corporate website for **Hillstar Nigeria Limited**. It serves as a digital gateway for clients, partners, and stakeholders to explore the company's extensive portfolio, services, and history. The application is built with a modern tech stack, focusing on performance, aesthetics, and a seamless user experience.

It showcases the company's expertise in general contracting, real estate development, telecommunications, and more, while also featuring a portfolio of luxury properties available for sale or rent.

---

## ✨ Key Features

*   **Responsive Design**: Fully optimized for a seamless experience on desktops, tablets, and mobile devices.
*   **Dynamic Content**: Data-driven sections for services and properties, making content easy to manage from `src/constants.ts`.
*   **Interactive Animations**: Smooth and engaging animations powered by `motion/react` to enhance user interaction.
*   **Property Listings**: A dedicated section to browse featured properties with details, images, and pricing.
*   **Detailed Views**: Individual pages for services and properties for in-depth information.
*   **Client-Side Routing**: Fast and smooth navigation between pages using React Router.

---

## 🛠️ Technology Stack

This project is built using a modern and robust set of technologies:

*   **Frontend Framework**: React
*   **Build Tool**: Vite
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Routing**: React Router
*   **Animations**: Motion (`motion/react`)
*   **Icons**: Lucide React

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
*   Node.js (v18.x or later recommended)
*   npm (comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/hillstar-website.git
    cd hillstar-website
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

*   `npm run dev`: Runs the app in development mode.
*   `npm run build`: Builds the app for production to the `dist` folder.
*   `npm run preview`: Serves the production build locally to preview.

---

## 📁 Project Structure

The project follows a standard Vite + React structure, organized for scalability and maintainability.

```
/
├── public/               # Static assets (e.g., logo.png)
├── src/
│   ├── components/       # Reusable React components (Footer, About, etc.)
│   ├── pages/            # Page components for each route (Home, AboutPage, etc.)
│   ├── App.tsx           # Main app component with routing setup
│   ├── constants.ts      # Centralized constants and site data
│   └── ...               # Other source files
├── .env                  # Environment variables (untracked)
├── package.json          # Project dependencies and scripts
└── vite.config.ts        # Vite configuration
```
