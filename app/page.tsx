import Link from "next/link";
import {
  fallbackHomepageContent,
  type HomepageContent,
} from "@/sanity/lib/homepage";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";

const featuredPages = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Our story, mission, team placeholders, and future plans for The Creation Movement.",
    color: "bg-[#eadcff]",
  },
  {
    title: "Partners",
    href: "/partners",
    description:
      "Pratham, Brain Bunch, and future nonprofit partners we hope to support.",
    color: "bg-[#d9f0e7]",
  },
  {
    title: "Events",
    href: "/events",
    description:
      "Library sessions, private lessons, and a placeholder for the future interest form.",
    color: "bg-[#ffe4a9]",
  },
];

const stats = [
  ["Pilot stage", "Building honestly"],
  ["4 leaders", "Student-led team"],
  ["3 tracks", "STEM, events, support"],
];

function withFallback(content: Partial<HomepageContent> | null): HomepageContent {
  return {
    heroTitle: content?.heroTitle || fallbackHomepageContent.heroTitle,
    heroSubtitle: content?.heroSubtitle || fallbackHomepageContent.heroSubtitle,
    missionTitle: content?.missionTitle || fallbackHomepageContent.missionTitle,
    missionText: content?.missionText || fallbackHomepageContent.missionText,
    donateTitle: content?.donateTitle || fallbackHomepageContent.donateTitle,
    donateText: content?.donateText || fallbackHomepageContent.donateText,
    donateButtonText:
      content?.donateButtonText || fallbackHomepageContent.donateButtonText,
    donateUrl: content?.donateUrl || fallbackHomepageContent.donateUrl,
  };
}

export default async function Home() {
  const { data } = await sanityFetch<Partial<HomepageContent> | null>({
    query: HOMEPAGE_QUERY,
  });
  const homepage = withFallback(data);

  return (
    <main>
      <section className="section-shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="marker-swipe mb-6 w-max bg-sun px-5 py-2 text-sm font-black uppercase tracking-[0.18em]">
            Create more. Consume less.
          </p>
          <h1 className="font-display max-w-4xl text-6xl uppercase leading-[0.9] text-ink sm:text-7xl lg:text-8xl">
            {homepage.heroTitle}
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-ink/75">
            {homepage.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href={homepage.donateUrl}
              className="rounded-full border-3 border-ink bg-orange px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#001a46] transition-transform hover:-translate-y-1"
            >
              {homepage.donateButtonText}
            </Link>
            <Link
              href="/about"
              className="rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#7c3fd1] transition-transform hover:-translate-y-1"
            >
              Learn our story
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border-3 border-ink bg-white p-6 shadow-[12px_12px_0_#7c3fd1]">
          <div className="rounded-2xl bg-teal p-7 text-white shadow-[7px_7px_0_#f57a20]">
            <p className="font-accent text-4xl leading-tight">
              {homepage.missionTitle}
            </p>
            <p className="mt-5 text-base font-semibold leading-7 text-white/85">
              {homepage.missionText}
            </p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border-3 border-ink bg-paper p-4 text-center"
              >
                <p className="text-xl font-black">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-ink/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-accent text-4xl text-purple">Site checklist</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              What you can explore right now
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`${page.color} rounded-2xl border-3 border-ink p-7 shadow-[7px_7px_0_#001a46] transition-transform hover:-translate-y-1`}
              >
                <h3 className="text-2xl font-black uppercase">{page.title}</h3>
                <p className="mt-4 font-semibold leading-7 text-ink/70">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 rounded-[2rem] border-3 border-ink bg-ink p-8 text-white shadow-[10px_10px_0_#ffc32d] lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="font-accent text-4xl text-sun">Next up</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              {homepage.donateTitle}
            </h2>
            <p className="mt-5 max-w-2xl font-semibold leading-7 text-white/75">
              {homepage.donateText}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link
              href={homepage.donateUrl}
              className="rounded-full border-3 border-white bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-ink"
            >
              {homepage.donateButtonText}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-3 border-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-white"
            >
              Contact the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
