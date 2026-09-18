import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Plus, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { useApp } from "@/lib/app-context";
import { groups } from "@/lib/music-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SonDuJour — La journée de vos amis en musique" },
    { name: "description", content: "Partagez chaque jour un morceau avec vos groupes d'amis." },
    { property: "og:title", content: "SonDuJour — La journée de vos amis en musique" },
    { property: "og:description", content: "Partagez chaque jour un morceau avec vos groupes d'amis." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const { hasPosted } = useApp();
  return <AppShell>
    <section className="animate-rise">
      <p className="eyebrow">Vendredi 18 septembre</p>
      <h1 className="page-title">Salut Nathanaël</h1>
      <p className="page-copy">Quelle musique raconte ta journée ?</p>
    </section>

    {!hasPosted && <Link to="/poster" className="mt-7 block overflow-hidden rounded-card bg-brand-gradient p-px shadow-glow">
      <div className="flex items-center gap-4 rounded-[calc(var(--radius-card)-1px)] bg-brand-panel p-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-full bg-foreground/10 text-primary-foreground"><Plus className="size-6" /></span>
        <span className="min-w-0 flex-1"><strong className="block font-display text-base text-primary-foreground">Ton son est attendu</strong><span className="mt-0.5 block text-xs text-primary-foreground/75">Poste pour débloquer le feed</span></span>
        <ArrowRight className="size-5 shrink-0 text-primary-foreground" />
      </div>
    </Link>}

    <div className="mt-8 flex items-center justify-between"><h2 className="section-title">Tes groupes</h2><span className="text-xs font-semibold text-muted-foreground">3 groupes</span></div>
    <div className="mt-4 space-y-3">
      {groups.map((group, index) => {
        const posted = index === 0 ? hasPosted : group.posted;
        return <Link key={group.name} to={posted ? "/feed" : "/poster"} className="group-card">
          <img src={group.cover} alt="" className="size-16 shrink-0 rounded-lg object-cover" width={128} height={128} loading="lazy" />
          <span className="min-w-0 flex-1"><strong className="block truncate font-display text-base">{group.name}</strong><span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground"><Users className="size-3.5" /> {group.members} membres</span><span className={`mt-2 block text-xs font-semibold ${posted ? "text-success" : "text-accent"}`}>{posted ? "Posté aujourd’hui" : group.detail}</span></span>
          <span className={`grid size-8 shrink-0 place-items-center rounded-full ${posted ? "bg-success/15 text-success" : "bg-secondary text-muted-foreground"}`}>{posted ? <Check className="size-4" /> : <ArrowRight className="size-4" />}</span>
        </Link>;
      })}
    </div>
    <button className="secondary-action mt-5"><Plus className="size-5" /> Rejoindre ou créer un groupe</button>
  </AppShell>;
}
