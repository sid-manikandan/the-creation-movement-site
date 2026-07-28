import Link from "next/link";

const articleIntro = [
  `Over these past two weeks, The Creation Movement (TCM) kickstarted their organization with two workshop sessions at the East Brunswick Public Library, the first one held July 8th, and the second on July 15th. The two workshops were a huge success, with engagement from many children and parents. These workshops were built around TCM’s foundational motto, “Create More, Consume Less”, with the goal of inspiring kids to be creators, rather than passive consumers. With summer break in full swing, the workshop allowed kids nearby to spend 90 minutes engaging in interactive activities and exploring topics they hadn't necessarily yet encountered.`,
  `The sessions ran as a rotation through four 20-minute stations: Chemistry, Biology, Neuroscience, and The Mind. In terms of managing the event, EBHS Junior Pranay Burla assisted greatly with ensuring that the stations ran smoothly; overlooking the transitions of students rotating, taking pictures, and interacting with the kids themselves, making sure they enjoyed the event to its full potential. Attendance for July 8th included 16 kids, and attendance for July 15th included 12 students. Unfortunately, for the first session, admission had to be capped off at 15 due to the limited space available to host. The organization was sad to deny admissions despite the high demand, however they look forward to expanding workspace for future events.`,
];

const articleSections = [
  {
    heading: "STATION BREAKDOWN:",
    paragraphs: [
      `Station 1: Chemistry, taught by EBHS Junior Nishita Chavan, explored the periodic table and atomic structure, including a game of “Element Charades”, that blended theater with science. The session of July 15th involved building their very own “Bohr Model” in which the structure of protons, neutrons, and electrons were treated as their very own “Solar Systems”.`,
      `Station 2: Biology, led by EBHS Junior Vedh Gajawada covered the differences between the plant and animal cells, diving further into their respective organelles. The highlight of this station was the microscope activity, where students tried to guess what type of cell (plant or animal) they were examining.`,
      `Station 3: Neuroscience, was run in partnership with Brain Bunch, led by medical professional Siddhant and EBHS junior Het Gandhi. Brain Bunch is an accomplished organization that helps students to get introduced to the subject of neuroscience and the STEM field from young ages. They work on educating students in interactive and simplistic manners, hoping to expand their love for education. In this station, students first learned about the difference between neuroscience and psychology, and continued with analogies comparing neurons and neuron chains to understand their functions. The station’s main activity was a “neuron race” where kids raced to construct circuits that represented how neurons deliver information to organs throughout the body. The second stellar activity included exploring optical illusions such as the infamous “dress” showing students how it is actually the brain and not the eyes that “sees”, and understanding communication between these two body parts. The kids were amazed at how easily the brain could be fooled!`,
      `Station 4: The Mind,  led entirely by organization Courage in Calm, specifically Arnav Kumarapuram, a senior from Basking Ridge High School who focused on emotional intelligence. Courage in Calm is an impressive organization that works to provide a sense of confidence and strength to children in today’s society. They prioritize mental strength in equivalence to physical strength, using their platform to educate kids about physical and mental defense. For this workshop, a “Harry Potter” themed scenario was incorporated, and students focused on what it means to be mentally strong and deal with emotions. This station reinforced problem solving skills alongside academic learning, and closed off with a game of emotion-based charades.`,
    ],
  },
  {
    heading: "WHATS NEXT?",
    paragraphs: [
      `Overall, both sessions were a strong start for TCM, sparking authentic interest from kids, not only to dig deeper into subjects they found interest in, but to join future sessions as well. Beyond the content and education, TCM built genuine relationships with the kids that participated, reflecting the idea that more than learning information, the main goal lies in  fostering an environment of growth and interaction. Furthermore, TCM is also looking to embed "capstone projects” into their private sessions, which focus on kids spending multiple step-by-step sessions working towards their very own passion projects. Towards the future, TCM looks to expand partnerships and workshops, along with organizing a symposium with all private students to showcase their projects!`,
    ],
  },
];

export default function JulyWorkshopRecapPage() {
  return (
    <main>
      <section className="section-shell py-16">
        <Link
          href="/blogs"
          className="inline-flex rounded-full border-3 border-ink bg-sun px-5 py-3 text-xs font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#001a46] transition-transform hover:-translate-y-0.5"
        >
          Back to blogs
        </Link>

        <article className="mt-10 grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-accent text-4xl text-purple">
              Workshop Recaps
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              July 8th and 15th Workshop
            </h1>
            <p className="mt-5 inline-flex rounded-full border-3 border-ink bg-sun px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-ink">
              Workshop Recap
            </p>
          </aside>

          <div className="rounded-lg border-3 border-ink bg-white p-6 shadow-[9px_9px_0_#009f86] sm:p-8 lg:p-10">
            <div className="space-y-6 text-lg font-semibold leading-8 text-ink/78">
              {articleIntro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {articleSections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl font-black uppercase tracking-tight text-ink">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-6 text-lg font-semibold leading-8 text-ink/78">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
