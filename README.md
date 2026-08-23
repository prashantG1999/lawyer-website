# ⚖️ Juriva Legal — Official Web Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#license)

> **Juriva Legal | Advocates & Legal Consultants**  
> A modern, high-performance, and responsive web platform providing trusted legal counsel, comprehensive practice area guides, legal insights, and client consultation workflows across Indian courts and tribunals.

---

## 🏛️ About Juriva Legal

Juriva Legal is a premier legal consultancy and advocacy practice providing robust representation across diverse jurisdictions in India. This web application serves as the firm's digital presence, delivering legal insights, detailed practice summaries, court forum guides, and an interactive consultation channel.

---

## ✨ Key Features

- **🏛️ Practice Areas Showcase**: Dedicated deep-dive pages detailing services, applicable statutes, and forums for:
  - Banking & SARFAESI Law
  - Negotiable Instruments Act (Cheque Bounce/Dishonour)
  - Civil & Land Revenue Litigation
  - Criminal Law & Defense (BNS, BNSS, BSA)
  - Corporate & Commercial Advisory
  - Family & Matrimonial Law
  - Consumer Protection & Dispute Resolution
- **📰 Legal Insights & Blog**:
  - Full-text search and category-based filtering
  - Read-time estimation and author attributions
  - Rich typography and structured legal analyses
- **✉️ Direct Consultation Portal**:
  - Integrated contact and inquiry forms powered by **EmailJS**
  - Instant client outreach with field validations
- **🎨 Premium UI / UX Design**:
  - Custom brand aesthetic with curated Olive & Gold palette
  - Refined typography utilizing *Playfair Display* and *Bookman Old Style*
  - Fully responsive across desktop, tablet, and mobile devices
- **🚀 SEO & Performance**:
  - Dynamic metadata and Open Graph tags powered by `react-helmet-async`
  - Zero-lag client-side routing with `react-router-dom` (HashRouter for broad host compatibility)
  - Optimized asset loading and clean semantic HTML

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **SEO & Head Management** | [React Helmet Async](https://github.com/staylor/react-helmet-async) |
| **Styling** | Vanilla CSS3 (Custom Design System & CSS Variables) |
| **Form Handling / Mail** | [EmailJS](https://www.emailjs.com/) |

---

## 📁 Project Structure

```text
lawyer-website/
├── public/                     # Static assets (favicons, OG images, logos)
├── src/
│   ├── assets/                 # Brand images and illustrations
│   ├── components/             # Reusable UI components (Navbar, Footer, Layout, etc.)
│   ├── data/                   # Structured data (practice areas, blog posts)
│   │   ├── blogData.ts         # Blog post definitions and articles
│   │   └── practiceAreasData.ts# Practice areas, statutes, and services
│   ├── pages/                  # Page-level route views
│   │   ├── About.tsx           # Firm profile and advocacy philosophy
│   │   ├── Blog.tsx            # Legal insights overview and filter
│   │   ├── BlogPostDetail.tsx  # Full article reader view
│   │   ├── Contact.tsx         # Consultation form and office details
│   │   ├── Home.tsx            # Hero, highlights, and practice overview
│   │   ├── Services.tsx        # Comprehensive services overview
│   │   └── practice-areas/     # Individual practice area detail pages
│   ├── App.tsx                 # Root router configuration
│   ├── index.css               # Core design tokens, CSS variables, typography
│   └── main.tsx                # Application entry point
├── index.html                  # HTML entry with OpenGraph & SEO tags
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prashantG1999/lawyer-website.git
   cd lawyer-website
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your EmailJS configuration:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`.

---

## 📦 Build & Deployment

To generate an optimized production bundle:

```bash
npm run build
```

The production-ready static assets will be output to the `dist/` directory. These can be hosted directly on **Hostinger**, **Vercel**, **Netlify**, or any standard static web server.

---

## 📄 License

Copyright © Juriva Legal. All rights reserved.  
Unauthorized copying, modification, or distribution of this code is strictly prohibited.
