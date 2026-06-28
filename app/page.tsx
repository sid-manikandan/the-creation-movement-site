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
      "Learn why The Creation Movement began and meet the students building it.",
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
      "Explore upcoming library events, private sessions, and hands-on learning opportunities.",
    color: "bg-[#ffe4a9]",
  },
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
      <section className="relative isolate overflow-hidden border-b-3 border-ink bg-ink py-20 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('/brand/132_jguqb8-1024x683.jpg')",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/62 to-ink/18"
        />
        <div className="section-shell">
          <div className="max-w-4xl py-10">
            <p className="marker-swipe mb-6 w-max bg-sun px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-ink">
              Create more. Consume less.
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] sm:text-7xl lg:text-8xl">
              {homepage.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white/90">
              {homepage.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={homepage.donateUrl}
                className="rounded-full border-3 border-ink bg-orange px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-ink shadow-[6px_6px_0_#001a46] transition-transform hover:-translate-y-1"
              >
                {homepage.donateButtonText}
              </Link>
              <Link
                href="/about"
                className="rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-ink shadow-[6px_6px_0_#7c3fd1] transition-transform hover:-translate-y-1"
              >
                Learn our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-accent text-4xl text-purple">Start Here</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              How we turn creativity into action
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
            <p className="font-accent text-4xl text-sun">Support the Mission</p>
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
