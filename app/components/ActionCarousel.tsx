"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const actionPages = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Learn why The Creation Movement began and meet the students building it.",
    color: "bg-[#eadcff]",
    visual: [
      {
        src: "/brand/creation-movement-full-logo.png",
        alt: "The Creation Movement logo",
        width: 546,
        height: 457,
        className: "h-40 w-auto",
      },
    ],
  },
  {
    title: "Partners",
    href: "/partners",
    description: "Explore the organizations we support and collaborate with.",
    color: "bg-[#d9f0e7]",
    visual: [
      {
        src: "/brand/Screenshot_2026-06-28_at_3.27.47_PM-removebg-preview.png",
        alt: "Partner logo",
        width: 124,
        height: 162,
        className: "h-32 w-auto",
      },
      {
        src: "/brand/Screenshot_2026-06-28_at_3.28.11_PM-removebg-preview.png",
        alt: "Partner logo",
        width: 192,
        height: 162,
        className: "h-32 w-auto",
      },
    ],
  },
  {
    title: "Events",
    href: "/events",
    description:
      "Explore library workshops, private sessions, and hands-on learning opportunities.",
    color: "bg-[#ffe4a9]",
    visual: [
      {
        src: "/brand/Events.png",
        alt: "Events calendar illustration",
        width: 499,
        height: 500,
        className: "h-56 w-auto scale-150",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/blogs",
    description:
      "Read newsletters, workshop recaps, community updates, and student-written ideas.",
    color: "bg-[#eadcff]",
    visual: [
      {
        src: "/brand/Blogs.png",
        alt: "Blog illustration",
        width: 499,
        height: 500,
        className: "h-56 w-auto scale-150",
      },
    ],
  },
  {
    title: "Support",
    href: "/support",
    description:
      "Help fund workshops, supplies, resources, and programs that expand access.",
    color: "bg-[#d9f0e7]",
    visual: [
      {
        src: "/brand/Support.png",
        alt: "Support illustration",
        width: 499,
        height: 500,
        className: "h-56 w-auto scale-150",
      },
    ],
  },
] as const;

function ActionVisual({ page }: { page: (typeof actionPages)[number] }) {
  return (
    <div className="flex min-h-60 items-center justify-center gap-4 overflow-hidden">
      {page.visual.map((visual) => (
        <Image
          key={visual.src}
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          className={`${visual.className} object-contain`}
        />
      ))}
    </div>
  );
}

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
      <h2 id="action-navigation-heading" className="sr-only">
        Explore pages
      </h2>

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
              aria-label={`${page.title}: ${page.description}`}
              className={`${page.color} min-h-84 min-w-full snap-start rounded-2xl border-3 border-ink p-6 shadow-[7px_7px_0_#001a46] outline-offset-4 transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-ink sm:min-w-[18rem] lg:min-w-[20rem]`}
            >
              <div className="mb-5 border-b-3 border-ink pb-4 text-center">
                <h3 className="text-xl font-black uppercase">{page.title}</h3>
              </div>
              <ActionVisual page={page} />
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
