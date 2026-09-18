import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Music2, Search, Users } from "lucide-react";
import { useMemo, useState } from "react";
import { AppShell } from "@/components/app-shell";
import { defaultGroup, defaultTrack, useApp } from "@/lib/app-context";
import { groups, tracks, type Track } from "@/lib/music-data";

export const Route = createFileRoute("/poster")({
  head: () => ({ meta: [
    { title: "Poster mon son — SonDuJour" },
    { name: "description", content: "Choisissez le morceau qui raconte votre journée." },
    { property: "og:title", content: "Poster mon son — SonDuJour" },
    { property: "og:description", content: "Choisissez le morceau qui raconte votre journée." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: PosterPage,
});

function PosterPage() {
  const navigate = useNavigate();
  const { postTrack, hasPosted } = useApp();
  const [selected, setSelected] = useState<Track>(defaultTrack);
  const [group, setGroup] = useState(defaultGroup);
  const [query, setQuery] = useState("");
  const [note, setNote] = useState("");
  const filtered = useMemo(() => tracks.filter((track) => `${track.title} ${track.artist}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <AppShell>
    <section className="animate-rise">
      <p className="eyebrow">Vendredi 18 septembre</p>
      <h1 className="page-title">Ton son du jour</h1>
      <p className="page-copy">Un seul morceau. Choisis celui qui te ressemble aujourd’hui.</p>
    </section>

    <div className="relative mt-6">
      <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
      <input value={query} onChange={(event) => setQuery(event.target.value)} className="field pl-12" placeholder="Titre, artiste…" aria-label="Rechercher un morceau" />
    </div>

    {query && <div className="mt-3 overflow-hidden rounded-card border border-border bg-card">
      {filtered.map((track) => <button key={track.id} onClick={() => { setSelected(track); setQuery(""); }} className="flex w-full items-center gap-3 border-b border-border/60 p-3 text-left last:border-0 hover:bg-secondary">
        <img src={track.cover} alt="" className="size-12 rounded-md object-cover" width={96} height={96} loading="lazy" />
        <span className="min-w-0 flex-1"><strong className="block truncate text-sm">{track.title}</strong><span className="block truncate text-xs text-muted-foreground">{track.artist}</span></span>
      </button>)}
      {filtered.length === 0 && <p className="p-4 text-sm text-muted-foreground">Aucun morceau trouvé.</p>}
    </div>}

    <section className="mt-7 text-center">
      <div className="relative mx-auto aspect-square w-[min(72vw,19rem)]">
        <div className="absolute inset-3 rounded-[2rem] bg-brand-gradient opacity-50 blur-2xl" />
        <img src={selected.cover} alt={`Pochette de ${selected.title}`} className="relative size-full rounded-[1.75rem] object-cover shadow-cover" width={768} height={768} />
        <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-full bg-foreground text-background"><Music2 className="size-5" /></span>
      </div>
      <h2 className="mt-5 font-display text-2xl font-bold">{selected.title}</h2>
      <p className="mt-1 text-muted-foreground">{selected.artist}</p>
    </section>

    <p className="mt-7 text-sm font-semibold">Pour quel groupe ?</p>
    <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Choisir le groupe">
      {groups.map((item) => {
        const active = item.name === group;
        return <button key={item.name} role="radio" aria-checked={active} onClick={() => setGroup(item.name)}
          className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${active ? "border-accent bg-accent/15 text-accent-foreground" : "border-border bg-card text-muted-foreground hover:bg-secondary"}`}>
          <img src={item.cover} alt="" className="size-6 rounded-full object-cover" width={48} height={48} loading="lazy" />
          <span className="truncate">{item.name}</span>
          {active ? <Check className="size-3.5 text-accent" /> : <Users className="size-3.5" />}
        </button>;
      })}
    </div>

    <label className="mt-7 block text-sm font-semibold" htmlFor="note">Pourquoi ce titre aujourd’hui ? <span className="font-normal text-muted-foreground">(optionnel)</span></label>
    <textarea id="note" value={note} onChange={(event) => setNote(event.target.value)} className="field mt-2 min-h-24 resize-none py-3" maxLength={120} placeholder="Quelques mots pour tes amis…" />
    <button onClick={() => { postTrack(selected, group); void navigate({ to: "/feed" }); }} className="primary-action mt-5">
      {hasPosted ? <Check className="size-5" /> : <Music2 className="size-5" />} {hasPosted ? "Changer mon son" : "Poster mon son"}
    </button>
  </AppShell>;
}