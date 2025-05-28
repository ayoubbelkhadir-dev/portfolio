import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    docker,
    java,
    angular,
    sql,
    jenkins,
    kubernate,
    sopra,
    est,
    freelance,
    ofppt,
    gestionStudent,
    fooHealthy,
    shareBook,
    cotoBee,
    puzzleBear,
    master,
    dut,
    bachelor
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "projets",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Développeur Java",
      icon: web,
    },
    {
      title: "Développeur Backend",
      icon: mobile,
    },
    {
      title: "Développeur Frontend",
      icon: web,
    },
    {
      title: "Développeur Web",
      icon: mobile,
    },
    {
      title: "Développeur Mobile",
      icon: backend,
    },
    {
      title: "DevOps",
      icon: creator,
    },
    {
      title: "Designer",
      icon: creator,
    },
    {
      title: "Modélisateur 3D",
      icon: creator,
    },
  ];

    const formations = [
    {
      title: "Ingénieur expert en informatique et systèmes d’information",
      icon: master,
    },
    {
      title: "Bachelor Concepteur Développeur d’application Bac+3",
      icon: bachelor,
    },
    {
      title: "Diplôme universitaire de technologie Génie Informatique Bac+2",
      icon: dut,
    },
  ];


  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "kubernate",
      icon: kubernate,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },

  ];
  
  const experiences = [
  {
    title: "Développeur Full Stack",
    company_name: "Sopra Steria",
    icon: sopra,
    iconBg: "white",
    date: "Septembre 2022 - Octobre 2024",
    points: [
      "Développement et maintenance d'applications full-stack en Java (Spring Boot) et Angular pour des systèmes ERP.",
      "Amélioration des services backend existants et implémentation de nouvelles fonctionnalités métier via des API REST, Hibernate, MySQL/PostgreSQL.",
      "Création d'interfaces utilisateur dynamiques et réactives avec Angular, assurant une expérience moderne et fluide.",
      "Maintenance et débogage des fichiers Oracle Forms et PL/SQL pour garantir la stabilité et la performance du cœur ERP.",
      "Correction de vulnérabilités de sécurité majeures (XSS, injections SQL) détectées par Checkmarx pour assurer la conformité.",
      "Refonte et optimisation de l'intranet interne avec Joomla, PHP, JavaScript et PowerShell pour une meilleure gestion de l'information.",
      "Création de tableaux de bord personnalisés sous Power BI pour le suivi IT et la prise de décision stratégique avec Power Query et DAX.",
      "Travail en environnement DevOps avec Maven, Jenkins, Kubernetes et Swagger pour le CI/CD et la documentation API.",
    ],
  },
  {
    title: "Développeur Mobile",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "white",
    date: "Septembre 2021 - Août 2022",
    points: [
      "Conception et lancement d'applications mobiles multiplateformes pour Android et iOS avec React Native, Java, Kotlin et Swift.",
      "Intégration de services backend via Firebase, API REST et GraphQL pour des expériences utilisateurs interactives et évolutives.",
      "Collaboration avec les clients pour transformer des idées en prototypes interactifs et designs UI aboutis avec Figma et Adobe.",
      "Création de visuels et animations 3D immersifs pour les applications avec Blender et Unity pour renforcer l'engagement.",
    ],
  },
  {
    title: "Administrateur Réseau",
    company_name: "EST",
    icon: est,
    iconBg: "white",
    date: "Avril 2020 - Mai 2020",
    points: [
      "Configuration et maintenance d'environnements serveurs Linux sécurisés (Ubuntu, CentOS).",
      "Automatisation de l'installation système et de la configuration réseau avec Ansible et scripts Bash.",
      "Simulation de topologies réseau complexes avec Cisco Packet Tracer et garantie de continuité de service avec Docker et VirtualBox.",
      "Déploiement de serveurs web avec Nginx et Apache, sécurisation de l'accès distant avec OpenSSH.",
    ],
  },
  {
    title: "Développeur Full Stack",
    company_name: "OFPPT",
    icon: ofppt,
    iconBg: "white",
    date: "Juillet 2019 - Août 2019",
    points: [
      "Développement d'applications web full-stack en Java JEE, Spring, Angular et React.js pour les systèmes académiques et administratifs.",
      "Implémentation d’API RESTful et gestion de bases de données (MySQL, PostgreSQL, MongoDB).",
      "Utilisation des pratiques DevOps modernes : Git, Jenkins (CI/CD), Kubernetes.",
      "Création d’interfaces utilisateurs responsives avec HTML, CSS, TypeScript.",
    ],
  },
];
  

  
 const projects = [
  {
    name: "Gestion des paiements étudiants",
    description:
      "Une application web conçue pour gérer les paiements des étudiants, incluant l'inscription, le suivi des paiements, la génération de reçus et une authentification sécurisée. Conçue pour simplifier les processus administratifs des établissements.",
    tags: [
      { name: "angular", color: "orange-text-gradient" },
      { name: "angular material", color: "orange-text-gradient" },
      { name: "spring boot", color: "green-text-gradient" },
      { name: "spring security", color: "green-text-gradient" },
      { name: "hibernate", color: "blue-text-gradient" },
    ],
    image: gestionStudent,
    source_code_link: "https://github.com/ayoubbelkhadir-dev/student-management",
  },
  {
    name: "FooHealthy",
    description:
      "Une application avec un backend Java Spring Boot et un frontend Angular permettant aux utilisateurs de partager et découvrir des recettes saines. L’objectif est de promouvoir une alimentation équilibrée facilement accessible.",
    tags: [
      { name: "angular", color: "orange-text-gradient" },
      { name: "angular material", color: "orange-text-gradient" },
      { name: "spring boot", color: "green-text-gradient" },
      { name: "spring security", color: "green-text-gradient" },
      { name: "hibernate", color: "blue-text-gradient" },
    ],
    image: fooHealthy,
    source_code_link: "https://github.com/ayoubbelkhadir-dev/Foohealthy",
  },
  {
    name: "Share Book",
    description:
      "Une application full-stack avec un backend Java Spring Boot et un frontend Angular permettant aux utilisateurs de partager des livres et des imprimantes. La plateforme facilite la gestion et le partage de ressources.",
    tags: [
      { name: "angular", color: "orange-text-gradient" },
      { name: "angular material", color: "orange-text-gradient" },
      { name: "spring boot", color: "green-text-gradient" },
      { name: "spring security", color: "green-text-gradient" },
      { name: "hibernate", color: "blue-text-gradient" },
    ],
    image: shareBook,
    source_code_link: "https://github.com/ayoubbelkhadir-dev/share-book",
  },
  {
    name: "Puzzle Bear",
    description:
      "Puzzle Bear est un jeu de puzzle mobile pour Android. Les joueurs doivent assembler des pièces pour compléter des images adorables mettant en scène un ours. Le jeu propose plusieurs niveaux de difficulté et aide à développer la logique et l’observation.",
    tags: [
      { name: "Java", color: "orange-text-gradient" },
      { name: "Android studio", color: "orange-text-gradient" },
      { name: "Java Script", color: "green-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "Ilustrator", color: "blue-text-gradient" },
    ],
    image: puzzleBear,
    source_code_link: "https://github.com/ayoubbelkhadir-dev/Puzzle-bear",
  },
  {
    name: "Coto Bee",
    description:
      "Coto Bee est un jeu de bulles coloré et amusant pour Android. Aidez la petite abeille à éclater les bulles en alignant trois bulles de la même couleur. Visez bien, planifiez vos tirs, et passez au niveau suivant !",
    tags: [
      { name: "Java", color: "orange-text-gradient" },
      { name: "Android studio", color: "orange-text-gradient" },
      { name: "Java Script", color: "green-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "Ilustrator", color: "blue-text-gradient" },
    ],
    image: cotoBee,
    source_code_link: "https://github.com/ayoubbelkhadir-dev/Coto-bee",
  },
];
  
  export { services, technologies, experiences, projects,formations };