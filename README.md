# Form is Fake

The website for Form is Fake, a two-person team making events, games, and spectacles by smushing mediums and genres together. It's a single page: what's playing now, a slide for each project, about us, and a newsletter signup.

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
| `npm run now-playing <url>` | Add a show from a ticket link (see below) |

## Project structure

```
public/               Images and other static files, served from /
src/
  main.jsx            Entry point and routes (/about redirects to /#about)
  App.jsx             Page layout, top to bottom
  content/            All site text: home.js, about.js, nowPlaying.json
  firebase-config.js  Firebase setup and addSignup()
scripts/
  now-playing.mjs     Imports a show from an Eventbrite or Luma link
  Components/         One folder per component, each with its own CSS
  Components/Slide/slides.css  Each project slide's own look
  styles/
    tokens.css        Design tokens: colors, spacing, radii, widths
    global.css        Base element styles and shared classes
```

## Editing text

All of the site's text lives in `src/content/`. `home.js` has the project slides, the Now Playing wording, the Instagram link, and the signup form text; `about.js` has the About slide. To add a project, add an entry to the `projects` list. You don't need to touch any components. The comment at the top of `home.js` lists every field. Set a project's `layout` to `art-left` (the default), `art-right`, or `art-top` to choose where its art sits. To give a new project its own look, add a `.slide--<id>` block to `src/Components/Slide/slides.css`; that block can also fine-tune the layout with `--slide-art-size`, `--slide-text-size`, and `--slide-align`.

Paragraphs are written in Markdown, so `*italics*`, `**bold**`, and `[links](https://example.com)` work. Link addresses and button `href`s follow the same rules:

- `/about`: a page on this site
- `#signup`: scrolls to that part of the page
- anything else: opens in a new tab

## Now Playing

The top of the page lists the shows in `src/content/nowPlaying.json`. Each show has a `start` and `end` date (`YYYY-MM-DD`):

- Before `start` it's marked "Coming soon". From `start` through `end` it's "Now Playing".
- After `end` it disappears on its own, with no edit or redeploy needed.
- With no current or upcoming shows, the section invites people to join the newsletter instead.

To add a show from its ticket page (Eventbrite, Luma, or anything else that publishes standard event data):

```sh
npm run now-playing https://www.eventbrite.com/e/... -- --end 2026-11-22
```

A ticket page usually describes one performance, so pass `--end` for closing night (and `--start` if the link isn't opening night). Then check the new entry: the `blurb` and `imageAlt` are starting points. Running the command again for the same link updates the dates you pass and keeps your hand edits. You can also add or edit shows in the JSON by hand.

## Styling

- Use the variables in `src/styles/tokens.css` rather than hard-coded colors or sizes.
- Heading looks come from classes, not tag names: `.title` for the large bold heading and `.subtitle` for the blue uppercase one. Pick the heading level (`h1`–`h3`) for the page's structure and the class for its look.
- `.container` centers content at the site's max width, and `.btn` is the shared button style.

## Newsletter signups

The signup form writes `{ name, email, playtest }` to the `Signups` collection in Firestore after signing the visitor in anonymously. For this to work, the Firebase project needs:

- **Anonymous** enabled under Authentication → Sign-in method.
- Firestore rules that allow signed-in users to `create` documents in `Signups` and deny everything else.

The Firebase config in `firebase-config.js` is public by design; the Firestore rules are what protect the data.
