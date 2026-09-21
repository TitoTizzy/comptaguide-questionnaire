# Questionnaire ComptaGuide Financials

Petite application en français, sans installation, conçue pour GitHub Pages. Six étapes, parcours par actionnaire, export/reprise JSON, impression PDF et comparaison des trois réponses.

## Utilisation

1. Chaque actionnaire sélectionne son nom et remplit les questions. Les choix déjà connus ne sont pas redemandés. Les propositions restent individuelles jusqu'à décision collective.
2. La sauvegarde locale est facultative : cocher « Conserver mes brouillons sur cet appareil » pour reprendre plus tard sur le même navigateur. Ce stockage n'est pas chiffré ; le laisser désactivé sur un appareil partagé. Sans sauvegarde, télécharger avant de quitter.
3. Cliquer « Télécharger mes réponses ». Envoyer le fichier JSON à Myrtho par un canal privé habituel. Le site n'envoie rien automatiquement.
4. Myrtho ouvre « Réunir les réponses », importe les fichiers reçus et imprime la synthèse ou l'enregistre en PDF via la boîte d'impression. La synthèse importée reste en mémoire, pas dans le dépôt ni dans le stockage local ; conserver les fichiers originaux pour la retrouver.
5. Un répondant peut réimporter son fichier dans « Reprendre un fichier » pour le compléter. Un remplacement de réponses existantes demande confirmation.

Les champs peuvent rester vides. « À discuter ensemble » permet d'indiquer un point non tranché. Aucun fichier n'est une signature, une authentification de son auteur ou une validation juridique. Aucun document d'identité n'est demandé en téléchargement.

## Mettre sur GitHub Pages

Créer un dépôt dédié, par exemple `comptaguide-questionnaire`. Y déposer uniquement le contenu de ce dossier, avec `index.html` à la racine : `app.js`, `style.css`, `favicon.png`, `logo.png`, `.nojekyll`, `.gitignore` et ce README. **Ne pas déposer le dossier financier parent, les pièces privées ou les fichiers de réponses.**

Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch → main → /(root) → Save**. Après publication, partager l'adresse affichée par GitHub Pages. Les chemins relatifs fonctionnent aussi dans un sous-chemin de dépôt. La disponibilité de Pages dépend des réglages et du forfait du compte.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

GitHub Pages sert les fichiers statiques et ne centralise pas les réponses. Cette version utilise donc des exports privés. Le site n'a ni authentification ni base de données. Les noms, répartitions, montant envisagé et questions du code seront visibles aux visiteurs du site et, si public, du dépôt. Aucun NIF, NIU, date de naissance ou courriel personnel connu n'est inclus dans le code. Aucun service tiers, traceur ou police distante n'est chargé.

## Aperçu local

Ouvrir `index.html` dans un navigateur suffit pour le questionnaire. Pour un aperçu servi : `python -m http.server 8765 --bind 127.0.0.1`, puis ouvrir http://127.0.0.1:8765. La sauvegarde dépend du navigateur et de l'origine : elle ne migre pas entre fichier local, localhost et GitHub Pages ; utiliser l'export/reprise.

## Maintenance

Les questions et les conditions par actionnaire se trouvent au début de `app.js`. Les identifiants de questions sont stables et utilisés dans les exports. Changer le schéma des fichiers nécessite de gérer la version d'import. Les réponses importées sont affichées en texte brut ; les fichiers sont validés avant reprise (application, version, actionnaire, clés, taille et types).

Capital : 832 USD est une base envisagée, non une confirmation du minimum légal ou de fonds versés. La validation reste à effectuer avec l'avocat et le notaire.

Informations financières affichées : contrat Lyly’s estimé à 2 392 USD annuels, hors honoraires du comptable agréé (détail dans l’application), honoraires d’avocat de 1 500 USD communiqués par le fondateur, autres frais de constitution à chiffrer. Ces informations seront également visibles sur le site publié.
