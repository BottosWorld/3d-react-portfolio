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
      title: "Software Engineer - Integrations",
      company_name: "Blend Labs, Inc.",
      icon: "",
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Instant Home Equity",
        "Identity Verifications",
        "Innovation Services"
      ],
    },
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
      name: "Botto",
      description:
        "AI Chatbot that optimizes prompts for various LLMs. Select your model and input prompt parameters, click optimize to get your result. You can also create your own prompt formulas to generate prompts or randomize parameters.",
      tags: [
        {
          name: "nextjs",
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
      image: "",
      source_code_link: "https://github.com/bottosworld",
    },
    {
      name: "BottosWorld",
      description:
        "Introducing BottosWorld: a cutting-edge 3D, AI-powered e-commerce platform that revolutionizes the world of custom design. By leveraging artificial intelligence and 3D technology, BottosWorld empowers users to effortlessly generate personalized designs for any item, seamlessly integrating with a print-on-demand model. Explore endless creativity, express your unique style, and turn your imagination into tangible products with BottosWorld.",
      tags: [
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "shopify",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/bottosworld",
    },
    {
      name: "ZenSave",
      description:
        "ZenSave is the ultimate personal finance budgeting app designed for millennials and Gen Z, offering complete financial clarity. With features like expense tracking, bill management, savings planning, and credit-building tools, ZenSave empowers users to master their financial journey and achieve their money goals with serene confidence.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/bottosworld",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };