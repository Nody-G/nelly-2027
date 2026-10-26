import React, { useState } from 'react';
import { Building2 } from 'lucide-react';
import { Tooltip } from '../common/Tooltip';

export const AgencyMarketSimulator: React.FC = () => {
  const [annualDeals, setAnnualDeals] = useState(13); // ~13 ventes par an (CA réel constaté ~130 000 € HT)
  const [avgPropertyPrice, setAvgPropertyPrice] = useState(305000); // 305 000 € prix médian Pélissanne / Pays Salonais
  const [feeRatePct, setFeeRatePct] = useState(3.3); // 3,3% honoraires moyens (mandats exclusifs 3,0% à 3,5%)

  const formatEuro = (n: number) => Math.round(n).toLocaleString('fr-FR') + ' €';

  const feePerDeal = avgPropertyPrice * (feeRatePct / 100);
  const baselineTurnover = annualDeals * feePerDeal; // CA Transaction annuel

  // Impacts par bloc politique sur le CA de transaction
  // 1. Continuité : Statu quo (taux 3,7% - 4,0% sur 25 ans, DPE maintenu)
  const caCont = baselineTurnover;

  // 2. LFI : Baisse des investisseurs locatifs (-20%) compensée par les résidences principales (+5%)
  const caLFI = baselineTurnover * 0.90; // -10% volume net sur les transactions pures
  const gulManagementGain = 14400; // Opportunité nouvelle : gestion locative sous Garantie Universelle des Loyers (20 lots * 60 €/m * 12)
  const netAgencyLFI = caLFI + gulManagementGain;

  // 3. RN : Libération des Passoires Thermiques (+10% mandats), mais blocage bancaire taux crédit (-12% de ventes abouties)
  const caRN = baselineTurnover * 0.96; // -4% net

  // 4. Droite : Relance investisseurs locatifs privés (+15%)
  const caDroite = baselineTurnover * 1.12; // +12% net

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-5 animate-in fade-in duration-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
              <Building2 className="w-5 h-5 text-indigo-700" />
            </span>
            <span className="text-xs font-bold uppercase text-indigo-700 tracking-wider">
              Activité Professionnelle • Agence Immobilière Nell'Immo
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
            Simulateur d'Impact Marché & Chiffre d'Affaires de Nell'Immo (2027)
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Estimation croisée du volume de transactions à Pélissanne selon les réformes (DPE, encadrement des loyers, taux bancaires sur 25 ans).
          </p>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
          Marché Pays Salonais & Pélissanne
        </span>
      </div>

      {/* Paramètres de l'agence */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Nombre de ventes par an</span>
            <span className="text-indigo-600 font-extrabold">{annualDeals} mandats vendus</span>
          </div>
          <input 
            type="range"
            min={10}
            max={35}
            step={1}
            value={annualDeals}
            onChange={(e) => setAnnualDeals(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />
          <div className="text-[10px] text-slate-400">Activité moyenne d'une agence indépendante</div>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Prix moyen d'un bien à Pélissanne</span>
            <span className="text-indigo-600 font-extrabold">{formatEuro(avgPropertyPrice)}</span>
          </div>
          <input 
            type="range"
            min={220000}
            max={500000}
            step={10000}
            value={avgPropertyPrice}
            onChange={(e) => setAvgPropertyPrice(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-indigo-600"
          />
          <div className="text-[10px] text-slate-400">Maisons individuelles & villas 13330</div>
        </div>

        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-700 flex justify-between">
            <span>Honoraires moyens agence</span>
            <span className="text-emerald-700 font-extrabold">{feeRatePct.toFixed(1)} % ({formatEuro(feePerDeal)})</span>
          </div>
          <input 
            type="range"
            min={2.5}
            max={7.0}
            step={0.1}
            value={feeRatePct}
            onChange={(e) => setFeeRatePct(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>2,5 %</span>
            <span className="font-bold text-indigo-600">3,0 % (Compétitif)</span>
            <span>5,0 % (Moyen)</span>
            <span>7,0 %</span>
          </div>
        </div>
      </div>

      {/* Cartes d'impact par régime politique */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
        
        {/* Continuité */}
        <div className="p-4 rounded-xl border border-sky-200 bg-sky-50/50 space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 text-sky-800">
              1. Continuité (Statu Quo)
            </span>
            <div className="text-lg font-black text-slate-900">{formatEuro(caCont)} HT</div>
            <div className="text-sky-800 font-bold">Stabilité du marché</div>
            <p className="text-slate-600 leading-snug">
              Taux bancaires sur 25 ans autour de 3,7 % - 4,0 %. Calendrier DPE maintenu incitant les vendeurs de biens G à vendre avec décote.
            </p>
          </div>
          <div className="pt-2 border-t border-sky-200 text-slate-500 font-medium text-[11px]">
            Volume de mandats inchangé
          </div>
        </div>

        {/* NFP / LFI */}
        <div className="p-4 rounded-xl border border-emerald-300 bg-emerald-50/50 space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-600 text-white">
              2. Nouveau Front Populaire / LFI
            </span>
            <div className="text-lg font-black text-emerald-800">{formatEuro(netAgencyLFI)} HT</div>
            <div className="text-emerald-900 font-bold">Pivot Résidentiel + Gestion GUL</div>
            <p className="text-emerald-950 leading-snug">
              Encadrement des loyers limitant les investisseurs bailleurs (-10% CA transaction), mais opportunité majeure de créer un pôle de gestion locative sécurisée par la{' '}
              <Tooltip 
                term="Garantie Universelle des Loyers" 
                explanation="Dispositif public d'assurance contre les impayés de loyers financé par une cotisation solidaire. Il supprime le risque d'impayé pour les bailleurs et permet à Nell'Immo de facturer des honoraires de gestion sécurisée." 
              /> (+{formatEuro(gulManagementGain)} HT).
            </p>
          </div>
          <div className="pt-2 border-t border-emerald-200 text-emerald-800 font-bold text-[11px]">
            Résilience par la diversification
          </div>
        </div>

        {/* RN */}
        <div className="p-4 rounded-xl border border-amber-300 bg-amber-50/50 space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white">
              3. Rassemblement National
            </span>
            <div className="text-lg font-black text-amber-900">{formatEuro(caRN)} HT</div>
            <div className="text-amber-900 font-bold">Tension sur les Taux de Crédit</div>
            <p className="text-amber-950 leading-snug">
              Le moratoire sur les{' '}
              <Tooltip 
                term="interdictions de louer DPE" 
                explanation="Calendrier de la loi Climat et Résilience interdisant la location des passoires thermiques : classe G en 2025, classe F en 2028. Le RN propose un moratoire total de 5 ans réautorisant ces biens à la location." 
                lawRef="Loi Climat Art. 160"
              /> libère des mandats de vente, mais la hausse des taux d'emprunt (
              <Tooltip 
                term="Spread OAT à 110 bps" 
                explanation="Écart de taux d'emprunt de la France face à l'Allemagne. S'il grimpe, les taux de crédit immobilier sur 25 ans passent à 4,50%-4,70%, provoquant des refus de prêts chez les acquéreurs." 
              />) bloque 1 à 2 compromis par an faute de financement bancaire.
            </p>
          </div>
          <div className="pt-2 border-t border-amber-200 text-amber-800 font-bold text-[11px]">
            Risque de refus de prêts acquéreurs
          </div>
        </div>

        {/* Droite */}
        <div className="p-4 rounded-xl border border-indigo-300 bg-indigo-50/50 space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-600 text-white">
              4. Droite Républicaine
            </span>
            <div className="text-lg font-black text-indigo-900">{formatEuro(caDroite)} HT</div>
            <div className="text-indigo-900 font-bold">Boom des Investisseurs</div>
            <p className="text-indigo-950 leading-snug">
              Statut du bailleur privé très incitatif, allègement des contraintes de rénovation énergétique et protection totale des propriétaires : fort afflux d'acquéreurs investisseurs dans le Pays Salonais.
            </p>
          </div>
          <div className="pt-2 border-t border-indigo-200 text-indigo-700 font-bold text-[11px]">
            Progression : +{formatEuro(caDroite - baselineTurnover)} HT
          </div>
        </div>

      </div>
    </div>
  );
};
