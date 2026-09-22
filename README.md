# ComptaGuide — Arbitrages à choix multiples, version 2

18 questions en trois sections, fondées sur les seuls arbitrages et modalités encore ouverts après le premier questionnaire. Aucune réponse personnelle du premier tour n’est incluse dans le code.

- Boutons radio : un choix ; cases à cocher : plusieurs choix.
- « Autre » et champ de précision ; précision requise pour « Autre » et les options qui demandent explicitement noms, délai ou seuil.
- Réponses partielles autorisées. Un choix « Aucune unanimité » exclut les autres choix du même groupe.
- Export/reprise JSON version 2, comparaison des trois fichiers, impression PDF et brouillon local facultatif.
- Les anciens exports et brouillons version 1 ne sont ni écrasés ni convertis ; leur import dans cette nouvelle grille est refusé explicitement.

## Utilisation

Ouvrir index.html, sélectionner son nom, répondre puis télécharger le fichier et le transmettre par un canal privé. Pour consulter les trois contributions, importer leurs fichiers dans « Réunir les réponses ». Aucun envoi ni stockage distant automatique. Les propositions ne sont pas des résolutions signées.

## Publication

Fichiers actifs : index.html, questions.js, app.js, style.css, logo.png et favicon.png. GitHub Pages peut servir ce dossier à la racine ou dans un sous-chemin. Ne jamais y ajouter les réponses privées ni les pièces du dossier.

Le chantier Supabase reste arrêté : config.js, shared.js et supabase/ sont des archives techniques, non chargées par cette version et non compatibles avec son schéma sans adaptation explicite.

## Maintenance

Questions et options : questions.js. Données : réponses structurées {choices: [...], other: "..."}, version 2. Brouillons : clé locale comptaguide-arbitrages-v2. Les imports sont validés et affichés en texte brut.
