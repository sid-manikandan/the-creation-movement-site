const eventTracks = [
  {
    title: "Library Events",
    description:
      "Hands-on sessions where students can explore STEM, creativity, and problem-solving in a welcoming community space.",
  },
  {
    title: "Private Sessions",
    description:
      "Small-group or one-on-one learning opportunities for students who want extra support, enrichment, or project guidance.",
  },
  {
    title: "Interest Form",
    description:
      "Families and volunteers can contact the team to share interest while our official signup form is being prepared.",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Events</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Learn, build, and connect in person.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          Our events are built around active learning: students ask questions,
          try ideas, make projects, and connect what they learn to the world
          around them.
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
