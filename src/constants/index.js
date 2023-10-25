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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    php,
    laravel,
    mysql,
    aws,
    next,
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
      title: "Fullstack Web Developer",
      icon: web,
    },
    {
      title: "Generative AI Services",
      icon: mobile,
    },
    {
      title: "AWS Cloud Services",
      icon: backend,
    },
    {
      title: "API Design & Integrations",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Software Engineer",
      company_name: "Bryan Bottorff",
      icon: "",
      iconBg: "#383E56",
      date: "October 2023 - Present",
      points: [
      ],
    },
    {
      title: "Software Engineer II",
      company_name: "Tranzact (Q3M Team)",
      icon: "",
      iconBg: "#383E56",
      date: "July 2021 - October 2023",
      points: [
        "Increased revenue 50% by building scalable backend tools and user interface to optimize lead management systems and allow stakeholders to collaborate and make strategic decisions based on KPIs and metrics",
        "Improved application performance by migrating backend from PHP frameworks to Node/Express and React frontend",
        "Optimized workflows by developing internal API to pull data from 3rd party tools and software for cross-functional teams",
        "Decreased bad sales calls 95% with development of scalable internal product to filter out bad leads for sales team",
        "Managed junior software engineer performance with code reviews, communication and pair programming collaboration",
        "Increased application performance 50% by optimizing database queries and table engines to eliminate relational database issues",
      ],
    },
    {
      title: "Software Engineer I",
      company_name: "Tranzact (Q3M Team)",
      icon: "",
      iconBg: "#383E56",
      date: "March 2021 - July 2021",
      points: [
        "Increased code infrastructure efficiency 50%+ by optimizing import processes and leveraging DRY and KISS principles",
        "Decreased data cost 25% by creating conditional logic for lead import optimization and prevention of duplicate data",
        "Created written technical documentation for new algorithms to communicate lead flow for internal version control",
        "Increased access to new data sources and partners through integration of 3rd party APIs",
        "Facilitated strategic decision-making by creating ad-hoc reports for executives in MySQL to improve forecasting",
        "Built solutions and tools utilizing agile methodologies to track features, facilitate testing and enable innovative problem-solving",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };