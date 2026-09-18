import { createFileRoute, Link } from "@tanstack/react-router";
import { LockKeyhole, Music2, Sparkles } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/app-shell";
import { useApp } from "@/lib/app-context";
import { feedPosts } from "@/lib/music-data";

export const Route = createFileRoute("/feed")({
  head: () => ({ meta: [
    { title: "Le feed du jour — SonDuJour" },
    { name: "description", content: "Découvrez les morceaux choisis aujourd'hui par votre groupe." },
    { property: "og:title", content: "Le feed du jour — SonDuJour" },
    { property: "og:description", content: "Découvrez les morceaux choisis aujourd'hui par votre groupe." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: FeedPage,
});

function FeedPage() {
  const { hasPosted } = useApp();
  return <AppShell>
    <div className="flex items-end justify-between gap-3">
      <div className="min-w-0"><p className="eyebrow">Les Inséparables</p><h1 className="page-title">Aujourd’hui</h1></div>
      <span className="shrink-0 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">{hasPosted ? "4 / 8 sons" : "3 / 8 sons"}</span>
    </div>
    {!hasPosted ? <LockedFeed /> : <UnlockedFeed />}
  </AppShell>;
}

function LockedFeed() {
  return <section className="flex min-h-[65vh] flex-col items-center justify-center text-center animate-rise">
    <div className="relative grid size-40 place-items-center">
      <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-30 blur-2xl" />
      <div className="relative grid size-28 place-items-center rounded-full border border-accent/40 bg-card shadow-cover">
        <LockKeyhole className="size-11 text-accent" />
        <span className="absolute -right-2 top-1 grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Music2 className="size-4" /></span>
      </div>
    </div>
    <h2 className="mt-3 font-display text-2xl font-bold">À toi de jouer</h2>
    <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Poste ton son pour découvrir ceux du groupe. Pas de spectateurs ici.</p>
    <Link to="/poster" className="primary-action mt-7 max-w-xs"><Sparkles className="size-5" /> Choisir mon son</Link>
  </section>;
}

function UnlockedFeed() {
  const [reactions, setReactions] = useState<Record<string, string>>({});
  return <div className="mt-6 space-y-5 animate-rise">
    <div className="rounded-card border border-accent/30 bg-accent/10 p-4 text-sm text-accent-foreground"><Sparkles className="mr-2 inline size-4 text-accent" /> Le feed est débloqué — bonne écoute !</div>
    {feedPosts.map((post) => <article key={post.name} className="overflow-hidden rounded-card border border-border bg-card">
      <div className="flex items-center gap-3 p-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-bold">{post.initials}</span>
        <div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{post.name}</p><p className="text-xs text-muted-foreground">à {post.time}</p></div>
        <Music2 className="size-4 text-muted-foreground" />
      </div>
      <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 px-4 pb-4">
        <img src={post.track.cover} alt={`Pochette de ${post.track.title}`} className="aspect-square w-full rounded-lg object-cover" width={240} height={240} loading="lazy" />
        <div className="min-w-0 self-center"><h2 className="truncate font-display text-lg font-bold">{post.track.title}</h2><p className="truncate text-sm text-muted-foreground">{post.track.artist}</p><p className="mt-3 line-clamp-2 text-sm leading-5 text-card-foreground/90">« {post.note} »</p></div>
      </div>
      <div className="flex gap-2 border-t border-border/70 px-4 py-3">
        {["🔥", "💜", "🎧"].map((emoji) => <button key={emoji} onClick={() => setReactions((current) => ({ ...current, [post.name]: emoji }))} aria-label={`Réagir avec ${emoji}`} className={`reaction ${reactions[post.name] === emoji ? "reaction-active" : ""}`}>{emoji}</button>)}
      </div>
    </article>)}
  </div>;
}