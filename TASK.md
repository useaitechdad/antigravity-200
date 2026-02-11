# Website Upgrade: Use AI with Tech Dad

- [/] **Project Setup**
    - [x] Initialize Next.js project with TypeScript and Tailwind CSS
    - [x] Configure Tailwind theme (Void Gray)
    - [x] Install dependencies (three, etc.)


- [/] **Core Components**
    - [x] [NavBar](file:///Users/techdad/DEVELOPMENT/antigravity-200/src/components/layout/NavBar.tsx#16-136) (Responsive, Sticky, Theme Toggle)
    - [x] [Providers](file:///Users/techdad/DEVELOPMENT/antigravity-200/src/app/providers.tsx#6-13) (Theme Support)
    - [x] [Footer](file:///Users/techdad/DEVELOPMENT/antigravity-200/src/components/layout/Footer.tsx#4-36)
    - [x] [Layout](file:///Users/techdad/DEVELOPMENT/antigravity-200/src/app/layout.tsx#23-44) wrapper (Main content area)
    - [x] `HeroBackground` (Three.js "Breathing Lattice")

- [x] **Pages Implementation**
    - [x] **Home (`/`)**: Split design, Hero integration
    - [x] **Manifesto (`/manifesto`)**: Port "About" content, static text
    - [x] **The Briefing (`/briefing`)**: Blog feed layout, Featured Post
    - [x] **The Lab (`/lab`)**: Documentation/Wiki layout (Sidebar + Markdown view)

- [x] **Content & Features**
    - [x] **Content**: Scrape/Fetch video list from YouTube channel
    - [x] **Briefing**: Populate with "News" style videos
    - [x] **Lab**: Populate with "Tutorial" style videos
    - [x] Implement Markdown rendering for Briefing/Lab (using `next-mdx-remote` or similar)
        - *Note: Using static components for now as main content is Video Grid*
    - [x] Create placeholder content for Lab and Briefing

- [x] **Deployment Setup**
    - [x] Create `next.config.js` optimized for Cloudflare Pages
    - [x] Add [wrangler.json](file:///Users/techdad/DEVELOPMENT/antigravity-200/wrangler.json) for manual configuration
    - [x] **Instruction**: Provide guide for connecting GitHub to Cloudflare Pages
    - [x] **Fix**: Resolve Cloudflare `_worker.js` asset upload error

- [ ] **Verification & Polish**
    - [x] Verify Responsive Design
    - [x] Performance check (Hero interaction)
    - [x] Lint & Build check
    - [x] **Fix**: Resolve missing content issues (Static Fallback implemented)

- [ ] **Future Improvements**
    - [ ] **Reliable Content Fetching**: Implement YouTube Data API v3 with a valid API Key.
        - *Reason*: Current scraping/RSS methods are unreliable due to YouTube blocking. An API Key is the only guaranteed 100% uptime solution.
