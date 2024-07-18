import React from "react";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const COOKIES = () => {
  const { user } = useSelector((s) => s.auth);

  return (
    
    <div className="noticeLegal">
       {
        Object.keys(user).length ===0 && <div className="Back_box d-lg-flex d-none">
        <div className="icon-box">
          <Link to="/">
            <KeyboardBackspaceTwoToneIcon />
          </Link>
        </div>
        <div className= "icon-box">
          <Link to="/">
            <p>Retour</p>
          </Link>
        </div>
      </div> 
      }
      
      <div className="noticelegal_content">
        <div className="notice_para">
          <h2 className="f-para">Politique des cookies</h2>
          <span className="para_content">
            Dernière mise à jour : 19 Novembre 2023
          </span>
          <span className="para_content">
            Il s'agit de la politique en matière de cookies (la "politique") de
            Morpheus.ai, accessible à partir de morpheus.ai. Pour que ce site
            fonctionne correctement, nous plaçons parfois de petits fichiers de
            données appelés "cookies" sur votre appareil. Ces cookies sont
            téléchargés sur votre ordinateur afin d'améliorer votre expérience
            de navigation ainsi qu'à d'autres fins décrites dans la présente
            politique.
            <br />
            <br />
            En conséquence, la présente politique constitue un accord
            juridiquement contraignant entre vous ("utilisateur", "visiteur",
            "vous" ou "votre") et l'administrateur ou l'opérateur de ce site web
            ("administrateur", "opérateur", "nous", "notre" ou "nos"). Cette
            page de politique de cookies décrit ce que sont les cookies, quelles
            informations ils recueillent, pourquoi et comment ils sont utilisés
            par Morpheus.ai et tous ses produits et services associés (les
            "Services"). Nous expliquons également comment contrôler et
            désactiver ces cookies et comment retirer le consentement à la
            collecte de cookies. Cependant, sachez que ces actions peuvent
            réduire certains aspects de la fonctionnalité de ce site.
            <br />
            <br />
            Pour plus d'informations sur la manière dont nous utilisons,
            collectons et gérons vos données et informations personnelles,
            consultez notre politique de confidentialité.
            <br />
            <br />
            <h3 className="para_heading">Que sont les cookies ?</h3>
            <br />
            Les cookies sont de petits éléments de données stockés dans des
            fichiers texte enregistrés sur votre appareil mobile ou votre
            ordinateur lorsque vous visitez un site web. Les cookies permettent
            au serveur du site web d'enregistrer et de conserver vos actions et
            préférences, telles que les informations de connexion, l'historique
            de l'utilisateur, les paramètres de langue, les paramètres de
            police, les paramètres de couleur et d'autres préférences
            d'affichage, sur une période donnée. Les cookies évitent aux
            visiteurs d'avoir à saisir à nouveau leurs coordonnées ou leurs
            informations chaque fois qu'ils reviennent sur le site ou qu'ils
            naviguent d'une page à l'autre.
            <br />
            <br />
            Les cookies sont utilisés pour mémoriser vos préférences lors d'une
            seule visite, grâce à des cookies de session, ou lors de plusieurs
            visites répétées, grâce à des cookies permanents.
          </span>
          <br />
          <br />
          <h3 className="para_heading">Comment utilisons-nous les cookies ?</h3>
          <span className="para_content">
            Les cookies sont essentiels au fonctionnement optimal de notre site
            web et à l'amélioration de ses performances pour une meilleure
            expérience utilisateur. Le(s) administrateur(s) du site contrôle(nt)
            tous les cookies utilisés sur le site et autorise(nt) des tiers à y
            accéder à des fins de statistiques et d'analyse. Les cookies sont
            nécessaires pour identifier les visiteurs et mémoriser leurs actions
            sur le site et leurs comportements en ligne. Nous utilisons des
            cookies pour diverses raisons, qui sont expliquées en détail
            ci-dessous. Sachez que les informations relatives aux cookies ne
            sont pas utilisées pour vous identifier personnellement.
            <br />
            <br />
            <h3 className="para_heading">Comment contrôler les cookies ?</h3>
            Vous pouvez contrôler et/ou supprimer les cookies sur votre appareil
            mobile ou votre ordinateur et ajuster les paramètres de votre
            navigateur pour empêcher les cookies. Les utilisateurs peuvent
            retirer leur consentement à la collecte de cookies sur le site web.
            Vous pouvez également déterminer si vous souhaitez accepter
            l'utilisation de cookies par le site. Toutefois, cela peut vous
            obliger à répéter vos préférences chaque fois que vous visitez le
            site manuellement, et certains services et fonctionnalités du site
            peuvent ne pas fonctionner de manière optimale.
            <br />
            <br />
            <h3 className="para_heading">Désactiver les cookies</h3>
            Vous pouvez désactiver l'installation des cookies en ajustant
            l'option dans les paramètres de votre navigateur (voir l'aide de
            votre navigateur pour plus de détails). Toutefois, sachez que la
            désactivation des cookies affectera la fonctionnalité de votre
            visite et l'utilisation de ce site web et de bien d'autres.
            Malheureusement, la désactivation des cookies entraîne généralement
            la désactivation de certaines fonctionnalités et caractéristiques de
            ce site. Dans la plupart des cas, il n'existe pas d'options standard
            pour désactiver les cookies sans désactiver complètement les
            fonctionnalités et les caractéristiques qu'ils ajoutent au site. Il
            est recommandé d'activer les cookies pour une fonctionnalité et un
            service optimaux du site.
            <br />
            <br />
            <h3 className="para_heading">Les cookies que nous utilisons</h3>
            <h4 className="para_heading_4">Cookies de session</h4>
            Les cookies de session sont des cookies temporaires qui sont
            opérationnels pendant votre visite et qui expirent lorsque vous
            fermez le navigateur.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies permanents</h4>
            Les cookies permanents stockent et conservent vos préférences de
            site sur votre appareil mobile ou votre ordinateur, même après la
            fermeture du navigateur ou de votre appareil mobile ou ordinateur.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies nécessaires</h4>
            Les cookies nécessaires permettent au site web d'offrir une
            meilleure expérience à l'utilisateur lorsqu'il navigue sur le site
            web, ses services et ses fonctionnalités. Ces cookies nous
            permettent de savoir si vous avez créé un compte et si vous vous y
            êtes connecté pour accéder au contenu du site.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de fonctionnalité</h4>
            Les cookies de fonctionnalité permettent au site web de fonctionner
            de manière optimale, en suivant vos préférences pour vos prochaines
            visites. Ils reconnaissent votre nom d'utilisateur et vos
            personnalisations.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies analytiques</h4>
            Les cookies analytiques permettent aux services de première partie
            et de tiers affiliés de collecter et de stocker des données agrégées
            à des fins statistiques et analytiques sur la manière dont nos
            visiteurs utilisent le site web. Tout en respectant la vie privée et
            les informations personnelles des visiteurs, ces cookies optimisent
            l'expérience de l'utilisateur.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de compte</h4>
            Ces cookies nous aident à gérer l'inscription et l'administration
            générale de la création ou de l'ouverture d'un compte. Ces cookies
            peuvent être supprimés lorsque vous vous déconnectez, mais ils
            restent parfois après pour se souvenir de vos préférences sur le
            site.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de connexion</h4>
            Nous utilisons des cookies de connexion pour mémoriser vos données
            de connexion et vous éviter de vous connecter chaque fois que vous
            visitez une nouvelle page du site. Ces cookies sont souvent effacés
            lorsque vous vous déconnectez afin de sécuriser les informations et
            la confidentialité de votre compte et d'empêcher l'accès à des
            fonctions restreintes.
            <br />
            <br />
            <h4 className="para_heading_4">Email newsletters Cookies</h4>
            Ce site utilise des cookies pour offrir des services d'abonnement à
            la lettre d'information ou au courrier électronique et des cookies
            pour se souvenir si vous êtes déjà inscrit ou abonné afin d'afficher
            des notifications spécifiques ou des fonctions réservées aux
            utilisateurs abonnés ou non abonnés.
            <br />
            <br />
            <h4 className="para_heading_4">
              Cookies de traitement des commandes
            </h4>
            Nous utilisons des cookies pour stocker et mémoriser vos ordres de
            paiement sur notre site de commerce électronique ou nos facilités de
            paiement afin d'assurer un traitement correct des paiements.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de sondage</h4>
            Nous envoyons périodiquement à nos utilisateurs des enquêtes et des
            questionnaires afin de leur fournir des informations intéressantes,
            des outils utiles ou de mieux comprendre leurs préférences ou leurs
            opinions. Ces enquêtes peuvent utiliser des cookies pour se souvenir
            des participants ou pour générer des résultats précis même après que
            vous ayez changé de page.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies pour les formulaires</h4>
            Nous utilisons des cookies pour mémoriser vos coordonnées en vue
            d'une correspondance ultérieure lorsque vous soumettez des données
            par le biais de formulaires tels que des coordonnées de contact ou
            de commentaire.
            <br />
            <br />
            <h4 className="para_heading_4">Préférences du site Cookies</h4>
            Pour vous offrir une belle expérience d'utilisateur et d'interaction
            avec le site, nous utilisons des cookies pour vous permettre de
            définir vos préférences lorsque vous utilisez le site.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de premier niveau</h4>
            Les cookies de première niveau sont les cookies expliqués ci-dessus
            qui sont mis en place par le site web.
            <br />
            <br />
            <h4 className="para_heading_4">Cookies de tiers</h4>
            Dans certains cas, le site web utilise des cookies fournis par des
            tiers de confiance qui servent le contenu ou fournissent des
            services de publicité et d'analyse sur ce site web. La section
            suivante explique les cookies de tiers que vous pouvez rencontrer en
            utilisant ce site.
            <br />
            <span>
              <li>
                Ce site utilise Google Analytics, l'une des solutions d'analyse
                les plus fiables du web mondial, pour comprendre comment vous
                utilisez le site et trouver des moyens d'améliorer votre
                expérience. Par conséquent, ces cookies peuvent suivre votre
                utilisation du site, le temps passé sur le site et ses pages
                afin de nous permettre de continuer à produire un contenu
                attrayant. Pour plus d'informations sur les cookies de Google
                Analytics, nous vous renvoyons à la page officielle de Google
                Analytics :
                https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
              </li>
              <li>
                Nous testons périodiquement de nouvelles fonctionnalités et
                apportons des modifications subtiles à l'interaction entre les
                utilisateurs de notre site. Les cookies peuvent être utilisés
                pour vous offrir une expérience cohérente sur le site et
                comprendre les optimisations préférées de nos utilisateurs.
              </li>
              <li>
                Nous utilisons des cookies pour suivre et comprendre les
                statistiques relatives au nombre de visiteurs qui effectuent des
                achats pour les produits que nous vendons. Cela nous permet de
                faire des prévisions commerciales et de marché en toute
                connaissance de cause et de contrôler nos coûts de publicité et
                de produits afin de garantir le meilleur prix d'équilibre.
              </li>
              <li>
                Nous utilisons le service Google AdSense, qui utilise un cookie
                DoubleClick pour diffuser des annonces plus pertinentes sur le
                web et limiter le nombre de fois qu'une annonce particulière est
                montrée à nos utilisateurs. Pour plus d'informations sur Google
                AdSense, nous vous invitons à consulter la FAQ officielle sur la
                confidentialité de Google AdSense :
                https://support.google.com/adsense/answer/3394713
              </li>
              <li>
                Nous comptons sur les publicités pour compenser les coûts de
                fonctionnement de ce site et générer des revenus pour son
                développement. Nous utilisons des cookies de publicité
                comportementale pour nous assurer que nous vous fournissons les
                publicités les plus pertinentes possibles en suivant de manière
                anonyme vos intérêts spécifiques et en vous présentant des
                intérêts similaires.
              </li>
              <li>
                Plusieurs partenaires font de la publicité en notre nom et nous
                utilisons des cookies de suivi des affiliés pour déterminer le
                nombre de nos clients qui visitent le site par l'intermédiaire
                de chacun des sites de nos partenaires afin de les créditer de
                manière appropriée. Le cas échéant, ces cookies permettent à nos
                partenaires affiliés de vous offrir toute prime qu'ils
                pourraient vous accorder pour un achat.
              </li>
              <li>
                Nous utilisons des cookies pour les boutons de médias sociaux
                et/ou les plugins sur ce site afin de vous connecter à votre
                réseau social de différentes manières. Ces cookies nous
                permettent également de suivre les utilisateurs des réseaux
                sociaux lorsqu'ils visitent notre site ou partagent du contenu à
                l'aide d'un mécanisme de marquage fourni par ces sites de médias
                sociaux.
              </li>
            </span>
            <br />
            <br />
            <h4 className="para_heading_4">Amendements et modifications</h4>
            Morpheus.ai se réserve le droit de modifier à tout moment la
            présente politique et ses conditions relatives au site web et aux
            services, avec effet et pleine entrée en vigueur dès la publication
            de la version mise à jour sur le site web.
            <br />
            Veuillez consulter régulièrement cette page pour prendre
            connaissance des mises à jour. La poursuite de l'utilisation du site
            web et de ses services après cela constituera votre consentement à
            de tels amendements et modifications.
            <br />
            <br />
            <h4 className="para_heading_4">Politique d’acceptation</h4>
            Vous reconnaissez par la présente que vous avez lu la présente
            politique en matière de cookies et que vous en acceptez toutes les
            dispositions et tous les termes et conditions. En continuant à
            accéder et à utiliser ce site web et ses services, vous acceptez
            également d'être légalement lié par cette politique en matière de
            cookies. Si vous n'acceptez pas d'être lié par les termes et
            conditions de cette politique, vous n'êtes pas autorisé à continuer
            d'accéder ou d'utiliser ce site web et ses services.
            <br />
            <br />
            <h4 className="para_heading_4">Plus d’informations</h4>
            Nous espérons que vous avez pu vous faire une idée plus précise de
            notre utilisation des cookies. Pour de plus amples informations sur
            notre politique en matière de cookies, veuillez nous envoyer un
            courrier électronique à l'adresse contact@themorpheus.ai.
          </span>
        </div>
      </div>
    </div>
  );
};

export default COOKIES;
