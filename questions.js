'use strict';
const SECTIONS=[
  [
    "1. Fonctions et mandats",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "organisation",
        "Quelle organisation des fonctions de direction retenir ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Présidence et direction générale cumulées",
          "Présidence et direction générale séparées",
          "Direction générale collégiale, avec représentant désigné"
        ],
        false,
        true
      ],
      [
        "presidence",
        "Qui désigner comme premier président du conseil ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR"
        ],
        false,
        true
      ],
      [
        "dg",
        "Qui désigner comme premier directeur général si cette fonction est individuelle ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR",
          "Un professionnel extérieur recruté par le conseil",
          "Sans objet si une direction collégiale est retenue"
        ],
        false,
        true
      ],
      [
        "interim",
        "Qui organise le remplacement temporaire du directeur général ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Le conseil désigne un intérimaire à la majorité de deux",
          "Un adjoint désigné à l’avance prend le relais",
          "Rotation entre administrateurs selon un calendrier approuvé"
        ],
        false,
        true
      ],
      [
        "renouvellement",
        "Quel mode de renouvellement des mandats prévoir ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Nouvelle décision à la fin de chaque mandat",
          "Renouvellement après évaluation formelle",
          "Rotation organisée entre les trois fondateurs"
        ],
        false,
        true
      ],
      [
        "limites_mandats",
        "Quelle limite aux mandats successifs proposer ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Aucune limite spécifique",
          "Deux mandats successifs",
          "Trois mandats successifs",
          "Un mandat avant rotation"
        ],
        false,
        true
      ],
      [
        "evaluation",
        "À quelle fréquence évaluer le travail des dirigeants ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Chaque trimestre",
          "Chaque semestre",
          "Chaque année",
          "À la fin de chaque mandat"
        ],
        false,
        true
      ],
      [
        "demission",
        "Quel préavis organiser pour une démission de fonction ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Quinze jours",
          "Un mois",
          "Deux mois",
          "Trois mois",
          "Délai convenu par le conseil selon la passation"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "2. Répartition opérationnelle",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "finance_resp",
        "À qui confier la coordination financière interne ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR",
          "Un responsable extérieur supervisé par le conseil",
          "Une équipe coordonnée par le conseil"
        ],
        false,
        true
      ],
      [
        "commercial_resp",
        "À qui confier la coordination commerciale ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR",
          "Un responsable extérieur supervisé par le conseil",
          "Une équipe coordonnée par le conseil"
        ],
        false,
        true
      ],
      [
        "rh_resp",
        "À qui confier la coordination des ressources humaines ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR",
          "Un responsable extérieur supervisé par le conseil",
          "Une équipe coordonnée par le conseil"
        ],
        false,
        true
      ],
      [
        "tech_resp",
        "À qui confier la coordination des outils numériques ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Myrtho Charles",
          "Cluvens AMEDEE",
          "Wilbert CASIMIR",
          "Un responsable extérieur supervisé par le conseil",
          "Une équipe coordonnée par le conseil"
        ],
        false,
        true
      ],
      [
        "fiche_roles",
        "Comment documenter les responsabilités de chacun ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Fiches de fonction approuvées par le conseil",
          "Matrice des responsabilités par processus",
          "Délégations individuelles écrites avec objectifs",
          "Fiches de fonction et matrice des responsabilités combinées"
        ],
        false,
        true
      ],
      [
        "temps",
        "Comment organiser les engagements de travail des fondateurs ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Objectifs et livrables sans horaire imposé",
          "Disponibilités hebdomadaires convenues par écrit",
          "Contrat de travail ou de prestation adapté à chaque rôle",
          "Plan trimestriel de missions validé par le conseil"
        ],
        false,
        true
      ],
      [
        "remuneration_acte",
        "Comment formaliser la formule de rémunération déjà évoquée ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Décision séparée du conseil avec formule annexée",
          "Contrat individuel renvoyant à la formule approuvée",
          "Politique générale de rémunération annexée au règlement interne",
          "Attendre le document contenant la formule avant de l’adopter"
        ],
        false,
        true
      ],
      [
        "revision_remuneration",
        "Quand réexaminer les rémunérations ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Chaque année",
          "Chaque semestre",
          "Lors d’un changement de fonction",
          "À la demande motivée d’un administrateur",
          "À chaque renouvellement de mandat"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "3. Signatures et contrôle interne",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "contrats_sign",
        "Quel dispositif de signature des contrats appliquer après leur approbation ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Le directeur général signe dans sa délégation",
          "Tout administrateur signe dans sa délégation écrite",
          "Deux administrateurs signent conjointement",
          "Un signataire est désigné dans chaque décision d’approbation"
        ],
        false,
        true
      ],
      [
        "recrutement_sign",
        "Qui signe un recrutement déjà approuvé ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Le directeur général",
          "Le responsable RH mandaté",
          "Le directeur général et le responsable RH conjointement",
          "Le représentant désigné par le conseil"
        ],
        false,
        true
      ],
      [
        "banque_sign",
        "Quel dispositif appliquer aux sorties de fonds ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Deux signatures parmi les trois administrateurs",
          "Signature du responsable financier et d’un administrateur",
          "Signature du responsable financier et du comptable mandatés",
          "Deux signataires désignés par le conseil, avec suppléants"
        ],
        false,
        true
      ],
      [
        "banque_suppleant",
        "Comment remplacer un signataire bancaire indisponible ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Suppléant désigné à l’avance par le conseil",
          "Nouvelle délégation écrite votée par le conseil",
          "Rotation entre signataires autorisés déjà déclarés à la banque"
        ],
        false,
        true
      ],
      [
        "depense_approb",
        "Qui approuve les réquisitions de dépense ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Deux administrateurs avant chaque engagement",
          "Responsable délégué pour le budget approuvé ; conseil pour le hors budget",
          "Comité de deux responsables mandatés par le conseil",
          "Conseil lors d’une validation périodique des demandes"
        ],
        false,
        true
      ],
      [
        "urgence",
        "Quel circuit pour une dépense urgente ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Réunion ou consultation rapide de deux administrateurs avant engagement",
          "Application d’un plan d’urgence déjà approuvé collectivement",
          "Délégation d’urgence écrite limitée aux situations définies par le conseil"
        ],
        false,
        true
      ],
      [
        "justificatifs",
        "Quels justificatifs exiger dans le dossier de dépense ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Réquisition et preuve d’approbation",
          "Devis ou commande",
          "Facture",
          "Preuve de réception du bien ou service",
          "Preuve du paiement",
          "Imputation comptable et responsable du dossier"
        ],
        true,
        true
      ],
      [
        "rapprochement",
        "Qui contrôle les rapprochements bancaires ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Un administrateur différent du préparateur",
          "Un comptable extérieur",
          "Le conseil sur rapport du responsable financier",
          "Un contrôleur désigné sans pouvoir de paiement"
        ],
        false,
        true
      ],
      [
        "delegation_fin",
        "Quand faire expirer les délégations ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "À la fin du mandat du délégant",
          "Chaque année, sauf renouvellement",
          "À la fin de la mission concernée",
          "À une date précise fixée dans chaque délégation"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "4. Réunions et décisions",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "frequence",
        "Quel calendrier minimal de réunion du conseil adopter ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Mensuel",
          "Trimestriel",
          "Semestriel",
          "Mensuel au démarrage puis trimestriel"
        ],
        false,
        true
      ],
      [
        "convocation",
        "Quel délai normal de convocation prévoir ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Trois jours",
          "Sept jours",
          "Quinze jours",
          "Un mois"
        ],
        false,
        true
      ],
      [
        "canaux",
        "Quels canaux utiliser pour les convocations ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Courriel",
          "Messagerie du groupe des actionnaires",
          "Espace documentaire partagé",
          "Courrier remis avec accusé de réception"
        ],
        true,
        true
      ],
      [
        "urgence_convocation",
        "Quel délai pour une consultation urgente ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Le jour même avec notification aux trois",
          "Vingt-quatre heures",
          "Quarante-huit heures",
          "Trois jours"
        ],
        false,
        true
      ],
      [
        "ordre_jour",
        "Comment permettre l’ajout d’un point à l’ordre du jour ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Tout administrateur peut demander un ajout avant la réunion",
          "Ajouts centralisés par le président jusqu’à la veille",
          "Ajouts pendant la réunion si deux administrateurs les acceptent"
        ],
        false,
        true
      ],
      [
        "consultation_ecrite",
        "Pour quels sujets utiliser une consultation écrite plutôt qu’une réunion ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Décisions courantes",
          "Approbation de contrats déjà examinés",
          "Dépenses hors budget",
          "Désignation d’un intérimaire",
          "Tous les sujets pour lesquels les règles applicables le permettent"
        ],
        true,
        true
      ],
      [
        "pv_redacteur",
        "Qui rédige les procès-verbaux ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Le secrétaire désigné par le conseil",
          "Un administrateur à tour de rôle",
          "Le coordinateur administratif",
          "Un professionnel extérieur mandaté"
        ],
        false,
        true
      ],
      [
        "pv_delai",
        "Dans quel délai diffuser le projet de procès-verbal ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Deux jours ouvrés",
          "Cinq jours ouvrés",
          "Sept jours",
          "Quinze jours"
        ],
        false,
        true
      ],
      [
        "egalite",
        "Si aucune option ne réunit deux voix, quelle suite organiser ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Second tour entre les deux options les plus soutenues",
          "Discussion de clarification puis nouveau vote",
          "Proposition de compromis puis nouveau vote",
          "Avis consultatif externe puis nouveau vote"
        ],
        false,
        true
      ],
      [
        "conflit_interet",
        "Quels mécanismes proposer pour les conflits d’intérêts ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Déclaration avant toute discussion",
          "Inscription au registre des intérêts",
          "Avis externe pour une opération impliquant un dirigeant",
          "Communication des liens avec fournisseurs et clients",
          "Procédure de participation au vote à faire valider juridiquement"
        ],
        true,
        true
      ]
    ]
  ],
  [
    "5. Information et résultats",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "rapports_freq",
        "Quel calendrier commun de transmission financière retenir ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Mensuel",
          "Trimestriel",
          "Mensuel pour la trésorerie et trimestriel pour les comptes",
          "Semestriel avec alerte immédiate en cas de difficulté"
        ],
        false,
        true
      ],
      [
        "rapports_contenu",
        "Quels documents inclure dans le dossier partagé ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Bilan et compte de résultat",
          "Trésorerie et rapprochements bancaires",
          "Créances et dettes par échéance",
          "Budget comparé aux réalisations",
          "Engagements contractuels",
          "Indicateurs commerciaux",
          "Risques et incidents"
        ],
        true,
        true
      ],
      [
        "acces_documents",
        "Comment organiser l’accès aux documents sociaux ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Dossier privé partagé accessible aux trois",
          "Espace sécurisé avec comptes individuels et journal des accès",
          "Transmission périodique avec accès sur demande aux pièces",
          "Dossier partagé et copies de sauvegarde remises périodiquement"
        ],
        false,
        true
      ],
      [
        "benefices_cycle",
        "Quand examiner une distribution de bénéfices admissible ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Annuellement après examen des comptes",
          "Semestriellement après la première année si admissible",
          "Selon les besoins et résultats, sur décision du conseil compétent",
          "Priorité à la croissance initiale puis examen annuel"
        ],
        false,
        true
      ],
      [
        "priorites_resultat",
        "Quels objectifs intégrer à la politique d’affectation du résultat ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Réserves requises par les textes applicables",
          "Réserve de précaution",
          "Financement des projets approuvés",
          "Renforcement de la trésorerie",
          "Distribution du solde disponible selon les droits des actions"
        ],
        true,
        true
      ],
      [
        "budget_cycle",
        "Comment organiser le budget ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Budget annuel avec suivi trimestriel",
          "Budget annuel avec révision semestrielle",
          "Budget glissant actualisé chaque trimestre",
          "Budget par projet avec consolidation annuelle"
        ],
        false,
        true
      ],
      [
        "frais_qualif",
        "Quel traitement proposer pour les frais initiaux financés par les recettes existantes ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Aucune créance personnelle sans avance personnelle distincte et prouvée",
          "Remboursement des avances personnelles documentées et approuvées",
          "Affectation après rapprochement comptable des encaissements et paiements"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "6. Actions et cessions",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "tiers",
        "Comment départager cession libre et contrôle de l’entrée d’un tiers ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Cession libre avec notification aux autres",
          "Agrément décidé à deux voix sur trois, sans veto individuel",
          "Agrément décidé par l’organe compétent selon une procédure juridique à définir sans veto individuel"
        ],
        false,
        true
      ],
      [
        "cession_infos",
        "Quelles informations inclure dans une notification de cession ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Identité de l’acquéreur proposé",
          "Nombre et catégorie des actions",
          "Conditions de la cession",
          "Calendrier envisagé",
          "Liens éventuels de l’acquéreur avec un concurrent",
          "Engagement de confidentialité de l’acquéreur"
        ],
        true,
        true
      ],
      [
        "cession_delai",
        "Si un agrément est retenu, quel délai d’examen proposer ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Quinze jours",
          "Trente jours",
          "Quarante-cinq jours",
          "Soixante jours",
          "Sans objet en cas de cession libre"
        ],
        false,
        true
      ],
      [
        "cession_silence",
        "Si un agrément est retenu, comment traiter l’absence de réponse dans le délai ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Relance puis vote dans un délai complémentaire",
          "Agrément réputé acquis si juridiquement admissible",
          "Saisine d’un tiers facilitateur puis vote",
          "Sans objet en cas de cession libre"
        ],
        false,
        true
      ],
      [
        "expert",
        "Qui détermine la valeur de l’entreprise en cas de cession ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Expert indépendant désigné à deux voix",
          "Évaluation interne puis expert en cas de contestation",
          "Expert choisi conjointement par cédant et acquéreur",
          "Deux experts puis un tiers en cas de désaccord"
        ],
        false,
        true
      ],
      [
        "valorisation_base",
        "Quelle approche soumettre à l’expert chargé de valoriser l’entreprise ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Actif net ajusté",
          "Rentabilité et perspectives",
          "Comparables de marché",
          "Combinaison de plusieurs méthodes motivée par l’expert"
        ],
        false,
        true
      ],
      [
        "valorisation_date",
        "Quelle date de référence retenir pour l’évaluation ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Date de notification de la cession",
          "Dernière clôture avec ajustement des événements récents",
          "Date convenue entre les parties",
          "Date fixée dans la mission d’expertise"
        ],
        false,
        true
      ],
      [
        "expert_frais",
        "Comment répartir les frais d’expertise d’une cession ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "À parts égales entre vendeur et acheteur",
          "À la charge du demandeur de l’expertise",
          "À la charge de la société après approbation",
          "Selon l’accord de cession"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "7. Départ et succession",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "passation",
        "Quels éléments remettre lors d’un départ de fonction ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Dossiers et contrats en cours",
          "Accès et équipements de la société",
          "État des échéances et risques",
          "Liste des contacts professionnels",
          "Rapport de passation signé",
          "Inventaire des documents confidentiels détenus"
        ],
        true,
        true
      ],
      [
        "succession",
        "Quel mode de représentation des héritiers soumettre à l’avocat ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Représentant commun des héritiers selon une procédure validée",
          "Mandataire désigné selon les dispositions successorales applicables",
          "Convention entre héritiers accompagnée par le notaire"
        ],
        false,
        true
      ],
      [
        "siege_vacant",
        "Comment pourvoir le siège d’administrateur devenu vacant ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Nomination par l’organe compétent sur vote sans veto individuel",
          "Candidature d’un héritier examinée selon la procédure ordinaire",
          "Nomination d’un professionnel extérieur selon la procédure applicable"
        ],
        false,
        true
      ],
      [
        "rachat_deces",
        "Quelle possibilité de rachat proposer en cas de décès ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Rachat amiable facultatif entre héritiers et acquéreurs",
          "Offre de rachat systématique sans obligation de vendre",
          "Maintien des actions dans la succession sans mécanisme spécifique de rachat"
        ],
        false,
        true
      ],
      [
        "incapacite",
        "Quel dispositif temporaire pour l’incapacité d’un dirigeant ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Intérimaire désigné par le conseil à deux voix",
          "Suppléant désigné à l’avance",
          "Redistribution temporaire des missions entre les autres dirigeants"
        ],
        false,
        true
      ],
      [
        "absence_longue",
        "Quand engager un examen de remplacement temporaire pour absence prolongée non planifiée ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Après deux semaines sans continuité assurée",
          "Après un mois sans continuité assurée",
          "Après deux mois sans continuité assurée",
          "Dès qu’une fonction essentielle ne peut plus être exercée"
        ],
        false,
        true
      ],
      [
        "desaccord_mediation",
        "Quelle médiation proposer pour un différend entre actionnaires ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Médiateur professionnel indépendant",
          "Avocat choisi pour cette mission et sans conflit d’intérêts",
          "Expert du domaine concerné accepté par les parties",
          "Réunion de conciliation avant médiation externe"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "8. Actifs et confidentialité",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "actifs_mode",
        "Quel mécanisme formaliser pour les actifs numériques identifiés ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Cession après constitution suivant un inventaire",
          "Licence écrite au bénéfice de la société",
          "Cession des actifs essentiels et licence des autres, selon inventaire",
          "Acte distinct pour chaque catégorie d’actifs"
        ],
        false,
        true
      ],
      [
        "actifs_inventaire",
        "Quelles catégories couvrir dans l’inventaire des actifs ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Logos et identité visuelle",
          "Noms de domaine",
          "Code source et documentation",
          "Comptes d’hébergement et outils",
          "Bases de données avec vérification des droits",
          "Supports commerciaux et contenus",
          "Licences de tiers et restrictions"
        ],
        true,
        true
      ],
      [
        "futurs_actifs",
        "Comment organiser les droits sur les créations futures ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Clauses écrites dans chaque contrat de travail ou prestation",
          "Accord général de cession adapté aux créations concernées",
          "Licence à la société selon chaque projet",
          "Politique commune complétée par les actes nécessaires"
        ],
        false,
        true
      ],
      [
        "acces_tech",
        "Comment conserver les accès administrateurs aux outils ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Gestionnaire de mots de passe professionnel avec accès nominatifs",
          "Administrateur technique et procédure de récupération documentée",
          "Deux responsables habilités avec journalisation",
          "Gestionnaire sécurisé et deux responsables de récupération"
        ],
        false,
        true
      ],
      [
        "sauvegardes",
        "Quel rythme minimal de sauvegarde des données de travail retenir ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Quotidien",
          "Hebdomadaire",
          "Selon criticité : quotidien pour les données essentielles",
          "Automatique avec historique et copie indépendante"
        ],
        false,
        true
      ],
      [
        "confidentialite",
        "Quels engagements prévoir pour dirigeants et intervenants ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Confidentialité pendant et après la mission",
          "Accès limité aux dossiers nécessaires",
          "Restitution ou suppression des copies au départ",
          "Signalement immédiat des incidents",
          "Interdiction d’utiliser les données clients à titre personnel"
        ],
        true,
        true
      ],
      [
        "incident",
        "Qui coordonne une réponse à un incident affectant les données ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Responsable technique avec information du conseil",
          "Directeur général avec appui technique",
          "Référent désigné à l’avance dans un plan d’incident",
          "Prestataire spécialisé sous supervision du conseil"
        ],
        false,
        true
      ]
    ]
  ],
  [
    "9. Clients et développement",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "acceptation_client",
        "Quels contrôles intégrer à l’acceptation d’un client ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Identification et coordonnées du client",
          "Périmètre de mission écrit",
          "Vérification des conflits d’intérêts",
          "Disponibilité des compétences nécessaires",
          "Examen des risques de confidentialité",
          "Conditions de règlement et de fin de mission"
        ],
        true,
        true
      ],
      [
        "mission_validation",
        "Qui valide le contenu technique d’une mission avant signature ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Responsable professionnel compétent pour la mission",
          "Responsable de mission et dirigeant signataire",
          "Comité interne de revue des missions sensibles",
          "Expert extérieur si la compétence n’est pas disponible en interne"
        ],
        false,
        true
      ],
      [
        "qualite",
        "Quels contrôles de qualité mettre en place ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Relecture par une autre personne qualifiée",
          "Liste de contrôle avant remise au client",
          "Traçabilité des versions et validations",
          "Revue périodique des dossiers",
          "Suivi des réclamations et corrections"
        ],
        true,
        true
      ],
      [
        "sous_traitance",
        "Comment autoriser la sous-traitance ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Accord du conseil pour chaque sous-traitant",
          "Liste de prestataires préapprouvés et missions encadrées",
          "Délégation au responsable de mission dans une politique approuvée",
          "Accord du conseil pour les missions sensibles seulement"
        ],
        false,
        true
      ],
      [
        "nouveau_service",
        "Comment décider le lancement d’un nouveau service ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Dossier de faisabilité puis vote à deux voix",
          "Projet pilote approuvé puis bilan avant lancement",
          "Avis technique et juridique avant vote",
          "Étude de marché puis revue des compétences avant vote"
        ],
        false,
        true
      ],
      [
        "partenariat",
        "Quels éléments examiner avant un partenariat ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Objet et responsabilités",
          "Répartition des droits sur les livrables",
          "Confidentialité et données",
          "Conditions de sortie",
          "Risques de dépendance",
          "Conflits d’intérêts et réputation"
        ],
        true,
        true
      ]
    ]
  ],
  [
    "10. Mise en forme des actes",
    "Chaque choix réunissant deux actionnaires est retenu. Aucun actionnaire ne dispose d’un veto.",
    [
      [
        "duree",
        "Comment résoudre l’écart entre durée indéterminée et durée fixe ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Durée de cent ans",
          "Durée de quatre-vingt-dix-neuf ans",
          "Durée indéterminée si admissible",
          "Durée de cinquante ans avec prorogation possible"
        ],
        false,
        true
      ],
      [
        "architecture",
        "Dans quels documents répartir les décisions retenues ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Statuts pour les clauses constitutives et règlement interne pour les modalités",
          "Statuts, pacte d’actionnaires et règlement interne selon leur objet",
          "Statuts et décisions séparées de nomination et délégation"
        ],
        false,
        true
      ],
      [
        "juridique_ecart",
        "Si une décision retenue ne peut être transcrite telle quelle juridiquement, quelle procédure suivre ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Proposition conforme la plus proche puis nouveau vote à deux voix",
          "Présentation de plusieurs variantes conformes puis nouveau vote",
          "Réunion avec l’avocat suivie d’un vote documenté"
        ],
        false,
        true
      ],
      [
        "revue_projet",
        "Comment organiser la relecture du projet d’actes ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Commentaires écrits centralisés puis vote sur les points modifiés",
          "Réunion commune avec l’avocat puis relevé des modifications",
          "Relecture individuelle suivie d’une synthèse comparative"
        ],
        false,
        true
      ],
      [
        "archivage",
        "Où conserver les actes finalisés et preuves de décisions ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Dossier numérique privé partagé et originaux chez le dépositaire désigné",
          "Copies privées pour chacun et registre central",
          "Espace documentaire avec historique des versions et dépôt des originaux"
        ],
        false,
        true
      ],
      [
        "suivi_actions",
        "Comment suivre l’exécution des décisions ?",
        "Les précisions libres sont des commentaires ; pour proposer une variante à voter, choisissez « Autre ».",
        [
          "Tableau partagé avec responsable et échéance",
          "Revue à chaque réunion du conseil",
          "Compte rendu mensuel du coordinateur",
          "Tableau partagé et revue périodique du conseil"
        ],
        false,
        true
      ]
    ]
  ]
];
