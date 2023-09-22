import {
  FaBook as BookIcon,
  FaLaptopCode as LaptopCodeIcon,
  FaTrophy as TrophyIcon,
  FaMoneyBillWave as MoneyBillWaveIcon,
  FaCheck as CheckIcon,
  FaFacebookF as FacebookIcon,
  FaTwitter as TwitterIcon,
  FaLinkedinIn as LinkedinIcon,
  FaInstagram as InstagramIcon,
  FaLock as LockIcon,
  FaRegChartBar as ChartIcon,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a 24-hour event where students come together to build a project from scratch. It's a great opportunity to learn new skills, meet new people, and win prizes!",
  },
  {
    question: "Who can attend?",
    answer: "Any high school student can attend!",
  },
];

const navLinks = [
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Contact",
    href: "/contact",
  },

  {
    name: "Pricing",
    href: "/pricing",
  },
];

const homeContent = {
  title: "Add Diet Planning Tech Capability",
  description:
    "Make your platform a tech enabled dietitian. We have a comprehensive tools for diet planning.",
  cta: [
    {
      name: "Explainer Video",
      href: "https://credflow.in/",
    },
    {
      name: "Get Free Demo",
      href: "https://credflow.in/",
    },
  ],
};

const featuresSection = {
  title: "Get AI Based Diet Planning Tool",
  description:
    "It's a low cost effective solution which can be personalised for every domain",
  features: [
    {
      title: "Comprehensive in Depth Food Database",
      description:
        "Food database is created with help 10+ dieticians in the last 3 years.",
      icon: BookIcon,
    },
    {
      title: "Very Low Tech Integration Required",
      description: "Integration can be completed in a week's time.",
      icon: LaptopCodeIcon,
    },
    {
      title: "White Labeled Solution",
      description:
        "Using Progressive Web provide a customised value add to your users.",
      icon: TrophyIcon,
    },
    {
      title: "Extremely Low Cost",
      description:
        "If your volumes are high cost can go as low as 10 INR / user / month",
      icon: MoneyBillWaveIcon,
    },
    {
      title: "No Manual Intervention Required",
      description:
        "Our automated solution gives apersonalised diet plan based on health conditions, BMI, etc without human intervention.",
      icon: CheckIcon,
    },
    {
      title: "Nutriscore Algorthm",
      description:
        "We have categorised 25,000+ grocery items & food chains to eat healthy food outside.",
      icon: CheckIcon,
    },
  ],
};

const metricsContent = {
  text: "We have helped 100+ dietitians to scale their business",
};

const techIntegrationContent = [
  {
    title: "API Integration Available",
    description:
      "We can be your backend support also using API integration if required.",
    icon: LaptopCodeIcon,
  },
  {
    title: "Add Ons like Dietitian Support",
    description:
      "We have in-house dieticians available for support. Schedule a meeting or interact on WhatsApp.",
    icon: LockIcon,
  },
  {
    title: "Comprehensive Analytics Dashboard",
    description:
      "We have a daily dashboard available to check registration, usage and demographics data of users.",
    icon: ChartIcon,
  },
];

const secureContent = {
  title: "Your Data is 100% Secure",
  description:
    "We understand you are concerned about your data privacy thats why we have Multi-layer security",
  icon: "book",
  features: [
    {
      title: "End to End Encryption",
    },
    {
      title: "Amazon Web Services",
    },
    {
      title: "Credflow Assurance",
    },
  ],
};

const clientsContent = {
  title: "JOIN 15+ COMPANIES ALREADY USING",
  listOfClients: [
    {
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",
      name: "PayTM",
    },
    {
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",
      name: "PayTM",
    },
    {
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",
      name: "PayTM",
    },
    {
      logoURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png",
      name: "PayTM",
    },
  ],
};

const pricingContent = {
  title: "Pricing",
  largeText: "Pricing Plans for Every Organisation",
  plans: [
    {
      title: "Complete Plan",
      price: "50,000",
      duration: "month",
      description: "Ideal for businesses with complete needs.",
      features: [
        {
          icon: CheckIcon,
          text: "All Essential Plan features",
        },
        {
          icon: CheckIcon,
          text: "Dietitian Platform Available",
        },
        {
          icon: CheckIcon,
          text: "Comprehensive Data Analytics Dashboard",
        },
        {
          icon: CheckIcon,
          text: "250 dieticians call per month",
        },

        {
          icon: CheckIcon,
          text: "Priority 24/7 Customer Support",
        },
      ],
      buttonText: "Get Started",
      buttonLink: "https://credflow.in/",
      bottomText: "No credit card required",
    },

    {
      title: "Essential Plan",
      price: "25,000",
      duration: "month",
      description: "Perfect for startups and small businesses.",
      features: [
        {
          icon: CheckIcon,
          text: "Diet Planning Tool",
        },
        {
          icon: CheckIcon,
          text: "Integration Support",
        },
        {
          icon: CheckIcon,
          text: "White Labeled Solution",
        },
        {
          icon: CheckIcon,
          text: "Basic Custom Brand UI",
        },
        {
          icon: CheckIcon,
          text: "Priority 24/7 Customer Support",
        },
        {
          icon: CheckIcon,
          text: "Diet Planning Customisations",
        },
      ],
      buttonText: "Get Started",
      buttonLink: "https://credflow.in/",
      bottomText: "No Credit Card Required",
    },

    {
      title: "Enterprise Plan",
      price: "On Request",
      duration: "month",
      description: "For companies seeking scalable custom solutions.",
      features: [
        {
          icon: CheckIcon,
          text: "All Essential Plan features",
        },
        {
          icon: CheckIcon,
          text: "Comprehensive Data Analytics Dashboard",
        },
        {
          icon: CheckIcon,
          text: "Dietitian Platform Available",
        },
        {
          icon: CheckIcon,

          text: "Direct Co-Founder Support",
        },
        {
          icon: CheckIcon,
          text: "Priority 24/7 Customer Support",
        },
      ],
      buttonText: "Get Started",
      buttonLink: "https://credflow.in/",
      bottomText: "No credit card required",
    },
  ],
};

const testimonialsContent = {
  title: "What our customers are saying",
  testimonials: [
    {
      name: "Rahul",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },

    {
      name: "Mathew",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
    },
    {
      name: "Mathew",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
    },
    {
      name: "Mathew",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
    },
    {
      name: "Mathew",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident, magni beatae saepe porro aspernatur facere neque sunt possimus assumenda perspiciatis aperiam quisquam animi libero voluptatem fuga. Repudiandae, facere? Nemo reprehenderit quas ratione quis.",
    },
    {
      name: "Mathew",
      designation: "CEO, Credflow",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae ",
    },
  ],
};

const footerContent = {
  name: "Appneurons Technologies Pvt. Ltd.",
  socialLinks: [
    {
      name: "facebook",
      href: "https://www.facebook.com/credflow",
      icon: FacebookIcon,
    },
    {
      name: "twitter",
      href: "https://twitter.com/credflow",
      icon: TwitterIcon,
    },
    {
      name: "hrefedin",
      href: "https://www.hrefedin.com/company/credflow/",
      icon: LinkedinIcon,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/credflow/",
      icon: InstagramIcon,
    },
  ],
};

export {
  faqs,
  navLinks,
  homeContent,
  featuresSection,
  metricsContent,
  techIntegrationContent,
  secureContent,
  clientsContent,
  testimonialsContent,
  pricingContent,
  footerContent,
};
