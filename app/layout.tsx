import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  ["About", "/about"],
  ["Partners", "/partners"],
  ["Events", "/events"],
  ["Support", "/support"],
  ["Contact", "/contact"],
] as const;

export const metadata: Metadata = {
  title: "The Creation Movement",
  description:
    "A youth-focused nonprofit inspiring young creators through STEM education, creative expression, mentorship, and community support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-paper text-ink">
        <header className="sticky top-0 z-40 border-b-3 border-ink bg-paper/95 backdrop-blur">
          <nav
            aria-label="Main navigation"
            className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8"
          >
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border-3 border-ink bg-sun text-base font-black text-ink shadow-[3px_3px_0_#001a46] transition-transform group-hover:-rotate-3">
                CM
              </span>
              <span className="min-w-0 leading-none">
                <span className="block text-[0.65rem] font-black uppercase tracking-[0.24em] text-purple">
                  The
                </span>
                <span className="block truncate text-base font-black uppercase tracking-tight sm:text-lg">
                  Creation Movement
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-6 text-sm font-black uppercase tracking-[0.14em] lg:flex">
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="transition-colors hover:text-teal"
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link
              href="https://www.gofundme.com/f/creation-over-consumption-the-creation-movement"
              className="shrink-0 rounded-full border-3 border-ink bg-orange px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-ink shadow-[4px_4px_0_#001a46] transition-transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </nav>
        </header>

        {children}

        <footer className="border-t-3 border-ink bg-paper px-5 py-10 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-xl font-black uppercase tracking-tight">
                The Creation Movement
              </p>
              <p className="mt-2 max-w-xl text-sm font-semibold leading-6 text-ink/70">
                Create more. Consume less. Empowering young people through
                STEM, creativity, mentorship, and community support.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-bold text-ink/75 md:text-right">
              <a href="mailto:het.gandhi9750@gmail.com">
                het.gandhi9750@gmail.com
              </a>
              <a href="tel:+17324961622">732-496-1622</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
