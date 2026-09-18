# Plan — SonDuJour

## Expérience à construire
- Remplacer l’écran vide par une application mobile-first sombre, chaleureuse et musicale.
- Créer quatre écrans accessibles depuis une barre de navigation fixe : Accueil, Poster, Feed et Frise.
- Ajouter des données de démonstration réalistes pour des groupes d’amis et leurs morceaux du jour.

## Écrans et interactions
- **Accueil** : groupes avec photo, membres et statut du jour, plus une action pour créer ou rejoindre un groupe.
- **Poster** : recherche filtrable, sélection d’un titre, message optionnel et confirmation de publication.
- **Feed** : état verrouillé avant publication, puis liste sociale avec réactions emoji après publication.
- **Frise** : calendrier mensuel illustré ; toucher une journée passée ouvre les morceaux associés.
- La publication d’un morceau débloque immédiatement le feed dans la démonstration.

## Direction visuelle
- Fond nuit presque noir, surfaces contrastées et accents violet/orange en dégradé.
- Typographie ronde et contemporaine, pochettes musicales expressives, coins arrondis et détails lumineux mesurés.
- Mise en page optimisée téléphone, restant propre et centrée sur grand écran.

## Détails techniques
- Garder l’application entièrement côté interface avec un état de démonstration en mémoire.
- Utiliser les composants et icônes déjà compatibles avec le projet ; ajouter les visuels nécessaires dans les ressources du projet.
- Définir toutes les couleurs, ombres et polices via le système visuel global.
- Ajouter des métadonnées sociales et descriptives propres à SonDuJour.
- Vérifier le rendu et les interactions aux formats mobile et bureau.
