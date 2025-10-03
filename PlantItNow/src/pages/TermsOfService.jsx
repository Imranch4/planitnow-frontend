import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Background */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-16">
          <h1 className="text-3xl font-bold text-white">Conditions d'utilisation</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full mx-auto px-4 py-12">
        <Link to="/signup" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
          <ArrowLeft size={20} className="mr-2" /> Retour à l'inscription
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Conditions Générales d'Utilisation</h2>
          <p className="text-gray-600 mb-4">Dernière mise à jour : 14 avril 2025</p>

          <div className="prose max-w-none text-gray-700">
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
            <p>
              Bienvenue sur EventManager. Les présentes Conditions Générales d'Utilisation régissent votre utilisation de notre plateforme, accessible via notre site web et notre application mobile. En utilisant notre Service, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces Conditions d'Utilisation, veuillez ne pas utiliser notre Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">2. Définitions</h3>
            <p>
              <strong>"Service"</strong> désigne la plateforme EventManager, accessible via notre site web et notre application mobile.
              <br />
              <strong>"Utilisateur"</strong> désigne toute personne qui accède à notre Service ou l'utilise.
              <br />
              <strong>"Contenu"</strong> désigne tous les textes, images, vidéos, événements et autres informations publiés sur le Service.
              <br />
              <strong>"Organisateur"</strong> désigne un Utilisateur qui crée et gère des événements sur le Service.
              <br />
              <strong>"Participant"</strong> désigne un Utilisateur qui s'inscrit à des événements via le Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">3. Inscription et compte</h3>
            <p>
              Pour utiliser certaines fonctionnalités de notre Service, vous devez créer un compte. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités qui se produisent sous votre compte. Vous devez immédiatement nous informer de toute utilisation non autorisée de votre compte ou de toute autre violation de sécurité.
            </p>
            <p>
              Lors de l'inscription, vous vous engagez à fournir des informations exactes, complètes et à jour. Le non-respect de cette obligation constitue une violation des Conditions d'Utilisation, pouvant entraîner la résiliation immédiate de votre compte.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">4. Création et participation aux événements</h3>
            <p>
              En tant qu'Organisateur, vous êtes entièrement responsable des événements que vous créez, y compris leur description, leur prix, leur lieu et leur date. Les informations fournies doivent être précises et complètes. Vous garantissez que vous disposez des droits, licences et autorisations nécessaires pour organiser ces événements.
            </p>
            <p>
              En tant que Participant, vous acceptez de respecter les conditions spécifiques de chaque événement auquel vous vous inscrivez, y compris les politiques d'annulation et de remboursement établies par l'Organisateur.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">5. Contenu de l'utilisateur</h3>
            <p>
              Notre Service permet aux Utilisateurs de publier du Contenu. Vous conservez tous les droits sur le Contenu que vous publiez, mais vous nous accordez une licence mondiale, non exclusive, gratuite, transférable et pouvant faire l'objet d'une sous-licence pour utiliser, reproduire, modifier, adapter, publier, traduire, créer des œuvres dérivées, distribuer et afficher ce Contenu.
            </p>
            <p>
              Vous êtes entièrement responsable du Contenu que vous publiez et de ses conséquences. Nous nous réservons le droit de supprimer tout Contenu qui viole ces Conditions d'Utilisation ou que nous jugeons inapproprié.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">6. Paiements et frais</h3>
            <p>
              EventManager peut prélever des frais pour certains aspects du Service, notamment des commissions sur les ventes de billets. Tous les frais sont indiqués en euros et incluent la TVA applicable. En tant qu'Organisateur, vous acceptez que nous prélevions une commission sur chaque billet vendu via notre plateforme, conformément à nos tarifs en vigueur.
            </p>
            <p>
              Les paiements sont traités par des prestataires de services de paiement tiers. En utilisant ces services, vous acceptez leurs conditions d'utilisation respectives.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">7. Propriété intellectuelle</h3>
            <p>
              Le Service et son contenu original, ses fonctionnalités et sa fonctionnalité sont et resteront la propriété exclusive d'EventManager et de ses concédants de licence. Le Service est protégé par le droit d'auteur, les marques commerciales et d'autres lois en France et à l'étranger. Nos marques et nos habillages commerciaux ne peuvent pas être utilisés en relation avec un produit ou un service sans notre consentement écrit préalable.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">8. Limitation de responsabilité</h3>
            <p>
              Dans toute la mesure permise par la loi applicable, EventManager ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de bénéfices ou de revenus, qu'ils soient encourus directement ou indirectement, ou de toute perte de données, d'utilisation, de fonds de commerce ou d'autres pertes intangibles, résultant de votre accès et de votre utilisation ou de votre incapacité à accéder et à utiliser le Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">9. Résiliation</h3>
            <p>
              Nous pouvons résilier ou suspendre votre compte immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les Conditions d'Utilisation. Après la résiliation, votre droit d'utiliser le Service cessera immédiatement. Si vous souhaitez résilier votre compte, vous pouvez simplement cesser d'utiliser le Service ou nous contacter pour demander la suppression de votre compte.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">10. Modifications des conditions</h3>
            <p>
              Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous vous fournirons un préavis de 30 jours avant que les nouvelles conditions ne prennent effet. Ce qui constitue un changement important sera déterminé à notre seule discrétion. En continuant à accéder ou à utiliser notre Service après que ces révisions deviennent effectives, vous acceptez d'être lié par les conditions révisées. Si vous n'acceptez pas les nouvelles conditions, vous n'êtes plus autorisé à utiliser le Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">11. Loi applicable</h3>
            <p>
              Ces Conditions sont régies et interprétées conformément aux lois françaises, sans égard aux dispositions relatives aux conflits de lois. Notre incapacité à faire respecter un droit ou une disposition de ces Conditions ne sera pas considérée comme une renonciation à ces droits. Si une disposition de ces Conditions est jugée invalide ou inapplicable par un tribunal, les dispositions restantes de ces Conditions resteront en vigueur.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">12. Contact</h3>
            <p>
              Si vous avez des questions concernant ces Conditions, veuillez nous contacter à l'adresse suivante : contact@eventmanager.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-gray-500 text-sm">
            © 2025 EventManager. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}