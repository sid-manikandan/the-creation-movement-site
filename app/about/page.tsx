const team = [
  {
    name: "Het Gandhi",
    role: "Founder",
    bio: "Het is a rising junior at East Brunswick High School who believes creativity has the power to shape a better future. He enjoys reading, journaling, exploring new ideas, and making the most of time outdoors with friends. He founded The Creation Movement with the mission of helping young people become creators instead of consumers in a world increasingly dominated by screens. By encouraging curiosity, hands-on learning, and creative expression, he hopes to inspire the next generation to think independently, build boldly, and leave a positive mark on the world.",
  },
  {
    name: "Siddharth Manikandan",
    role: "Co-Founder - Marketing Director",
    bio: "Bio coming soon.",
  },
  {
    name: "Pranay Burla",
    role: "Co-Founder - Lead Contributor",
    bio: "Pranay is a student at East Brunswick High School who is passionate about science, sports, and community service. He enjoys playing baseball and basketball, exploring new scientific ideas, and trying different foods. He joined the nonprofit to combine his love for chemistry and science with his goal of helping kids develop creativity and curiosity in an age increasingly shaped by technology and phones.",
  },
  {
    name: "Vedh Gajawada",
    role: "Co-Founder - Outreach Coordinator",
    bio: "Vedh is currently a student at East Brunswick High School. His interest in STEM helps him develop problem-solving skills and explore the world of engineering. He participates in his school’s robotics club, demonstrating valuable teamwork and gaining constant hands-on experience. Outside of academics, Vedh loves to play volleyball on his school team, read in his free time, and travel around the world with his family. His main goal in joining the nonprofit was to apply his interests in a meaningful way while giving back to his community, allowing him to help students build their confidence in STEM-related fields.",
  },
];

const futurePlans = [
  "Partner with more nonprofits to support education-focused causes.",
  "Host library sessions for STEM, creativity, and youth mentorship.",
  "Offer private lessons and small-group learning opportunities.",
  "Create original lessons and resources after the first events launch.",
];

export default function AboutPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Our Story</p>
        <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Inspiring the next generation of creators.
        </h1>
        <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          The Creation Movement is a student-led nonprofit created to encourage
          people to make, learn, and contribute. We saw a generation spending
          more time consuming than creating, and endless scrolling was replacing
          curiosity, creativity, and meaningful learning. We wanted to change
          that.
        </p>
        <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
          We believe every person has the potential to build, discover, write,
          invent, and make a difference. Through STEM education, creative
          expression, and community service, we&apos;re helping inspire the next
          generation of creators: one student, one project, and one idea at a
          time.
        </p>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-accent text-4xl text-purple">Mission</p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
              Inspire young people to become creators, not just consumers.
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
              Through STEM education, creativity, mentorship, and service, we
              empower students to think independently, build with confidence,
              and make a positive impact.
            </p>
          </div>
          <div className="rounded-2xl border-3 border-ink bg-white p-7 shadow-[8px_8px_0_#f57a20]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-orange">
              Create More. Consume Less.
            </p>
            <p className="mt-4 text-3xl font-black uppercase leading-tight text-ink">
              We help students build confidence by learning through projects,
              service, and original ideas.
            </p>
            <p className="mt-4 font-semibold leading-7 text-ink/70">
              Our programs are designed to make STEM and creativity feel
              approachable, useful, and connected to real community impact.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-3 border-ink bg-white py-16">
        <div className="section-shell">
          <p className="font-accent text-4xl text-teal">Meet the Team</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
            The Creation Movement Team
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border-3 border-ink bg-paper p-7 shadow-[7px_7px_0_#001a46]"
              >
                <p className="text-2xl font-black">{member.name}</p>
                <p className="mt-1 text-sm font-black uppercase tracking-[0.16em] text-purple">
                  {member.role}
                </p>
                <p className="mt-5 font-semibold leading-7 text-ink/70">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <p className="font-accent text-4xl text-purple">Future Plans</p>
        <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
          Where we want to grow next
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {futurePlans.map((plan) => (
            <div
              key={plan}
              className="rounded-xl border-3 border-ink bg-white p-5 font-semibold leading-7 shadow-[5px_5px_0_#ffc32d]"
            >
              {plan}
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border-3 border-ink bg-teal p-7 text-white">
          <p className="text-sm font-black uppercase tracking-[0.18em]">
            Emails
          </p>
          <p className="mt-3 font-semibold">
            For questions about programs, partnerships, or future events, reach
            the team at het.gandhi9750@gmail.com.
          </p>
        </div>
      </section>
    </main>
  );
}
