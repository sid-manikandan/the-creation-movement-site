import Link from "next/link";

const fundingNeeds = [
  "STEM materials, experiment supplies, and learning kits.",
  "Event setup costs for library sessions and youth workshops.",
  "Outreach materials that help reach more families and supporters.",
  "Support for nonprofit partners and education-focused causes.",
];

export default function DonatePage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-orange">Donate</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Help fund creation over consumption.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          Donations help The Creation Movement provide learning opportunities,
          run youth events, and support mission-aligned partners.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://www.gofundme.com/f/creation-over-consumption-the-creation-movement"
            className="rounded-full border-3 border-ink bg-orange px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#001a46]"
          >
            Donate on GoFundMe
          </Link>
          <Link
            href="https://give.prathamusa.org/thecreationmovement"
            className="rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#7c3fd1]"
          >
            Donate to Pratham
          </Link>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-accent text-4xl text-teal">Why funding matters</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Every contribution turns into access.
            </h2>
          </div>
          <div className="grid gap-4">
            {fundingNeeds.map((need) => (
              <div
                key={need}
                className="rounded-xl border-3 border-ink bg-paper p-5 font-semibold leading-7 shadow-[5px_5px_0_#ffc32d]"
              >
                {need}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
