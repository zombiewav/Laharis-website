import { Link } from "react-router";
import { VERSIONS } from "../versions/meta";

const MAYON =
  "https://images.unsplash.com/photo-1691349810668-21955efeae93?w=1600&h=1000&fit=crop&auto=format";

export default function Gallery() {
  return (
    <div className="min-h-full bg-basalt font-sans text-bone">
      {/* backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img src={MAYON} alt="" className="h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-basalt/70 via-basalt/90 to-basalt" />
      </div>

      {/* hero */}
      <header className="mx-auto max-w-[1240px] px-6 pt-20 pb-14 lg:pt-28">
        <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.28em] uppercase text-ember">
          <span className="ember-dot h-1.5 w-1.5 rounded-full bg-ember" />
          LAHARIS · Design Showcase
        </div>
        <h1 className="mt-6 max-w-4xl font-mono text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]">
          Five directions.
          <br />
          <span className="text-ember">One</span> foundation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
          Five complete website concepts for LAHARIS — the Legazpi firm turning
          Mayon&rsquo;s volcanic ash into resilient structures. Each is a full,
          scrollable site. Open one, explore it, and pick the direction that feels
          right.
        </p>
      </header>

      {/* grid of versions */}
      <main className="mx-auto max-w-[1240px] px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {VERSIONS.map((v, i) => (
            <Link
              key={v.slug}
              to={`/v/${v.slug}`}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-ashcard p-8 transition-all hover:-translate-y-1 hover:border-ember/60 ${
                i === 0 ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-10" : ""
              }`}
            >
              {/* accent glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
                style={{ background: v.accent }}
              />
              <div className={`relative ${i === 0 ? "lg:flex-1" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-5xl font-extrabold text-line transition-colors group-hover:text-ember/40">
                    {v.id}
                  </span>
                  <div>
                    <div className="font-mono text-xl font-bold text-bone">{v.name}</div>
                    <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-smoke">
                      {v.tag}
                    </div>
                  </div>
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-smoke">{v.desc}</p>
              </div>

              {/* swatch + cta */}
              <div className={`relative mt-6 flex items-center justify-between ${i === 0 ? "lg:mt-0 lg:w-72 lg:flex-col lg:items-start lg:gap-6" : ""}`}>
                <div
                  className="h-14 w-full max-w-[10rem] rounded-lg border border-white/10"
                  style={{
                    background: `linear-gradient(120deg, ${v.bg}, ${v.accent})`,
                  }}
                />
                <span className="ml-4 flex items-center gap-2 font-mono text-xs tracking-wider text-magma lg:ml-0">
                  VIEW SITE
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 px-6 py-8 font-mono text-[11px] tracking-wider text-smoke sm:flex-row sm:items-center">
          <span className="text-lg font-extrabold text-bone">LAHARIS</span>
          <span>© 2026 LAHARIS · DESIGN SHOWCASE · LEGAZPI, ALBAY</span>
        </div>
      </footer>
    </div>
  );
}
