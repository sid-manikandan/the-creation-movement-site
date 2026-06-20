import Link from "next/link";

const partners = [
  {
    name: "Pratham",
    status: "Donation partner",
    description:
      "Bio goes here. Add Pratham’s preferred description, mission alignment, and how donations through The Creation Movement support their work.",
    link: "https://give.prathamusa.org/thecreationmovement",
    linkLabel: "Pratham donation link",
  },
  {
    name: "Brain Bunch",
    status: "Partner placeholder",
    description:
      "Bio goes here. Add Brain Bunch’s preferred description after you contact the organization and confirm what they want listed.",
    link: "",
    linkLabel: "Donation link coming soon",
  },
];

export default function PartnersPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-teal">Partners</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Working with organizations that expand access.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          This page is ready for partner bios, donation links, and short notes
          from organizations as they share what they would like included.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[8px_8px_0_#001a46]"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-purple">
                {partner.status}
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase">
                {partner.name}
              </h2>
              <p className="mt-5 font-semibold leading-7 text-ink/70">
                {partner.description}
              </p>
              {partner.link ? (
                <Link
                  href={partner.link}
                  className="mt-7 inline-flex rounded-full border-3 border-ink bg-orange px-6 py-3 text-sm font-black uppercase tracking-[0.12em] shadow-[5px_5px_0_#001a46]"
                >
                  {partner.linkLabel}
                </Link>
              ) : (
                <p className="mt-7 inline-flex rounded-full border-3 border-ink bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.12em]">
                  {partner.linkLabel}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
