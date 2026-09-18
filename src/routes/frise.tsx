import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { calendarCovers, feedPosts } from "@/lib/music-data";

export const Route = createFileRoute("/frise")({
  head: () => ({ meta: [
    { title: "Notre frise musicale — SonDuJour" },
    { name: "description", content: "Revivez chaque journée à travers les morceaux du groupe." },
    { property: "og:title", content: "Notre frise musicale — SonDuJour" },
    { property: "og:description", content: "Revivez chaque journée à travers les morceaux du groupe." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: FrisePage,
});

const weekdays = ["L", "M", "M", "J", "V", "S", "D"];

function FrisePage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  return <AppShell>
    <p className="eyebrow">Les Inséparables</p>
    <h1 className="page-title">La frise</h1>
    <p className="page-copy">Un mois raconté en musique.</p>
    <section className="mt-7">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <button className="icon-button" aria-label="Mois précédent"><ChevronLeft className="size-5" /></button>
        <h2 className="text-center font-display text-xl font-bold">Septembre 2026</h2>
        <button className="icon-button opacity-40" aria-label="Mois suivant" disabled><ChevronRight className="size-5" /></button>
      </div>
      <div className="mt-6 grid grid-cols-7 gap-1.5">
        {weekdays.map((day, index) => <span key={`${day}-${index}`} className="pb-2 text-center text-[11px] font-bold text-muted-foreground">{day}</span>)}
        <span /><span />
        {Array.from({ length: 30 }, (_, index) => index + 1).map((day) => {
          const cover = calendarCovers[day];
          const future = day > 18;
          return <button key={day} disabled={!cover || future} onClick={() => setSelectedDay(day)} className={`calendar-day ${day === 18 ? "calendar-today" : ""}`} aria-label={`${day} septembre${cover ? ", ouvrir les morceaux" : ""}`}>
            {cover && <img src={cover} alt="" className="absolute inset-0 size-full object-cover" width={120} height={120} loading="lazy" />}
            <span className={`relative z-10 grid size-5 place-items-center rounded-full text-[10px] font-bold ${cover ? "bg-nav/75 text-foreground" : "text-muted-foreground"}`}>{day}</span>
          </button>;
        })}
      </div>
    </section>
    <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-sm text-muted-foreground"><span className="size-2 rounded-full bg-accent" /> 13 jours partagés ce mois-ci</div>

    {selectedDay && <div className="fixed inset-0 z-50 flex items-end justify-center bg-overlay/70 p-0 backdrop-blur-sm" onClick={() => setSelectedDay(null)}>
      <section className="w-full max-w-md rounded-t-[2rem] border border-border bg-card p-5 pb-8 shadow-cover" onClick={(event) => event.stopPropagation()}>
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-muted" />
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div><p className="eyebrow">Souvenir musical</p><h2 className="font-display text-2xl font-bold">{selectedDay} septembre</h2></div><button className="icon-button" onClick={() => setSelectedDay(null)} aria-label="Fermer"><X className="size-5" /></button></div>
        <div className="mt-5 space-y-3">{feedPosts.slice(0, 2).map((post) => <div key={post.name} className="flex items-center gap-3 rounded-lg bg-secondary p-3"><img src={post.track.cover} alt="" className="size-14 rounded-md object-cover" width={112} height={112} loading="lazy" /><div className="min-w-0"><p className="truncate text-sm font-bold">{post.track.title}</p><p className="truncate text-xs text-muted-foreground">{post.name} · {post.track.artist}</p></div></div>)}</div>
      </section>
    </div>}
  </AppShell>;
}