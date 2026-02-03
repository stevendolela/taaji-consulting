# AI Coding Agent Instructions - TAAJI CONSULTING Website

## Project Overview
**TAAJI CONSULTING** is a static HTML/CSS/JavaScript corporate website for a Kinshasa-based IT consulting firm. Seven interconnected pages showcase consulting, equipment solutions, tech recruitment, and international partnerships. No backend framework—vanilla JavaScript only. See [README.md](../README.md) for full context.

## Architecture & File Structure

### Pages (7 HTML files)
- **index.html** — Homepage with 3 business pillars, hero, preloader (1.5s fade)
- **services.html** — Consulting & digital transformation services
- **solutions.html** — Equipment catalog + quote request form
- **recrutement.html** — Tech talent recruitment services
- **partenariats.html** — International partnerships (6 sectors: Telecom, AI, Big Data, Cloud, Cybersecurity, Fintech)
- **about.html** — Company info with CEO message
- **contact.html** — Contact form + embedded Google Maps
- **mentions-legales.html** — Legal disclaimers

### Styling & Interactivity
- **css/style.css** (2825 lines) — All styles: responsive design (768px breakpoint), animations, color palette
- **js/script.js** (301 lines) — Vanilla JS: mobile menu toggle, form validation, preloader fade, smooth scrolling
- **images/** — Logo (Taji-logo-removebg-preview.png)

## Key Patterns & Conventions

### Color Palette (CSS variables)
```css
--primary-blue: #1e40af
--secondary-cyan: #0284c7
--purple-accent: #8b5cf6
--dark-bg: #0f172a / #1e293b
--light-text: #94a3b8
```
Always use existing variables. Add new colors sparingly to `.color-palette` section.

### Semantic HTML Structure
Every page follows:
```html
<header><nav class="navbar">...</nav></header>
<main>
  <section class="page-header">...</section>
  <section class="section"><!-- content blocks --></section>
</main>
<footer>...</footer>
```
Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`. Add `alt` attributes to all images.

### Responsive Design
- **Mobile-first**: Default styles for mobile
- **768px breakpoint**: Tablet+ sizes use `@media (min-width: 768px)`
- **Mobile menu**: Hamburger toggle (`.mobile-menu-toggle`) closes menu on nav link click
- **Preloader**: Animated spinner (1.5s) on every page—DO NOT remove

### Form Validation (script.js)
```javascript
// Contact form validates: required fields, email regex, GDPR consent
// Errors/success messages displayed dynamically in `.form-message`
// IMPORTANT: Forms currently log to console—no backend integration yet (see TODO.md)
```

### Navigation Pattern
All pages use identical navbar + footer. Update one page → copy to others. Critical: maintain `.active` class on current page link.

### Animations
Defined in style.css: `fadeInUp`, `pulse`, `spin`, `fadeIn`. Use `animation: fadeInUp 0.8s` for consistency.

## Development Workflow

### Local Testing
```bash
# Python HTTP server (recommended)
python -m http.server 8000
# Open: http://localhost:8000

# OR use VS Code Live Server extension
```

### Adding Content
1. Add HTML to appropriate page (use semantic structure)
2. Add corresponding CSS to style.css (group by section with comments)
3. Add JS interaction to script.js if needed (always wrap in `DOMContentLoaded` event)
4. Test responsive layout at 768px breakpoint
5. Ensure preloader displays correctly

### Common Edits
- **Update navbar**: Edit in ONE page, copy `<header>` block to all others
- **Change colors**: Modify CSS variables at top of style.css
- **Add images**: Place in `images/` folder, reference with relative paths
- **Form fields**: Add input to HTML, add validation logic to script.js

## Critical Pending Tasks
See TODO.md: Logo integration, missing contact details (+243 phone, exact address, GPS coordinates), team photos, form backend integration.

## Standards

### HTML Conventions
- Use `<h1>` for page title only (one per page)
- All images require `alt` attributes with descriptive text
- Form inputs use matching `id` and `name` attributes
- Validate with W3C Validator before committing

### CSS Conventions
- Comment section headers: `/* ===== Section Name ===== */`
- Use existing classes before creating new ones
- Media queries at end of each section (not in separate block)
- Maintain 2-space indentation

### JavaScript Conventions
- Vanilla JS only—no frameworks or jQuery
- All DOM manipulation inside `DOMContentLoaded` event listener
- Comment complex functions
- Test in multiple browsers (Chrome, Firefox, Safari)

## References
- [CONTRIBUTING.md](../CONTRIBUTING.md) — Contribution guidelines
- [QUICK_START.md](../QUICK_START.md) — 5-minute launch guide
- [DEPLOYMENT.md](../DEPLOYMENT.md) — Production deployment
- [STATS.md](../STATS.md) — Project statistics
