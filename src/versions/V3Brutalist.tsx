import { useState } from "react";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1600&h=1200&fit=crop&auto=format";
const CONCRETE =
  "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=1400&h=900&fit=crop&auto=format";

const NAV = ["About", "Services", "Process", "Team", "Contact"];

const STATS = [
  ["2026", "FOUNDED — PRESENT"],
  ["ALBAY", "& BICOL REGION"],
  ["20,000", "M³ ASH RECOVERED"],
  ["60%", "FASTER TO BUILD"],
];

const SERVICES = [
  ["01", "STRUCTURAL DESIGN & ENGINEERING", "Seismic and typhoon-resistant design for residential, commercial, and institutional buildings."],
  ["02", "GENERAL CONSTRUCTION", "Building construction, site development, and post-disaster reconstruction."],
  ["03", "PROJECT MANAGEMENT", "End-to-end coordination, budgeting, cost control, permitting, and scheduling."],
  ["04", "INFRASTRUCTURE DEVELOPMENT", "Roads, bridges, drainage, and other civil works engineered to last."],
  ["05", "VOLCANIC MATERIAL VALORIZATION", "In-house recovery, testing, and processing of Mayon ash into certified materials."],
  ["06", "PREFABRICATED SYSTEMS", "Skeleton & infill components that cut build time and enable repair over replacement."],
];

const STEPS = [
  ["RECOVERY", "Ash collected from Mayon's post-eruption areas — cleanup burden becomes raw supply."],
  ["TESTING", "Every batch analyzed for grain size, chemistry, and reactivity in our own lab."],
  ["CLASSIFICATION", "Sorted by grade — aggregate, cementitious, brick, fill, or specialty."],
  ["VALORIZATION", "Manufactured into concrete, geopolymer cement, eco-bricks, and panels."],
];

const TEAM = [
  ["ADMINISTRATIVE", ["Alena Amados / CEO — Engineering Manager", "Raymund Lemuel Lodana / Business Dev & Marketing"]],
  ["PLANNING", ["Jino Ogayon / Planning Director (Architect)", "Jheremy Bodollo / Surveyor (Geodetic Eng.)", "Jayian Ocsing / Planning Engineer"]],
  ["CONSTRUCTION", ["Jonis Cantonjos / Project Manager (Civil Eng.)", "Lorraine Dugan / Operations Head (Civil Eng.)"]],
  ["QUALITY CONTROL", ["Xander Lee Merca / QA & Safety (Materials Eng.)"]],
  ["ACCOUNTING", ["Aliyah Anne P. Relorcasa / Finance Manager"]],
  ["LEGAL", ["Ian Renz Olive B. Arnasán / Legal Officer (Attorney)"]],
];

const FAQS = [
  ["WHAT MAKES LAHARIS DIFFERENT?", "We recover volcanic ash from Mayon and scientifically transform it into building materials — and design buildings to be repairable after disasters."],
  ["IS VOLCANIC ASH SAFE?", "Yes. Tested and validated by research and peer-reviewed studies, meeting NBC and NSC standards. The science dates to the ancient Romans."],
  ["HOW MUCH CAN I SAVE?", "Locally recovered ash makes material costs far lower than conventional aggregates. We quote after assessment."],
  ["HOW FAST CAN YOU BUILD?", "Prefabricated components reduce construction time by up to 60%."],
  ["DO YOU ONLY SERVE ALBAY?", "Based in Albay, we serve the entire Bicol Region."],
];

export default function V3Brutalist() {
  const [faq, setFaq] = useState<number | null>(0);
  return (
    <div className="min-h-full bg-[#f2ede4] font-mono text-[#100c0a] selection:bg-[#100c0a] selection:text-[#f2ede4]">
      {/* header */}
      <header className="sticky top-0 z-50 border-b-2 border-[#100c0a] bg-[#f2ede4]">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4">
          <span className="text-2xl font-extrabold tracking-tight">LAHARIS®</span>
          <nav className="hidden gap-6 text-xs font-bold tracking-wider md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#b-${n.toLowerCase()}`} className="hover:text-[#e74d02]">
                {n.toUpperCase()}
              </a>
            ))}
          </nav>
          <a
            href="#b-contact"
            className="border-2 border-[#100c0a] bg-[#e74d02] px-4 py-2 text-xs font-bold text-[#f2ede4] transition-colors hover:bg-[#100c0a]"
          >
            GET A QUOTE
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="border-b-2 border-[#100c0a]">
        <div className="mx-auto max-w-[1240px] px-5">
          <div className="flex items-center justify-between border-b border-[#100c0a]/40 py-3 text-[11px] font-bold tracking-[0.2em]">
            <span>LEGAZPI CITY · ALBAY · PHILIPPINES</span>
            <span className="hidden sm:inline">EST. 2026 — RISING FROM THE ASHES</span>
          </div>
          <h1 className="py-6 text-[15vw] font-extrabold uppercase leading-[0.85] tracking-tighter lg:text-[11rem]">
            Remains
            <br />
            of the <span className="text-[#e74d02]">Flow</span>
          </h1>
          <div className="grid gap-6 border-t-2 border-[#100c0a] py-6 lg:grid-cols-12">
            <p className="text-2xl font-bold uppercase leading-tight lg:col-span-7">
              Foundation of tomorrow. A construction & structural design firm
              turning Mayon&rsquo;s volcanic ash into resilient structures.
            </p>
            <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end lg:justify-center">
              <a
                href="#b-about"
                className="border-2 border-[#100c0a] bg-[#100c0a] px-8 py-4 text-sm font-bold text-[#f2ede4] transition-colors hover:bg-[#e74d02]"
              >
                LEARN MORE ABOUT US →
              </a>
              <a
                href="#b-process"
                className="border-2 border-[#100c0a] px-8 py-4 text-sm font-bold hover:bg-[#100c0a] hover:text-[#f2ede4]"
              >
                THE ASH PROCESS →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* image band */}
      <div className="border-b-2 border-[#100c0a]">
        <img src={MAYON} alt="Mayon Volcano" className="h-[42vh] w-full object-cover grayscale-[35%]" />
      </div>

      {/* stats */}
      <section className="border-b-2 border-[#100c0a]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 lg:grid-cols-4">
          {STATS.map(([big, label], i) => (
            <div
              key={label}
              className={`px-5 py-8 ${i < 3 ? "lg:border-r-2 lg:border-[#100c0a]" : ""} ${
                i % 2 === 0 ? "border-r-2 border-[#100c0a] lg:border-r-2" : ""
              } ${i < 2 ? "border-b-2 border-[#100c0a] lg:border-b-0" : ""}`}
            >
              <div className="text-4xl font-extrabold lg:text-5xl">{big}</div>
              <div className="mt-2 text-[11px] font-bold tracking-wider">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="b-about" className="border-b-2 border-[#100c0a]">
        <div className="mx-auto grid max-w-[1240px] gap-0 lg:grid-cols-12">
          <div className="border-b-2 border-[#100c0a] p-5 lg:col-span-4 lg:border-b-0 lg:border-r-2">
            <div className="text-xs font-bold tracking-[0.2em] text-[#e74d02]">[ OUR STORY ]</div>
            <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none">
              Built from what the volcano leaves behind
            </h2>
          </div>
          <div className="space-y-4 p-5 text-sm font-medium leading-relaxed lg:col-span-8">
            <p>
              LAHARIS IS A CONSTRUCTION AND DESIGN COMPANY BASED IN LEGAZPI, ALBAY —
              founded on the principle that construction should be safe, sustainable,
              and community-driven.
            </p>
            <p>
              Every Mayon eruption leaves behind tons of volcanic ash. Inspired by the
              ancient Romans who built ash structures that lasted millennia, and guided
              by modern Philippine research, we turn this hazard into a resource.
            </p>
            <p className="border-2 border-[#100c0a] bg-[#e74d02] p-4 font-bold text-[#f2ede4]">
              LAHARIS BUILDINGS ARE NOT JUST STRUCTURES, BUT A SYMBOL OF RESILIENCE —
              RISING FROM THE ASHES OF DISASTER.
            </p>
            <div className="grid gap-0 border-2 border-[#100c0a] sm:grid-cols-2">
              <div className="border-b-2 border-[#100c0a] p-4 sm:border-b-0 sm:border-r-2">
                <div className="text-[11px] font-bold tracking-wider text-[#e74d02]">MISSION</div>
                <p className="mt-2 text-xs">Deliver services with integrity — engineering excellence, innovation, and environmental responsibility.</p>
              </div>
              <div className="p-4">
                <div className="text-[11px] font-bold tracking-wider text-[#e74d02]">VISION</div>
                <p className="mt-2 text-xs">The leading construction & design firm in Bicol — a model for disaster-resilient building.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="b-services" className="border-b-2 border-[#100c0a]">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-b-2 border-[#100c0a] p-5">
            <div className="text-xs font-bold tracking-[0.2em] text-[#e74d02]">[ WHAT WE DO ]</div>
            <h2 className="mt-2 text-5xl font-extrabold uppercase lg:text-7xl">Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([id, title, desc], i) => (
              <div
                key={id}
                className={`group p-5 transition-colors hover:bg-[#100c0a] hover:text-[#f2ede4] ${
                  i % 3 !== 2 ? "lg:border-r-2 lg:border-[#100c0a]" : ""
                } ${i < SERVICES.length - (SERVICES.length % 3 || 3) ? "border-b-2 border-[#100c0a]" : ""} ${
                  i % 2 === 0 ? "md:border-r-2 md:border-[#100c0a]" : ""
                }`}
              >
                <div className="text-5xl font-extrabold text-[#e74d02]">{id}</div>
                <h3 className="mt-4 text-lg font-extrabold uppercase leading-tight">{title}</h3>
                <p className="mt-2 text-xs font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="b-process" className="border-b-2 border-[#100c0a] bg-[#100c0a] text-[#f2ede4]">
        <div className="mx-auto max-w-[1240px] p-5">
          <div className="text-xs font-bold tracking-[0.2em] text-[#fcb42c]">[ SPECIALIZATION A ]</div>
          <h2 className="mt-2 text-5xl font-extrabold uppercase lg:text-7xl">Ash → Material</h2>
          <p className="mt-4 max-w-2xl text-sm font-medium">
            A FOUR-STEP SCIENTIFIC PIPELINE THAT TURNS MAYON ASH INTO SCIENTIFICALLY
            VALIDATED PRODUCTS — POWERING A CIRCULAR ECONOMY IN ALBAY.
          </p>
          <div className="mt-8 grid border-2 border-[#f2ede4] md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, desc], i) => (
              <div
                key={title}
                className={`p-5 ${i < 3 ? "lg:border-r-2 lg:border-[#f2ede4]" : ""} ${
                  i % 2 === 0 ? "border-r-2 border-[#f2ede4] lg:border-r-2" : ""
                } ${i < 2 ? "border-b-2 border-[#f2ede4] lg:border-b-0" : ""}`}
              >
                <div className="text-6xl font-extrabold text-[#e74d02]">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 text-lg font-extrabold uppercase">{title}</h3>
                <p className="mt-2 text-xs text-[#a99b90]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* skeleton */}
      <section className="border-b-2 border-[#100c0a]">
        <div className="mx-auto grid max-w-[1240px] lg:grid-cols-2">
          <div className="border-b-2 border-[#100c0a] lg:border-b-0 lg:border-r-2">
            <img src={CONCRETE} alt="Modular concrete frame" className="h-full min-h-[300px] w-full object-cover grayscale-[35%]" />
          </div>
          <div className="p-5">
            <div className="text-xs font-bold tracking-[0.2em] text-[#e74d02]">[ SPECIALIZATION B ]</div>
            <h2 className="mt-2 text-4xl font-extrabold uppercase leading-none">
              Skeleton & Infill System
            </h2>
            <p className="mt-4 text-sm font-medium">
              A DURABLE STRUCTURAL FRAME BUILT TO LAST DECADES. WALLS, ROOFING, AND
              FINISHES — MADE FROM VOLCANIC-ASH MATERIALS — ARE DESIGNED TO BE REPLACED
              AND UPGRADED. INSPIRED BY JAPAN&rsquo;S NEXT21.
            </p>
            <ul className="mt-5 space-y-0 border-2 border-[#100c0a]">
              {["REPAIRABILITY", "ADAPTABILITY", "REDUCED WASTE", "COST SAVINGS", "DISASTER RESILIENCE"].map((b, i) => (
                <li key={b} className={`flex items-center gap-3 px-4 py-3 text-sm font-bold ${i > 0 ? "border-t-2 border-[#100c0a]" : ""}`}>
                  <span className="text-[#e74d02]">◆</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* team */}
      <section id="b-team" className="border-b-2 border-[#100c0a]">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-b-2 border-[#100c0a] p-5">
            <div className="text-xs font-bold tracking-[0.2em] text-[#e74d02]">[ HIERARCHY ]</div>
            <h2 className="mt-2 text-5xl font-extrabold uppercase lg:text-7xl">The Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(([dept, people], i) => (
              <div
                key={dept as string}
                className={`p-5 ${i % 3 !== 2 ? "lg:border-r-2 lg:border-[#100c0a]" : ""} ${
                  i < 3 ? "border-b-2 border-[#100c0a]" : ""
                } ${i % 2 === 0 ? "md:border-r-2 md:border-[#100c0a]" : ""}`}
              >
                <div className="border-b-2 border-[#100c0a] pb-2 text-sm font-extrabold text-[#e74d02]">
                  {dept as string}
                </div>
                <ul className="mt-3 space-y-2 text-xs font-medium">
                  {(people as string[]).map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="border-b-2 border-[#100c0a]">
        <div className="mx-auto max-w-[1240px]">
          <div className="border-b-2 border-[#100c0a] p-5">
            <h2 className="text-5xl font-extrabold uppercase lg:text-7xl">FAQ</h2>
          </div>
          {FAQS.map(([q, a], i) => (
            <div key={q} className="border-b-2 border-[#100c0a] last:border-b-0">
              <button
                onClick={() => setFaq(faq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-lg font-extrabold uppercase hover:bg-[#e74d02] hover:text-[#f2ede4]"
              >
                {q}
                <span>{faq === i ? "−" : "+"}</span>
              </button>
              {faq === i && <p className="px-5 pb-5 text-sm font-medium">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="b-contact" className="border-b-2 border-[#100c0a] bg-[#e74d02] text-[#f2ede4]">
        <div className="mx-auto grid max-w-[1240px] lg:grid-cols-2">
          <div className="border-b-2 border-[#f2ede4] p-5 lg:border-b-0 lg:border-r-2">
            <h2 className="text-5xl font-extrabold uppercase leading-none lg:text-6xl">
              Let&rsquo;s build something that lasts.
            </h2>
            <p className="mt-4 max-w-md text-sm font-bold">
              FREE INITIAL CONSULTATIONS & PROJECT ASSESSMENTS ACROSS ALBAY AND THE
              BICOL REGION.
            </p>
            <div className="mt-6 space-y-2 text-sm font-bold">
              <p>EM&rsquo;S BARRIO, LEGAZPI CITY, ALBAY 4500</p>
              <p>MOBILE: 0956 314 2178</p>
              <p>LAHARIS.INC@GMAIL.COM</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 p-5">
            {["FULL NAME", "EMAIL", "PROJECT LOCATION"].map((l) => (
              <input
                key={l}
                placeholder={l}
                className="w-full border-2 border-[#f2ede4] bg-transparent px-4 py-3 text-sm font-bold text-[#f2ede4] placeholder:text-[#f2ede4]/70 outline-none focus:bg-[#100c0a]"
              />
            ))}
            <textarea
              rows={4}
              placeholder="PROJECT DETAILS"
              className="w-full resize-none border-2 border-[#f2ede4] bg-transparent px-4 py-3 text-sm font-bold text-[#f2ede4] placeholder:text-[#f2ede4]/70 outline-none focus:bg-[#100c0a]"
            />
            <button className="w-full border-2 border-[#f2ede4] bg-[#100c0a] px-6 py-4 text-sm font-extrabold hover:bg-[#f2ede4] hover:text-[#100c0a]">
              REQUEST FREE CONSULTATION →
            </button>
          </form>
        </div>
      </section>

      {/* footer */}
      <footer className="mx-auto max-w-[1240px] p-5">
        <div className="flex flex-col justify-between gap-4 text-xs font-bold tracking-wider sm:flex-row sm:items-center">
          <span className="text-2xl font-extrabold tracking-tight">LAHARIS®</span>
          <span>© 2026 LAHARIS. ALL RIGHTS RESERVED.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-[#e74d02]">TERMS</a>
            <a href="#" className="hover:text-[#e74d02]">PRIVACY</a>
            <a href="#" className="hover:text-[#e74d02]">QUALITY</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
