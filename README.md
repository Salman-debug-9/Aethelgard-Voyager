# 🧭 Aethelgard Collections — The Zenith of Luxury Travel

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Aethelgard Collections is a cinematic, ultra-premium travel experience platform designed for the modern explorer. Built with a focus on **narrative-driven UI/UX**, it combines high-performance web technology with an aesthetic guided by "Unspoken Luxury."

---

## 📖 The Vision
Aethelgard doesn't just curate destinations; it curates horizons. This project was engineered to move beyond traditional booking platforms, offering an immersive, visceral journey through code. Every scroll, every interaction, and every frame is designed to evoke the feeling of a bespoke voyage.

## 🏛️ Core Features

### 1. Cinematic Fluidity
- **High-End Kinetics**: Driven by `@studio-freight/lenis` for inertial, butter-smooth scrolling.
- **Micro-Interactions**: Recursive SVG animations and hover-triggered parent translations.
- **Parallax Narratives**: Multi-layered depth mapping that reacts to scroll velocity.

### 2. Intelligent AI Concierge
- **Bespoke Planning**: A custom-trained AI persona that serves as your digital travel architect.
- **Narrative Logic**: Built on OpenAI's latest models, providing expert advice on logistics, heritage, and luxury travel.
- **Independent Scrolling**: A dedicated scroll context for the chat interface, ensuring page navigation is never interrupted.

### 3. Modular Aesthetic System
- **Pure CSS Modules**: Zero reliance on heavyweight utility frameworks. Handcrafted vanilla CSS for extreme performance and granular control.
- **Glassmorphism**: Sophisticated backdrop filtering and noise overlays for a tactile, physical feel.
- **Typographic Hierarchy**: A curated system using *Cormorant Garamond* for heritage and *Outfit* for modern clarity.

### 4. Specialized Tooling
- **Itinerary Architect**: A multi-step booking manifest that generates unique reference IDs.
- **Heritage Timeline**: An interactive archive of the agency's history and milestones.
- **Smart Utilities**: Integrated weather, currency, and visa requirement trackers for seamless planning.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Animation** | Framer Motion & GSAP |
| **Styling** | Vanilla CSS Modules |
| **AI** | OpenAI SDK |
| **Icons** | Lucide React |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- An OpenAI API Key

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/aethelgard-collections.git
   cd aethelgard-collections
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory. You can use `.env.example` as a template:
   ```bash
   cp .env.example .env
   ```
   Then, update the `.env` file with your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-dedicated-key-here
   ```
   > **Note:** Never commit your `.env` file to version control. It is already included in `.gitignore`.

4. **Launch the Experience**:
   ```bash
   npm run dev
   ```

---

## 📁 Project Architecture

```text
src/
├── app/               # Next.js App Router (Pages & API Routes)
│   ├── api/           # Serverless functions (AI Chat)
│   ├── booking/       # Booking Manifest flow
│   └── tours/         # Dynamic destination archiving
├── components/        # Reusable UI Architecture
│   ├── layout/        # Navbar, Footer, AI Assistant
│   ├── home/          # Modular homepage sections
│   └── ui/            # Primitive UI components (Timeline, Buttons)
├── styles/            # Handcrafted CSS Modules
└── lib/               # Utility functions and shared logic
```

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ✉️ Contact
For inquiries regarding bespoke development or project collaboration:
**Concierge**: [concierge@aethelgard.com](mailto:concierge@aethelgard.com)

---
*Aethelgard Collections — Where the Journey Ends, Exploration Begins.*
