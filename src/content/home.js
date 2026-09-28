/*
  Text for the home page.

  Each project (in `sections` and `projects.items`) can have:
    title     Heading text.
    subtitle  Small line under the title, like a year. Shown in project columns.
    body      A list of paragraphs. Each one is Markdown, so you can write
              *italics*, **bold**, and [links](https://example.com).
    image     Path to a file in /public, e.g. "/ironcity.png".
    imageAlt  A short description of the image for screen readers.
    cta       Optional button: { label: "Button text", href: "..." }
              href can be a page on this site ("/about"), a spot on this
              page ("#signup"), or any other URL (opens in a new tab).
    theme     Colors for a section: "light", "blue", or "dark".

  Links inside body text follow the same rules as cta hrefs.
*/

export const sections = [
  {
    title: "What on earth?",
    body: [
      "We’re a (two person) team of interdisciplinary writers, coders, and artists who make events, games, and spectacles by smushing mediums and genres together.",
    ],
    cta: { label: "What does that even mean?", href: "/about" },
    theme: "light",
  },
  {
    title: "Iron City",
    body: [
      "Iron City is an immersive experience that takes place in a world where the Fae have returned and you need to help a lawfirm dealing with magical contract law.",
      "Guests will explore a world of fairies, magic, and legal jargon in our first ever open to the public immersive show.",
      "It's as much fun as you can have with the legal profession...Legally!",
    ],
    image: "/ironcity.png",
    imageAlt: "A glowing fairy hand reaches toward a wireframe sculpture over a desk of legal paperwork and a Greystone/Canning “Fae Arbitration Experts” mug",
    cta: { label: "I'm intrigued and wish to subscribe to your newsletter.", href: "#signup" },
    theme: "blue",
  },
  {
    title: "Beach Episode",
    body: [
      "A one sheet TTRPG about the balance between self care and being down for the cause.",
    ],
    image: "/beachepisode.png",
    imageAlt: "Beach Episode, a solo journaling game by David Daw, shown as a notepad page among a palm-tree postcard and an airmail envelope",
    cta: { label: "Download on itch.io", href: "https://formisfake.itch.io/beach-episode" },
    theme: "dark",
  },
]

export const projects = {
  title: "What else have ya got?",
  items: [
    {
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
    },
    {
      title: "Dance Party at the End of the World",
      subtitle: "(2006-?)",
      body: [
        "Every October, from 2006 to 2013 David Daw held a dance party with a twist - the radio broadcast from Orson Welles’ War of the Worlds is real, and the world is about to end.",
        "Over 8 years, the production expanded to include sketches, interactive tech, and a punch bowl set on fire (which ruled).",
        "Attendees were given backstories and relationships to other partygoers, encouraging strangers to meet. “Enemies” became friends, friends tore it up on the dance floor, and the world just barely made it through another alien invasion again.",
      ],
      image: "/dancepartyattheendoftheworld.png",
      imageAlt: "Collage of Dance Party at the End of the World: the party’s title card, sepia photos of costumed guests, and a world-map news ticker",
    },
    {
      title: "The Greatest Party Ever",
      subtitle: "(2012)",
      body: [
        "Invitees were given one objective: make people who weren’t there believe that this was the wildest, most fun party with the coolest people ever, and in the process... maybe throw the wildest, most fun party with the coolest people ever?",
        "We made a party out of staging the moments that you always hoped would be captured organically. Folks brought props, staged scandals and debauchery, and had a great time doing it. Did they have the greatest time doing it? We’ll never tell.",
      ],
      image: "/greatestpartyever.png",
      imageAlt: "The Greatest Party Ever seal, an eagle holding a cocktail and a phone, above the caption “[Images redacted to protect the vibe]”",
    },
  ],
}

export const signup = {
  title: "This form is real.",
  intro: "Sign up to our newsletter to hear about updates, playtests, key dates, things of that nature. Not too much.",
  thanks: "Thanks for signing up! You’ll be hearing from us soon! (non-threatening)",
}
