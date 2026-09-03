import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { VERSIONS } from "../versions/meta";
import V1Volcanic from "../versions/V1Volcanic";
import V2Glass from "../versions/V2Glass";
import V3Brutalist from "../versions/V3Brutalist";
import V4Warm from "../versions/V4Warm";
import V5Kinetic from "../versions/V5Kinetic";

const COMPONENTS: Record<string, () => React.ReactElement> = {
  "molten-basalt": V1Volcanic,
  "glass-neu": V2Glass,
  brutalist: V3Brutalist,
  "warm-minimal": V4Warm,
  kinetic: V5Kinetic,
};

export default function VersionPage() {
  const { slug = "" } = useParams();
  const navigate = useNavigate();
  const Current = COMPONENTS[slug];
  const idx = VERSIONS.findIndex((v) => v.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!Current || idx === -1) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 bg-basalt font-mono text-bone">
        <p className="text-smoke">Version not found.</p>
        <Link to="/" className="bg-ember px-5 py-2 text-sm text-basalt">
          ← Back to showcase
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-full">
      <Current />

      {/* floating controls (temporarily hidden for screenshot) */}
      {false && (
        <div className="fixed bottom-5 left-1/2 z-[100] -translate-x-1/2">
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-black/75 p-1.5 shadow-2xl backdrop-blur-xl">
            <Link
              to="/"
              className="rounded-full px-3 py-2 font-mono text-[11px] tracking-wide text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              title="Back to showcase"
            >
              ⌂ ALL
            </Link>
            <span className="mx-0.5 h-4 w-px bg-white/15" />
            {VERSIONS.map((v, i) => (
              <button
                key={v.slug}
                onClick={() => navigate(`/v/${v.slug}`)}
                title={v.name}
                className={`rounded-full px-3.5 py-2 font-mono text-xs tracking-wide transition-colors ${
                  i === idx ? "text-black" : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
                style={i === idx ? { background: v.accent } : undefined}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
