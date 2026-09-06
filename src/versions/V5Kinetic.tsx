import { useEffect, useRef, useState } from "react";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1800&h=1400&fit=crop&auto=format";
const CONCRETE =
  "https://images.unsplash.com/photo-1546414701-81cc6963c67f?w=1400&h=900&fit=crop&auto=format";

const NAV = ["About", "Services", "Process", "Team", "Contact"];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Counter({ target, suffix = "", grouped = true }: { target: number; suffix?: string; grouped?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {grouped ? val.toLocaleString() : val}
      {suffix}
    </span>
  );
}

const VALUES = [
  "Inclusivity",
  "Resilience",
  "Trustworthiness",
  "Transparency",
  "Sustainability",
  "Unwavering Integrity",
  "Responsiveness",
  "Resourcefulness",
];

const SERVICES = [
  ["Structural Design & Engineering", "Seismic and typhoon-resistant design for residential, commercial, and institutional buildings."],
  ["General Construction", "Building construction, site development, and post-disaster reconstruction."],
  ["Project Management", "End-to-end coordination, budgeting, cost control, permitting, and scheduling."],
  ["Infrastructure Development", "Roads, bridges, drainage, and other civil works engineered to last."],
  ["Volcanic Material Valorization", "In-house recovery, testing, and processing of Mayon ash into certified materials."],
  ["Prefabricated Systems", "Skeleton & infill components that cut build time and enable repair over replacement."],
];

const STEPS = [
  ["Recovery", "Ash collected from Mayon's post-eruption areas, turning cleanup burden into raw supply."],
  ["Testing", "Every batch analyzed for grain size, chemistry, and reactivity in our own lab."],
  ["Classification", "Sorted by grade: aggregate, cementitious, brick, fill, or specialty."],
  ["Valorization", "Manufactured into concrete, geopolymer cement, eco-bricks, and panels."],
];

const TEAM = [
  ["Administrative", ["Alena Amados, CEO / Engineering Manager", "Raymund Lemuel Lodana, Business Dev & Marketing"]],
  ["Planning", ["Jino Ogayon, Planning Director (Architect)", "Jheremy Bodollo, Surveyor (Geodetic Eng.)", "Jayian Ocsing, Planning Engineer"]],
  ["Construction", ["Jonis Cantonjos, Chief Operation Manager (Civil Eng.)", "Maria Lorraine Dugan, Project Manager (Civil Eng.)"]],
  ["Quality Control", ["Xander Lee Merca, QA & Safety Officer (Materials Eng.)"]],
  ["Accounting", ["Aliyah Anne P. Relorcasa, Finance Manager"]],
  ["Legal", ["Ian Renz Olive B. Arnasán, Legal Officer (Attorney)"]],
];

export default function V5Kinetic() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-full bg-basalt font-sans text-bone">
      {/* header */}
      <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-basalt/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="" className="h-9 w-9" />
            <img src="/logo-wordmark.png" alt="LAHARIS" className="h-5 w-auto" />
          </a>
          <nav className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <a key={n} href={`#k-${n.toLowerCase()}`} className="font-mono text-[13px] text-smoke transition-colors hover:text-magma">
                {n}
              </a>
            ))}
          </nav>
          <a href="#k-contact" className="rounded-full bg-ember px-5 py-2 font-mono text-xs text-basalt transition-transform hover:scale-105">
            CONSULTATION
          </a>
        </div>
      </header>

      {/* hero with parallax */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.15)` }}>
          <img src={MAYON} alt="Mayon Volcano erupting" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/70 to-basalt/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-basalt/80 to-transparent" />
        </div>
        <div
          className="relative mx-auto w-full max-w-[1200px] px-6"
          style={{ transform: `translateY(${scrollY * -0.15}px)`, opacity: Math.max(1 - scrollY / 500, 0) }}
        >
          <Reveal>
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.28em] uppercase text-magma">
              <span className="ember-dot h-1.5 w-1.5 rounded-full bg-magma" /> Est. 2026 · Legazpi, Albay
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-mono text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-[6rem]">
              Remains of the Flow,
              <br />
              <span className="bg-gradient-to-r from-magma via-ember to-lava bg-clip-text text-transparent">
                Foundation
              </span>{" "}
              of Tomorrow.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-smoke">
              Transforming Mayon&rsquo;s volcanic ash into resilient, sustainable
              structures for a stronger community across the Bicol Region.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#k-about" className="group flex items-center gap-3 bg-ember px-7 py-3.5 font-mono text-sm font-semibold text-basalt transition-colors hover:bg-magma">
                LEARN MORE ABOUT US
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#k-process" className="border border-line px-7 py-3.5 font-mono text-sm transition-colors hover:border-magma hover:text-magma">
                THE ASH PROCESS
              </a>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-smoke">
          ↓ SCROLL
        </div>
      </section>

      {/* marquee */}
      <div className="overflow-hidden border-y border-line bg-ash py-4">
        <div className="marquee flex whitespace-nowrap font-mono text-sm tracking-[0.2em] text-smoke">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex">
              {["VOLCANIC MATERIAL VALORIZATION", "DISASTER-RESILIENT DESIGN", "CIRCULAR ECONOMY", "SKELETON & INFILL", "100% ALBAY-BASED"].map((t) => (
                <span key={t} className="mx-6 flex items-center gap-6">
                  {t} <span className="text-ember">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* stats */}
      <section className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            [<Counter key="a" target={2026} grouped={false} />, "Founded to present"],
            [<span key="b">Albay</span>, "& Bicol Region served"],
            [<Counter key="c" target={20000} />, "m³ ash recovered"],
            [<Counter key="d" target={60} suffix="%" />, "faster construction"],
          ].map(([big, label], i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="border-t border-line pt-5">
                <div className="font-mono text-4xl font-extrabold text-magma lg:text-5xl">{big}</div>
                <div className="mt-2 text-sm text-smoke">{label as string}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* about */}
      <section id="k-about" className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">Our Story</div>
            <h2 className="mt-4 font-mono text-4xl font-bold leading-tight lg:text-5xl">
              Built from what the volcano leaves behind.
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-smoke">
              <p>
                LAHARIS is a construction and design company based in Legazpi, Albay,
                founded on the principle that construction should be safe, sustainable,
                and community-driven.
              </p>
              <p>
                Inspired by the ancient Romans who built with volcanic ash structures that
                lasted millennia, and guided by modern Philippine research, we turn Mayon&rsquo;s
                hazard into a resource.
              </p>
              <p className="border-l-2 border-ember pl-5 text-bone">
                LAHARIS buildings are not just structures, but a symbol of resilience,
                rising from the ashes of disaster.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <div className="grid gap-6">
              <div className="border border-line bg-ashcard p-6">
                <div className="font-mono text-xs tracking-[0.2em] text-ember">VISION</div>
                <p className="mt-3 text-sm leading-relaxed text-smoke">
                  The leading construction & design firm in Bicol, a model for
                  disaster-resilient building worldwide.
                </p>
              </div>
              <div className="border border-line bg-ashcard p-6">
                <div className="font-mono text-xs tracking-[0.2em] text-ember">MISSION</div>
                <p className="mt-3 text-sm leading-relaxed text-smoke">
                  Deliver services with integrity: engineering excellence, innovation, and
                  environmental responsibility.
                </p>
              </div>
              <div className="border border-line bg-ashcard p-6">
                <div className="font-mono text-xs tracking-[0.2em] text-ember">CORE VALUES</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {VALUES.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-smoke"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* services */}
      <section id="k-services" className="border-y border-line bg-ash">
        <div className="mx-auto max-w-[1200px] px-6 py-24">
          <Reveal>
            <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">What We Do</div>
            <h2 className="mt-4 font-mono text-4xl font-bold lg:text-5xl">Services</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(([title, desc], i) => (
              <Reveal key={title} delay={(i % 3) * 100}>
                <div className="group h-full bg-ashcard p-7 transition-colors hover:bg-basalt">
                  <div className="font-mono text-sm text-ember">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 font-mono text-lg font-semibold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section id="k-process" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-basalt via-lava/10 to-basalt" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-24">
          <Reveal>
            <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">Specialization · Valorization</div>
            <h2 className="mt-4 font-mono text-4xl font-bold lg:text-5xl">Ash becomes architecture.</h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, desc], i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="h-full bg-ashcard p-7">
                  <div className="font-mono text-5xl font-extrabold text-ember/25">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-4 font-mono text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* skeleton */}
      <section className="border-y border-line bg-ash">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 py-24 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden border border-line">
              <img src={CONCRETE} alt="Modular concrete frame" className="h-80 w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">Specialization · Skeleton & Infill</div>
            <h2 className="mt-4 font-mono text-4xl font-bold leading-tight lg:text-5xl">
              A permanent skeleton. A replaceable infill.
            </h2>
            <p className="mt-6 leading-relaxed text-smoke">
              A durable structural frame built to last decades, while finishes made from our
              volcanic-ash materials are designed to be replaced and upgraded. Inspired by
              Japan&rsquo;s NEXT21.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Repairability", "Adaptability", "Reduced waste", "Cost savings", "Disaster resilience"].map((b) => (
                <span key={b} className="border border-line px-4 py-2 font-mono text-xs text-magma">{b}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* team */}
      <section id="k-team" className="mx-auto max-w-[1200px] px-6 py-24">
        <Reveal>
          <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">Company Hierarchy</div>
          <h2 className="mt-4 font-mono text-4xl font-bold lg:text-5xl">The Team</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map(([dept, people], i) => (
            <Reveal key={dept as string} delay={(i % 3) * 100}>
              <div className="h-full bg-ashcard p-7">
                <div className="font-mono text-xs tracking-[0.2em] text-ember">{(dept as string).toUpperCase()}</div>
                <ul className="mt-4 space-y-3">
                  {(people as string[]).map((p) => {
                    const [name, role] = p.split(", ");
                    return (
                      <li key={p} className="border-l border-line pl-4">
                        <div className="text-sm font-semibold">{name}</div>
                        <div className="text-xs text-smoke">{role}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="k-contact" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-basalt via-lava/15 to-basalt" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-24">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs tracking-[0.28em] uppercase text-ember">Contact Us</div>
                <h2 className="mt-4 font-mono text-4xl font-bold leading-tight lg:text-5xl">
                  Let&rsquo;s build something that lasts.
                </h2>
                <p className="mt-5 leading-relaxed text-smoke">
                  Free initial consultations and assessments across Albay and the Bicol Region.
                </p>
                <div className="mt-8 space-y-3 font-mono text-sm text-smoke">
                  <p><span className="text-ember">OFFICE</span>: EM&rsquo;s Barrio, Legazpi City, Albay 4500</p>
                  <p><span className="text-ember">MOBILE</span>: 0956 314 2178</p>
                  <p><span className="text-ember">EMAIL</span>: laharis.inc@gmail.com</p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <form onSubmit={(e) => e.preventDefault()} className="border border-line bg-ashcard/60 p-7 backdrop-blur">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {["Full name", "Email"].map((l) => (
                      <label key={l} className="block">
                        <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">{l.toUpperCase()}</span>
                        <input className="mt-2 w-full border border-line bg-basalt px-4 py-3 text-sm outline-none focus:border-ember" />
                      </label>
                    ))}
                  </div>
                  <label className="mt-5 block">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-smoke">PROJECT DETAILS</span>
                    <textarea rows={4} className="mt-2 w-full resize-none border border-line bg-basalt px-4 py-3 text-sm outline-none focus:border-ember" />
                  </label>
                  <button className="mt-6 w-full bg-ember px-7 py-3.5 font-mono text-sm font-semibold text-basalt transition-colors hover:bg-magma">
                    REQUEST FREE CONSULTATION →
                  </button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-line bg-ash">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-4 px-6 py-10 font-mono text-[11px] tracking-wider text-smoke sm:flex-row sm:items-center">
          <span className="flex items-center gap-2.5">
            <img src="/logo-mark.png" alt="" className="h-8 w-8" />
            <img src="/logo-wordmark.png" alt="LAHARIS" className="h-4 w-auto" />
          </span>
          <span>© 2026 LAHARIS. ALL RIGHTS RESERVED.</span>
          <span className="flex gap-5">
            <a href="#" className="hover:text-bone">TERMS</a>
            <a href="#" className="hover:text-bone">PRIVACY</a>
            <a href="#" className="hover:text-bone">QUALITY</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
