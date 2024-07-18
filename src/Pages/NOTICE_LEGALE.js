import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardBackspaceTwoToneIcon from "@mui/icons-material/KeyboardBackspaceTwoTone";



const NOTICE_LEGALE = () => {
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
          <h5 className="legal-heading">MENTIONS LÉGALES</h5>
          <span className="legal-para">En vigueur au 19/11/2023</span>
          <br />
          <span className="para_content">
            Conformément aux dispositions des Articles 6-III et 19 de la Loi
            n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie
            numérique, dite L.C.E.N., il est porté à la connaissance des
            utilisateurs et visiteurs, ci-après l’ "Utilisateur", du site
            www.themorpheus.ai , ci-après le "Site", les présentes mentions
            légales.
            <br /><br />
            La connexion et la navigation sur le Site par l’Utilisateur implique
            acceptation intégrale et sans réserve des présentes mentions
            légales.
            Ces dernières sont accessibles sur le Site à la rubrique « Mentions
            légales ».
            <br />
            <br />
            <h3 className="para_heading">ARTICLE 1 - L'EDITEUR</h3>
            L'édition du Site est assurée par Morpheus.ai Auto-entreprenuer au
            capital de 1 euros, immatriculée au Registre du Commerce et des
            Sociétés de Pontoise sous le numéro 879518090 dont le siège social
            est situé au 10 Rue des Deux Piliers, 95350 Saint-Brice-Sous-Forêt,
            Adresse e-mail : contact@themorpheus.ai. N° de TVA
            intracommunautaire : FR52879518090 Le Directeur de la publication
            est Christ ITOUA ci-après l' “Editeur".
            <br />
            <br />
            <h3 className="para_heading">ARTICLE 2 - L'HEBERGEUR</h3>
            L'hébergeur du Site est la société GoDaddy, dont le siège social est
            situé au 2155 E. GoDaddy Way Tempe, AZ 85284 USA , avec le numéro de
            téléphone : 330975187039
            <br />
            <br />
            <h3 className="para_heading">ARTICLE 3 - ACCES AU SITE</h3>
            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
            force majeure, interruption programmée ou non et pouvant découlant
            d’une nécessité de maintenance.
            En cas de modification, interruption ou suspension du Site,
            l'Editeur ne saurait être tenu responsable.
            <br />
            <br />
            <h3 className="para_heading">ARTICLE 4 - COLLECTE DES DONNEES</h3>
            Le Site assure à l'Utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés.
            <br />
            En vertu de la loi Informatique et Libertés, en date du 6 janvier
            1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de
            suppression et d'opposition de ses données personnelles.
            L'Utilisateur exerce ce droit :
            <br />
            <span className="point"><li>par mail à l'adresse email contact@themorpheus.ai</li> </span>
            Toute utilisation, reproduction, diffusion, commercialisation,
            modification de toute ou partie du Site, sans autorisation de
            l’Editeur est prohibée et pourra entraîner des actions et poursuites
            judiciaires telles que notamment prévues par le Code de la propriété
            intellectuelle et le Code civil.
          </span>
        </div>
      </div>
    </div>
  );
};

export default NOTICE_LEGALE;
