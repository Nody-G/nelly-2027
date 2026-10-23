import React from 'react';
import { AlertTriangle, TrendingUp, AlertCircle, ShieldAlert } from 'lucide-react';

export const AgencyWarningsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      
      {/* Alerte LFI / NFP */}
      <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-3 flex flex-col justify-between shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Mise en garde objective sur LFI / NFP</span>
          </div>

          <h3 className="font-extrabold text-slate-900 text-sm">
            Risques pour l'activité de transaction & l'agence Nell'Immo
          </h3>

          <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
            <li>
              <strong>1. Choc sur l'investissement locatif privé :</strong> L'encadrement généralisé des loyers et l'interdiction des expulsions risquent de faire fuir les investisseurs particuliers à Pélissanne et Salon-de-Provence. Nelly devra pivoter vers la vente de résidences principales et la gestion sous Garantie Universelle des Loyers (GUL).
            </li>
            <li>
              <strong>2. Coût salarial si embauche :</strong> Le passage du SMIC à 1 600 € net et la suppression des allègements de charges patronales augmenteraient le coût d'un futur négociateur salarié de ~4 200 € / an.
            </li>
            <li>
              <strong>3. Impératif d'optimisation :</strong> Si Nelly conserve 30 000 € de dividendes passifs, elle subira jusqu'à 6 500 € / an d'impôts supplémentaires. L'activation des 6 leviers maison est vitale.
            </li>
          </ul>
        </div>

        <div className="p-2.5 rounded-xl bg-white border border-rose-200 text-xs text-emerald-800 font-medium">
          <strong>Opportunité majeure :</strong> +12 756 € / an par fille d'allocation d'autonomie pour les études supérieures en 2033 et 2039 + retraite à taux plein à 60 ans.
        </div>
      </div>

      {/* Alerte RN */}
      <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 flex flex-col justify-between shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-700" />
            <span>Mise en garde objective sur le RN</span>
          </div>

          <h3 className="font-extrabold text-slate-900 text-sm">
            Risques bancaires & impact sur les enfants
          </h3>

          <ul className="space-y-2 text-xs text-amber-950 leading-relaxed">
            <li>
              <strong>1. Taux de crédit immobilier (Spread OAT) :</strong> En cas de défiance des marchés obligataires sur la dette publique française, les taux d'intérêt bancaires pourraient grimper (4% à 4,5%). À Pélissanne, 1 point de taux en plus réduit la capacité d'emprunt des acheteurs de 10%, gelant le volume de mandats signés.
            </li>
            <li>
              <strong>2. Baisse des aides culturelles :</strong> Reste à charge accru pour les cours de piano et les activités associatives si les subventions municipales ou départementales sont coupées (comme à Fréjus, Perpignan ou Hayange).
            </li>
            <li>
              <strong>3. Études supérieures 100% à charge :</strong> Aucune bourse ni allocation jeune. Les études de ses deux filles devront être financées sur les fonds propres de Nelly.
            </li>
          </ul>
        </div>

        <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs text-amber-900 font-medium">
          <strong>Opportunité majeure :</strong> Maintien du PFU à 30%, baisse de TVA à 5,5% sur le carburant de Nell'Immo et abattement successions à 100k€ tous les 10 ans.
        </div>
      </div>

      {/* Alerte Continuité */}
      <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 space-y-3 flex flex-col justify-between shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sky-900 font-extrabold text-xs uppercase tracking-wider">
            <AlertCircle className="w-4 h-4 text-sky-700" />
            <span>Mise en garde sur la Continuité</span>
          </div>

          <h3 className="font-extrabold text-slate-900 text-sm">
            L'érosion fiscale silencieuse
          </h3>

          <ul className="space-y-2 text-xs text-sky-950 leading-relaxed">
            <li>
              <strong>1. Grignotage des prélèvements :</strong> La Flat Tax a été haussée à 31,4% par la CSG financière. L'avantage en nature leasing sur les véhicules thermiques a bondi à 50%-67% en 2025.
            </li>
            <li>
              <strong>2. Zéro aide pour les filles :</strong> En tant que dirigeante gagnant 70k€, Nelly paie le tarif maximum partout à Pélissanne sans droit à aucune bourse ni cantine subventionnée.
            </li>
            <li>
              <strong>3. Retraite bloquée à 64 ans :</strong> 4 années de travail de plus par rapport à la promesse de gauche, soit un manque à gagner en pension d'environ 100 000 €.
            </li>
          </ul>
        </div>

        <div className="p-2.5 rounded-xl bg-white border border-sky-200 text-xs text-sky-900 font-medium">
          <strong>Opportunité majeure :</strong> Stabilité institutionnelle et visibilité totale pour déployer dès cet automne les optimisations de la maison à 305 000 €.
        </div>
      </div>

    </div>
  );
};
