import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Disc3, House, Plus, Radio } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/" as const, label: "Accueil", icon: House },
  { to: "/poster" as const, label: "Poster", icon: Plus },
  { to: "/feed" as const, label: "Feed", icon: Radio },
  { to: "/frise" as const, label: "Frise", icon: CalendarDays },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto min-h-screen max-w-md overflow-hidden bg-background shadow-app">
        <header className="sticky top-0 z-30 grid grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border/60 bg-background/90 px-5 py-4 backdrop-blur-xl">
          <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="SonDuJour, accueil">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-gradient text-primary-foreground shadow-glow">
              <Disc3 className="size-5" />
            </span>
            <span className="truncate font-display text-xl font-extrabold">SonDuJour</span>
          </Link>
          <div className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground ring-2 ring-accent/60">NA</div>
        </header>
        <main className="min-h-[calc(100vh-5rem)] px-5 pb-28 pt-6">{children}</main>
        <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-border/70 bg-nav/95 px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-2xl" aria-label="Navigation principale">
          <div className="grid grid-cols-4 gap-1">
            {navItems.map(({ to, label, icon: Icon }) => {
              const active = pathname === to;
              return (
                <Link key={to} to={to} className={`nav-item ${active ? "nav-item-active" : ""}`}>
                  {label === "Poster" ? (
                    <span className="-mt-7 grid size-12 place-items-center rounded-full bg-brand-gradient text-primary-foreground shadow-glow ring-4 ring-background"><Icon className="size-6" /></span>
                  ) : <Icon className="size-5" strokeWidth={active ? 2.5 : 2} />}
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}