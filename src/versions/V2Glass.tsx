import { useState } from "react";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1600&h=1200&fit=crop&auto=format";
const CONCRETE =
  "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=1400&h=900&fit=crop&auto=format";

const NAV = [
  ["Home", "#g-home"],
  ["About", "#g-about"],
  ["Services", "#g-services"],
  ["Process", "#g-process"],
  ["Team", "#g-team"],
  ["Contact", "#g-contact"],
];

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] tracking-[0.22em] uppercase text-magma">
      <span className="ember-dot h-1.5 w-1.5 rounded-full bg-magma" />
      {children}
    </div>
  );
}

export default function V2Glass() {
  return (
    <div className="relative min-h-full overflow-hidden bg-[#0a0705] font-sans text-bone">
      {/* molten gradient field + floating blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,#4a1400_0%,transparent_55%),radial-gradient(120%_90%_at_100%_20%,#7a1e00_0%,transparent_50%),linear-gradient(180deg,#0a0705,#0a0705)]" />
        <div className="blob absolute -left-32 top-40 h-96 w-96 rounded-full bg-ember/25 blur-[120px]" />
        <div className="blob absolute right-0 top-[60%] h-[28rem] w-[28rem] rounded-full bg-magma/15 blur-[130px]" style={{ animationDelay: "-6s" }} />
        <div className="blob absolute left-1/3 top-[120%] h-96 w-96 rounded-full bg-lava/25 blur-[120px]" style={{ animationDelay: "-3s" }} />
      </div>

      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <SkeletonSection />
      <Pathways />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between rounded-2xl glass px-5 py-3 shadow-2xl">
        <a href="#g-home" className="flex items-baseline gap-2">
          <span className="font-mono text-lg font-extrabold tracking-tight">LAHARIS</span>
          <span className="hidden font-mono text-[10px] tracking-[0.3em] text-smoke sm:inline">
            /// ALBAY
          </span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 font-mono text-[13px] text-smoke transition-colors hover:bg-white/10 hover:text-bone"
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#g-contact"
          className="hidden rounded-full neu-pill px-5 py-2.5 font-mono text-xs tracking-wider text-magma transition-transform active:scale-95 lg:block"
        >
          FREE CONSULTATION
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="font-mono text-xs lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 flex max-w-[1180px] flex-col gap-1 rounded-2xl glass p-3 lg:hidden">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-2.5 font-mono text-sm text-smoke hover:bg-white/10"
            >
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
    <section id="g-home" className="mx-auto max-w-[1180px] px-5 pb-16 pt-36 lg:pt-44">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <Kicker>Construction · Structural Design · Est. 2026</Kicker>
          <h1 className="mt-6 text-[2.7rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            Remains of the Flow,
            <br />
            <span className="bg-gradient-to-r from-magma via-ember to-lava bg-clip-text text-transparent">
              Foundation
            </span>{" "}
            of Tomorrow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
            A construction and structural design firm transforming Mayon&rsquo;s
            volcanic ash into resilient, sustainable structures for a stronger
            community across Albay and the Bicol Region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#g-about"
              className="rounded-full bg-gradient-to-r from-ember to-magma px-7 py-3.5 font-mono text-sm font-semibold text-basalt shadow-[0_10px_30px_-8px_rgba(231,77,2,0.7)] transition-transform hover:scale-[1.03]"
            >
              LEARN MORE ABOUT US →
            </a>
            <a
              href="#g-process"
              className="rounded-full neu-pill px-7 py-3.5 font-mono text-sm text-bone transition-transform active:scale-95"
            >
              THE ASH PROCESS
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl glass p-2 shadow-2xl">
            <img
              src={MAYON}
              alt="Mayon Volcano over Albay"
              className="h-72 w-full rounded-2xl object-cover lg:h-96"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl glass-strong px-5 py-4">
              <div className="font-mono text-[10px] tracking-[0.25em] text-magma">
                MAYON VOLCANO · LEGAZPI, ALBAY
              </div>
              <div className="mt-1 text-sm text-bone">
                Rising from the ashes of disaster.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  ["2026", "Founded — Present"],
  ["Albay", "& Bicol Region Served"],
  ["20,000", "m³ Ash Recovered"],
  ["60%", "Faster Construction"],
];

function Stats() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-6">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map(([big, label]) => (
          <div key={label} className="rounded-2xl neu px-6 py-7 text-center">
            <div className="bg-gradient-to-b from-magma to-ember bg-clip-text font-mono text-3xl font-extrabold text-transparent lg:text-4xl">
              {big}
            </div>
            <div className="mt-2 text-xs text-smoke">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({
  kicker,
  title,
  desc,
}: {
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      {desc && <p className="mt-4 text-lg leading-relaxed text-smoke">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="g-about" className="mx-auto max-w-[1180px] px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="h-full rounded-3xl glass p-8 lg:p-10">
            <SectionHead
              kicker="Our Story"
              title="Built from what the volcano leaves behind."
            />
            <div className="space-y-4 text-[15px] leading-relaxed text-smoke">
              <p>
                LAHARIS is a construction and design company based in Legazpi,
                Albay — founded on the principle that construction should be
                safe, sustainable, and community-driven.
              </p>
              <p>
                Every Mayon eruption leaves behind tons of volcanic ash. Inspired
                by the ancient Romans who built with volcanic ash structures that
                lasted millennia — and guided by modern Philippine research — we
                turn this hazard into a resource.
              </p>
              <p className="rounded-2xl neu-inset p-5 text-bone">
                LAHARIS buildings are not just structures, but a symbol of
                resilience — rising from the ashes of disaster.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:col-span-5">
          <div className="rounded-3xl glass p-7">
            <div className="font-mono text-xs tracking-[0.2em] text-magma">
              MISSION
            </div>
            <p className="mt-3 text-sm leading-relaxed text-smoke">
              Deliver construction and management services with integrity —
              combining engineering excellence, innovative practices, and
              environmental responsibility.
            </p>
          </div>
          <div className="rounded-3xl glass p-7">
            <div className="font-mono text-xs tracking-[0.2em] text-magma">
              VISION
            </div>
            <p className="mt-3 text-sm leading-relaxed text-smoke">
              Become the leading construction and design firm in the Bicol
              Region — a model for disaster-resilient building worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  ["◇", "Structural Design & Engineering", "Seismic and typhoon-resistant design for residential, commercial, and institutional buildings."],
  ["▤", "General Construction", "Building construction, site development, and post-disaster reconstruction."],
  ["◈", "Project Management", "End-to-end coordination, budgeting, cost control, permitting, and scheduling."],
  ["⬡", "Infrastructure Development", "Roads, bridges, drainage, and civil works engineered to last."],
  ["△", "Volcanic Material Valorization", "In-house recovery, testing, and processing of Mayon ash into certified materials."],
  ["▦", "Prefabricated Systems", "Skeleton & infill components that cut build time and enable repair over replacement."],
];

function Services() {
  return (
    <section id="g-services" className="mx-auto max-w-[1180px] px-5 py-20">
      <SectionHead
        kicker="What We Do"
        title="Full-service construction, one integrated firm."
        desc="From structural design to material science, LAHARIS controls the full pipeline — raw ash to finished, disaster-resilient structure."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([icon, title, desc]) => (
          <div
            key={title}
            className="group rounded-3xl glass p-7 transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl neu text-xl text-magma">
              {icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Recovery", "Ash is collected from Mayon's post-eruption areas — turning cleanup burden into raw supply."],
  ["02", "Testing", "Every batch is analyzed for grain size, chemistry, and reactivity in our own lab."],
  ["03", "Classification", "Sorted by engineering quality — aggregate, cementitious, brick, fill, or specialty grade."],
  ["04", "Valorization", "Manufactured into concrete, geopolymer cement, eco-bricks, panels, and more."],
];

function Process() {
  return (
    <section id="g-process" className="mx-auto max-w-[1180px] px-5 py-20">
      <SectionHead
        kicker="Specialization A · Valorization"
        title="Four steps from hazard to high-grade material."
        desc="A scientific pipeline that turns Mayon ash into cost-effective, scientifically validated products — powering a circular economy in Albay."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([n, title, desc]) => (
          <div key={n} className="rounded-3xl glass p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full neu-inset font-mono text-lg font-bold text-magma">
              {n}
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl glass px-6 py-4 font-mono text-[11px] tracking-[0.14em] text-smoke">
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
    </section>
  );
}

const BENEFITS = [
  ["Repairability", "Components replaced without demolishing the structure."],
  ["Adaptability", "Interior spaces reconfigure as needs change."],
  ["Reduced Waste", "Only damaged components are replaced."],
  ["Cost Savings", "Long-term maintenance costs are lowered."],
  ["Disaster Resilience", "Typhoon or quake damage repaired affordably."],
];

function SkeletonSection() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl glass p-2">
            <img
              src={CONCRETE}
              alt="Modular concrete structural frame"
              className="h-80 w-full rounded-2xl object-cover"
            />
            <div className="absolute left-5 top-5 rounded-full glass-strong px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-magma">
              INSPIRED BY JAPAN&rsquo;S NEXT21
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHead
            kicker="Specialization B · Skeleton & Infill"
            title="A permanent skeleton. A replaceable infill."
            desc="A durable structural frame built to last decades, while walls, roofing, and finishes — made from our volcanic-ash materials — are designed to be replaced and upgraded."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {BENEFITS.map(([title, desc]) => (
              <div key={title} className="rounded-2xl neu p-5">
                <div className="font-mono text-sm font-semibold text-magma">
                  {title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const PATHWAYS = [
  ["Aggregate-quality", "Lightweight concrete, blocks, precast panels"],
  ["Cementitious-quality", "Geopolymer cement, supplementary cementitious material"],
  ["Brick-quality", "Eco-bricks, pavers, masonry units"],
  ["Fill-quality", "Roadbase, soil stabilization, controlled fill"],
  ["Specialty-quality", "Radiation-shielding panels for healthcare"],
];

function Pathways() {
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-20">
      <SectionHead kicker="Product Pathways" title="One material. Five engineered grades." />
      <div className="overflow-hidden rounded-3xl glass">
        {PATHWAYS.map(([cls, app], i) => (
          <div
            key={cls}
            className={`grid gap-2 px-7 py-5 sm:grid-cols-[1fr_1.5fr] ${
              i > 0 ? "border-t border-white/10" : ""
            }`}
          >
            <div className="flex items-center gap-3 font-mono text-sm font-semibold text-bone">
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-magma to-ember" />
              {cls}
            </div>
            <div className="text-sm text-smoke">{app}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const TEAM = [
  ["Administrative", ["Alena Amados — CEO / Engineering Manager", "Raymund Lemuel Lodana — Business Dev & Marketing Head"]],
  ["Planning", ["Jino Ogayon — Planning Director (Architect)", "Jheremy Bodollo — Surveyor (Geodetic Engineer)", "Jayian Ocsing — Planning Engineer"]],
  ["Construction", ["Jonis Cantonjos — Project Manager (Civil Eng.)", "Lorraine Dugan — Operations Head (Civil Eng.)"]],
  ["Quality Control", ["Xander Lee Merca — QA & Safety Officer (Materials Eng.)"]],
  ["Accounting", ["Aliyah Anne P. Relorcasa — Finance Manager"]],
  ["Legal", ["Ian Renz Olive B. Arnasán — Legal Officer (Attorney & Mech. Eng.)"]],
];

function Team() {
  return (
    <section id="g-team" className="mx-auto max-w-[1180px] px-5 py-20">
      <SectionHead kicker="Company Hierarchy" title="Six departments. One resilient mission." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TEAM.map(([dept, people]) => (
          <div key={dept as string} className="rounded-3xl glass p-7">
            <div className="inline-flex items-center gap-2 rounded-full neu-inset px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-magma">
              {(dept as string).toUpperCase()}
            </div>
            <ul className="mt-4 space-y-3">
              {(people as string[]).map((p) => {
                const [name, role] = p.split(" — ");
                return (
                  <li key={p}>
                    <div className="text-sm font-semibold text-bone">{name}</div>
                    <div className="text-xs text-smoke">{role}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  ["What makes LAHARIS different?", "We recover volcanic ash from Mayon and scientifically transform it into building materials — and design buildings to be repairable after disasters."],
  ["Is volcanic ash really safe?", "Yes. Our materials are tested and validated by research and peer-reviewed studies, meeting NBC and NSC standards."],
  ["How much can I save?", "Locally recovered ash makes material costs significantly lower than conventional aggregates. We quote after project assessment."],
  ["How fast can you build?", "Prefabricated components reduce construction time by up to 60% versus traditional methods."],
  ["Do you only serve Albay?", "We are based in Albay but serve the entire Bicol Region."],
  ["Do you offer free consultations?", "Yes — free initial consultations and project assessments for potential clients."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-[1180px] px-5 py-20">
      <SectionHead kicker="FAQ" title="Answers, engineered plainly." />
      <div className="space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="overflow-hidden rounded-2xl glass">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-[15px] font-medium text-bone">{q}</span>
              <span
                className={`font-mono text-lg text-magma transition-transform ${
                  open === i ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            {open === i && (
              <p className="px-6 pb-6 text-sm leading-relaxed text-smoke">{a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="g-contact" className="mx-auto max-w-[1180px] px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead
            kicker="Contact Us"
            title="Let&rsquo;s build something that lasts."
            desc="Free initial consultations and assessments across Albay and the Bicol Region."
          />
          <div className="space-y-4">
            {[
              ["OFFICE", "EM's Barrio, Legazpi City, Albay 4500"],
              ["MOBILE", "0956 314 2178"],
              ["EMAIL", "laharis.inc@gmail.com"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-4 rounded-2xl neu p-4">
                <span className="w-20 font-mono text-[11px] tracking-[0.2em] text-magma">
                  {k}
                </span>
                <span className="text-sm text-bone">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl glass p-7 lg:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["Full name", "Alena Amados"],
                ["Email", "you@example.com"],
              ].map(([label, ph]) => (
                <label key={label} className="block">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">
                    {label.toUpperCase()}
                  </span>
                  <input
                    type="text"
                    placeholder={ph}
                    className="mt-2 w-full rounded-xl neu-inset px-4 py-3 text-sm text-bone placeholder:text-smoke/50 outline-none"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">
                PROJECT DETAILS
              </span>
              <textarea
                rows={4}
                placeholder="Tell us about your build — scope, timeline, and goals."
                className="mt-2 w-full resize-none rounded-xl neu-inset px-4 py-3 text-sm text-bone placeholder:text-smoke/50 outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-gradient-to-r from-ember to-magma px-7 py-3.5 font-mono text-sm font-semibold text-basalt shadow-[0_10px_30px_-8px_rgba(231,77,2,0.7)] transition-transform hover:scale-[1.02]"
            >
              REQUEST FREE CONSULTATION →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1180px] px-5 pb-10 pt-10">
      <div className="rounded-3xl glass p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-2xl font-extrabold tracking-tight">
              LAHARIS
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-smoke">
              Remains of the flow, foundation of tomorrow. Transforming Mayon&rsquo;s
              volcanic ash into resilient, sustainable structures.
            </p>
            <div className="mt-5 flex gap-3">
              {["FB", "IG", "IN", "YT"].map((s) => (
                <a
                  key={s}
                  href="#g-home"
                  className="flex h-10 w-10 items-center justify-center rounded-full neu-pill font-mono text-[11px] text-smoke transition-transform active:scale-90"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="font-mono text-xs tracking-[0.2em] text-magma">
              QUICK LINKS
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-smoke transition-colors hover:text-bone"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="font-mono text-xs tracking-[0.2em] text-magma">CONTACT</div>
            <div className="mt-4 space-y-2 text-sm text-smoke">
              <p>Legazpi City, Albay</p>
              <p>0956 314 2178</p>
              <p>laharis.inc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-5 font-mono text-[11px] tracking-wider text-smoke">
          © 2026 LAHARIS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
