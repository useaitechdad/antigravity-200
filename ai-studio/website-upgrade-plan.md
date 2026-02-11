# Project Manifest: Use AI with Tech Dad (v2.0 Migration)

## 1. Executive Summary
**Objective:** Migrate the existing one-page site to a multi-page ecosystem. The site serves two distinct user needs: "The Briefing" (News/Updates) and "The Lab" (Technical Resources/Guides).

**Design Philosophy:** "High-Tech Minimalist." 
*   **Default State:** Dark Mode (Void Gray).
*   **Aesthetic:** Generative art, terminal typography, semantic color coding.
*   **Performance:** High-impact visuals with low CPU overhead.

---

## 2. Site Architecture (Sitemap)

The site structure is flat and utility-focused.

### Level 0: Global Entry
*   **Route:** `/` (Homepage)
*   **Function:** Traffic Control / Dashboard.
*   **Layout:** 
    *   **Background:** Interactive Three.js Neural Network (See Section 4).
    *   **Foreground:** High-contrast "Split Cards" or dual CTA prompting the user to choose their path:
        1.  **Left/Top:** "The Briefing" (Latest Intel).
        2.  **Right/Bottom:** "The Lab" (Build & Secure).

### Level 1: The Briefing
*   **Route:** `/briefing`
*   **Identity:** "The Stream" | Color: **Cyan** (`#22d3ee`).
*   **Layout:** Editorial / Blog Feed.
*   **Key Features:**
    *   Pinned "Daily Download" (Hero Article/Video).
    *   Chronological Timeline of updates.
    *   Tags: `#News`, `#Hardware`, `#Security`.

### Level 2: The Lab
*   **Route:** `/lab`
*   **Identity:** "The Workshop" | Color: **Orange** (`#f97316`).
*   **Layout:** Documentation / Wiki (Sidebar navigation + Main content).
*   **Sub-sections:**
    *   `Setup`: Local LLMs, Environment Configs.
    *   `Utility`: Prompt Engineering, Workflows.
    *   `Security`: Privacy, Safety Guardrails.

### Level 3: Manifesto
*   **Route:** `/manifesto`
*   **Content:** About Tech Dad, The Hardware Stack, Newsletter Signup.

---

## 3. Design System & UI Specs

### Color Palette (Tailwind CSS Notation)
*   **Background (Dark/Default):** `bg-slate-900` or custom `#0b1120` (Void Gray). *Do not use pure black.*
*   **Background (Light):** `bg-slate-50` (`#F8FAFC`).
*   **Text (Dark Mode):** `text-slate-200` (High readability).
*   **Text (Light Mode):** `text-slate-800`.
*   **Accents:**
    *   **Briefing:** Cyan-400 (Dark) / Cyan-600 (Light).
    *   **Lab:** Orange-500 (Dark) / Orange-600 (Light).

### Typography
*   **Headings:** Monospaced (e.g., `JetBrains Mono`, `Space Mono`, or `Geist Mono`).
*   **Body:** Clean Sans-serif (e.g., `Inter`, `Geist Sans`).

### Navigation Bar (Sticky Top)
*   **Left:** Logo ("Use AI / Tech Dad").
*   **Center:** Icons + Text Labels.
    *   Radar Icon -> Briefing.
    *   Beaker/Terminal Icon -> The Lab.
*   **Right:** 
    *   Search Trigger.
    *   **Theme Toggle:** Switch between Void Gray (Dark) and Paper White (Light).

---

## 4. Hero Component: "The Breathing Lattice" (Three.js)

**Constraint:** visual impact MUST NOT compromise CPU performance.
**Strategy:** Use fixed geometry rotation instead of particle distance calculation.

### Technical Implementation
1.  **Library:** `Three.js` (or `React Three Fiber`).
2.  **Geometry:** `IcosahedronGeometry` (Detail level: 2 or 3).
3.  **Visual Layers:**
    *   **Layer 1 (Nodes):** Render the geometry vertices as `THREE.Points`.
        *   *Material:* Glowing circular sprite texture.
    *   **Layer 2 (Synapses):** Clone the geometry and render as `Wireframe`.
        *   *Material:* Low opacity (0.1), transparent lines.
4.  **Animation Logic:**
    *   **Auto-Play:** Apply a slow Sine Wave to `mesh.scale` to simulate "breathing."
    *   **User Input:** Map Mouse X/Y to `mesh.rotation.y` and `mesh.rotation.x`.
    *   *Result:* The network rotates and tilts to follow the user's cursor.
5.  **Theming:** 
    *   Listen to the Global Theme State.
    *   **Dark Mode:** Nodes = Cyan/Blue.
    *   **Light Mode:** Nodes = Slate/Indigo.

---

## 5. Implementation Checklist for Agent

- [ ] **Scaffold:** Set up Next.js / React project with Tailwind CSS.
- [ ] **Theme:** Configure `tailwind.config.js` with "Void Gray" palette.
- [ ] **Router:** Create directory structure for `/briefing`, `/lab`, `/manifesto`.
- [ ] **Component:** Build `NavBar` with active state highlighting.
- [ ] **Component:** Build `HeroBackground` (Three.js) using the **Optimized Icosahedron** method.
- [ ] **Layout:** Assemble the Homepage split-screen view.
- [ ] **Layout:** Build the Documentation shell for `/lab` (Sidebar + Markdown render area).