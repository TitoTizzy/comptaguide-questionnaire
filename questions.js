'use strict';
const SECTIONS=[
  [
    "Arbitrages de gouvernance",
    "Choisissez les modalités qui permettront de finaliser les décisions encore ouvertes.",
    [
      [
        "direction_v2",
        "Pour départager les propositions de direction, quelle organisation retenir ?",
        "La composition du conseil est déjà acquise ; seule la répartition des fonctions reste ouverte.",
        [
          "Myrtho cumule la présidence et la direction générale",
          "Séparer la présidence et la direction générale — préciser les deux titulaires"
        ],
        false,
        true
      ],
      [
        "signature_v2",
        "Quel dispositif de signature départage les propositions reçues ?",
        "Distinguer représentation de la société et approbation préalable des dépenses.",
        [
          "Le PDG signe les contrats ; le responsable RH signe les actes de recrutement dans une délégation écrite",
          "Chaque administrateur peut signer dans une délégation écrite définissant son périmètre",
          "Deux administrateurs doivent signer conjointement"
        ],
        false,
        true
      ],
      [
        "banque_v2",
        "Quel dispositif bancaire commun adopter ?",
        "Les propositions de double signature restent à harmoniser.",
        [
          "Deux signatures parmi les trois administrateurs pour toute sortie de fonds",
          "Signature conjointe du directeur financier et du comptable pour toute sortie de fonds — préciser les titulaires",
          "Deux signatures seulement au-delà d’un seuil — préciser le seuil, la devise et le pouvoir sous ce seuil"
        ],
        false,
        true
      ],
      [
        "circuit_v2",
        "Qui valide une réquisition avant tout engagement de dépense ?",
        "Le principe d’absence de dépense libre individuelle est déjà retenu.",
        [
          "Les trois administrateurs pour chaque dépense",
          "Deux administrateurs pour chaque dépense",
          "Un responsable dans un budget approuvé collectivement ; le conseil pour toute dépense hors budget"
        ],
        false,
        true
      ],
      [
        "majorite_v2",
        "Quelle règle de vote proposer pour les décisions ordinaires du conseil ?",
        "Cette question concerne le conseil, pas les votes attachés aux actions.",
        [
          "Au moins deux voix favorables sur les trois administrateurs",
          "L’accord des trois administrateurs"
        ],
        false,
        true
      ],
      [
        "reservees_v2",
        "Parmi ces décisions, lesquelles réserver à l’accord des trois ?",
        "Plusieurs choix possibles ; la portée juridique de chaque résolution sera vérifiée.",
        [
          "Modification des activités",
          "Investissement hors budget au-delà d’un seuil — préciser le seuil et la devise",
          "Emprunt, caution ou garantie",
          "Achat ou vente d’un immeuble",
          "Rémunération d’un dirigeant",
          "Politique de distribution des bénéfices",
          "Aucune unanimité supplémentaire — appliquer les majorités requises"
        ],
        true,
        true
      ],
      [
        "blocage_v2",
        "Si une décision exigeant l’unanimité reste bloquée, quelle étape prévoir avant une nouvelle décision ?",
        "Le recours au vote a déjà été proposé ; il faut compléter le traitement d’un blocage.",
        [
          "Nouvelle réunion après un délai de réflexion — préciser le délai",
          "Médiation par un tiers choisi ensemble",
          "Avis consultatif de l’avocat puis nouvelle réunion"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "Cessions et continuité",
    "Préciser les mécanismes, sans redemander les principes déjà confirmés.",
    [
      [
        "tiers_v2",
        "Quel arbitrage entre vente libre et accord préalable pour l’entrée d’un tiers ?",
        "La priorité d’achat des actionnaires actuels n’est pas redemandée.",
        [
          "Cession libre à un tiers, avec notification aux autres actionnaires",
          "Accord préalable des deux autres actionnaires",
          "Accord préalable selon une majorité à définir — préciser laquelle"
        ],
        false,
        true
      ],
      [
        "expert_v2",
        "Qui établira la valeur de l’entreprise utilisée pour calculer le prix d’une action ?",
        "Le principe valeur de l’entreprise divisée par le nombre d’actions est déjà proposé.",
        [
          "Un expert indépendant désigné ensemble",
          "Un expert indépendant uniquement en cas de désaccord sur une évaluation interne",
          "Deux experts, un pour chaque partie, avec un troisième en cas de désaccord"
        ],
        false,
        true
      ],
      [
        "succession_v2",
        "Quels éléments confier à l’avocat pour organiser la succession ?",
        "Plusieurs choix possibles. Ces souhaits ne valent pas attribution automatique d’un siège ou validation successorale.",
        [
          "Représentation commune des héritiers pour l’exercice des droits attachés aux actions",
          "Procédure distincte de nomination du remplaçant au conseil",
          "Possibilité de rachat négocié des actions transmises",
          "Continuité de la gestion pendant le règlement de la succession"
        ],
        true,
        true
      ],
      [
        "incapacite_v2",
        "Quel mécanisme de gestion temporaire examiner en cas d’incapacité d’un dirigeant ?",
        "Les droits sur les actions restent distincts des fonctions de direction.",
        [
          "Délégation temporaire à un autre administrateur désigné par le conseil",
          "Désignation d’un remplaçant temporaire selon une procédure à faire valider",
          "Traitement au cas par cas par décision collective, avec avis juridique"
        ],
        false,
        true
      ],
      [
        "duree_v2",
        "Comment résoudre l’écart entre « indéterminée » et « 100 ans » ?",
        "Il s’agit de choisir une formulation cohérente, sous réserve de validation juridique.",
        [
          "Retenir une durée de 100 ans",
          "Retenir une durée indéterminée si elle est juridiquement admissible"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "Résultats et mise en œuvre",
    "Les montants, participations, activités, siège et propriétaires déjà identifiés ne sont pas redemandés.",
    [
      [
        "resultats_v2",
        "Quelle combinaison adopter pour concilier les propositions sur les bénéfices ?",
        "Toute distribution restera soumise aux comptes, à la trésorerie et aux règles applicables.",
        [
          "Réserves applicables, financement des projets approuvés, puis examen annuel d’une distribution",
          "Réserves applicables, financement des projets approuvés, puis examen semestriel après la première année si admissible",
          "Réserves applicables, puis examen annuel du solde distribuable au prorata des actions"
        ],
        false,
        true
      ],
      [
        "information_v2",
        "Quel contenu prévoir dans le dossier financier commun ?",
        "Plusieurs choix possibles. La fréquence trimestrielle est proposée dans les réponses ; les destinataires restent les trois actionnaires.",
        [
          "Bilan et compte de résultat",
          "Situation de trésorerie et rapprochements bancaires",
          "Créances clients et dettes fournisseurs",
          "Budget comparé aux réalisations",
          "Contrats, engagements et risques significatifs"
        ],
        true,
        true
      ],
      [
        "calendrier_v2",
        "Quel calendrier minimal commun adopter pour réunions et information financière ?",
        "La participation à distance est déjà souhaitée et n’est pas redemandée.",
        [
          "Réunion et dossier financier chaque trimestre",
          "Réunion mensuelle et dossier financier trimestriel",
          "Réunion et dossier financier chaque mois"
        ],
        false,
        true
      ],
      [
        "actifs_v2",
        "Quel mécanisme formaliser pour les actifs numériques déjà attribués à Myrtho ?",
        "Il s’agit du transfert des droits, pas d’une nouvelle question sur le propriétaire.",
        [
          "Cession à la société après sa constitution, selon un inventaire et un acte",
          "Licence ou mise à disposition écrite, Myrtho conservant la propriété",
          "Traitement différent selon les actifs — préciser lesquels sont cédés ou mis à disposition"
        ],
        false,
        true
      ],
      [
        "remuneration_v2",
        "Comment formaliser les conditions de rémunération auxquelles vous avez déjà fait référence ?",
        "La formule doit être identifiée dans un document précis avant adoption.",
        [
          "Annexer la formule existante après validation collective et examen juridique",
          "Adopter une décision de rémunération séparée, avec référence à la formule existante",
          "Reporter l’adoption jusqu’à présentation du document contenant la formule"
        ],
        false,
        true
      ],
      [
        "frais_v2",
        "Comment qualifier les frais de constitution financés par les recettes Lyly’s ?",
        "La source de financement est déjà indiquée ; le traitement des éventuelles avances reste à harmoniser.",
        [
          "Charges financées par les recettes affectées au projet, sans remboursement personnel demandé",
          "Remboursement uniquement des avances personnelles distinctes, justifiées et approuvées",
          "Arrêter le traitement après rapprochement des encaissements et paiements avec le comptable"
        ],
        false,
        true
      ]
    ]
  ]
];
