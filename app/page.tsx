import Link from "next/link";
import ActionCarousel from "@/app/components/ActionCarousel";
import {
  fallbackHomepageContent,
  type HomepageContent,
} from "@/sanity/lib/homepage";
import { sanityFetch } from "@/sanity/lib/live";
import { HOMEPAGE_QUERY } from "@/sanity/lib/queries";

const suggestionBoxUrl =
  "https://docs.google.com/forms/d/1o2RYwHPuUqO-crPP_IIXH3mVPXR8J-b8isG8biEEihI/edit?ts=6a442733";

const heroImage = "/brand/workshops/IMG_7424.jpeg";

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
            backgroundImage: `url('${heroImage}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/62 to-ink/18"
        />
        <div className="section-shell">
          <div className="max-w-4xl py-10">
            <p className="marker-swipe mb-6 w-max bg-sun px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-ink">
              Create more. Consume less
            </p>
            <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)] sm:text-7xl lg:text-8xl">
              {homepage.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white/90">
              {homepage.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-3 border-ink bg-sun py-8">
        <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-ink/65">
              New workshop photos
            </p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-tight">
              See the movement in action
            </h2>
          </div>
          <Link
            href="/spotlight"
            className="w-full rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#001a46] transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Visit spotlight
          </Link>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="font-accent text-4xl text-purple">
                Explore the Movement
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
                How we turn creativity into action
              </h2>
            </div>
            <p className="border-l-[6px] border-teal pl-5 text-lg font-semibold leading-8 text-ink/75">
              Every part of{" "}
              <em className="font-bold italic">The Creation Movement</em> gives
              students a next step: learn our story, join an event, read our
              updates, support the mission, or help build something with us.
            </p>
          </div>
          <ActionCarousel />
        </div>
      </section>

      <section className="border-b-3 border-ink bg-paper py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-accent text-4xl text-orange">
                Join Our Movement!
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
                Creativity grows when people build with us
              </h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
                <em className="font-bold italic">The Creation Movement</em> is
                not just a set of classes. It is a path for students to discover
                what excites them, turn curiosity into real projects, and grow
                alongside mentors who help them keep creating.
              </p>
              <p className="mt-6 border-l-[6px] border-orange pl-5 text-2xl font-black leading-snug tracking-tight text-ink">
                We need students to create with us, grow with us, and help
                shape what this movement becomes.
              </p>
            </div>

            <div className="grid gap-5">
              {[
                {
                  step: "01",
                  title: "Discover the movement",
                  description:
                    "Students are introduced to hands-on creativity through our library sessions, where they try ideas, ask questions, and see learning as something active.",
                },
                {
                  step: "02",
                  title: "Find your creative direction",
                  description:
                    "Through a creativity assessment, students reflect on their interests, strengths, and the kinds of projects they are excited to explore next.",
                },
                {
                  step: "03",
                  title: "Build in a 1-on-1 space",
                  description:
                    "In private sessions, students develop creative projects of their choice with focused guidance, turning personal interests into something they can build and share.",
                },
              ].map((item) => (
                <article
                  key={item.step}
                  className="grid gap-4 rounded-2xl border-3 border-ink bg-white p-6 shadow-[7px_7px_0_#001a46] sm:grid-cols-[auto_1fr] sm:items-start"
                >
                  <p className="grid size-12 place-items-center rounded-full bg-sun text-lg font-black text-ink">
                    {item.step}
                  </p>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-semibold leading-7 text-ink/70">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 rounded-[2rem] border-3 border-ink bg-ink p-8 text-white shadow-[10px_10px_0_#ffc32d] lg:grid-cols-[1fr_0.8fr] lg:p-10">
          <div>
            <p className="font-accent text-4xl text-sun">Suggestion Box</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Help shape what we build next
            </h2>
            <p className="mt-5 max-w-2xl font-semibold leading-7 text-white/75">
              Have a workshop idea, article topic, event suggestion, or project
              you want to see{" "}
              <em className="font-bold italic">The Creation Movement</em>{" "}
              explore? Send it our way so we can keep growing with the
              community.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link
              href={suggestionBoxUrl}
              className="rounded-full border-3 border-white bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-ink"
            >
              Open suggestion box
            </Link>
            <Link
              href="/support"
              className="rounded-full border-3 border-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-white"
            >
              Support the team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
