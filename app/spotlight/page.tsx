import Image from "next/image";
import Link from "next/link";

const workshopArticleUrl =
  "https://www.tapinto.net/towns/east-brunswick/sections/education/articles/the-creation-movement-s-first-workshop-at-the-east-brunswick-public-library-a-big-hit-with-kids";
const workshopRecapUrl = "/blogs/july-8-15-workshop-recap";

const workshopPhotos = [
  {
    src: "/brand/workshops/IMG_7089.jpeg",
    alt: "Students working through a hands-on Creation Movement workshop activity",
    className: "lg:col-span-7 lg:row-span-2",
    sizes: "(min-width: 1024px) 58vw, 100vw",
    width: 4032,
    height: 3024,
  },
  {
    src: "/brand/workshops/IMG_7441.jpeg",
    alt: "A student presenting an activity during a Creation Movement workshop",
    className: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, 100vw",
    width: 465,
    height: 348,
  },
  {
    src: "/brand/workshops/IMG_7420.jpeg",
    alt: "Students and mentors gathered around a hands-on workshop table",
    className: "lg:col-span-5",
    sizes: "(min-width: 1024px) 42vw, 100vw",
    width: 465,
    height: 348,
  },
  {
    src: "/brand/workshops/IMG_7445.jpeg",
    alt: "A mentor leading students through a hands-on workshop activity",
    className: "lg:col-span-4",
    sizes: "(min-width: 1024px) 33vw, 100vw",
    width: 535,
    height: 401,
  },
  {
    src: "/brand/workshops/IMG_7085.jpeg",
    alt: "Students building and testing a project during a workshop",
    className: "lg:col-span-4",
    sizes: "(min-width: 1024px) 33vw, 100vw",
    width: 535,
    height: 714,
  },
  {
    src: "/brand/workshops/IMG_7510.jpeg",
    alt: "The Creation Movement team together after a summer workshop",
    className: "lg:col-span-4",
    sizes: "(min-width: 1024px) 33vw, 100vw",
    width: 465,
    height: 348,
    imageClassName: "object-contain",
  },
];

export default function SpotlightPage() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b-3 border-ink bg-ink py-16 text-white lg:py-24">
        <Image
          src="/brand/workshops/IMG_7448.jpeg"
          alt="Students and mentors gathered during a Creation Movement workshop"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/92 via-ink/54 to-ink/10"
        />
        <div className="section-shell">
          <div className="max-w-3xl py-10">
            <p className="marker-swipe mb-6 w-max bg-sun px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-ink">
              Spotlight
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Moments from our workshops
            </h1>
            <p className="mt-7 max-w-xl text-xl font-semibold leading-8 text-white/88">
              A look inside the rooms where students build, test, ask
              questions, and create with us.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-3 border-ink bg-paper py-16">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-accent text-4xl text-teal">Recent workshops</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Students creating in real time
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
              These snapshots show the hands-on energy behind The Creation
              Movement: students experimenting, mentors guiding, and ideas
              taking shape.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={workshopArticleUrl}
                className="inline-flex rounded-full border-3 border-ink bg-orange px-6 py-3 text-sm font-black uppercase tracking-[0.12em] shadow-[5px_5px_0_#001a46] transition-transform hover:-translate-y-0.5"
              >
                Read our workshop story on TAPinto
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-lg border-3 border-ink bg-white p-7 shadow-[7px_7px_0_#009f86]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-purple">
              Workshop recap
            </p>
            <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-ink">
              Get a closer look at our July 8th and 15th workshops
            </h3>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
              Read the full recap from our first two East Brunswick Public
              Library sessions, including each station, student turnout, and
              what TCM is building next.
            </p>
            <Link
              href={workshopRecapUrl}
              className="mt-6 inline-flex rounded-full border-3 border-ink bg-sun px-6 py-3 text-sm font-black uppercase tracking-[0.12em] shadow-[5px_5px_0_#001a46] transition-transform hover:-translate-y-0.5"
            >
              Read the workshop recap
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12">
            {workshopPhotos.map((photo) => (
              <div
                key={photo.src}
                className={`overflow-hidden rounded-lg border-3 border-ink bg-white shadow-[7px_7px_0_#001a46] ${photo.className}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes={photo.sizes}
                  className={`h-full min-h-72 w-full bg-white ${photo.imageClassName ?? "object-cover"}`}
                  loading="eager"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="grid gap-7 rounded-lg border-3 border-ink bg-ink p-8 text-white shadow-[9px_9px_0_#ffc32d] lg:grid-cols-[0.8fr_1fr] lg:items-center lg:p-10">
            <div>
              <p className="font-accent text-4xl text-sun">Coming soon</p>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
                Student project showcase
              </h2>
            </div>
            <p className="text-lg font-semibold leading-8 text-white/78">
              We’ll use this space to highlight the projects students create
              through our lessons, including the ideas they explored and the
              builds we helped guide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
