import { useState } from "react";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1600&h=1200&fit=crop&auto=format";
const ASH_TEXTURE =
  "https://images.unsplash.com/photo-1529753253655-470be9a42781?w=1200&h=1600&fit=crop&auto=format";
const CONCRETE =
  "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=1400&h=900&fit=crop&auto=format";

const NAV = [
  ["01", "Home", "#home"],
  ["02", "About", "#about"],
  ["03", "Services", "#services"],
  ["04", "Valorization", "#valorization"],
  ["05", "Team", "#team"],
  ["06", "Contact", "#contact"],
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.28em] uppercase text-ember">
      <span className="ember-dot inline-block h-1.5 w-1.5 rounded-full bg-ember" />
      {children}
    </div>
  );
}

export default function V1Volcanic() {
  return (
    <div className="min-h-full bg-basalt text-bone font-sans">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Valorization />
      <Skeleton />
      <Pathways />
      <WhyLaharis />
      <Advantage />
      <Team />
      <Careers />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/70 bg-basalt/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-baseline gap-2">
          <span className="font-mono text-xl font-extrabold tracking-tight text-bone">
            LAHARIS
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.3em] text-smoke sm:inline">
            /// ALBAY
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([n, label, href]) => (
            <a
              key={href}
              href={href}
              className="group flex items-center gap-1.5 font-mono text-[13px] text-smoke transition-colors hover:text-bone"
            >
              <span className="text-[10px] text-ember/70">{n}</span>
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 border border-ember/60 bg-ember/10 px-4 py-2 font-mono text-xs tracking-wider text-magma transition-colors hover:bg-ember hover:text-basalt lg:flex"
        >
          FREE CONSULTATION →
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-xs text-bone lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "CLOSE ✕" : "MENU ≡"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line/70 px-6 pb-5 pt-2 lg:hidden">
          {NAV.map(([n, label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 font-mono text-sm text-smoke"
            >
              <span className="text-[10px] text-ember/70">{n}</span>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={MAYON}
          alt="Mayon Volcano at dusk over Albay, Philippines"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/85 to-basalt/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-basalt/90 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 pb-20 pt-24 lg:grid-cols-12 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="lg:col-span-9">
          <Kicker>Construction · Structural Design · Est. 2026</Kicker>
          <h1 className="mt-6 font-mono text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-bone sm:text-6xl lg:text-[5.3rem]">
            Remains of the Flow,
            <br />
            <span className="text-ember">Foundation</span> of Tomorrow.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-smoke">
            A construction and structural design firm transforming Mayon&rsquo;s
            volcanic ash into resilient, sustainable structures — for a stronger
            community across Albay and the Bicol Region.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-sm font-semibold tracking-wide text-basalt transition-colors hover:bg-magma"
            >
              LEARN MORE ABOUT US
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#valorization"
              className="border border-line px-7 py-3.5 font-mono text-sm tracking-wide text-bone transition-colors hover:border-ember hover:text-magma"
            >
              THE ASH PROCESS
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-line/70">
        <div className="mx-auto flex max-w-[1280px] items-center gap-2 px-6 py-3 font-mono text-[11px] tracking-[0.2em] text-smoke lg:px-10">
          <span className="text-ember">▲</span> LEGAZPI CITY, ALBAY · MAYON VOLCANO ·
          14°13&prime;N 123°41&prime;E · RISING FROM THE ASHES OF DISASTER
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["2026", "Founded — Present"],
  ["Albay", "& Bicol Region Served"],
  ["20,000", "m³ Volcanic Ash Recovered"],
  ["60%", "Faster Construction Time"],
];

function Stats() {
  return (
    <section className="border-b border-line/70 bg-ash">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {STATS.map(([big, label], i) => (
          <div
            key={label}
            className={`px-6 py-9 lg:px-10 ${i < 2 ? "border-b border-line lg:border-b-0" : ""} ${
              i % 2 === 0 ? "border-r border-line lg:border-r-0" : ""
            }`}
          >
            <div className="font-mono text-3xl font-extrabold text-magma lg:text-4xl">
              {big}
            </div>
            <div className="mt-2 text-sm text-smoke">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  index,
  title,
  kicker,
  desc,
}: {
  index: string;
  title: string;
  kicker: string;
  desc?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <Kicker>
        {index} — {kicker}
      </Kicker>
      <h2 className="mt-5 font-mono text-3xl font-bold leading-tight tracking-tight text-bone sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-5 text-lg leading-relaxed text-smoke">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHead
            index="02"
            kicker="Our Story"
            title="Built from what the volcano leaves behind."
          />
          <div className="space-y-5 text-[15px] leading-relaxed text-smoke">
            <p>
              LAHARIS is a construction and design company based in Legazpi,
              Albay — founded on the principle that construction should be safe,
              sustainable, and community-driven. By integrating innovative
              engineering with locally available resources, we redefine how
              buildings are designed and built in disaster-prone regions.
            </p>
            <p>
              Every Mayon eruption leaves behind tons of volcanic ash, creating
              a massive cleanup burden for communities. Inspired by the ancient
              Romans who used volcanic ash to build structures that have lasted
              millennia — and guided by modern Philippine research — LAHARIS was
              founded to turn this hazard into a resource.
            </p>
            <p className="border-l-2 border-ember pl-5 text-bone">
              LAHARIS buildings are not just structures, but a symbol of
              resilience — rising from the ashes of disaster.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            <div className="bg-ashcard p-6">
              <div className="font-mono text-xs tracking-[0.2em] text-ember">
                MISSION
              </div>
              <p className="mt-3 text-sm leading-relaxed text-smoke">
                To deliver construction and management services with integrity —
                combining engineering excellence, innovative practices, and
                environmental responsibility to create safe, functional, durable
                structures.
              </p>
            </div>
            <div className="bg-ashcard p-6">
              <div className="font-mono text-xs tracking-[0.2em] text-ember">
                VISION
              </div>
              <p className="mt-3 text-sm leading-relaxed text-smoke">
                To become the leading construction and design firm in the Bicol
                Region — setting a new standard for disaster-resilient building,
                a model for disaster-prone regions worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative h-full min-h-[380px] overflow-hidden border border-line bg-ashcard">
            <img
              src={ASH_TEXTURE}
              alt="Dark volcanic ash and basalt rock texture"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt/90 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <div className="font-mono text-xs tracking-[0.2em] text-magma">
                CORE VALUES
              </div>
              <p className="mt-2 text-sm text-bone">
                Inclusivity · Resilience · Trust · Transparency · Sustainability
                · Integrity · Responsiveness · Resourcefulness
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  [
    "S1",
    "Structural Design & Engineering",
    "Residential, commercial, and institutional building design with seismic and typhoon-resistant engineering.",
  ],
  [
    "S2",
    "General Construction",
    "Building construction, site development, and post-disaster reconstruction across the region.",
  ],
  [
    "S3",
    "Project Management",
    "End-to-end coordination, budgeting, cost control, permitting, and scheduling.",
  ],
  [
    "S4",
    "Infrastructure Development",
    "Roads, bridges, drainage, and other civil works engineered to last.",
  ],
  [
    "S5",
    "Volcanic Material Valorization",
    "In-house recovery, testing, and processing of Mayon ash into certified building materials.",
  ],
  [
    "S6",
    "Prefabricated Building Systems",
    "Skeleton & infill components that cut build time and enable repair over replacement.",
  ],
];

function Services() {
  return (
    <section id="services" className="border-y border-line/70 bg-ash">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
        <SectionHead
          index="03"
          kicker="What We Do"
          title="Full-service construction, one integrated firm."
          desc="From structural design to material science, LAHARIS controls the full pipeline — from raw ash to finished, disaster-resilient structure."
        />
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([id, title, desc]) => (
            <div
              key={id}
              className="group relative bg-ashcard p-7 transition-colors hover:bg-basalt"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-ember">
                  {id}
                </span>
                <span className="text-line transition-colors group-hover:text-ember">
                  ↗
                </span>
              </div>
              <h3 className="mt-5 font-mono text-lg font-semibold leading-snug text-bone">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  [
    "01",
    "Recovery",
    "Volcanic ash is collected from Mayon's post-eruption areas — turning cleanup burden into raw supply.",
  ],
  [
    "02",
    "Testing",
    "Every batch is analyzed for grain size, chemical composition, and reactivity in our own laboratory.",
  ],
  [
    "03",
    "Classification",
    "Ash is sorted by engineering quality — aggregate, cementitious, brick, fill, or specialty grade.",
  ],
  [
    "04",
    "Valorization",
    "Classified material is manufactured into concrete, geopolymer cement, eco-bricks, panels, and more.",
  ],
];

function Valorization() {
  return (
    <section id="valorization" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-basalt via-lava/10 to-basalt" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
        <SectionHead
          index="04"
          kicker="Specialization A · Volcanic Material Valorization"
          title="A four-step process from hazard to high-grade material."
          desc="A scientific pipeline that recovers Mayon ash and transforms it into cost-effective, environmentally responsible, scientifically validated products — powering a circular economy in Albay."
        />
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([n, title, desc]) => (
            <div key={n} className="bg-ashcard p-7">
              <div className="font-mono text-5xl font-extrabold text-ember/25">
                {n}
              </div>
              <h3 className="mt-4 font-mono text-lg font-semibold text-bone">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-[0.15em] text-smoke">
          <span className="text-smoke/60">CIRCULAR ECONOMY:</span>
          {["ERUPTION", "ASH", "RECOVERY", "TESTING", "PROCESSING", "MATERIAL"].map(
            (s, i, arr) => (
              <span key={s} className="flex items-center gap-3">
                <span className={i === arr.length - 1 ? "text-magma" : "text-bone"}>
                  {s}
                </span>
                {i < arr.length - 1 && <span className="text-ember">→</span>}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  ["Repairability", "Damaged components are replaced without demolishing the structure."],
  ["Adaptability", "Interior spaces reconfigure as needs change over time."],
  ["Reduced Waste", "Only damaged components are replaced — not whole buildings."],
  ["Cost Savings", "Long-term maintenance costs are significantly lowered."],
  ["Disaster Resilience", "Typhoon or earthquake damage is repaired quickly and affordably."],
];

function Skeleton() {
  return (
    <section className="border-y border-line/70 bg-ash">
      <div className="mx-auto grid max-w-[1280px] gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative h-full min-h-[320px] overflow-hidden border border-line">
            <img
              src={CONCRETE}
              alt="Modern modular concrete structural frame"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-basalt/85 via-transparent to-lava/20" />
            <div className="absolute left-5 top-5 border border-ember/50 bg-basalt/70 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-magma backdrop-blur">
              INSPIRED BY JAPAN&rsquo;S NEXT21
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHead
            index="04·B"
            kicker="Specialization B · Skeleton & Infill System"
            title="A permanent skeleton. A replaceable infill."
            desc="Buildings feature a durable structural frame designed to last decades, while walls, partitions, roofing, and finishes — manufactured from our volcanic-ash materials — are designed to be replaced and upgraded over time."
          />
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {BENEFITS.map(([title, desc]) => (
              <div key={title} className="bg-ashcard p-5">
                <div className="font-mono text-sm font-semibold text-magma">
                  {title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{desc}</p>
              </div>
            ))}
            <div className="flex items-center bg-basalt p-5">
              <p className="font-mono text-sm leading-relaxed text-ember">
                Buildings truly built to last.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PATHWAYS = [
  ["Aggregate-quality", "Lightweight concrete, concrete blocks, precast panels"],
  ["Cementitious-quality", "Geopolymer cement, supplementary cementitious material"],
  ["Brick-quality", "Eco-bricks, pavers, masonry units"],
  ["Fill-quality", "Roadbase, soil stabilization, controlled fill"],
  ["Specialty-quality", "Radiation-shielding panels for healthcare facilities"],
];

function Pathways() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
      <SectionHead
        index="05"
        kicker="Product Pathways"
        title="One material. Five engineered classifications."
      />
      <div className="overflow-hidden border border-line">
        <div className="hidden bg-ash px-7 py-3 font-mono text-[11px] tracking-[0.2em] text-smoke sm:grid sm:grid-cols-[1fr_1.6fr]">
          <span>CLASSIFICATION</span>
          <span>APPLICATION</span>
        </div>
        {PATHWAYS.map(([cls, app], i) => (
          <div
            key={cls}
            className={`grid gap-2 px-7 py-5 sm:grid-cols-[1fr_1.6fr] ${
              i % 2 === 0 ? "bg-ashcard" : "bg-basalt"
            }`}
          >
            <div className="flex items-center gap-3 font-mono text-sm font-semibold text-bone">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {cls}
            </div>
            <div className="text-sm text-smoke">{app}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WHY = [
  ["“Construction is too expensive.”", "We use locally recovered volcanic ash — a free raw material — cutting material costs significantly."],
  ["“Our buildings don’t survive typhoons.”", "Our skeleton & infill system allows easy repairs and replacements after disasters."],
  ["“We need sustainable options.”", "We turn hazard waste into resources, reducing environmental impact and carbon footprint."],
  ["“We don’t trust new materials.”", "Our materials are scientifically validated by DPWH research and peer-reviewed studies."],
  ["“We need to build fast after disasters.”", "Prefabricated components enable up to 60% faster construction."],
  ["“We want to support local business.”", "We are 100% Albay-based — local materials, local jobs, local resilience."],
];

function WhyLaharis() {
  return (
    <section className="border-y border-line/70 bg-ash">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
        <SectionHead
          index="06"
          kicker="Why LAHARIS"
          title="Every client concern, engineered away."
        />
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {WHY.map(([q, a]) => (
            <div key={q} className="bg-ashcard p-7">
              <p className="font-mono text-base font-semibold text-magma">{q}</p>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const COMPARE = [
  ["Material Source", "Purchases from quarries", "In-house recovery & processing"],
  ["Material Cost", "Subject to market prices", "Lower — recovered materials"],
  ["Material Testing", "Relies on supplier claims", "In-house laboratory testing"],
  ["Design Approach", "Traditional permanent structures", "Adaptable skeleton & infill"],
  ["Sustainability", "Limited", "Built into the business model"],
  ["Disaster Resilience", "Standard construction", "Repairable, not replaceable"],
  ["Circular Economy", "None", "Turns hazard waste into resources"],
];

function Advantage() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
      <SectionHead
        index="07"
        kicker="Competitive Advantage"
        title="Conventional firms buy materials. We make ours."
      />
      <div className="overflow-x-auto border border-line">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-ash font-mono text-[11px] tracking-[0.2em] text-smoke">
              <th className="px-6 py-4 font-medium">FEATURE</th>
              <th className="px-6 py-4 font-medium">CONVENTIONAL</th>
              <th className="px-6 py-4 font-medium text-magma">LAHARIS</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map(([f, c, l], i) => (
              <tr
                key={f}
                className={`border-t border-line ${i % 2 ? "bg-basalt" : "bg-ashcard"}`}
              >
                <td className="px-6 py-4 font-mono text-sm font-medium text-bone">
                  {f}
                </td>
                <td className="px-6 py-4 text-sm text-smoke">{c}</td>
                <td className="px-6 py-4 text-sm text-bone">
                  <span className="mr-2 text-ember">✓</span>
                  {l}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const TEAM = [
  ["Administrative", ["Alena Amados — CEO / Engineering Manager", "Raymund Lemuel Lodana — Business Dev & Marketing Head"]],
  ["Planning", ["Jino Ogayon — Planning Director (Architect)", "Jheremy Bodollo — Surveyor (Geodetic Engineer)", "Jayian Ocsing — Planning Engineer (Electrical / Master Plumber)"]],
  ["Construction", ["Jonis Cantonjos — Project Manager (Civil Engineer)", "Lorraine Dugan — Operations Head (Civil Engineer)"]],
  ["Quality Control", ["Xander Lee Merca — QA & Safety Officer (Materials Engineer)"]],
  ["Accounting", ["Aliyah Anne P. Relorcasa — Finance Manager"]],
  ["Legal", ["Ian Renz Olive B. Arnasán — Legal Officer (Attorney & Mechanical Engineer)"]],
];

function Team() {
  return (
    <section id="team" className="border-y border-line/70 bg-ash">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
        <SectionHead
          index="08"
          kicker="Company Hierarchy"
          title="Six departments. One resilient mission."
        />
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(([dept, people]) => (
            <div key={dept as string} className="bg-ashcard p-7">
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-ember">
                <span className="ember-dot h-1.5 w-1.5 rounded-full bg-ember" />
                {(dept as string).toUpperCase()}
              </div>
              <ul className="mt-4 space-y-3">
                {(people as string[]).map((p) => {
                  const [name, role] = p.split(" — ");
                  return (
                    <li key={p} className="border-l border-line pl-4">
                      <div className="text-sm font-semibold text-bone">{name}</div>
                      <div className="text-xs text-smoke">{role}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const OPENINGS = [
  "Structural Engineer",
  "Site Engineer",
  "Materials Testing Technician",
  "Project Manager",
  "Administrative Assistant",
];

function Careers() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10">
      <div className="lg:col-span-6">
        <SectionHead
          index="09"
          kicker="Careers"
          title="Build resilience. Build a career."
          desc="Work on innovative, sustainable projects that make a real difference — with continuous learning, professional development, and competitive compensation."
        />
      </div>
      <div className="lg:col-span-6">
        <div className="border border-line">
          <div className="bg-ash px-7 py-4 font-mono text-xs tracking-[0.2em] text-smoke">
            CURRENT OPENINGS
          </div>
          {OPENINGS.map((role) => (
            <a
              key={role}
              href="#contact"
              className="group flex items-center justify-between border-t border-line px-7 py-5 transition-colors hover:bg-ashcard"
            >
              <span className="text-[15px] font-medium text-bone">{role}</span>
              <span className="font-mono text-xs text-smoke transition-colors group-hover:text-ember">
                APPLY →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  ["What makes LAHARIS different?", "We recover volcanic ash from Mayon and scientifically transform it into building materials — and we design buildings to be repairable after disasters."],
  ["Is volcanic ash really safe for construction?", "Yes. Our materials are tested and validated by research and peer-reviewed studies, and meet NBC and NSC standards. The science dates back to the ancient Romans."],
  ["How much can I save using LAHARIS materials?", "Because we use locally recovered ash, material costs are significantly lower than importing or purchasing conventional aggregates. We provide a specific quote after project assessment."],
  ["How fast can you build?", "Our prefabricated components reduce construction time by up to 60% compared to traditional methods."],
  ["Do you only serve Albay?", "We are based in Albay but serve the entire Bicol Region."],
  ["Can you handle large infrastructure projects?", "Yes — including roads, bridges, and government facilities."],
  ["What if a building is damaged by a typhoon?", "Our skeleton & infill system lets damaged infill components be replaced without demolishing the structure, saving time and money."],
  ["Do you offer free consultations?", "Yes. We provide free initial consultations and project assessments for potential clients."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-y border-line/70 bg-ash">
      <div className="mx-auto max-w-[1280px] px-6 py-24 lg:px-10">
        <SectionHead index="10" kicker="FAQ" title="Answers, engineered plainly." />
        <div className="border border-line">
          {FAQS.map(([q, a], i) => (
            <div key={q} className="border-t border-line first:border-t-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-ashcard"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-xs text-ember/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium text-bone">{q}</span>
                </span>
                <span
                  className={`font-mono text-lg text-ember transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="px-6 pb-6 pl-16 text-sm leading-relaxed text-smoke">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-basalt via-lava/15 to-basalt" />
      <div className="relative mx-auto grid max-w-[1280px] gap-14 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-6">
          <SectionHead
            index="11"
            kicker="Contact Us"
            title="Let&rsquo;s build something that lasts."
            desc="Free initial consultations and project assessments for clients across Albay and the Bicol Region."
          />
          <div className="space-y-px overflow-hidden border border-line bg-line">
            {[
              ["OFFICE", "EM's Barrio, Legazpi City, Albay, Philippines 4500"],
              ["TELEPHONE", "8019-5743"],
              ["MOBILE", "0956 314 2178"],
              ["EMAIL", "laharis.inc@gmail.com"],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 bg-ashcard p-5 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-28 font-mono text-xs tracking-[0.2em] text-ember">
                  {k}
                </span>
                <span className="text-[15px] text-bone">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-line bg-ashcard/60 p-7 backdrop-blur"
          >
            <div className="grid gap-5">
              {[
                ["Full name", "Alena Amados"],
                ["Email", "you@example.com"],
                ["Project location", "Legazpi City, Albay"],
              ].map(([label, ph]) => (
                <label key={label} className="block">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">
                    {label.toUpperCase()}
                  </span>
                  <input
                    type="text"
                    placeholder={ph}
                    className="mt-2 w-full border border-line bg-basalt px-4 py-3 text-sm text-bone placeholder:text-smoke/50 outline-none transition-colors focus:border-ember"
                  />
                </label>
              ))}
              <label className="block">
                <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">
                  PROJECT DETAILS
                </span>
                <textarea
                  rows={4}
                  placeholder="Tell us about your build — scope, timeline, and goals."
                  className="mt-2 w-full resize-none border border-line bg-basalt px-4 py-3 text-sm text-bone placeholder:text-smoke/50 outline-none transition-colors focus:border-ember"
                />
              </label>
              <button
                type="submit"
                className="group flex items-center justify-center gap-3 bg-ember px-7 py-3.5 font-mono text-sm font-semibold tracking-wide text-basalt transition-colors hover:bg-magma"
              >
                REQUEST FREE CONSULTATION
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line/70 bg-ash">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-2xl font-extrabold tracking-tight text-bone">
              LAHARIS
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-smoke">
              Remains of the flow, foundation of tomorrow. Transforming Mayon&rsquo;s
              volcanic ash into resilient, sustainable structures.
            </p>
            <div className="mt-6 flex gap-3">
              {["FB", "IG", "IN", "YT"].map((s) => (
                <a
                  key={s}
                  href="#home"
                  className="flex h-9 w-9 items-center justify-center border border-line font-mono text-[11px] text-smoke transition-colors hover:border-ember hover:text-magma"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="font-mono text-xs tracking-[0.2em] text-ember">
              QUICK LINKS
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {NAV.concat([["07", "Careers", "#careers"], ["08", "FAQ", "#faq"]]).map(
                ([, label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm text-smoke transition-colors hover:text-bone"
                  >
                    {label}
                  </a>
                ),
              )}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="font-mono text-xs tracking-[0.2em] text-ember">
              CONTACT
            </div>
            <div className="mt-4 space-y-2 text-sm text-smoke">
              <p>Legazpi City, Albay</p>
              <p>0956 314 2178</p>
              <p>laharis.inc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 font-mono text-[11px] tracking-wider text-smoke sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 LAHARIS. ALL RIGHTS RESERVED.</span>
          <span className="flex gap-5">
            <a href="#home" className="hover:text-bone">TERMS</a>
            <a href="#home" className="hover:text-bone">PRIVACY</a>
            <a href="#home" className="hover:text-bone">QUALITY POLICY</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
