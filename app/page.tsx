const navItems = ["Mission", "Programs", "Impact", "Get involved"];

const programs = [
  {
    icon: "STEM",
    title: "STEM Education",
    description:
      "Hands-on workshops and small-group lessons that help elementary students experiment, build, and ask better questions.",
    color: "bg-[#d9f0e7]",
  },
  {
    icon: "CARE",
    title: "Youth Support",
    description:
      "Fundraising and resource drives for students who need access to quality learning opportunities and encouragement.",
    color: "bg-[#ffe4a9]",
  },
  {
    icon: "VOICE",
    title: "Creative Expression",
    description:
      "Writing prompts, discussion circles, and creative projects that help young people share ideas with confidence.",
    color: "bg-[#eadcff]",
  },
];

const impactStats = [
  ["Pilot stage", "Program model"],
  ["Grades 1-5", "Early focus"],
  ["3", "Core program areas"],
  ["100%", "Donation-supported"],
];

const involvementWays = [
  "Donate to fund supplies, lessons, and partner support.",
  "Volunteer for workshops, mentoring, writing, or operations.",
  "Partner with us to reach more young creators.",
  "Share the movement with families, educators, and supporters.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b-4 border-ink bg-paper/90 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
        >
          <a href="#" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full border-3 border-ink bg-sun text-lg font-black text-ink shadow-[4px_4px_0_#001a46] transition-transform group-hover:-rotate-6">
              CM
            </span>
            <span className="leading-none">
              <span className="block text-xs font-black uppercase tracking-[0.25em] text-purple">
                The
              </span>
              <span className="block text-lg font-black uppercase tracking-tight">
                Creation Movement
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-black uppercase tracking-[0.14em] md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="transition-colors hover:text-teal"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#donate"
            className="rounded-full border-3 border-ink bg-orange px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_#001a46] transition-transform hover:-translate-y-0.5"
          >
            Donate
          </a>
        </nav>
      </header>

      <section className="relative isolate mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="absolute left-8 top-6 -z-10 size-28 rounded-full bg-sun/35 blur-2xl" />
        <div className="absolute right-0 top-0 -z-10 size-40 rounded-bl-full bg-teal/15" />

        <div className="flex flex-col justify-center">
          <p className="mb-5 max-w-max rotate-[-2deg] bg-sun px-5 py-2 font-hand text-2xl text-ink shadow-[8px_8px_0_#f57a20]">
            Create More. Consume Less.
          </p>
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.88] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            <span className="brush-title block text-purple">The</span>
            Creation
            <span className="brush-title block text-teal">Movement</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-bold leading-8 text-ink/80 sm:text-2xl">
            We inspire young people to become creators, not just consumers,
            through STEM education, creativity, mentorship, and community care.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#programs"
              className="rounded-full border-3 border-ink bg-teal px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_#001a46] transition-transform hover:-translate-y-1"
            >
              Explore programs
            </a>
            <a
              href="#get-involved"
              className="rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#8e43e7] transition-transform hover:-translate-y-1"
            >
              Join the movement
            </a>
          </div>
        </div>

        <div className="relative min-h-[560px] rounded-[2rem] border-4 border-ink bg-white p-5 shadow-[12px_12px_0_#8e43e7]">
          <div className="absolute left-4 top-12 rotate-[-8deg] rounded-sm bg-purple px-7 py-10 text-center font-hand text-3xl leading-tight text-white shadow-[8px_8px_0_#001a46] sm:-left-5">
            Empowering
            <br />
            minds.
            <br />
            Fueling
            <br />
            creators.
          </div>

          <div className="ml-auto grid size-48 place-items-center rounded-full bg-sun text-center text-7xl shadow-[0_0_0_5px_#001a46_inset]">
            <span aria-hidden="true">!</span>
            <span className="sr-only">Bright idea</span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`${program.color} rounded-xl border-3 border-ink p-4 text-center shadow-[5px_5px_0_#001a46]`}
              >
                <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-white text-[0.65rem] font-black text-teal">
                  {program.icon}
                </div>
                <h3 className="text-lg font-black leading-tight">
                  {program.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-teal p-6 text-white shadow-[8px_8px_0_#f57a20]">
            <p className="font-hand text-5xl leading-none">Build ideas.</p>
            <p className="mt-3 max-w-md text-lg font-bold leading-7">
              A nonprofit home for curious students, practical support, and
              creative confidence.
            </p>
          </div>

          <span className="doodle-star left-8 top-5" aria-hidden="true" />
          <span className="doodle-lines right-10 top-44" aria-hidden="true" />
          <span className="doodle-squiggle right-16 bottom-40" aria-hidden="true" />
        </div>
      </section>

      <section
        id="mission"
        className="border-y-4 border-ink bg-white px-5 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="font-hand text-5xl leading-tight text-purple sm:text-6xl">
            Our Mission
          </p>
          <div>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-tight sm:text-5xl">
              Help young people think, build, express, and make an impact.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
              The Creation Movement exists to make learning feel active and
              possible. We pair STEM exploration with creative expression and
              community support so students can see themselves as builders of a
              brighter future.
            </p>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-hand text-4xl text-teal">What We Do</p>
            <h2 className="mt-2 text-4xl font-black uppercase sm:text-5xl">
              Programs and resources
            </h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-8 text-ink/75">
            Starter offerings are intentionally focused: practical, repeatable,
            and built for students who benefit from encouragement and access.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className={`${program.color} rounded-2xl border-4 border-ink p-7 shadow-[8px_8px_0_#001a46]`}
            >
              <div className="mb-8 grid size-20 place-items-center rounded-full bg-white text-xs font-black text-purple shadow-[4px_4px_0_#f57a20]">
                {program.icon}
              </div>
              <h3 className="text-2xl font-black uppercase leading-tight">
                {program.title}
              </h3>
              <p className="mt-4 text-base font-semibold leading-7 text-ink/75">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="bg-ink px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="inline-block rotate-[-1.5deg] bg-sun px-5 py-2 font-hand text-4xl text-ink">
            Honest impact
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
              We are early, focused, and building in public.
            </h2>
            <p className="text-lg font-semibold leading-8 text-white/75">
              These are placeholder stats for launch planning, not inflated
              claims. As programs run, this section can be updated with real
              student reach, funds raised, partner schools, and volunteer hours.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border-3 border-white bg-white/10 p-6"
              >
                <p className="font-hand text-5xl text-sun">{value}</p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.18em] text-white/75">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="get-involved"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr]"
      >
        <div className="rounded-[2rem] border-4 border-ink bg-teal p-8 text-white shadow-[12px_12px_0_#f57a20]">
          <p className="font-hand text-6xl leading-none">Join the Movement.</p>
          <p className="mt-6 max-w-lg text-lg font-semibold leading-8">
            Your support helps us create opportunities, inspire young minds, and
            build a better future.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Get involved
          </h2>
          <ul className="mt-7 space-y-4">
            {involvementWays.map((way) => (
              <li
                key={way}
                className="flex gap-4 rounded-xl border-3 border-ink bg-white p-5 font-bold leading-7 shadow-[5px_5px_0_#8e43e7]"
              >
                <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-orange text-xs font-black">
                  +
                </span>
                <span>{way}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="donate" className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border-4 border-ink bg-orange p-8 shadow-[12px_12px_0_#001a46] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <p className="font-hand text-5xl text-white">Donate</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight sm:text-5xl">
              Help turn curiosity into opportunity.
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8">
              Every contribution helps fund supplies, learning materials,
              outreach, and partnerships for young creators. Donation handling
              can be connected when the organization is ready.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="mailto:het.gandhi9750@gmail.com?subject=Donation%20for%20The%20Creation%20Movement"
              className="rounded-full border-3 border-ink bg-ink px-7 py-4 text-center font-black uppercase tracking-[0.12em] text-white shadow-[6px_6px_0_#ffffff] transition-transform hover:-translate-y-1"
            >
              Email to donate
            </a>
            <a
              href="mailto:het.gandhi9750@gmail.com?subject=Partnership%20with%20The%20Creation%20Movement"
              className="rounded-full border-3 border-ink bg-white px-7 py-4 text-center font-black uppercase tracking-[0.12em] shadow-[6px_6px_0_#001a46] transition-transform hover:-translate-y-1"
            >
              Become a partner
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-ink bg-paper px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 font-bold md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black uppercase">The Creation Movement</p>
            <p className="mt-2 text-ink/65">
              Empowering minds. Fueling creators. Creating a brighter world.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-ink/75 sm:flex-row sm:gap-6">
            <a href="mailto:het.gandhi9750@gmail.com">
              het.gandhi9750@gmail.com
            </a>
            <a href="tel:+17324961622">732-496-1622</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
