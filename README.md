# Form is Fake

The website for Form is Fake, a two-person team making events, games, and spectacles by smushing mediums and genres together. The site showcases our projects and collects newsletter signups.

Built with React, Vite, and React Router. Signups are stored in Firebase Firestore.

## Getting started

Requires Node 18 or newer.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with hot reload |
| `npm run build`   | Build the production site to `dist/` |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint                           |

## Project structure

```
public/               Images and other static files, served from /
src/
  main.jsx            Entry point and routes (/ and /about)
  App.jsx             Home page and its project content
  firebase-config.js  Firebase setup and addSignup()
  Components/         One folder per component, each with its own CSS
  styles/
    tokens.css        Design tokens: colors, spacing, radii, widths
    global.css        Base element styles and shared classes
```

Project content (titles, descriptions, images, alt text, button labels) lives as data objects in `App.jsx` and `Components/Columns/Columns.jsx`.

## Styling

- Use the variables in `src/styles/tokens.css` rather than hard-coded colors or sizes.
- Heading looks come from classes, not tag names: `.title` for the large bold heading and `.subtitle` for the blue uppercase one. Pick the heading level (`h1`–`h3`) for the page's structure and the class for its look.
- `.container` centers content at the site's max width, and `.btn` is the shared button style.

## Newsletter signups

The signup form writes `{ name, email, playtest }` to the `Signups` collection in Firestore after signing the visitor in anonymously. For this to work, the Firebase project needs:

- **Anonymous** enabled under Authentication → Sign-in method.
- Firestore rules that allow signed-in users to `create` documents in `Signups` and deny everything else.

The Firebase config in `firebase-config.js` is public by design; the Firestore rules are what protect the data.
