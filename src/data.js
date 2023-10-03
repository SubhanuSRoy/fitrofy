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
    question: "How does Fitrofy help me?",
    answer:
      "With Fitrofy, you get an instant capability to provide diet planning solution to your customers. Hassle Free.",
  },
  {
    question: "Is my data secure with Fitrofy?",
    answer:
      "Yes, we do not take any personal information of your users, hence we don't have any access to the name, email, address, or the mobile of the users. Our data is 100% safe & secured in AWS India.",
  },
  {
    question: "How much time the integration will take?",
    answer:
      "If integrating with our white labeled Progressive Web App integration can happen in a week's time. Full support & documentation will be provided to your team for the integration.",
  },
  {
    question: "What is the pricing?",
    answer:
      "The pricing is given above in the pricing section. If you take just the tech based integration then it's only 25,000 INR per month for 1000 customers and after 1000 customers it's 20 INR per customer. So, pay as per use only & not extra.",
  },
  {
    question:
      "I am just experimenting, I don't know how many customers I'll get, what to do?",
    answer:
      "In this case you can take our essential plan for 3 months to figure out if it works for you which is approximately 75,000 INR.",
  },
  {
    question: "How do I get the data of my customers?",
    answer:
      "We give you back the data of your customers using a simple webhook. Now you can also get deeper insights about your customers like food eating type, diseases, etc.",
  },
];

const navLinks = [
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Clients",
    href: "/clients",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },

  {
    name: "FAQs",
    href: "/faqs",
  },
];

const homeContent = {
  title: "Add Diet Planning Tech Capability",
  description:
    "Make your platform a tech enabled dietitian in a week's time. We have a comprehensive tools for diet planning. ",
  cta: [
    {
      name: "Explainer Video",
      href: "https://www.youtube.com/watch?v=jPHjRidbIYU",
    },
    {
      name: "Get Free Demo",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSe-irOK28O-2j11MjjP8IDE8IGA-5tx7-hjwHkQ5YhMQ3AXhA/viewform",
    },
  ],
};

const featuresSection = {
  title: "Get AI Based Diet Planning Tool",
  description:
    "It's a low cost effective solution which can be completely designed as per the company's requirements.",
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

const oneLineContent = {
  text: "We have collaborated with 15+ organisations.",
};

const techIntegrationContent = [
  {
    title: "API Integration Available",
    description:
      "We can be your backend support also using API integration if required.",
    icon: LaptopCodeIcon,
  },
  {
    title: "Add-Ons like Dietitian Support",
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

const metricsContent = {
  facts: [
    {
      number: "4 Lakh+",
      text: "Downloads on app stores",
    },
    {
      number: "3000+",
      text: "Paid users on mobile app",
    },
    {
      number: "15+",
      text: "Tie-ups with other organisations",
    },
  ],
};

const secureContent = {
  title: "Your Data is 100% Secure",
  description:
    "We understand you are concerned about your data privacy thats why we have Multi-layer security",

  features: [
    {
      title: "End to End Encryption",
    },
    {
      title: "Amazon Web Services",
    },
    {
      title: "Fitrofy Assurance",
    },
  ],
};

const clientsContent = {
  title: "JOIN 15+ COMPANIES ALREADY USING",
  listOfClients: [
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/1.png",
      name: "Traya",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/2.png",
      name: "Shriram Group",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/3.png",
      name: "Healthians",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/4.png",
      name: "Kapiva",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/5.png",
      name: "Docco 360",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/6.png",
      name: "BeatO",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/7.png",
      name: "PayTM",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/8.png",
      name: "Newmi",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/9.png",
      name: "GoDigit",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/10.png",
      name: "Aditya Birla",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/11.png",
      name: "Onsurity",
    },
    {
      logoURL:
        "https://onboarding.smartdietplanner.com/sarthak/b2b_client_logos/12.png",
      name: "Infinite Health Studios",
    },
  ],
};

const pricingContent = {
  title: "Pricing",
  largeText: "Pricing Plans for Every Organisation",
  plans: [
    {
      title: "Tech + Dietitians Plan",
      price: "50,000",
      duration: "month",
      description: "Ideal for businesses with complete needs.",
      features: [
        {
          icon: CheckIcon,
          text: "All Essential Tech Plan features",
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
      buttonLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-irOK28O-2j11MjjP8IDE8IGA-5tx7-hjwHkQ5YhMQ3AXhA/viewform",
      bottomText: "No credit card required",
    },

    {
      title: "Essential Tech Plan",
      price: "25,000",
      duration: "month",
      description: "Perfect for startups and small businesses.",
      features: [
        {
          icon: CheckIcon,
          text: "Diet Planning for 1000 Users",
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
      buttonLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-irOK28O-2j11MjjP8IDE8IGA-5tx7-hjwHkQ5YhMQ3AXhA/viewform",
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
      buttonLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSe-irOK28O-2j11MjjP8IDE8IGA-5tx7-hjwHkQ5YhMQ3AXhA/viewform",
      bottomText: "No credit card required",
    },
  ],
};

const testimonialsContent = {
  title: "What our customers are saying",
  testimonials: [
    {
      name: "Apoorva (Sr Manager, Traya Health)",
      designation: "Sr Manager, Traya Health",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },

    {
      name: "Vaibhav (PM, BeatO)",
      designation: "Product Manager, BeatO",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      name: "Kapil (CMO, Infinite Health Studios)",
      designation: "Chief Marketing Officer, Infinite Health Studios",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ],
};

const subscribeContent = {
  title: "Subscribe to our newsletter",
  btnText: "Subscribe",
  inputPlaceholder: "Enter your email",
};

const footerContent = {
  name: "Appneurons Technologies Pvt. Ltd.",
  description: "We are a team of 10+ people working on this product.",
  socialLinks: [
    {
      name: "facebook",
      href: "https://www.facebook.com/fitrofy",
      icon: FacebookIcon,
    },
    {
      name: "hrefedin",
      href: "https://www.linkedin.com/company/77886256/admin/feed/posts/",
      icon: LinkedinIcon,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/fitrofy/",
      icon: InstagramIcon,
    },
  ],
  copyrightText:
    "Copyright 2023 © All rights reserved by “Appneurons Technologies Private Limited”",
  navLinkTitle: "Quick Links",
  navLinks: [
    { name: "About", href: "https://fitrofy.com/about-us/" },
    { name: "How it works?", href: "https://fitrofy.com/how-it-work/" },
    { name: "Blog", href: "https://fitrofy.com/blog/" },
    {
      name: "Terms & Conditions",
      href: "https://fitrofy.com/terms-conditions/",
    },
    { name: "Privacy Policy", href: "https://fitrofy.com/privacy-policy/" },
  ],
};

export {
  faqs,
  navLinks,
  homeContent,
  featuresSection,
  oneLineContent,
  techIntegrationContent,
  metricsContent,
  secureContent,
  clientsContent,
  testimonialsContent,
  pricingContent,
  subscribeContent,
  footerContent,
};
