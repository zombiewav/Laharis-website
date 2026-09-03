import { useState } from "react";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1600&h=1200&fit=crop&auto=format";
const CONCRETE =
  "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=1400&h=1100&fit=crop&auto=format";
const ASH =
  "https://images.unsplash.com/photo-1529753253655-470be9a42781?w=1000&h=1300&fit=crop&auto=format";

const serif = { fontFamily: "'Fraunces', Georgia, serif" };

const NAV = ["About", "Services", "Process", "Team", "Contact"];

const SERVICES = [
  ["Structural Design & Engineering", "Seismic and typhoon-resistant design for residential, commercial, and institutional buildings."],
  ["General Construction", "Building construction, site development, and post-disaster reconstruction."],
  ["Project Management", "End-to-end coordination, budgeting, cost control, permitting, and scheduling."],
  ["Infrastructure Development", "Roads, bridges, drainage, and other civil works engineered to last."],
  ["Volcanic Material Valorization", "In-house recovery, testing, and processing of Mayon ash into certified materials."],
  ["Prefabricated Systems", "Skeleton & infill components that cut build time and enable repair over replacement."],
];

const STEPS = [
  ["Recovery", "Ash is gathered from Mayon's post-eruption areas — turning cleanup burden into raw supply."],
  ["Testing", "Every batch is studied for grain size, chemistry, and reactivity in our own laboratory."],
  ["Classification", "Sorted by engineering quality — aggregate, cementitious, brick, fill, or specialty."],
  ["Valorization", "Formed into concrete, geopolymer cement, eco-bricks, panels, and more."],
];

const TEAM = [
  ["Administrative", ["Alena Amados — CEO / Engineering Manager", "Raymund Lemuel Lodana — Business Dev & Marketing"]],
  ["Planning", ["Jino Ogayon — Planning Director (Architect)", "Jheremy Bodollo — Surveyor (Geodetic Eng.)", "Jayian Ocsing — Planning Engineer"]],
  ["Construction", ["Jonis Cantonjos — Project Manager (Civil Eng.)", "Lorraine Dugan — Operations Head (Civil Eng.)"]],
  ["Quality Control", ["Xander Lee Merca — QA & Safety Officer (Materials Eng.)"]],
  ["Accounting", ["Aliyah Anne P. Relorcasa — Finance Manager"]],
  ["Legal", ["Ian Renz Olive B. Arnasán — Legal Officer (Attorney)"]],
];

const FAQS = [
  ["What makes LAHARIS different?", "We recover volcanic ash from Mayon and scientifically transform it into building materials — and design buildings to be repairable after disasters."],
  ["Is volcanic ash really safe for construction?", "Yes. Our materials are tested and validated by research and peer-reviewed studies, meeting NBC and NSC standards."],
  ["How much can I save?", "Locally recovered ash makes material costs significantly lower than conventional aggregates. We provide a quote after assessment."],
  ["How fast can you build?", "Prefabricated components reduce construction time by up to 60% compared with traditional methods."],
  ["Do you offer free consultations?", "Yes — free initial consultations and project assessments for potential clients."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#a8654a]">
      <span className="h-px w-8 bg-[#a8654a]" />
      {children}
    </div>
  );
}

export default function V4Warm() {
  const [faq, setFaq] = useState<number | null>(0);
  return (
    <div className="min-h-full font-sans text-[#3a2c22] selection:bg-[#d8815f] selection:text-[#f7f1e8]" style={{ backgroundColor: "#f5efe6" }}>
      {/* header */}
      <header className="sticky top-0 z-50 border-b border-[#e0d5c5] bg-[#f5efe6]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-5">
          <span className="text-xl tracking-tight" style={serif}>
            Laharis
          </span>
          <nav className="hidden gap-8 text-sm text-[#6b5747] md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#w-${n.toLowerCase()}`} className="transition-colors hover:text-[#a8654a]">
                {n}
              </a>
            ))}
          </nav>
          <a
            href="#w-contact"
            className="rounded-full bg-[#3a2c22] px-5 py-2.5 text-xs tracking-wide text-[#f5efe6] transition-colors hover:bg-[#a8654a]"
          >
            Free Consultation
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="mx-auto max-w-[1120px] px-6 pb-16 pt-16 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Construction · Structural Design · Est. 2026</Eyebrow>
            <h1 className="mt-7 text-[2.9rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem]" style={serif}>
              Remains of the flow,
              <br />
              <span className="italic text-[#a8654a]">foundation</span> of tomorrow.
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#6b5747]">
              A construction and structural design firm transforming Mayon&rsquo;s
              volcanic ash into resilient, sustainable structures for a stronger
              community across Albay and the Bicol Region.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#w-about"
                className="rounded-full bg-[#a8654a] px-8 py-4 text-sm tracking-wide text-[#f5efe6] transition-colors hover:bg-[#3a2c22]"
              >
                Learn more about us
              </a>
              <a href="#w-process" className="text-sm tracking-wide text-[#3a2c22] underline decoration-[#d8ac93] underline-offset-4 hover:decoration-[#a8654a]">
                The ash process →
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={MAYON} alt="Mayon Volcano over Albay" className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#e0d5c5] pt-10 lg:grid-cols-4">
          {[
            ["2026", "Founded — present"],
            ["Albay", "& Bicol Region served"],
            ["20,000", "m³ ash recovered"],
            ["60%", "faster construction"],
          ].map(([big, label]) => (
            <div key={label}>
              <div className="text-4xl tracking-tight text-[#a8654a]" style={serif}>
                {big}
              </div>
              <div className="mt-2 text-sm text-[#6b5747]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="w-about" className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={ASH} alt="Volcanic ash texture" className="h-[460px] w-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-6 text-4xl leading-tight tracking-tight lg:text-5xl" style={serif}>
              Built from what the volcano leaves behind.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-[#6b5747]">
              <p>
                LAHARIS is a construction and design company based in Legazpi, Albay —
                founded on the principle that construction should be safe, sustainable,
                and community-driven.
              </p>
              <p>
                Every Mayon eruption leaves behind tons of volcanic ash. Inspired by the
                ancient Romans who built with volcanic ash structures that lasted
                millennia, and guided by modern Philippine research, we turn this hazard
                into a resource.
              </p>
              <p className="text-xl italic leading-relaxed text-[#3a2c22]" style={serif}>
                &ldquo;LAHARIS buildings are not just structures, but a symbol of
                resilience — rising from the ashes of disaster.&rdquo;
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e0d5c5] bg-[#faf6ee] p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#a8654a]">Mission</div>
                <p className="mt-3 text-sm leading-relaxed text-[#6b5747]">
                  Deliver services with integrity — engineering excellence, innovation,
                  and environmental responsibility.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e0d5c5] bg-[#faf6ee] p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#a8654a]">Vision</div>
                <p className="mt-3 text-sm leading-relaxed text-[#6b5747]">
                  The leading construction & design firm in Bicol — a model for
                  disaster-resilient building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="w-services" className="bg-[#efe7da]">
        <div className="mx-auto max-w-[1120px] px-6 py-20">
          <div className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 text-4xl tracking-tight lg:text-5xl" style={serif}>
              Full-service construction, one integrated firm.
            </h2>
          </div>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([title, desc], i) => (
              <div key={title} className="border-t border-[#d8ccb8] pt-5">
                <div className="text-sm text-[#a8654a]">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-xl tracking-tight" style={serif}>
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b5747]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="w-process" className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="max-w-2xl">
          <Eyebrow>Specialization · Valorization</Eyebrow>
          <h2 className="mt-6 text-4xl tracking-tight lg:text-5xl" style={serif}>
            Four steps from hazard to high-grade material.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#6b5747]">
            A scientific pipeline that turns Mayon ash into cost-effective, validated
            products — powering a circular economy in Albay.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(([title, desc], i) => (
            <div key={title} className="rounded-2xl border border-[#e0d5c5] bg-[#faf6ee] p-7">
              <div className="text-5xl text-[#d8ac93]" style={serif}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-xl tracking-tight" style={serif}>
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b5747]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* skeleton */}
      <section className="bg-[#3a2c22] text-[#f5efe6]">
        <div className="mx-auto grid max-w-[1120px] gap-14 px-6 py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Specialization · Skeleton & Infill</Eyebrow>
            <h2 className="mt-6 text-4xl tracking-tight lg:text-5xl" style={serif}>
              A permanent skeleton. A replaceable infill.
            </h2>
            <p className="mt-6 leading-relaxed text-[#d8c9ba]">
              A durable structural frame built to last decades, while walls, roofing, and
              finishes — made from our volcanic-ash materials — are designed to be
              replaced and upgraded. Inspired by Japan&rsquo;s NEXT21.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Repairability", "Adaptability", "Reduced waste", "Cost savings", "Disaster resilience"].map((b) => (
                <span key={b} className="rounded-full border border-[#6b5747] px-4 py-2 text-sm text-[#e8dccb]">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[2rem]">
              <img src={CONCRETE} alt="Modular concrete frame" className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section id="w-team" className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="max-w-2xl">
          <Eyebrow>Company hierarchy</Eyebrow>
          <h2 className="mt-6 text-4xl tracking-tight lg:text-5xl" style={serif}>
            Six departments. One resilient mission.
          </h2>
        </div>
        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(([dept, people]) => (
            <div key={dept as string} className="border-t border-[#d8ccb8] pt-5">
              <div className="text-xs uppercase tracking-[0.2em] text-[#a8654a]">{dept as string}</div>
              <ul className="mt-4 space-y-3">
                {(people as string[]).map((p) => {
                  const [name, role] = p.split(" — ");
                  return (
                    <li key={p}>
                      <div className="text-[15px]" style={serif}>{name}</div>
                      <div className="text-xs text-[#8a7663]">{role}</div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="bg-[#efe7da]">
        <div className="mx-auto max-w-[860px] px-6 py-20">
          <h2 className="text-center text-4xl tracking-tight lg:text-5xl" style={serif}>
            Questions, answered.
          </h2>
          <div className="mt-12">
            {FAQS.map(([q, a], i) => (
              <div key={q} className="border-t border-[#d8ccb8] last:border-b">
                <button
                  onClick={() => setFaq(faq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-xl tracking-tight" style={serif}>{q}</span>
                  <span className="text-2xl text-[#a8654a]">{faq === i ? "−" : "+"}</span>
                </button>
                {faq === i && <p className="pb-6 leading-relaxed text-[#6b5747]">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="w-contact" className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Contact us</Eyebrow>
            <h2 className="mt-6 text-4xl tracking-tight lg:text-5xl" style={serif}>
              Let&rsquo;s build something that lasts.
            </h2>
            <p className="mt-5 leading-relaxed text-[#6b5747]">
              Free initial consultations and project assessments across Albay and the
              Bicol Region.
            </p>
            <div className="mt-8 space-y-4 text-sm text-[#6b5747]">
              <p><span className="text-[#a8654a]">Office</span><br />EM&rsquo;s Barrio, Legazpi City, Albay 4500</p>
              <p><span className="text-[#a8654a]">Mobile</span><br />0956 314 2178</p>
              <p><span className="text-[#a8654a]">Email</span><br />laharis.inc@gmail.com</p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-[2rem] border border-[#e0d5c5] bg-[#faf6ee] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {["Full name", "Email"].map((l) => (
                  <label key={l} className="block">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8a7663]">{l}</span>
                    <input className="mt-2 w-full rounded-xl border border-[#e0d5c5] bg-[#f5efe6] px-4 py-3 text-sm outline-none focus:border-[#a8654a]" />
                  </label>
                ))}
              </div>
              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8a7663]">Project details</span>
                <textarea rows={4} className="mt-2 w-full resize-none rounded-xl border border-[#e0d5c5] bg-[#f5efe6] px-4 py-3 text-sm outline-none focus:border-[#a8654a]" />
              </label>
              <button className="mt-6 w-full rounded-full bg-[#a8654a] px-8 py-4 text-sm tracking-wide text-[#f5efe6] transition-colors hover:bg-[#3a2c22]">
                Request free consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-[#e0d5c5]">
        <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-4 px-6 py-10 text-sm text-[#8a7663] sm:flex-row sm:items-center">
          <span className="text-lg text-[#3a2c22]" style={serif}>Laharis</span>
          <span>© 2026 LAHARIS. All rights reserved.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-[#a8654a]">Terms</a>
            <a href="#" className="hover:text-[#a8654a]">Privacy</a>
            <a href="#" className="hover:text-[#a8654a]">Quality</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
