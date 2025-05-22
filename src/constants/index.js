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
    puzzleBear
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Mobile Developer",
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
      title: "3D Modeler",
      icon: creator,
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
      title: "Full Stack Develope",
      company_name: "Sopra Steria",
      icon: sopra,
      iconBg: "white",
      date: "September 2022 - October 2024 ",
      points: [
        "Developed and maintained full-stack applications using Java (Spring Boot) and Angular to support enterprise ERP systems.",
        "Improved existing backend services and implemented new business features using REST APIs, Hibernate, and MySQL/PostgreSQL.",
        "Built dynamic and responsive user interfaces with Angular, ensuring smooth interaction and modern UX for internal users.",
        "Enhanced and debugged Oracle Forms and PL/SQL maintenance files for the core ERP modules, ensuring stability and performance.",
        "Fixed major security vulnerabilities (XSS, SQL injections) identified by Checkmarx, ensuring compliance with security standards.",
        "Redesigned and optimized internal intranet systems using Joomla, PHP, JavaScript, and PowerShell for better information management.",
        "Created custom dashboards in Power BI for IT performance monitoring and strategic decision-making using Power Query and DAX.",
        "Worked in a DevOps environment with tools like Maven, Jenkins, Kubernetes, and Swagger for CI/CD and API documentation.",
      ],
    },
    {
      title: "Mobile Developer",
      company_name: "Freelancer",
      icon: freelance,
      iconBg: "white",
      date: "September 2021 - August 2022",
      points: [
      "Designed and launched cross-platform mobile applications for Android and iOS using React Native, Java, Kotlin, and Swift.",
      "Integrated backend services with Firebase, REST APIs, and GraphQL to deliver scalable and interactive user experiences.",
      "Collaborated with clients to turn ideas into interactive prototypes and polished UI designs using Figma and Adobe tools.",
      "Created immersive 3D visuals and animations for apps using Blender and Unity, enhancing user engagement.",
      ],
    },
    {
      title: "Network Administrator",
      company_name: "EST",
      icon: est,
      iconBg: "white",
      date: "April 2020 - May 2020",
      points: [
        "Configured and maintained secure Linux-based server environments using Ubuntu and CentOS.",
        "Automated system setup and network configuration with Ansible and Bash scripting to increase deployment efficiency.",
        "Simulated complex network topologies using Cisco Packet Tracer and ensured service continuity with Docker and VirtualBox.",
        "Deployed web servers with Nginx and Apache, and secured remote access with OpenSSH.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "OFPPT",
      icon: ofppt,
      iconBg: "white",
      date: "July 2019 - August 2019",
      points: [
      "Developed full-stack web applications using Java JEE, Spring, Angular, and React.js for academic and administrative systems.",
      "Implemented RESTful APIs and connected databases (MySQL, PostgreSQL, MongoDB) to ensure smooth data exchange.",
      "Utilized modern DevOps practices including Git version control, Jenkins CI/CD pipelines, and Kubernetes orchestration.",
      "Delivered user-friendly interfaces with responsive design using HTML, CSS, and TypeScript.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Student Payment Management",
      description:
        "A web application designed to manage student payments, including registration, payment tracking, receipt generation, and secure authentication. Built to streamline administrative processes in educational institutions.",
      tags: [
        {
          name: "angular",
          color: "orange-text-gradient",
        },
        {
          name: "angular material",
          color: "orange-text-gradient",
        },
        {
          name: "spring boot",
          color: "green-text-gradient",
        },
        {
          name: "spring security",
          color: "green-text-gradient",
        },
        {
          name: "hibernate",
          color: "blue-text-gradient",
        },

      ],
      image: gestionStudent,
      source_code_link: "https://github.com/ayoubbelkhadir-dev/student-management",
    },
    {
      name: "FooHealthy",
      description:
        "An application with a Java Spring Boot backend and an Angular frontend that allows users to share and discover healthy recipes. The goal is to make access to healthy and varied recipes easy to promote balanced eating.",
      tags: [
        {
          name: "angular",
          color: "orange-text-gradient",
        },
        {
          name: "angular material",
          color: "orange-text-gradient",
        },
        {
          name: "spring boot",
          color: "green-text-gradient",
        },
        {
          name: "spring security",
          color: "green-text-gradient",
        },
        {
          name: "hibernate",
          color: "blue-text-gradient",
        },

      ],
      image: fooHealthy,
      source_code_link: "https://github.com/ayoubbelkhadir-dev/Foohealthy",
    },
    {
      name: "Share Book",
      description:
        "A full-stack application with a Java Spring Boot backend and an Angular frontend that allows users to share books and printers with others. The platform enables easy sharing and management of resources among users.",
      tags: [
        {
          name: "angular",
          color: "orange-text-gradient",
        },
        {
          name: "angular material",
          color: "orange-text-gradient",
        },
        {
          name: "spring boot",
          color: "green-text-gradient",
        },
        {
          name: "spring security",
          color: "green-text-gradient",
        },
        {
          name: "hibernate",
          color: "blue-text-gradient",
        },

      ],
      image: shareBook,
      source_code_link: "https://github.com/ayoubbelkhadir-dev/share-book",
    },
    {
      name: "Puzzle bear",
      description:
        "Puzzle Bear is a mobile puzzle game designed for Android devices. Players assemble pieces to complete charming images featuring a cute bear in various scenes. The game includes multiple difficulty levels, making it fun and challenging for users of all ages while improving their logic and observation skills",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "Android studio",
          color: "orange-text-gradient",
        },
        {
          name: "Java Script",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Ilustrator",
          color: "blue-text-gradient",
        },

      ],
      image: puzzleBear,
      source_code_link: "https://github.com/ayoubbelkhadir-dev/Puzzle-bear",
    },
        {
      name: "Coto bee",
      description:
        "Coto Bee is a fun and colorful bubble shooter game for Android. Help the little bee pop all the bubbles by matching three or more of the same color. Aim carefully, plan your shots, and clear the board to move on to the next level!",
      tags: [
        {
          name: "Java",
          color: "orange-text-gradient",
        },
        {
          name: "Android studio",
          color: "orange-text-gradient",
        },
        {
          name: "Java Script",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Ilustrator",
          color: "blue-text-gradient",
        },

      ],
      image: cotoBee,
      source_code_link: "https://github.com/ayoubbelkhadir-dev/Coto-bee",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };