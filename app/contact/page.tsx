export default function ContactPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Contact Us</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Reach out to the team.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          Use this page for general questions, event interest, partnership
          ideas, volunteer opportunities, and future blog/newsletter ideas.
        </p>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <a
            href="mailto:het.gandhi9750@gmail.com"
            className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#7c3fd1]"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-purple">
              Email
            </p>
            <p className="mt-3 break-words text-xl font-black sm:text-2xl">
              het.gandhi9750@gmail.com
            </p>
          </a>
          <a
            href="tel:+17324966122"
            className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#f57a20]"
          >
            <p className="text-sm font-black uppercase tracking-[0.18em] text-purple">
              Phone
            </p>
            <p className="mt-3 break-words text-xl font-black sm:text-2xl">
              732-496-6122
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
