import Link from "next/link";

const supportOptions = [
  {
    title: "Volunteer Opportunities",
    description:
      "Placeholder for Pratham volunteer opportunities for kids and other future service options.",
  },
  {
    title: "Donate",
    description:
      "Support The Creation Movement through GoFundMe or donate directly through partner campaigns.",
  },
  {
    title: "Spread the Word",
    description:
      "Share the mission with families, schools, libraries, nonprofits, and potential supporters.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-teal">Support</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          There is more than one way to help.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          This page gathers ways people can volunteer, donate, spread the word,
          and eventually contribute ideas or blog posts.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {supportOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#001a46]"
            >
              <h2 className="text-2xl font-black uppercase">
                {option.title}
              </h2>
              <p className="mt-4 font-semibold leading-7 text-ink/70">
                {option.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="rounded-[2rem] border-3 border-ink bg-teal p-8 text-white shadow-[10px_10px_0_#f57a20]">
          <p className="font-accent text-4xl">Blogs and newsletter</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
            Future content hub
          </h2>
          <p className="mt-5 max-w-3xl font-semibold leading-7 text-white/85">
            Placeholder for future newsletters, student-written blogs, and a
            way for people to email ideas or ask to contribute.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full border-3 border-white bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-ink"
          >
            Email an idea
          </Link>
        </div>
      </section>
    </main>
  );
}
