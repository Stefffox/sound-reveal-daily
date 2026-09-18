# Daily Vibe Tunes

Application mobile "SonDuJour" : partage musical quotidien entre amis.

Contexte : app destinée à des groupes fermés de 5 à 15 amis. Chaque jour,

chaque membre partage UN morceau qui représente sa journée ou son humeur.

Mécanique clé (effet "reveal", façon BeReal) : un utilisateur ne voit pas

les morceaux postés par les autres tant qu'il n'a pas posté le sien.

Écrans à générer :

1. Accueil / liste des groupes

   - Liste des groupes de l'utilisateur (nom, photo de groupe, nombre de

     membres, indicateur "posté aujourd'hui" ou non)

   - Bouton pour rejoindre/créer un groupe

2. Poster mon son du jour

   - Barre de recherche de morceau (résultats avec pochette, titre, artiste)

   - Morceau sélectionné affiché en grand (pochette, titre, artiste)

   - Champ texte optionnel : "Pourquoi ce titre aujourd'hui ?"

   - Bouton "Poster"

3. Feed du jour

   - État verrouillé : message + illustration si l'utilisateur n'a pas

     encore posté ("Poste ton son pour voir ceux du groupe")

   - État débloqué : liste des morceaux du groupe postés aujourd'hui,

     chacun avec avatar de l'ami, pochette, titre/artiste, texte de

     contexte, réactions emoji rapides

4. Frise / calendrier du mois

   - Vue mensuelle en grille, une vignette pochette par jour

   - Clic sur un jour passé : réouvre les morceaux postés ce jour-là

Style visuel : mobile first, ambiance chaleureuse et musicale, palette

sombre avec accents colorés en dégradé (violet/orange par exemple, dans

l'esprit Spotify Wrapped), typographie ronde et moderne, cards à coins

arrondis, ambiance jeune/étudiante sans tomber dans l'enfantin.

Navigation : bottom bar cohérente entre les 4 écrans (Accueil, Poster,

Feed, Frise).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sound-reveal-daily.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d56c30aa-19ff-4c81-a533-fbda19868824).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
