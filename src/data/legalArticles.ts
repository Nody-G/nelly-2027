import { LawReference } from '../types/fiscal';

export const legalReferencesDatabase: LawReference[] = [
  {
    code: 'Code Général des Impôts',
    article: 'Art. 28 & 31',
    title: 'Déduction au Régime Réel des Frais sur Revenus Fonciers (Bail Professionnel Nell\'Immo)',
    summary: 'Permet au propriétaire bailleur détenant personnellement un bien loué à sa société de déduire les intérêts du prêt bancaire et la taxe foncière.',
    fullQuote: 'Le revenu net foncier est égal à la différence entre le montant du revenu brut et le total des charges de la propriété. Les charges déductibles comprennent notamment les intérêts des dettes contractées pour la conservation, l\'acquisition, la construction, la réparation ou l\'amélioration des immeubles, ainsi que les impositions acquittées par le bailleur.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037989932',
    practicalApplication: 'Nelly signe un bail professionnel avec Nell\'Immo pour 35 m² (bureau, archives Hoguet, stationnement) à 600 €/mois (7 200 €/an). Sur sa déclaration 2044, elle déduit 28% des intérêts de son prêt de 305 000 € (~3 000 €/an) et 28% de sa taxe foncière (~532 €), réduisant son bénéfice foncier imposable à quasi 0 €.',
    urssafSafeguard: 'Exige un bail écrit, un plan métré certifié des locaux professionnels annexé, et un loyer conforme aux valeurs locatives réelles de Pélissanne (18-22 €/m² charges et parking inclus). Interdiction formelle de surévaluer le loyer sous peine de requalification en revenu distribué (Art. 109 CGI).'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 200 A',
    title: 'Prélèvement Forfaitaire Unique (PFU / Flat Tax à 30%) sur les Dividendes',
    summary: 'Imposition forfaitaire à taux unique de 30% (12,8% IR + 17,2% prélèvements sociaux) sur les dividendes de capitaux mobiliers en SASU.',
    fullQuote: 'Les revenus de capitaux mobiliers perçus par des personnes physiques fiscalement domiciliées en France sont soumis à l\'impôt sur le revenu au taux forfaitaire de 12,8 %, auquel s\'ajoutent les prélèvements sociaux au taux global de 17,2 %, soit un taux d\'imposition global de 30 % (ou 31,4 % avec la surtaxe financière). Le contribuable peut opter de manière globale et expresse pour le barème progressif de l\'impôt sur le revenu.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042911246',
    practicalApplication: 'En tant que Présidente de SASU, Nelly Fernandez ne paie AUCUNE cotisation sociale sur ses dividendes de Nell\'Immo. Elle paie 30% d\'impôt total sous Continuité/RN, contre une soumission intégrale au barème progressif de l\'IR et aux cotisations sociales (~35%) prévue sous le programme LFI/NFP.',
    urssafSafeguard: 'Ne pas confondre avec la SARL où les dividendes excédant 10% du capital social sont requalifiés en rémunération TNS (Art. L. 131-6 CSS).'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 194-II & 195',
    title: 'Quotient Familial en Garde Alternée et Majoration Parent Isolé (Case T)',
    summary: 'Règles d\'attribution des parts fiscales pour 2 enfants en garde alternée avec ou sans vie de couple.',
    fullQuote: 'En cas de résidence alternée au domicile de chacun des parents, les enfants sont réputés à la charge égale de l\'un et de l\'autre. Cette charge ouvre droit à un quart de part pour chacun des deux premiers enfants et à une demi-part pour chaque enfant à compter du troisième. Le parent vivant seul bénéficie d\'une majoration de quotient familial au titre du premier enfant à charge.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041468641',
    practicalApplication: 'Nelly a 2 filles (5 et 11 ans) en résidence alternée. Base célibataire : 1,0 part. 1re fille : 0,25 part + 0,25 part Case T (Parent Isolé vivant seul) = 0,5 part. 2e fille : 0,25 part. Total = 1,75 parts fiscales. Si Nelly vit en concubinage (sans cocher Case T), elle a 1,5 part.',
    urssafSafeguard: 'La case T ne peut être cochée que si Nelly vit effectivement seule au 1er janvier de l\'année d\'imposition (pas de concubinage notoire ni de PACS avec un tiers sous le même toit).'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 244 quater F',
    title: 'Crédit d\'Impôt Famille de 25% pour l\'Entreprise (CESU Dirigeant)',
    summary: 'Exonération totale d\'impôt et de charges sociales sur les CESU accordés par Nell\'Immo à sa dirigeante, avec 25% de crédit d\'impôt remboursé à l\'agence.',
    fullQuote: 'Les entreprises qui engagent des dépenses pour aider leurs salariés ou leurs dirigeants à financer des services à la personne bénéficient d\'un crédit d\'impôt égal à 25 % des dépenses engagées, dans la limite de 500 000 € par année civile. L\'aide est exonérée de toute cotisation sociale et d\'impôt sur le revenu.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038834927',
    practicalApplication: 'Nell\'Immo verse 2 591 € de CESU préfinancés à Nelly en 2026. L\'agence déduit 2 591 € de son résultat fiscal et reçoit un crédit d\'impôt de 647,75 € (25%). Nelly utilise ces chèques pour le ménage dans sa maison de 305k€ ou pour les cours de piano à domicile de sa fille de 11 ans sans payer 1 € d\'IR ni d\'URSSAF.',
    urssafSafeguard: 'Même sans salarié, le chef d\'entreprise peut en bénéficier si le dispositif est ouvert à tous les bénéficiaires éventuels de l\'entreprise par décision formelle inscrite au registre des décisions.'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 199 sexdecies',
    title: 'Crédit d\'Impôt de 50% sur les Dépenses d\'Aide à Domicile et Cours Particuliers',
    summary: 'Crédit d\'impôt personnel sur le reste à charge des cours de piano et aide aux devoirs dispensés au domicile de Pélissanne.',
    fullQuote: 'Ouvrent droit à un crédit d\'impôt sur le revenu les sommes payées par un contribuable domicilié en France pour l\'emploi d\'un salarié qui rend des services définis à l\'article L. 7231-1 du code du travail au domicile du contribuable.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042911364',
    practicalApplication: 'Si les cours de piano de l\'aînée sont dispensés à domicile par un intervenant agréé ou en emploi direct, la part non couverte par le CESU de Nell\'Immo donne droit à 50% de crédit d\'impôt sur l\'IR de Nelly.',
    urssafSafeguard: 'Exiger une attestation fiscale annuelle délivrée par l\'organisme agréé ou éditer les déclarations URSSAF CESU mensuelles.'
  },
  {
    code: 'Code du Travail',
    article: 'Art. L3332-2 & R3324-22',
    title: 'Déblocage Anticipé du Plan d\'Épargne d\'Entreprise (PEE) pour Achat de la Résidence Principale',
    summary: 'Permet d\'extraire de la trésorerie de Nell\'Immo abondée à 300% avec 0% d\'IR grâce à l\'acte d\'achat de la maison à 305 000 €.',
    fullQuote: 'Le jugement ou l\'acte authentique constatant l\'acquisition d\'une résidence principale autorise le déblocage anticipé des droits acquis au titre de la participation ou du plan d\'épargne d\'entreprise dans un délai de six mois suivant la réalisation de l\'événement. Les sommes débloquées sont intégralement exonérées d\'impôt sur le revenu et ne sont soumises qu\'aux prélèvements sociaux de 9,7 % sur les plus-values.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030580922',
    practicalApplication: 'Avec 1 salarié (même alternant), Nell\'Immo met en place un PEE avec un abondement maximal de 3 880 €/an exonéré d\'IS, de charges et d\'IR (seule la CSG de 9,7% s\'applique). L\'achat de la maison à 305 000 € sert de justificatif légal de déblocage pour sortir jusqu\'à 12 500 € nets d\'impôt.',
    urssafSafeguard: 'Pour le PEE, il faut impérativement au moins 1 salarié distinct du mandataire social ayant au moins 3 mois d\'ancienneté. Sinon, utiliser le PER individuel.'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 669',
    title: 'Barème Fiscal du Démembrement de Propriété (Usufruit & Nue-Propriété)',
    summary: 'Valorisation fiscale de la nue-propriété transmise aux 2 filles avant 51 ans.',
    fullQuote: 'Pour la liquidation des droits d\'enregistrement et de la taxe de publicité foncière, la valeur de la nue-propriété et de l\'usufruit est déterminée par une quotité de la valeur de la propriété entière : lorsque l\'usufruitier a moins de 51 ans révolus, la valeur de l\'usufruit est de 60 % et la valeur de la nue-propriété est de 40 %.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006310156',
    practicalApplication: 'Pour la maison de 305 000 €, la nue-propriété totale ne vaut fiscalement que 40% (122 000 €). Transmise à ses 2 filles, la valeur donnée est de 61 000 € par fille. Comme l\'abattement légal (Art. 779 CGI) est de 100 000 € par enfant, Nelly paie 0 € de droits de succession ou donation.',
    urssafSafeguard: 'Réaliser la donation par acte notarié officiel avant le 51e anniversaire de Nelly pour figer la quote-part à 40%.'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 779',
    title: 'Abattement Légal de 100 000 € par Enfant sur les Donations et Successions',
    summary: 'Exonération fiscale renouvelable tous les 15 ans pour toute donation en ligne directe aux enfants.',
    fullQuote: 'Pour la perception des droits de mutation à titre gratuit, il est effectué un abattement de 100 000 € sur la part de chacun des ascendants et sur la part de chacun des enfants vivants ou représentés. Cet abattement s\'applique pour les donations entre vifs et pour les successions, et se renouvelle tous les quinze ans.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026284643',
    practicalApplication: 'Nelly peut donner jusqu\'à 100 000 € à sa fille cadette de 5 ans et 100 000 € à son aînée de 11 ans sans payer le moindre centime d\'impôt. Le RN propose de ramener ce délai à 10 ans (au lieu de 15 ans).',
    urssafSafeguard: 'L\'acte doit être obligatoirement enregistré auprès du Service de la Publicité Foncière et de l\'Enregistrement (SPFE) pour faire courir le délai de prescription et de renouvellement.'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 39-1',
    title: 'Déduction Fiscale des Travaux d\'Aménagement et Équipements Professionnels',
    summary: 'Prise en charge intégrale par la société des factures d\'aménagement du bureau, climatisation et borne électrique.',
    fullQuote: 'Le bénéfice net est établi sous déduction de toutes charges, celles-ci comprenant notamment : 1° Les frais généraux de toute nature, les dépenses de personnel et de main-d\'œuvre, le loyer des immeubles dont l\'entreprise est locataire, et les dépenses d\'entretien et de réparation des locaux affectés à l\'exploitation.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043813337',
    practicalApplication: 'Nell\'Immo paie directement 4 500 € HT de travaux pour aménager les 35 m² de bureau/archives à Pélissanne (peinture, cloisons, climatisation réversible) et récupère 900 € de TVA à 20%.',
    urssafSafeguard: 'Les travaux doivent bénéficier exclusivement à la zone professionnelle délimitée au bail. Tout aménagement de la partie privative (cuisine, chambres) constituerait un abus de bien social.'
  },
  {
    code: 'Code Général des Impôts',
    article: 'Art. 145 & 216',
    title: 'Régime Mère-Fille : Exonération à 95% des Dividendes Remontés en Holding',
    summary: 'Permet de capitaliser les bénéfices excédentaires de Nell\'Immo dans une société holding avec seulement 5% de quote-part imposable.',
    fullQuote: 'Les produits nets des participations ouvrant droit à l\'application du régime des sociétés mères sont retranchés du bénéfice net total de la société mère, défalcation faite d\'une quote-part de frais et charges fixée à 5 % du produit total des participations.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038834771',
    practicalApplication: 'Si Nell\'Immo dégage un surplus de 10 000 € après la rémunération et le loyer de Nelly, ces fonds peuvent remonter dans une holding patrimoniale pour n\'être taxés qu\'à environ 1,25% d\'IS effectif (5% x 25%), permettant d\'acheter un studio étudiant pour ses filles.',
    urssafSafeguard: 'La holding doit détenir au moins 5% du capital de la société fille pendant au moins deux ans.'
  },
  {
    code: 'Code de la Sécurité Sociale',
    article: 'Art. L131-6',
    title: 'Assujettissement des Dividendes de SARL aux Cotisations Sociales (Le Piège Évité par la SASU)',
    summary: 'En SARL, les dividendes de gérant majoritaire dépassant 10% du capital social sont taxés à ~42% de cotisations TNS.',
    fullQuote: 'Sont intégrés dans l\'assiette des cotisations sociales des travailleurs indépendants non salariés les dividendes perçus par le travailleur indépendant, son conjoint ou le partenaire lié par un pacte civil de solidarité ou leurs enfants mineurs non émancipés, pour la part de ces revenus qui est supérieure à 10 % du capital social, des primes d\'émission et des sommes versées en compte courant détenus en toute propriété ou en usufruit.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037890696',
    practicalApplication: 'Comme le capital de Nell\'Immo est de 2 000 €, 10% ne représentent que 200 €. Si Nell\'Immo était une SARL, Nelly paierait 42% d\'URSSAF sur 29 800 € de dividendes (soit 12 500 € de charges) ! Grâce à la SASU, elle échappe à 100% à cette taxe.',
    urssafSafeguard: 'C\'est l\'atout juridique numéro 1 du choix de la SASU pour Nell\'Immo.'
  },
  {
    code: 'Code de la Sécurité Sociale',
    article: 'Art. L311-3 23°',
    title: 'Statut de Présidente de SASU : Assimilée Salariée au Régime Général',
    summary: 'Le président de SASU relève obligatoirement du régime général de la sécurité sociale des salariés pour sa rémunération.',
    fullQuote: 'Sont obligatoirement affiliées aux assurances sociales du régime général les présidents du conseil d\'administration, les directeurs généraux et les directeurs généraux délégués des sociétés anonymes et les présidents et dirigeants des sociétés par actions simplifiées.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041469032',
    practicalApplication: 'Nelly bénéficie de la même protection sociale et couverture maladie que les cadres salariés du secteur privé (régime général + retraite Agirc-Arrco), sans être soumise à l\'assurance chômage Pôle Emploi.',
    urssafSafeguard: 'Le bulletin de paie doit comporter l\'ensemble des cotisations légales salariales et patronales (~75% du net).'
  },
  {
    code: 'Code de Commerce',
    article: 'Art. L410-2',
    title: 'Pouvoir du Gouvernement de Bloquer les Prix de l\'Énergie et des Produits de Première Nécessité par Décret',
    summary: 'Base légale utilisée par LFI pour bloquer les prix de l\'électricité, du gaz, des carburants et des fournitures scolaires sans vote du Parlement.',
    fullQuote: 'Dans les secteurs ou les zones où la concurrence par les prix est limitée en raison soit de situations de monopole ou de difficultés durables d\'approvisionnement, soit de dispositions législatives ou réglementaires, un décret en Conseil d\'État peut réglementer les tarifs. Le gouvernement peut également prendre des mesures temporaires par décret en cas de hausse excessive des prix résultant d\'une situation de crise.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006424458',
    practicalApplication: 'Ce texte permet à un gouvernement LFI de bloquer les factures d\'énergie de la maison de 305k€ à Pélissanne dès l\'été 2027 sans attendre une loi de finances.',
    urssafSafeguard: 'Mesure limitée dans le temps (6 mois renouvelables) et susceptible de recours devant le Conseil d\'État si l\'indemnisation des producteurs (EDF) n\'est pas prévue.'
  },
  {
    code: 'Constitution du 4 octobre 1958',
    article: 'Article 49 alinéa 3',
    title: 'Engagement de Responsabilité du Premier Ministre sur le Vote d\'un Texte Financier',
    summary: 'Mécanisme permettant de faire adopter le budget sans vote à l\'Assemblée Nationale.',
    fullQuote: 'Le Premier ministre peut, après délibération du conseil des ministres, engager la responsabilité du Gouvernement devant l\'Assemblée nationale sur le vote d\'un projet de loi de finances ou de financement de la sécurité sociale. Dans ce cas, ce projet est considéré comme adopté, sauf si une motion de censure, déposée dans les vingt-quatre heures qui suivent, est votée dans les conditions prévues à l\'alinéa précédent.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241062',
    practicalApplication: 'Indispensable pour faire passer la réforme de l\'IR à 14 tranches ou la baisse de TVA si le gouvernement LFI ou RN ne dispose que d\'une majorité relative.',
    urssafSafeguard: 'L\'utilisation du 49.3 expose immédiatement à une motion de censure qui, si elle est votée par la majorité absolue des députés, entraîne la chute du gouvernement.'
  },
  {
    code: 'Constitution du 4 octobre 1958',
    article: 'Article 55',
    title: 'Primauté des Traités Internationaux et Conventions Fiscales sur la Loi Française',
    summary: 'Empêche l\'application unilatérale d\'un « impôt universel sur la nationalité » par la France.',
    fullQuote: 'Les traités ou accords régulièrement ratifiés ou approuvés ont, dès leur publication, une autorité supérieure à celle des lois, sous réserve, pour chaque accord ou traité, de son application par l\'autre partie.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006527533',
    practicalApplication: 'La France a signé plus de 120 conventions fiscales bilatérales basées sur la résidence fiscale. Tout citoyen français résidant à l\'étranger peut faire annuler un impôt universel français en invoquant l\'Art. 55.',
    urssafSafeguard: 'Rend le modèle américain FATCA inapplicable en France sans renégociation unanime de l\'ensemble des 120 conventions fiscales internationales.'
  },
  {
    code: 'Traité sur le Fonctionnement de l\'UE',
    article: 'Article 126 TFUE',
    title: 'Procédure pour Déficit Excessif (PDE) et Règle d\'Or des 3% du PIB',
    summary: 'Mécanisme européen de surveillance et de sanctions budgétaires imposé à la France.',
    fullQuote: 'Les États membres évitent les déficits publics excessifs. La Commission européenne examine le respect de la discipline budgétaire sur la base de deux critères : le rapport entre le déficit public prévu ou effectif et le produit intérieur brut (qui ne doit pas dépasser 3 %) et le rapport entre la dette publique et le PIB (qui ne doit pas dépasser 60 %). En cas de non-respect, le Conseil peut imposer des mesures correctives et des amendes financières.',
    officialSourceUrl: 'https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:12012E126',
    practicalApplication: 'La France étant déjà en déficit excessif (5,5% en 2024), les budgets de relance non financés de LFI ou RN déclencheraient des sanctions européennes immédiates et une flambée des taux d\'intérêt souverains (Spread OAT).',
    urssafSafeguard: 'Risque de gel des dotations de l\'UE et obligation pour la France de mettre en œuvre des coupes budgétaires d\'urgence.'
  },
  {
    code: 'Loi n° 70-9 du 2 janvier 1970',
    article: 'Loi Hoguet',
    title: 'Réglementation de l\'Activité d\'Agent Immobilier et Tenue des Registres Professionnels',
    summary: 'Impose à Nell\'Immo la détention de la carte professionnelle CPI, la garantie financière et la conservation sécurisée des mandats.',
    fullQuote: 'Les dispositions de la présente loi s\'appliquent aux personnes physiques ou morales qui, d\'une manière habituelle, se livrent ou prêtent leur concours aux opérations portant sur les biens d\'autrui et relatives à l\'achat, la vente, la recherche, l\'échange, la location ou sous-location en nu ou en meublé d\'immeubles bâtis ou non bâtis. Elles doivent justifier d\'une aptitude professionnelle, d\'une garantie financière et d\'un registre des mandats tenu sous forme reliée ou électronique infalsifiable.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000674220/',
    practicalApplication: 'Nell\'Immo dispose de la carte CPI 1310 2019 000 042 974. La loi impose à Nelly de conserver les dossiers et mandats pendant 10 ans, justifiant juridiquement les 35 m² de bureau et salle d\'archives sous-loués dans sa maison de 305k€ à Pélissanne.',
    urssafSafeguard: 'Justifie la réalité du besoin professionnel du local loué face à l\'URSSAF (espace de stockage d\'archives obligatoire non substituable par un simple meuble de salon).'
  },
  {
    code: 'Loi n° 2021-1104 du 22 août 2021',
    article: 'Loi Climat & Résilience (Art. 160)',
    title: 'Calendrier d\'Interdiction de Louer des Passoires Thermiques (DPE G, F, E)',
    summary: 'Interdiction progressive de mise en location des logements énergivores en France.',
    fullQuote: 'À compter du 1er janvier 2025 pour les logements de classe G, du 1er janvier 2028 pour les logements de classe F et du 1er janvier 2034 pour les logements de classe E, le niveau de performance énergétique minimal requis pour la décence d\'un logement loué à usage d\'habitation principale est renforcé.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043956924',
    practicalApplication: 'Ce calendrier force les propriétaires bailleurs de passoires thermiques à Pélissanne à vendre avec une décote de 10% à 15%, générant des opportunités d\'estimation et de mandats exclusifs pour Nell\'Immo. Le RN propose un moratoire de 5 ans.',
    urssafSafeguard: 'Obligation de fournir un audit énergétique complet pour tout logement classé F ou G proposé à la vente dès le compromis.'
  },
  {
    code: 'BOSS & Arrêté du 25 février 2025',
    article: 'Avantages en Nature Véhicules & Énergie',
    title: 'Réglementation des Voitures de Fonction en Leasing et Bornes de Recharge à Domicile',
    summary: 'Règles d\'évaluation des avantages en nature pour les véhicules hybrides, thermiques et 100% électriques.',
    fullQuote: 'Pour les véhicules thermiques ou hybrides mis à disposition depuis février 2025, l\'évaluation forfaitaire de l\'avantage en nature en location est portée à 50 % du coût global annuel TTC (67 % si le carburant est pris en charge). Pour les véhicules 100 % électriques satisfaisant au score environnemental, un abattement de 70 % est appliqué sur l\'avantage en nature.',
    officialSourceUrl: 'https://www.boss.gouv.fr/portail/accueil/avantages-en-nature-et-frais-pro.html',
    practicalApplication: 'Si Nell\'Immo passe son leasing sur un modèle 100% électrique éligible, l\'avantage en nature taxable de Nelly baisse de 70%, et la borne de recharge installée dans la maison de 305 000 € est payée à 100% par Nell\'Immo sans avantage en nature taxable.',
    urssafSafeguard: 'La borne doit rester la propriété de la société et être inscrite à l\'actif de Nell\'Immo si elle est amortie.'
  },
  {
    code: 'Conseil Constitutionnel',
    article: 'Décision n° 2012-662 DC',
    title: 'Plafond Constitutionnel de Non-Confiscation et Censure des Taux Marginaux Excessifs',
    summary: 'Le Conseil constitutionnel censure tout barème d\'imposition dont le taux marginal cumulé excède le seuil de confiscation (~66-70%).',
    fullQuote: 'Considérant qu\'en vertu de l\'article 13 de la Déclaration de 1789, la contribution commune doit être également répartie entre tous les citoyens, en raison de leurs facultés ; que cette exigence ne serait pas respectée si l\'impôt revêtait un caractère confiscatoire ou faisait peser sur une catégorie de contribuables une charge excessive au regard de leurs facultés contributives.',
    officialSourceUrl: 'https://www.conseil-constitutionnel.fr/decision/2012/2012662DC.htm',
    practicalApplication: 'La tranche d\'IR à 90% proposée par LFI/NFP sur les revenus supérieurs à 400 000 € encourt une inconstitutionnalité certaine dès sa transmission au Conseil constitutionnel, protégeant les cadres et entrepreneurs contre des taux marginaux confiscatoires.',
    urssafSafeguard: 'Jurisprudence constante limitant le cumul IR + prélèvements sociaux à un plafond effectif d\'environ 66% à 70% des revenus.'
  },
  {
    code: 'Cour des Comptes',
    article: 'Rapport Public 2024 / 2025',
    title: 'Alerte sur la Trajectoire des Finances Publiques et la Soutenabilité de la Dette (3 228 Mds€)',
    summary: 'Rapport annuel constatant le dérapage du déficit à 5,5% du PIB et l\'impératif de réformes structurelles.',
    fullQuote: 'La situation des finances publiques de la France demeure très dégradée. Avec un déficit public supérieur aux prévisions et une dette atteignant 112 % du PIB, la France s\'expose à un renchérissement du coût de sa dette et à la mise en œuvre de la procédure européenne de déficit excessif.',
    officialSourceUrl: 'https://www.ccomptes.fr/fr/publications/le-rapport-public-annuel-2024',
    practicalApplication: 'Ce rapport indépendant démontre que les promesses non gagées de dépenses massives (LFI à 280 Mds€, RN avec baisse de TVA à 12 Mds€) provoqueront une mise sous tutelle budgétaire européenne et une flambée des taux d\'emprunt pénalisant le crédit immobilier à Pélissanne.',
    urssafSafeguard: 'Document de référence opposable lors des débats budgétaires parlementaires sur la loi de finances.'
  },
  {
    code: 'Code du Travail',
    article: 'Art. L. 7233-4 (ex-L129-13)',
    title: 'Aide Financière de l\'Entreprise aux Services à la Personne (CESU Dirigeant)',
    summary: 'Encadrement du Chèque Emploi Service Universel préfinancé par l\'entreprise au bénéfice de ses salariés et de son dirigeant.',
    fullQuote: 'L\'aide financière accordée par le comité social et économique ou par l\'entreprise au bénéfice des salariés ou des dirigeants pour le financement de services à la personne est exonérée d\'impôt sur le revenu et de toute cotisation de sécurité sociale dans la limite d\'un plafond annuel revalorisé.',
    officialSourceUrl: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033010461',
    practicalApplication: 'Permet à Nell\'Immo de prendre en charge légalement 2 591 €/an de dépenses familiales (cours de piano de l\'aînée, ménage) pour Nelly avec 25% de crédit d\'impôt société supplémentaire (Art. 244 quater F CGI).',
    urssafSafeguard: 'Respect strict du plafond annuel de 2 591 € par bénéficiaire et formalisation de la décision d\'attribution.'
  }
];

export function findLegalReference(query: string): LawReference | undefined {
  if (!query) return undefined;
  
  // 1. Nettoyage et normalisation
  const rawQ = query.trim().toLowerCase();
  const cleanQ = rawQ.replace(/[^a-z0-9]/g, '');

  // 2. Recherche exacte sur code, article ou titre
  const exactMatch = legalReferencesDatabase.find(ref => {
    const art = ref.article.toLowerCase().replace(/[^a-z0-9]/g, '');
    const title = ref.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const code = ref.code.toLowerCase().replace(/[^a-z0-9]/g, '');
    return art.includes(cleanQ) || cleanQ.includes(art) || title.includes(cleanQ) || code.includes(cleanQ);
  });
  if (exactMatch) return exactMatch;

  // 3. Recherche par mots-clés clés / numéros d'articles
  const tokens = rawQ
    .replace(/[.,:;()&/\\-]/g, ' ')
    .split(/\s+/)
    .filter(t => t.length >= 2 && !['art', 'article', 'du', 'des', 'de', 'la', 'le', 'et', 'les'].includes(t));

  if (tokens.length === 0) return undefined;

  return legalReferencesDatabase.find(ref => {
    const textTarget = `${ref.code} ${ref.article} ${ref.title}`.toLowerCase();
    // Correspondance si tous les tokens clés sont présents ou si un numéro clé correspond
    return tokens.every(token => textTarget.includes(token)) ||
      tokens.some(token => token.length >= 3 && ref.article.toLowerCase().includes(token));
  });
}
