import React from 'react';
import { CalendarClock, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck, Milestone } from 'lucide-react';

export const TimelineRoadmap: React.FC = () => {
  const steps = [
    {
      period: 'Étape 1 • Automne 2026 - Printemps 2027',
      title: 'Activation Immédiate dans la Maison à 305 000 €',
      badge: 'Dès Aujourd\'hui',
      badgeColor: 'bg-indigo-600 text-white',
      bgLight: 'bg-indigo-50/60 border-indigo-200',
      description: 'Signature du bail professionnel à 600 €/mois + 100 € charges entre Nelly Fernandez et NELL\'IMMO SASU. Prise en charge des 4 500 € HT de travaux du bureau par Nell\'Immo (récupération de 900 € de TVA). Versement des 2 591 € de CESU préfinancés 2026 (pour le ménage et les cours de piano à domicile). Réduction de 12% du budget pub de 40 000 €.',
      impact: '+510 € / mois de gain net pur immédiat, avant même l\'élection présidentielle de 2027.'
    },
    {
      period: 'Étape 2 • Mai - Décembre 2027',
      title: 'Présidentielle, Législatives & Calendrier Constitutionnel',
      badge: 'Transition 2027',
      badgeColor: 'bg-amber-600 text-white',
      bgLight: 'bg-amber-50/60 border-amber-200',
      description: 'Élection présidentielle (avril/mai 2027) puis législatives (juin 2027). En vertu de l\'Art. 34 de la Constitution et du principe de non-rétroactivité, aucune hausse d\'impôt ne peut frapper l\'année 2027 en cours. Les décrets d\'urgence (TVA 5,5% énergie RN ou blocage des prix LFI) s\'appliquent à l\'été 2027. La grande réforme fiscale (fin du PFU, IR 14 tranches LFI) n\'entrera en vigueur qu\'au 1er janvier 2028.',
      impact: 'Nelly a toute l\'année 2027 pour adapter ses dividendes résiduels sans aucune rétroactivité.'
    },
    {
      period: 'Étape 3 • 2028 - 2032',
      title: 'Collège/Lycée des Filles & Donation Nue-Propriété',
      badge: 'Protection Filles',
      badgeColor: 'bg-emerald-600 text-white',
      bgLight: 'bg-emerald-50/60 border-emerald-200',
      description: 'L\'aînée est au Collège Roger Carcassonne puis au lycée (orthodontie, piano, examens). La cadette termine son cycle élémentaire à Pélissanne. Le loyer de bureau de 600 € continue d\'amortir le crédit immobilier au Régime Réel sans impôt foncier. Donation notariée de la nue-propriété de la maison de 305k€ aux 2 filles avant les 51 ans de Nelly (Art. 669 CGI).',
      impact: 'Transmission de 100% de la maison sécurisée à 0 € de droits de succession pour toujours.'
    },
    {
      period: 'Étape 4 • 2033 - 2039 & Retraite',
      title: 'Études Supérieures (18 ans) & Retraite de Nelly',
      badge: 'Horizon 2033+',
      badgeColor: 'bg-purple-600 text-white',
      bgLight: 'bg-purple-50/60 border-purple-200',
      description: 'Septembre 2033 : L\'aînée a 18 ans et entre en études supérieures (Aix-Marseille). Septembre 2039 : La cadette la rejoint. Sous LFI, elles perçoivent chacune 1 063 €/mois (+12 756 €/an chacune d\'autonomie). Sous Continuité ou RN, la Holding/SCI créée par Nelly leur finance leur studio étudiant. Nelly liquide sa retraite à 60 ans (LFI) ou 64 ans (Continuité).',
      impact: 'Sécurité financière totale des études et 4 années de retraite pleine gagnées sous la gauche.'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {steps.map((s, idx) => (
        <div key={idx} className={`p-4 rounded-2xl border ${s.bgLight} shadow-xs space-y-2.5 flex flex-col justify-between`}>
          <div className="space-y-2">
            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider inline-block ${s.badgeColor}`}>
              {s.badge}
            </span>
            <div className="text-[11px] font-bold text-slate-500">{s.period}</div>
            <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{s.title}</h4>
            <p className="text-xs text-slate-700 leading-relaxed">{s.description}</p>
          </div>

          <div className="pt-2 border-t border-slate-200/80 text-xs font-bold text-emerald-800 bg-white/70 p-2 rounded-xl border border-slate-200/50">
            {s.impact}
          </div>
        </div>
      ))}
    </div>
  );
};
