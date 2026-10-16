
"use client";

const carols = [
  { title: "We Wish You a Merry Christmas", status: "First carol in preparation" },
  { title: "Silent Night", status: "Coming soon" },
  { title: "Deck the Halls", status: "Coming soon" },
  { title: "Jingle Bells", status: "Coming soon" },
  { title: "Away in a Manger", status: "Coming soon" },
];

export function ChristmasHome() {
  return (
    <main className="christmas-home">
      <div className="christmas-backdrop" aria-hidden="true" />
      <div className="snowfall snowfall-one" aria-hidden="true" />
      <div className="snowfall snowfall-two" aria-hidden="true" />
      <div className="christmas-shade" aria-hidden="true" />

      <div className="christmas-content">
        <p className="christmas-eyebrow">
          A little more magic, for everyone
        </p>

        <h1>Inclusive Karaoke</h1>

        <p className="christmas-intro">
          Songs to share, voices to join, and ways for everyone
          to be part of the moment.
        </p>

        <a className="christmas-primary" href="/sing">
          Preview the karaoke player <span aria-hidden="true">♪</span>
        </a>

        <section className="carol-list" aria-labelledby="carol-list-title">
          <h2 id="carol-list-title">Our Christmas songbook</h2>
          <ul>
            {carols.map((carol) => (
              <li key={carol.title}>
                <span className="carol-name">{carol.title}</span>
                <span className="carol-status">{carol.status}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="accessibility-note"
          id="accessibility"
          aria-labelledby="accessibility-title"
        >
          <h2 id="accessibility-title">A place for everyone</h2>
          <p>
            Large, clear lyrics are already part of the player.
            We’re building towards adjustable reading styles,
            BSL signing support and Makaton resources, with the
            right reviews and permissions in place.
          </p>
        </section>

        <p className="christmas-footnote">
          Early prototype · Christmas songs and signing resources
          are still being prepared.
        </p>
      </div>
    </main>
  );
}
