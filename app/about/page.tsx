const team = [
  ["Het Gandhi", "Founder"],
  ["Vedh Gajawada", "Community Outreach Director"],
  ["Pranay Burla", "Lead Coordinator"],
  ["Siddharth Manikandan", "Marketing Director"],
];

const futurePlans = [
  "Partner with more nonprofits to support education-focused causes.",
  "Host library sessions for STEM, creativity, and youth mentorship.",
  "Offer private lessons and small-group learning opportunities.",
  "Create original lessons and resources after the first events launch.",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">About Us</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Our story is still being built.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          The Creation Movement is a student-led nonprofit created to encourage
          young people to make, learn, and contribute. This page is structured
          for the founder message, team bios, mission, and future plans as the
          organization grows.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-accent text-4xl text-teal">Our Story</p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight">
              Motivation and message from the founder
            </h2>
          </div>
          <div className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[8px_8px_0_#7c3fd1]">
            <p className="text-lg font-semibold leading-8 text-ink/75">
              Founder message goes here. Add the personal motivation, why The
              Creation Movement began, and what “create more, consume less”
              means to the organization.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-accent text-4xl text-purple">Mission</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Inspire young people to become creators, not just consumers.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
              Through STEM education, creativity, mentorship, and service, we
              empower students to think independently, build with confidence,
              and make a positive impact.
            </p>
          </div>
          <div className="rounded-2xl border-3 border-dashed border-ink bg-white p-7 text-center shadow-[8px_8px_0_#f57a20]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ink/55">
              Flyer image placeholder
            </p>
            <p className="mt-4 font-semibold leading-7 text-ink/70">
              Add the mission flyer/poster image here when you are ready to use
              it as an official site asset.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <p className="font-accent text-4xl text-teal">Team</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
            The Creation Movement Team
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map(([name, role]) => (
              <article
                key={name}
                className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#001a46]"
              >
                <p className="text-2xl font-black">{name}</p>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.16em] text-purple">
                  {role}
                </p>
                <p className="mt-5 font-semibold leading-7 text-ink/70">
                  Bio goes here. Include role, hobbies, passions, and why this
                  person decided to join The Creation Movement.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Future Plans</p>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
          Where we want to grow next
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {futurePlans.map((plan) => (
            <div
              key={plan}
              className="rounded-xl border-3 border-ink bg-white p-5 font-semibold leading-7 shadow-[5px_5px_0_#ffc32d]"
            >
              {plan}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border-3 border-ink bg-teal p-7 text-white">
          <p className="text-sm font-black uppercase tracking-[0.18em]">
            Emails
          </p>
          <p className="mt-3 font-semibold">
            Add team or program-specific emails here when they are finalized.
            Current contact: het.gandhi9750@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
