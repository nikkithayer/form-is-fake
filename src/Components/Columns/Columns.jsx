import Column from '../Column/Column'
import './Columns.css'

function Columns() {

  const palamoDrafthouse = {
    title: "Palamo Drafthouse",
    image: "/palamodrafthouse.png",
    year: "(2020-?)",
    content: ["Why invite friends over to chill and watch a movie when you could invite friends over to watch a NEW FILM FESTIVAL EVERY TIME?",
    "In the spirit of high concept hangouts, we spent the pandemic programming monthly 12 hour marathons for friends to drop into and out of.",
    "Did we make custom film posters for every meetup? You already know we made custom posters for every meetup.",
    "This debacle culminated (FOR NOW) in a double feature at Videotheque in Highland Park with silly little trailers, secret gifts, and tons of snacks."]
  }

  const danceParty = {
    title: "Dance Party at the End of the World",
    image: "/dancepartyattheendoftheworld.png",
    year: "(2006-?)",
    content: ["Every October, from 2006 to 2013 David Daw held a dance party with a twist - the radio broadcast from Orson Welles’ War of the Worlds is real, and the world is about to end.",
    "Over 8 years, the production expanded to include sketches, interactive tech, and a punch bowl set on fire (which ruled).",
    "Attendees were given backstories and relationships to other partygoers, encouraging strangers to meet. “Enemies” became friends, friends tore it up on the dance floor, and the world just barely made it through another alien invasion again."]
  }

  const greatestParty = {
    title: "The Greatest Party Ever",
    image: "/greatestpartyever.png",
    year: "(2012)",
    content: ["Invitees were given one objective: make people who weren’t there believe that this was the wildest, most fun party with the coolest people ever, and in the process... maybe throw the wildest, most fun party with the coolest people ever?",
    "We made a party out of staging the moments that you always hoped would be captured organically. Folks brought props, staged scandals and debauchery, and had a great time doing it. Did they have the greatest time doing it? We’ll never tell."]
  }



  return (
    <>
    <div className="columns-container">
      <h1>What else have ya got?</h1>
    <div className="section-column">
      <Column columnInfo={palamoDrafthouse} />
      <Column columnInfo={danceParty} />
      <Column columnInfo={greatestParty} />
      </div>
    </div>
    </>
  )
}

export default Columns