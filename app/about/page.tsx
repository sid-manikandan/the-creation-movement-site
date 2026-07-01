import Image from "next/image";

const team = [
  {
    name: "Het Gandhi",
    role: "Founder / Lead Creative Director",
    bio: "Het is a rising junior at East Brunswick High School who believes creativity has the power to shape a better future. He enjoys reading, journaling, exploring new ideas, and making the most of time outdoors with friends. He founded The Creation Movement with the mission of helping young people become creators instead of consumers in a world increasingly dominated by screens. By encouraging curiosity, hands-on learning, and creative expression, he hopes to inspire the next generation to think independently, build boldly, and leave a positive mark on the world.",
  },
  {
    name: "Siddharth Manikandan",
    role: "Co-founder / Marketing Director",
    bio: "Siddharth Manikandan is a sophomore at East Brunswick High School and the Co-Founder and Marketing Director of The Creation Movement. Siddharth brings a wide range of skills and perspectives to TCM, and his interests include competing in chess tournaments, robotics, coding, reading, quiz bowl, volleyball, and playing piano, guitar, and saxophone. Across everything he does, Siddharth is drawn to the same idea: creativity is not limited to artists, inventors, or a select few. He believes every child has a creative spark within them; they simply need the right guidance, encouragement, and opportunity to bring it forward. Through his role in marketing, Siddharth hopes to help share TCM’s mission with as many students as possible to inspire young people to create and think critically beyond just a screen.",
  },
  {
    name: "Nishita Chavan",
    role: "Lead Writing Director",
    bio: "Nishita Chavan is a rising junior at East Brunswick High School whose interests lie in various school subjects such as Biology and English. Outside of school, Nishita likes reading, going on hikes and walks, along with playing badminton. Her motive to be a part of The Creation Movement stems from her passion in writing and advocating for various topics that are prevalent in today’s discussions. She believes The Creation Movement is an innovative and educational way to spark the desire to learn and explore in young minds. As TCM’s blog writer, she hopes to utilize her passion to educate others on topics in the areas such as social sciences and modern debates, fueling an environment of awareness and intrigue.",
  },
  {
    name: "Vedh Gajawada",
    role: "Co-founder / Outreach Coordinator",
    bio: "Vedh is currently a student at East Brunswick High School. His interest in STEM helps him develop problem-solving skills and explore the world of engineering. He participates in his school’s robotics club, demonstrating valuable teamwork and gaining constant hands-on experience. Outside of academics, Vedh loves to play volleyball on his school team, read in his free time, and travel around the world with his family. His main goal in joining the nonprofit was to apply his interests in a meaningful way while giving back to his community, allowing him to help students build their confidence in STEM-related fields.",
  },
  {
    name: "Pranay Burla",
    role: "Co-founder / Lead Contributor",
    bio: "Pranay is a student at East Brunswick High School who is passionate about science, sports, and community service. He enjoys playing baseball and basketball, exploring new scientific ideas, and trying different foods. He joined the nonprofit to combine his love for chemistry and science with his goal of helping kids develop creativity and curiosity in an age increasingly shaped by technology and phones.",
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
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.55fr]">
          <div>
            <p className="font-accent text-4xl text-purple">Our Story</p>
            <h1 className="mt-3 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
              Inspiring the next generation of creators
            </h1>
            <p className="mt-7 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
              The Creation Movement is a student-led nonprofit started in East
              Brunswick to encourage people to make, learn, and contribute. We
              saw a generation spending more time consuming than creating, and
              endless scrolling was replacing curiosity, creativity, and
              meaningful learning. We wanted to change that.
            </p>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-ink/75">
              We believe every person has the potential to build, discover,
              write, invent, and make a difference. Through STEM education,
              creative expression, and community service, we&apos;re helping
              inspire the next generation of creators: one student, one project,
              and one idea at a time.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/brand/Screenshot_2026-06-28_at_3.57.44_PM-removebg-preview.png"
              width={542}
              height={461}
              alt="Colorful chemistry beakers and flasks"
              className="h-auto w-full max-w-[23rem] object-contain sm:max-w-[27rem] lg:max-w-[24rem]"
              priority
            />
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="section-shell">
        <div className="h-3 rounded-full border-3 border-ink bg-white shadow-[6px_6px_0_#ffc32d]" />
      </div>

      <section className="section-shell py-16">
        <div className="max-w-3xl">
          <p className="font-accent text-4xl text-purple">Mission</p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight">
            Inspire young people to become creators, not just consumers
          </h2>
          <p className="mt-5 text-lg font-semibold leading-8 text-ink/75">
            Through STEM education, creativity, mentorship, and service, we
            empower students to think independently, build with confidence, and
            make a positive impact.
          </p>
          <p className="mt-6 border-l-[6px] border-orange pl-5 text-2xl font-black leading-snug tracking-tight text-ink sm:text-3xl">
            &ldquo;A nonprofit run by students, for students&rdquo;
          </p>
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
