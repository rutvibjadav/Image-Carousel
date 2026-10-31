# Explore the World — Image Carousel

A polished, responsive image slider built with semantic HTML5, CSS3, and vanilla JavaScript. Browse a collection of scenic destinations, navigate manually, or let the carousel rotate automatically.

## Features

- Five high-quality travel and landscape photographs.
- Previous and next controls with wraparound navigation.
- Clickable slide indicators and a live slide counter.
- Automatic rotation every three seconds, paused while hovered and resumed when the pointer leaves.
- Rotation pauses while the browser tab is hidden and avoids duplicate timers.
- Responsive layouts for desktop, tablet, and mobile.
- Smooth fade, zoom, and caption transitions with reduced-motion support.
- Accessible button labels, image descriptions, focus styles, and slide state.

## Technologies

- HTML5 for the page structure.
- CSS3 for responsive layouts, gradients, and animations.
- Vanilla JavaScript for carousel navigation and automatic rotation.
- Unsplash image URLs for the photographs.

## Run locally

No build step or package installation is required.

1. Download or clone this project.
2. Open `index.html` in a modern browser.

For a local web server, run `python -m http.server 8000` from the project folder and visit [http://localhost:8000](http://localhost:8000).

## Deploy with GitHub Pages

1. Push `index.html`, `style.css`, `script.js`, and `README.md` to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch to publish and the `/ (root)` folder, then save.

GitHub Pages will publish the site at the URL shown in the Pages settings. The page uses relative paths for its local assets, so it works from a repository subpath as well.
