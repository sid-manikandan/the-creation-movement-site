const contentTracks = [
  {
    title: "Newsletter",
    label: "Coming Soon",
    description:
      "A regular update from The Creation Movement with workshop highlights, student reflections, project ideas, and ways to get involved.",
  },
  {
    title: "Workshop Recaps",
    label: "Events",
    description:
      "Stories from our sessions, including what students built, what we learned, and how each event helped bring creativity into action.",
  },
  {
    title: "Student Articles",
    label: "Community",
    description:
      "Thoughtful posts from students about STEM, creativity, service, learning, and the projects they want to share with others.",
  },
];

export default function BlogsPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Content Hub</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Newsletters, stories, and ideas from our community
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          This will be the home for Creation Movement newsletters, blog posts,
          workshop recaps, event updates, and student-written pieces about the
          ideas we are building together.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-accent text-4xl text-teal">
              What We&apos;ll Share
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              A place for updates, reflections, and student voices
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {contentTracks.map((track) => (
              <article
                key={track.title}
                className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#001a46]"
              >
                <p className="inline-flex rounded-full bg-sun px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink">
                  {track.label}
                </p>
                <h2 className="mt-6 text-2xl font-black uppercase">
                  {track.title}
                </h2>
                <p className="mt-4 font-semibold leading-7 text-ink/70">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-accent text-4xl text-purple">
              Article Interest Form
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Want to suggest a newsletter article?
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
              Soon, students and community members will be able to propose
              article ideas for the newsletter, share event reflections, or
              pitch posts about projects, STEM topics, creativity, and service.
            </p>
          </div>

          <div className="rounded-2xl border-3 border-ink bg-white p-7 shadow-[8px_8px_0_#f57a20]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">
              Coming Soon
            </p>
            <p className="mt-4 text-3xl font-black leading-tight tracking-tight text-ink">
              Interest form for article proposals
            </p>
            <p className="mt-4 font-semibold leading-7 text-ink/70">
              We&apos;ll add a form here once submissions are open.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
