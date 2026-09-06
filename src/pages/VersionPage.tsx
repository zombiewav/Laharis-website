import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { COMPONENTS } from "../versions/registry";

export default function VersionPage() {
  const { slug = "" } = useParams();
  const Current = COMPONENTS[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!Current) {
    return (
      <div className="flex min-h-full flex-col items-center justify-center gap-4 bg-basalt font-mono text-bone">
        <p className="text-smoke">Version not found.</p>
        <Link to="/" className="bg-ember px-5 py-2 text-sm text-basalt">
          ← Back to home
        </Link>
      </div>
    );
  }

  return <Current />;
}
