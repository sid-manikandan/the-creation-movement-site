import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    name: "Pratham",
    status: "Donation partner",
    logoFile: "/brand/Screenshot_2026-06-28_at_3.27.47_PM-removebg-preview.png",
    logoWidth: 124,
    logoHeight: 162,
    description:
      "Pratham works toward a world where every child is in school and learning well. Their programs support millions of children and youth across India, especially underprivileged students, through innovative learning and training programs.",
    link: "https://give.prathamusa.org/thecreationmovement",
    linkLabel: "Pratham donation link",
  },
  {
    name: "Brain Bunch",
    status: "Donation partner",
    logoFile: "/brand/Screenshot_2026-06-28_at_3.28.11_PM-removebg-preview.png",
    logoWidth: 192,
    logoHeight: 162,
    description:
      "Brain Bunch helps students explore STEM by introducing them to neuroscience through hands-on learning. Their work makes brain science simple, engaging, and accessible while encouraging a love for education among students, including those underrepresented in STEM.",
    link: "https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UG3U8WST3ULN6&source=url&ssrt=1780788747447",
    linkLabel: "Brain Bunch donation link",
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
          We partner with organizations that help expand access to education,
          service, and creative learning.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="grid gap-6 rounded-2xl border-3 border-ink bg-paper p-7 shadow-[8px_8px_0_#001a46] sm:grid-cols-[1fr_auto] sm:items-start"
            >
              <div>
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
              </div>
              <div className="order-first flex justify-start sm:order-none sm:justify-end">
                <Image
                  src={partner.logoFile}
                  width={partner.logoWidth}
                  height={partner.logoHeight}
                  alt={`${partner.name} logo`}
                  className="max-h-28 w-auto object-contain"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
