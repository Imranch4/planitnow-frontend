import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Background */}
      <div className="relative h-48 bg-cover bg-center" style={{ backgroundImage: "url('src/assets/bg.jpg')" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-16">
          <h1 className="text-3xl font-bold text-white">Politique de confidentialité</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl w-full mx-auto px-4 py-12">
        <Link to="/signup" className="inline-flex items-center text-red-600 hover:text-red-800 mb-8">
          <ArrowLeft size={20} className="mr-2" /> Retour à l'inscription
        </Link>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Politique de confidentialité</h2>
          <p className="text-gray-600 mb-4">Dernière mise à jour : 14 avril 2025</p>

          <div className="prose max-w-none text-gray-700">
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
            <p>
              Chez EventManager, nous accordons une grande importance à la protection de vos données personnelles. Cette Politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre Service.
            </p>
            <p>
              En utilisant notre Service, vous acceptez les pratiques décrites dans la présente Politique de confidentialité. Si vous n'acceptez pas cette Politique, veuillez ne pas utiliser notre Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">2. Collecte des données</h3>
            <p>
              Nous collectons plusieurs types d'informations à différentes fins pour vous fournir et améliorer notre Service :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Données personnelles</strong> : Lorsque vous vous inscrivez sur notre plateforme, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier, notamment votre nom, adresse e-mail, numéro de téléphone, adresse postale et informations de paiement.
              </li>
              <li className="mb-2">
                <strong>Données d'utilisation</strong> : Nous pouvons également collecter des informations sur la façon dont vous accédez à notre Service et l'utilisez, notamment votre adresse IP, le type de navigateur, la version, les pages de notre Service que vous visitez, l'heure et la date de votre visite, le temps passé sur ces pages et d'autres statistiques.
              </li>
              <li className="mb-2">
                <strong>Données de géolocalisation</strong> : Avec votre consentement, nous pouvons collecter et traiter des informations sur votre localisation actuelle pour vous proposer des événements à proximité.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">3. Utilisation des données</h3>
            <p>
              Nous utilisons les données collectées pour diverses finalités :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Fournir et maintenir notre Service</li>
              <li className="mb-2">Vous informer des changements apportés à notre Service</li>
              <li className="mb-2">Vous permettre de participer aux fonctionnalités interactives de notre Service lorsque vous le souhaitez</li>
              <li className="mb-2">Fournir un service client</li>
              <li className="mb-2">Recueillir des analyses ou des informations précieuses afin d'améliorer notre Service</li>
              <li className="mb-2">Surveiller l'utilisation de notre Service</li>
              <li className="mb-2">Détecter, prévenir et résoudre les problèmes techniques</li>
              <li className="mb-2">Vous envoyer des newsletters, des promotions et d'autres informations qui pourraient vous intéresser</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">4. Partage des données</h3>
            <p>
              Nous pouvons partager vos informations personnelles dans les situations suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Avec les organisateurs d'événements</strong> : Lorsque vous vous inscrivez à un événement, nous partageons vos informations avec l'organisateur afin qu'il puisse gérer votre participation.
              </li>
              <li className="mb-2">
                <strong>Avec les prestataires de services</strong> : Nous pouvons partager vos informations avec des tiers qui fournissent des services pour nous aider à exploiter notre Service (par exemple, des services de paiement, d'hébergement, d'analyse).
              </li>
              <li className="mb-2">
                <strong>Pour des raisons juridiques</strong> : Nous pouvons divulguer vos informations si nous sommes tenus de le faire par la loi ou en réponse à des demandes valides des autorités publiques (par exemple, un tribunal ou une agence gouvernementale).
              </li>
              <li className="mb-2">
                <strong>Dans le cadre d'une transaction commerciale</strong> : Si nous sommes impliqués dans une fusion, acquisition ou vente d'actifs, vos données personnelles peuvent être transférées.
              </li>
              <li className="mb-2">
                <strong>Avec votre consentement</strong> : Nous pouvons divulguer vos informations personnelles à d'autres fins avec votre consentement.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">5. Cookies et technologies similaires</h3>
            <p>
              Nous utilisons des cookies et des technologies de suivi similaires pour suivre l'activité sur notre Service et stocker certaines informations. Les cookies sont des fichiers contenant une petite quantité de données qui peuvent inclure un identifiant unique anonyme. Les cookies sont envoyés à votre navigateur depuis un site web et stockés sur votre appareil.
            </p>
            <p>
              Vous pouvez demander à votre navigateur de refuser tous les cookies ou d'indiquer quand un cookie est envoyé. Cependant, si vous n'acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre Service.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">6. Sécurité des données</h3>
            <p>
              La sécurité de vos données est importante pour nous, mais n'oubliez pas qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est sûre à 100%. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">7. Vos droits</h3>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à d'autres lois applicables sur la protection des données, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Droit d'accès à vos données personnelles</li>
              <li className="mb-2">Droit de rectification des données inexactes</li>
              <li className="mb-2">Droit à l'effacement de vos données personnelles</li>
              <li className="mb-2">Droit à la limitation du traitement de vos données</li>
              <li className="mb-2">Droit à la portabilité des données</li>
              <li className="mb-2">Droit d'opposition au traitement de vos données</li>
              <li className="mb-2">Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée dans la section "Contact" ci-dessous.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">8. Conservation des données</h3>
            <p>
              Nous conserverons vos données personnelles uniquement pendant la durée nécessaire aux fins énoncées dans la présente Politique de confidentialité. Nous conserverons et utiliserons vos données personnelles dans la mesure nécessaire pour nous conformer à nos obligations légales, résoudre les litiges et appliquer nos accords et politiques.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">9. Transfert des données</h3>
            <p>
              Vos informations, y compris les données personnelles, peuvent être transférées et maintenues sur des ordinateurs situés en dehors de votre état, province, pays ou autre juridiction gouvernementale où les lois sur la protection des données peuvent différer de celles de votre juridiction.
            </p>
            <p>
              Si vous êtes situé en dehors de la France et que vous choisissez de nous fournir des informations, veuillez noter que nous transférons les données, y compris les données personnelles, en France et les traitons en France. Votre consentement à cette Politique de confidentialité, suivi de votre soumission de ces informations, représente votre accord à ce transfert.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">10. Politique relative aux enfants</h3>
            <p>
              Notre Service ne s'adresse pas aux personnes de moins de 16 ans. Nous ne collectons pas sciemment des informations personnellement identifiables auprès de personnes de moins de 16 ans. Si nous apprenons que nous avons collecté des données personnelles d'une personne de moins de 16 ans sans vérification du consentement parental, nous prenons des mesures pour supprimer ces informations de nos serveurs.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">11. Modifications de cette Politique</h3>
            <p>
              Nous pouvons mettre à jour notre Politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle Politique de confidentialité sur cette page et en mettant à jour la date de "dernière mise à jour" en haut de cette page.
            </p>
            <p>
              Nous vous conseillons de consulter régulièrement cette Politique de confidentialité pour prendre connaissance de toute modification. Les modifications apportées à cette Politique de confidentialité sont effectives lorsqu'elles sont publiées sur cette page.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">12. Contact</h3>
            <p>
              Si vous avez des questions concernant cette Politique de confidentialité, veuillez nous contacter :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Par e-mail : privacy@eventmanager.com</li>
              <li className="mb-2">Par courrier : EventManager SAS, 123 Avenue des Champs-Élysées, 75008 Paris, France</li>
            </ul>
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