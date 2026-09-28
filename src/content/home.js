/*
  Text for the site. (Now Playing shows live in nowPlaying.json.)

  Each project in `projects` becomes a section on the page. Fields:
    id        Short name used in the page address (#iron-city) and to give
              the section its own styles in Components/Section/sections.css.
    title     Heading text.
    subtitle  Small line under the title, like a year.
    body      A list of paragraphs. Each one is Markdown, so you can write
              *italics*, **bold**, and [links](https://example.com).
    image     The section's main artwork: a path to a file in /public.
    imageAlt  A short description of the image for screen readers.
    photos    Optional list of extra pictures: { src: "/file.jpg", alt: "..." }
    cta       Optional button: { label: "Button text", href: "..." }
              href can be a spot on this page ("#signup"), a page on this
              site ("/about"), or any other URL (opens in a new tab).
    marquee   Optional ticker along the section's angled bottom edge:
              { title: "Overheard at ...", items: ["quote", "quote"] }
    layout    Where the art sits: "art-left" (the default), "art-right", or
              "art-top" (full width above the text, for wide art). Sections
              without an image are text-only. On phones, art is always on top.
              To fine-tune sizes and alignment, see Components/Section/Section.css.

  Links inside body text follow the same rules as cta hrefs.
  Sections appear in the order listed here.
*/

// The tilted menu link to the About section, in the header.
export const tagline = { label: "What on earth?", href: "#about" }

export const instagram = {
  handle: "@formisfake",
  href: "https://www.instagram.com/formisfake/",
}

export const nowPlaying = {
  // The ticker along the bottom of Now Playing (and the section's heading for screen readers).
  title: "Now Playing",
  ticketLabel: "Get tickets",
  // After a show's end date it stays up this many days, with this label on
  // the ticker and this button instead of the ticket link, then drops off.
  wrapped: {
    label: "Just wrapped",
    days: 14,
    cta: { label: "Catch the next one", href: "#signup" },
  },
  // Shown when no show in nowPlaying.json is current, upcoming, or just wrapped.
  empty: {
    title: "Nothing on right now",
    body: "But something’s always brewing. Get on the list and we’ll tell you the moment the next one opens.",
    cta: { label: "Sign me up", href: "#signup" },
  },
}

export const projects = [
  {
    id: "reverse-murder-mystery",
    title: "Reverse Murder Mystery Party",
    subtitle: "(2024)",
    body: [
      "You know how it goes. You’re having a normal party at the home of a deranged millionaire when suddenly he dies... of MURDER. But this time, the deceased made an unusual request: if an attendee can prove they killed him, they win and inherit his millions.",
      "All Nikki wanted for her 40th birthday was to bring her friends together and give them permission to get silly. Guests were given characters, relationships, weapons, and breakaway glass props with one goal: give the most dramatic confession... to MURDER. (Guests who were less comfortable with improv were given cocktails and a safe viewing distance.)",
      "Lasting friendships were made, wine bottles were shattered, and people started asking “When will you be doing this again?”",
    ],
    // TODO: replace the placeholder with real artwork.
    image: "/reverse-murder-mystery-placeholder.svg",
    imageAlt: "Placeholder art reading “Reverse Murder Mystery Party”",
    layout: "art-right",
  },
  {
    id: "iron-city",
    title: "Iron City",
    subtitle: "(2026-?)",
    body: [
      "We staged a small version of our immersive experience set in a world where the Fae walk the earth and create massive legal headaches as part of *Encounter*, a group show curated by Layna Fisher and Adam Smith.",
      "Guests stumbled on a filing room that had been shrunk and warped through space and time by a fairy prank. Calling a phone number amongst the tangle of documents led guests to an in-person encounter with the head of Greystone Canning, who guided them through a short warding ritual.",
    ],
    image: "/ironcity.png",
    imageAlt: "A glowing fairy hand reaches toward a wireframe sculpture over a desk of legal paperwork and a Greystone/Canning “Fae Arbitration Experts” mug",
    layout: "art-left",
    marquee: {
      title: "Overheard at Iron City",
      items: [
        "“So I called this phone number… and someone talked me through finding all these things… and helping the fairies…”",
        "“Really? No way?”",
        "“Yeah I’m having the greatest day of my life.”",
      ],
    },
  },
  {
    id: "dance-party",
    title: "Dance Party at the End of the World",
    subtitle: "(2006-?)",
    body: [
      "Every October from 2006 to 2013 David threw a dance party with a high concept premise - the radio broadcast from Orson Welles’ War of the Worlds is real. The world is about to end, so party tonight like it’s your last party on earth.",
      "Over 8 years, the production expanded to include sketches, interactive tech, and a punch bowl set on fire (which ruled).",
      "Attendees were given backstories and relationships to other partygoers, encouraging strangers to meet. “Enemies” became friends, friends tore it up on the dance floor, and the world just barely made it through another alien invasion again.",
    ],
    image: "/dancepartyattheendoftheworld.png",
    imageAlt: "Collage of Dance Party at the End of the World: the party’s title card, sepia photos of costumed guests, and a world-map news ticker",
    layout: "art-right",
  },
  {
    id: "greatest-party",
    title: "The Greatest Party Ever",
    subtitle: "(2012)",
    body: [
      "Invitees were given one objective: make people who weren’t there believe that this was the wildest, most fun party with the coolest people ever, and in the process... maybe throw the wildest, most fun party with the coolest people ever?",
      "We made a party out of staging the moments that you always hoped would be captured organically. Folks brought props, staged scandals and debauchery, and had a great time doing it. Did they have the greatest time doing it? We’ll never tell.",
    ],
    image: "/greatestpartyever.png",
    imageAlt: "The Greatest Party Ever seal, an eagle holding a cocktail and a phone, above the caption “[Images redacted to protect the vibe]”",
    layout: "art-right",
  },
  {
    id: "palamo-drafthouse",
    title: "Palamo Drafthouse",
    subtitle: "(2020-?)",
    body: [
      "Why invite friends over to chill and watch a movie when you could invite friends over to watch a NEW FILM FESTIVAL EVERY TIME?",
      "In the spirit of high concept hangouts, we spent the pandemic programming monthly 12 hour marathons for friends to drop into and out of.",
      "Did we make custom film posters for every meetup? You already know we made custom posters for every meetup.",
      "This debacle culminated (FOR NOW) in a double feature at Videotheque in Highland Park with silly little trailers, secret gifts, and tons of snacks.",
    ],
    image: "/palamodrafthouse.png",
    imageAlt: "Collage of Palamo Drafthouse: a neon “Palamo Drafthouse Presents” title card, custom movie-list posters, friends setting up a video-store room, and a snack table",
    layout: "art-left",
  },
  {
    id: "beach-episode",
    title: "Beach Episode",
    body: [
      "A one sheet TTRPG about the balance between self care and being down for the cause.",
    ],
    image: "/beachepisode.png",
    imageAlt: "Beach Episode, a solo journaling game by David Daw, shown as a notepad page among a palm-tree postcard and an airmail envelope",
    layout: "art-left",
    cta: { label: "Download on itch.io", href: "https://formisfake.itch.io/beach-episode" },
  },
]

export const signup = {
  title: "This form is real.",
  intro: "Sign up to our newsletter to hear about updates, playtests, key dates, things of that nature. Not too much.",
  thanks: "Thanks for signing up! You’ll be hearing from us soon! (non-threatening)",
}
