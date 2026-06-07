const eventTracks = [
  {
    title: "Library Events",
    description:
      "Placeholder for upcoming library sessions, workshop dates, locations, and registration details.",
  },
  {
    title: "Private Sessions",
    description:
      "Placeholder for private lessons, small-group STEM support, and custom learning opportunities.",
  },
  {
    title: "Interest Form",
    description:
      "Google Form placeholder. Add the real form link when it is ready so families and volunteers can sign up.",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Events</p>
        <h1 className="font-display mt-3 max-w-4xl text-5xl uppercase leading-[0.95] sm:text-7xl">
          Learn, build, and connect in person.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          Keep the event structure simple for now: library events, private
          sessions, and an interest form placeholder.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {eventTracks.map((track, index) => (
            <article
              key={track.title}
              className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#7c3fd1]"
            >
              <p className="grid size-12 place-items-center rounded-full bg-sun text-lg font-black">
                {index + 1}
              </p>
              <h2 className="mt-7 text-2xl font-black uppercase">
                {track.title}
              </h2>
              <p className="mt-4 font-semibold leading-7 text-ink/70">
                {track.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
