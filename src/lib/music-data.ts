import solsticeCover from "@/assets/cover-solstice.jpg";
import minuitCover from "@/assets/cover-minuit.jpg";
import fleursCover from "@/assets/cover-fleurs.jpg";
import vagueCover from "@/assets/cover-vague.jpg";

export type Track = {
  id: string;
  title: string;
  artist: string;
  cover: string;
};

export const tracks: Track[] = [
  { id: "solstice", title: "Solstice", artist: "L'Impératrice", cover: solsticeCover },
  { id: "minuit", title: "Minuit sur Paris", artist: "Clara Luciani", cover: minuitCover },
  { id: "fleurs", title: "Orange Flowers", artist: "Masego", cover: fleursCover },
  { id: "vague", title: "La vague", artist: "Bon Entendeur", cover: vagueCover },
];

export const feedPosts = [
  { name: "Léa", initials: "LÉ", time: "08:42", track: tracks[1], note: "Le ciel était beaucoup trop beau ce matin 🌇" },
  { name: "Malo", initials: "MA", time: "10:17", track: tracks[2], note: "Besoin de douceur avant les partiels." },
  { name: "Inès", initials: "IN", time: "12:03", track: tracks[3], note: "En boucle dans le train vers Marseille." },
];

export const groups = [
  { name: "Les Inséparables", members: 8, cover: minuitCover, posted: false, detail: "5 sons déjà partagés" },
  { name: "Coloc du 7e", members: 5, cover: fleursCover, posted: true, detail: "Tout le monde a posté" },
  { name: "Promo 2026", members: 12, cover: vagueCover, posted: true, detail: "9 sons aujourd'hui" },
];

export const calendarCovers: Record<number, string> = {
  1: fleursCover, 2: minuitCover, 4: solsticeCover, 5: vagueCover,
  7: minuitCover, 8: fleursCover, 9: vagueCover, 11: solsticeCover,
  12: minuitCover, 14: vagueCover, 15: fleursCover, 16: solsticeCover, 17: minuitCover,
};