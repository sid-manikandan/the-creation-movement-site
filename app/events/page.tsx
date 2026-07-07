import Image from "next/image";

type EventTrack = {
  title: string;
  description: string;
  details?: string[];
  actionHref?: string;
  actionLabel?: string;
};

const eventTracks: EventTrack[] = [
  {
    title: "EBPL Library Workshops",
    description:
      "Join The Creation Movement at the East Brunswick Public Library for free hands-on STEM and creativity workshops.",
    details: [
      "Tuesday, July 8, 3:00-4:30 PM",
      "Tuesday, July 15, 3:00-4:30 PM",
      "To attend, arrive at the library 30 minutes before the session to pick up a free entry ticket.",
    ],
  },
  {
    title: "Private Sessions",
    description:
      "Private sessions are small-group or one-on-one learning opportunities for students who want extra STEM support, enrichment, or project guidance.",
    actionHref:
      "https://docs.google.com/forms/d/1M1oUQT8zL3H48coAxxKvD-J9qD5EVFg4cjJW5EWKOF4/edit?ts=6a4170e0",
    actionLabel: "Private Lessons Interest Form",
  },
];

export default function EventsPage() {
  return (
    <main>
      <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.95fr_0.9fr] lg:items-center">
        <div>
          <p className="font-accent text-4xl text-purple">Events</p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Learn, build, and connect in person
          </h1>
          <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
            Our events are built around active learning: students ask questions,
            try ideas, make projects, and connect what they learn to the world
            around them.
          </p>
        </div>
        <div className="flex min-h-[28rem] items-center justify-center overflow-hidden lg:justify-end">
          <Image
            src="/brand/Events.png"
            width={499}
            height={500}
            alt="Events calendar illustration"
            className="h-[34rem] w-auto scale-150 object-contain"
          />
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {eventTracks.map((track, index) => (
            <article
              key={track.title}
              className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#7c3fd1]"
            >
              <p className="grid size-12 place-items-center rounded-full bg-sun text-lg font-black">
                {index + 1}
              </p>
              <h2 className="mt-7 text-2xl font-black uppercase">
                {track.title}
              </h2>
              <p className="mt-4 font-semibold leading-7 text-ink/70">
                {track.description}
              </p>
              {track.details ? (
                <ul className="mt-5 grid gap-3">
                  {track.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-xl bg-white p-4 text-sm font-black leading-6 text-ink/75"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
              {track.actionHref && track.actionLabel ? (
                <a
                  href={track.actionHref}
                  className="mt-6 inline-flex rounded-full border-3 border-ink bg-orange px-6 py-3 text-sm font-black uppercase tracking-[0.12em] shadow-[5px_5px_0_#001a46]"
                >
                  {track.actionLabel}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
