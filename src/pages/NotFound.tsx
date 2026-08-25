import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary p-4">
      <SEOHead
        title="Page Not Found (404) | Infodot"
        description="The page you're looking for doesn't exist. Return to Infodot's homepage to explore our managed IT, security and compliance services for regulated industries."
      />
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)] animate-slide-up">
        <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary">Error</span>
        <h1 className="mt-4 font-display text-6xl font-bold leading-[1.08]">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Oops! Page not found</p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground press hover:bg-accent/90"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
