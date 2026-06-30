"use client";

import Link from "next/link";
import { useRef } from "react";

const actionPages = [
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
      "Explore library workshops, private sessions, and hands-on learning opportunities.",
    color: "bg-[#ffe4a9]",
  },
  {
    title: "Blogs",
    href: "/blogs",
    description:
      "Read newsletters, workshop recaps, community updates, and student-written ideas.",
    color: "bg-[#eadcff]",
  },
  {
    title: "Support",
    href: "/support",
    description:
      "Help fund workshops, supplies, resources, and programs that expand access.",
    color: "bg-[#d9f0e7]",
  },
  {
    title: "Contact",
    href: "/contact",
    description:
      "Reach out about events, partnerships, lessons, volunteer ideas, or questions.",
    color: "bg-[#ffe4a9]",
  },
];

export default function ActionCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: -1 | 1) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    scroller.scrollBy({
      left: direction * scroller.clientWidth * 0.9,
      behavior: "smooth",
    });
  }

  return (
    <nav aria-labelledby="action-navigation-heading" className="mt-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p
            id="action-navigation-heading"
            className="text-xl font-black uppercase tracking-tight text-ink"
          >
            Choose where to go next
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Scroll cards left"
          onClick={() => scrollCards(-1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border-3 border-ink bg-white text-2xl font-black leading-none text-ink shadow-[4px_4px_0_#ffc32d] transition-transform hover:-translate-y-0.5"
        >
          ←
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 py-2 pb-5"
        >
          {actionPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={`${page.color} min-h-56 min-w-full snap-start rounded-2xl border-3 border-ink p-7 shadow-[7px_7px_0_#001a46] outline-offset-4 transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-ink sm:min-w-[21rem] lg:min-w-[24rem]`}
            >
              <h3 className="text-2xl font-black uppercase">{page.title}</h3>
              <p className="mt-4 font-semibold leading-7 text-ink/70">
                {page.description}
              </p>
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll cards right"
          onClick={() => scrollCards(1)}
          className="grid size-11 shrink-0 place-items-center rounded-full border-3 border-ink bg-white text-2xl font-black leading-none text-ink shadow-[4px_4px_0_#ffc32d] transition-transform hover:-translate-y-0.5"
        >
          →
        </button>
      </div>
    </nav>
  );
}
