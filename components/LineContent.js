import React from 'react';
import { lineContentSize } from '../styles/sizes';
import { lineCaptionSize } from '../styles/sizes';

const localizedStrings = {
  fr: {
    address: 'Paris 19ème',
    birthday: '16/04/1993',
    mail: 'corbel.klervi@gmail.com',
    driverLicense: 'B / Véhicule',
    '2015': "Première année en Master de Management de Systèmes d'Information en alternance",
    '2014': "Diplôme de Conception de Systèmes d'Information (CSI) en alternance - Mention Bien",
    '2013': 'Diplôme Universitaire de Technologie en Informatique',
    '2011': 'Baccalauréat Economique et Social option Maths - Mention Bien',
    english: 'Courant, technique : TOEIC 960 points',
    spanish: 'Correct',
    systems: 'Windows, UNIX, Android',
    ide: 'Atom, Eclipse, Visual Studio',
    versionning: 'GIT',
    servers: 'Tomcat, WAMP',
    otherTools: 'JIRA, HP Quality Center, Suite Office',
    sinceJuly2016: 'Dev Tester - Execution de tests sur les fonctionnalités online et coop du projet Ghost Recon Wildands',
    '2015-2016': 'Testeuse logicielle - Assurance qualité, rédaction de stratégies, plans de tests et éxécution sur desktop et mobiles. Gestion et traitement des anomalies. Formation de 3 semaines en Inde et en Anglais.',
    since2014: "Auto-entrepreneuse - Animatrice WebTV, création de contenu gaming, couverture d'évènements e-sport ou non, shoutcast, gestion de réseaux sociaux, de planning, de communauté et d'équipe.",
    '2013-2015': "Developpeuse en alternance - Programmation en Progess OpenEdge (L4G), utilisation de composants .NET, reprise d'un projet de gestion electronique de documents (factures), analyse, conception de développement d'applications de gestion, assistance aux utilisateurs. ",
    interests: 'Actualités jeux vidéo et nouvelles technologies, retrogaming, musique (covers à la guitare), sport (fitness/danse).',
    commitments: "Responsable partenariats pour le BDE de IL (Institut d'Ingenieurie Informatique de Limoges) durant l'année 2014-2015"
  },
  en: {
    address: 'Paris 19',
    birthday: '16/04/1993',
    mail: 'corbel.klervi@gmail.com',
    driverLicense: 'Driving license (for cars) / Own car',
    '2015': 'First year in Computerised Information System Management Master with apprenticeship',
    '2014': 'Bachelor degree in Computerised Information System Conception with apprenticeship - Grade B pass',
    '2013': 'Technology University Degree in Computer Science',
    '2011': 'High School diploma in Economic and Social Science - Mathematics option - Grade B pass',
    english: 'Fluent, technical : TOEIC 960',
    spanish: 'Good skills',
    systems: 'Windows, UNIX, Android',
    ide: 'Atom, Eclipse, Visual Studio',
    versionning: 'GIT',
    servers: 'Tomcat, WAMP',
    otherTools: 'JIRA, HP Quality Center, Suite Office',
    sinceJuly2016: 'Dev Tester - Test execution on online and coop feature on the Ghost Recon Wildands project.',
    '2015-2016': 'Software tester - Quality assurance, BLABLABLA',
    since2014: 'Auto-entrepreneur - WebTV animator, gaming content creation, cast of esport and others events, competitions shoutcas. Social networks, planning, team and community managment.',
    '2013-2015': 'Apprenticeship : developer - Progress OpenEdge (4GL) programmation using .NET components, takeover of an electronic document management project, analysis, design and devlopment of management softwares, hotline.',
    interests: "Videogames and new technogies news, retrogaming, music (guitar's covers), sport (fitness/dance).",
    commitments: 'Partnerships manager for the Students Office (BDE) of 3IL (Limoges institute of computer engeneering) durant 2014-2015 year.'
  }
};

const localizedCaptionStrings = {
  fr: {
    '2015': 'Ecole CS2i (Limoges 87) & Gamac Informatique (La Souterraine 23)',
    '2014': 'Ecole CS2i (Limoges 87) & Gamac Informatique (La Souterraine 23)',
    '2013': 'IUT du Limousin (Limoges 87)',
    '2011': 'Lycée Raymond Loewy (La Souterraine 23)',
    sinceJuly2016: 'Ubisoft Paris Studio (Montreuil 93)',
    '2015-2016': 'Cognizant Technology Solutions (Grenoble 38)',
    '2013-2015': 'Gamac Informatique (La Souterraine 23)'
  },
  en: {
    '2015': 'CS2i (Limoges 87) & Gamac Informatique (La Souterraine 23)',
    '2014': 'CS2i (Limoges 87) & Gamac Informatique (La Souterraine 23)',
    '2013': 'IUT of Limousin (Limoges 87)',
    '2011': 'Raymond Loewy High School (La Souterraine 23)',
    sinceJuly2016: 'Ubisoft Paris Studio (Montreuil 93)',
    '2015-2016': 'Cognizant Technology Solutions (Grenoble 38)',
    '2013-2015': 'Gamac Informatique (La Souterraine 23)'
  }
};

export default ({ language, content, caption }) => (
  <div
    style={{
      display: 'table-cell',
      paddingLeft: 30,
      textAlign: 'justify',
      fontSize: lineContentSize,
      lineHeight: '1.5em'
    }}
  >
    {localizedStrings[language][content]}
    <p
      style={{
        display: 'table-cell',
        fontSize: lineCaptionSize,
        fontStyle: 'italic'
      }}
    >
      {localizedCaptionStrings[language][content]}
    </p>
  </div>
);
