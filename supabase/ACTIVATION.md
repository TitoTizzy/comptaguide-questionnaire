# Activer les réponses partagées

Le code est prêt à connecter ; sans projet configuré, le mode fichiers reste actif. Aucune base n'est créée par le simple push GitHub.

1. Choisir un projet Supabase. Exécuter `schema.sql` une fois dans le SQL Editor. Les tables préfixées `cg_questionnaire_` sont distinctes de celles de la plateforme. Le script ne modifie aucune table existante.
2. Dans Authentication, créer les trois comptes avec leurs courriels réels et mots de passe individuels. Transmettre les accès à chacun par un canal privé ; ne jamais les mettre dans le dépôt. Il n'y a pas d'inscription publique dans l'application. Pour un mot de passe oublié, l'administrateur doit organiser la réinitialisation dans Supabase.
3. Relever leurs UUID dans Authentication et exécuter dans le SQL Editor, en remplaçant les valeurs (ne pas enregistrer les valeurs réelles dans GitHub) :

```sql
insert into public.cg_questionnaire_members(user_id,person) values
 ('UUID_COMPTE_MYRTHO_A_REMPLACER','myrtho'),
 ('UUID_COMPTE_CLUVENS_A_REMPLACER','cluvens'),
 ('UUID_COMPTE_WILBERT_A_REMPLACER','wilbert');
```

4. Renseigner `config.js` avec l'URL `https://<projet>.supabase.co` et la clé **publishable** ou l'ancienne clé **anon**. Ce sont les paramètres publics destinés au navigateur. Ne jamais fournir une clé `service_role`, `sb_secret_...`, un mot de passe de base de données ou un jeton administrateur.
5. Publier la configuration sur GitHub. Chaque actionnaire se connecte, remplit son propre questionnaire et clique « Partager mes réponses ». La synthèse est accessible aux trois comptes ; elle se recharge à son ouverture et via « Actualiser ». Pas de synchronisation en direct ni de partage automatique des brouillons.

## Stockage et droits

- Réponses partagées : base Postgres du projet Supabase choisi. Ne sont pas publiques sur GitHub.
- Membres : chaque compte lit sa propre affectation. Les trois membres peuvent lire les trois contributions. Un compte connecté non inscrit dans la table des membres ne peut pas lire les réponses.
- Écriture : uniquement par une fonction qui déduit l'auteur du compte connecté, jamais d'un nom envoyé par le navigateur. Aucune écriture directe dans les tables n'est autorisée aux clients.
- Conflits : un numéro de version empêche une ancienne session d'écraser silencieusement une publication plus récente. Télécharger son brouillon avant de reprendre la dernière version en cas de conflit.
- Sessions : jetons uniquement en mémoire, reconnexion après rechargement. Brouillons locaux facultatifs ; déconnexion efface les brouillons locaux de cette application. Les fichiers téléchargés restent sur l'appareil.
- Toutes les réponses publiées, y compris la fiche personnelle si remplie, sont visibles aux trois membres. Les pièces d'identité doivent être transmises séparément.

## Vérification avant utilisation réelle

Avec des données fictives : connecter chacun, publier une contribution, vérifier sa visibilité depuis les deux autres comptes ; vérifier qu'un compte extérieur et un visiteur déconnecté n'ont aucun accès via l'API. Tester aussi la modification, un conflit entre deux sessions et une panne réseau. Le code doit être testé sur le projet réel après installation du schéma : les tests simulés du navigateur ne prouvent pas les droits de la base.

Sources : https://supabase.com/docs/guides/database/postgres/row-level-security et https://supabase.com/docs/reference/javascript/auth-signinwithpassword
