// app/portfolio/PortfolioContent.tsx
'use client';

import { useState } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import Image from 'next/image';

// Portfolio projects data with CORRECTED image paths
const projects = [
  {
    id: 1,
    name: "Cinco",
    slug: "cinco",
    industry: "Sports / Entertainment",
    workDone: "Website Design & Development",
    description: "We made a complete website. With Scheduling, booking , games hosting and Complete business management Web Application. Need to focus more on the web app. Then the website.",
    image: "/image/portfolio/cinco.png",
    logo: "/logos/cinco.svg",
    technologies: ["Node", "Figma", "SEO"],
    liveUrl: "https://cincosoccerlakeland.com/",
    caseStudy: {
      problem: "Client needed a modern, professional website that showcases their soccer facilities and attracts players and event bookings.",
      solution: "Designed a clean, sports-oriented website with field information, scheduling, and easy contact options.",
      result: "Increased field rentals and league registrations with improved online presence.",
      services: ["UI/UX Design", "Website Development", "Local SEO"]
    }
  },
  {
    id: 2,
    name: "Clydios",
    slug: "clydios",
    industry: "Tech / Startup",
    workDone: "Web Platform",
    description: "Clydios is a CRM. we need to list the CRM features (First Ever CRM with complete automation, inbound and outbound functions including Ai automation for sales conversion and tracking. )",
    image: "/image/portfolio/clydios.png",
    logo: "/portfolio/logos/clydios.svg",
    technologies: ["Node", "Node.js", "MongoDB"],
    liveUrl: "https://clydios.com",
    caseStudy: {
      problem: "Startup needed a robust platform to launch their tech product with room for future scaling.",
      solution: "Built a scalable architecture with modern tech stack and intuitive user interface.",
      result: "Successfully launched MVP with 100+ early adopters in first month.",
      services: ["Web Development", "UI/UX Design", "Cloud Infrastructure"]
    }
  },
  {
    id: 3,
    name: "Digital Sphere",
    slug: "digital-sphere",
    industry: "Agency",
    workDone: "Website",
    description: "Creative agency website showcasing their portfolio and services.",
    image: "/image/portfolio/digitalSphere.png",
    logo: "/portfolio/logos/digital-sphere.svg",
    technologies: ["Next", "Figma", "Animation"],
    liveUrl: "https://digitalsphere.com",
    caseStudy: {
      problem: "Agency needed a visually stunning website to attract high-end clients.",
      solution: "Created an immersive experience with smooth animations and striking visuals.",
      result: "Award-winning design that helped them land 3 major clients.",
      services: ["UI/UX Design", "Website Development", "Motion Design"]
    }
  },
  {
    id: 4,
    name: "AJ Fencing",
    slug: "aj-fencing",
    industry: "Home Services",
    workDone: "Website + SEO",
    description: "Lead-generating website for fencing contractor with local SEO optimization.",
    image: "/image/portfolio/ajfence.png",
    logo: "/portfolio/logos/ajfence.png",
    technologies: ["WordPress", "SEO", "Local Business"],
    liveUrl: "https://ajfencemfg.com/",
    caseStudy: {
      problem: "Client needed a professional website to generate quality leads and establish trust.",
      solution: "Designed modern service website with mobile optimization and SEO-focused content.",
      result: "50% increase in online inquiries and top 3 Google rankings for local keywords.",
      services: ["UI/UX Design", "Website Development", "SEO Setup"]
    }
  },
  {
    id: 5,
    name: "Esposito Fencing",
    slug: "esposito-fencing",
    industry: "Home Services",
    workDone: "Website",
    description: "Clean, professional website for family-owned fencing business.",
    image: "/image/portfolio/esposito.png",
    logo: "/portfolio/logos/esposito-fencing.svg",
    technologies: ["WordPress", "Mobile Responsive"],
    liveUrl: "https://espositofencing.com/",
    caseStudy: {
      problem: "Family business needed to modernize their online presence and compete with larger companies.",
      solution: "Created a warm, trustworthy website highlighting their 20+ years of experience.",
      result: "Professional brand presence that doubled their service inquiries.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 6,
    name: "JnR Sounds",
    slug: "jnr-sounds",
    industry: "Entertainment",
    workDone: "Website",
    description: "Dynamic website for entertainment and sound production company.",
    image: "/image/portfolio/jr.png",
    logo: "/portfolio/logos/jnr-sounds.svg",
    technologies: ["Node", "Audio Integration", "CMS"],
    liveUrl: "https://thedigitalsphere.us/JnRSounds/",
    caseStudy: {
      problem: "Entertainment company needed a website that showcases their work and attracts event planners.",
      solution: "Built an immersive site with video backgrounds and audio samples.",
      result: "Increased booking inquiries by 75% within 3 months.",
      services: ["UI/UX Design", "Website Development", "Content Strategy"]
    }
  },
  {
    id: 7,
    name: "Protectify",
    slug: "protectify",
    industry: "Security",
    workDone: "Website",
    description: "Professional website for security solutions provider.",
    image: "/image/portfolio/protectify2.png",
    logo: "/portfolio/logos/protectify.svg",
    technologies: ["Next.js", "Security Features", "Contact Forms"],
    liveUrl: "https://www.instagram.com/get_protectify/",
    caseStudy: {
      problem: "Security company needed a trustworthy, authoritative online presence.",
      solution: "Designed a clean, professional site highlighting their expertise and certifications.",
      result: "Established credibility and increased consultation requests by 60%.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 8,
    name: "Ziva Beauty",
    slug: "ziva-beauty",
    industry: "Beauty",
    workDone: "Website + Branding",
    description: "Elegant beauty brand website with complete branding package.",
    image: "/image/portfolio/ziva.jpeg",
    logo: "/portfolio/logos/ziva-beauty.svg",
    technologies: ["Shopify", "Branding", "E-commerce"],
    liveUrl: "https://www.facebook.com/Zivabeautyyy/",
    caseStudy: {
      problem: "Beauty brand needed a complete digital presence including e-commerce and brand identity.",
      solution: "Created cohesive branding with elegant website design and seamless shopping experience.",
      result: "Launched successful online store with 30% conversion rate from launch.",
      services: ["UI/UX Design", "Website Development", "Branding", "E-commerce"]
    }
  },
  // STEPHANIE'S CLIENTS (PERSONAL)
  {
    id: 9,
    name: "Level One Grading",
    slug: "level-one-grading",
    industry: "Construction / Landscaping",
    workDone: "Website",
    description: "Professional website for grading and excavation services.",
    image: "/image/portfolio/LevelOneGrading.png",
    logo: "/portfolio/logos/level-one-grading.svg",
    technologies: ["WordPress", "Mobile Responsive", "SEO"],
    liveUrl: "https://levelonegrading.com/",
    caseStudy: {
      problem: "Grading company needed a professional online presence to showcase their services and attract commercial clients.",
      solution: "Developed a clean, service-focused website highlighting their equipment, projects, and expertise.",
      result: "Established professional brand presence with increased quote requests.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 10,
    name: "Moulton's AC",
    slug: "moultons-ac",
    industry: "Home Services",
    workDone: "Website",
    description: "HVAC service website for heating and cooling company.",
    image: "/image/portfolio/Moulton’s AC.png",
    logo: "/portfolio/logos/moultons-ac.svg",
    technologies: ["WordPress", "Mobile Responsive", "Contact Forms"],
    liveUrl: "https://moultonsheatingandcooling.com/",
    caseStudy: {
      problem: "HVAC company needed to modernize their online presence and generate more service calls.",
      solution: "Created a user-friendly website with clear service offerings, emergency contact options, and seasonal specials.",
      result: "Improved local visibility and increased service appointment bookings.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 11,
    name: "Paradigm Landscape",
    slug: "paradigm-landscape",
    industry: "Landscaping",
    workDone: "Website",
    description: "Professional website for landscape design and maintenance services.",
    image: "/image/portfolio/Paradigm Landscape.png",
    logo: "/portfolio/logos/Paradigm Landscape.png",
    technologies: ["WordPress", "Gallery", "Mobile Responsive"],
    liveUrl: "https://paradigmlandscapeservices.com/",
    caseStudy: {
      problem: "Landscaping company needed a visually appealing website to showcase their work and attract residential clients.",
      solution: "Designed a beautiful portfolio-focused site with before/after galleries and service packages.",
      result: "Enhanced visual appeal led to more consultation requests and premium service bookings.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 12,
    name: "A&N HVAC",
    slug: "an-hvac",
    industry: "Home Services",
    workDone: "Website",
    description: "HVAC service website with multi-location presence.",
    image: "/image/portfolio/HNBC Florida.png",
    logo: "/portfolio/logos/HNBC Florida.png",
    technologies: ["WordPress", "Multi-location SEO", "Contact Forms"],
    // liveUrl: "https://frcsflorida.com/",
    caseStudy: {
      problem: "HVAC company needed a website that could handle multiple service locations and showcase their 24/7 emergency services.",
      solution: "Built a comprehensive site with location-specific pages and easy emergency contact features.",
      result: "Streamlined customer inquiries and improved emergency call response rates.",
      services: ["UI/UX Design", "Website Development", "Local SEO"]
    }
  },
  {
    id: 13,
    name: "RVP Training Center",
    slug: "rvp-training",
    industry: "Sports / Fitness",
    workDone: "Website",
    description: "Sports training facility website showcasing programs and schedules.",
    image: "/image/portfolio/RVP Training Center.png",
    logo: "/portfolio/logos/RVP Training Center.png",
    technologies: ["WordPress", "Calendar Integration", "Registration Forms"],
    liveUrl: "https://rvptrainingcenter.com/",
    caseStudy: {
      problem: "Training center needed a website to promote their programs, display schedules, and manage athlete registrations.",
      solution: "Created an engaging site with program details, training calendars, and online registration forms.",
      result: "Increased program sign-ups and streamlined the registration process.",
      services: ["UI/UX Design", "Website Development", "Registration System"]
    }
  },
  {
    id: 14,
    name: "CF Steel",
    slug: "cf-steel",
    industry: "Construction / Industrial",
    workDone: "Website",
    description: "Industrial website for steel supply and fabrication company.",
    image: "/image/portfolio/CF Steel.png",
    logo: "/portfolio/logos/CF Steel.png",
    technologies: ["WordPress", "Industrial", "Product Gallery"],
    liveUrl: "https://centralfloridasteel.net/",
    caseStudy: {
      problem: "Steel company needed an industrial-grade website to showcase their products and capabilities to commercial clients.",
      solution: "Developed a professional site with product catalogs, project galleries, and quote request forms.",
      result: "Enhanced B2B lead generation and established industry authority.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 15,
    name: "Ana Vargas - FRSC",
    slug: "ana-vargas-frsc",
    industry: "Real Estate / Property Management",
    workDone: "Website",
    description: "Professional real estate website for property management services.",
    image: "/image/portfolio/FRCS Florida.png",
    logo: "/portfolio/logos/FRCS Florida.png",
    technologies: ["WordPress", "Real Estate", "Contact Forms"],
    liveUrl: "https://frcsflorida.com/",
    caseStudy: {
      problem: "Real estate professional needed a dedicated online presence to showcase properties and attract clients.",
      solution: "Created a professional real estate site with property listings and easy contact options.",
      result: "Increased property inquiries and established stronger client trust.",
      services: ["UI/UX Design", "Website Development"]
    }
  },
  {
    id: 16,
    name: "FloGutters Man",
    slug: "flo-gutters",
    industry: "Home Services",
    workDone: "Website",
    description: "Service website for gutter installation and maintenance company.",
    image: "/image/portfolio/flo-gutters.png",
    logo: "/portfolio/logos/flo-gutters.svg",
    technologies: ["WordPress", "Local SEO", "Mobile Responsive"],
    liveUrl: "https://floguttersman.com/",
    caseStudy: {
      problem: "Gutter company needed a website to generate local leads and showcase their services.",
      solution: "Built a straightforward service site with clear offerings, service areas, and quote request forms.",
      result: "Improved local search visibility and consistent lead generation.",
      services: ["UI/UX Design", "Website Development", "Local SEO"]
    }
  },
  {
    id: 17,
    name: "YA Dosp",
    slug: "ya-dosp",
    industry: "Nonprofit / Religious",
    workDone: "Website",
    description: "Website for young adult ministry organization.",
    image: "/image/portfolio/ya-dosp.png",
    logo: "/portfolio/logos/ya-dosp.svg",
    technologies: ["WordPress", "Event Calendar", "Donation Forms"],
    liveUrl: "https://tampabaycatholicya.org/",
    caseStudy: {
      problem: "Young adult ministry needed a website to promote events, share resources, and engage the community.",
      solution: "Designed an inviting site with event calendars, photo galleries, and easy donation options.",
      result: "Increased event attendance and community engagement.",
      services: ["UI/UX Design", "Website Development", "Event Management"]
    }
  },
  {
    id: 18,
    name: "BSCC",
    slug: "bscc",
    industry: "Religious / Nonprofit",
    workDone: "Website",
    description: "Parish website for Blessed Sacrament Catholic Church.",
    image: "/image/portfolio/blessed sacrament catholic.png",
    logo: "/portfolio/logos/blessed sacrament catholic.png",
    technologies: ["WordPress", "Event Management", "Donation Integration"],
    liveUrl: "https://blessedsacramentcatholic.org/",
    caseStudy: {
      problem: "Church needed a modern website to share information, mass schedules, and connect with parishioners.",
      solution: "Created a welcoming, easy-to-navigate site with event calendars, bulletin uploads, and donation capabilities.",
      result: "Improved parishioner communication and streamlined information sharing.",
      services: ["UI/UX Design", "Website Development", "Content Management"]
    }
  }
];

// Industries data
const industries = [
  { name: "Home Services", count: "2 Projects", icon: "◉" },
  { name: "Security", count: "1 Project", icon: "□" },
  { name: "Beauty", count: "1 Project", icon: "○" },
  { name: "Entertainment", count: "2 Projects", icon: "△" },
  { name: "Agencies", count: "1 Project", icon: "◇" },
  { name: "Tech", count: "1 Project", icon: "⬟" },
];

// Updated Technologies data with categories
const technologyCategories = [
  {
    name: "Frontend",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "FastAPI" },
      { name: "GraphQL" }
    ]
  },
  {
    name: "Agentic Systems",
    technologies: [
      { name: "LangGraph" },
      { name: "CrewAI" },
      { name: "AutoGen" },
      { name: "LangChain" }
    ]
  },
  {
    name: "LLM Platforms",
    technologies: [
      { name: "OpenAI" },
      { name: "Anthropic" },
      { name: "Mistral" },
      { name: "Llama" }
    ]
  },
  {
    name: "Knowledge AI",
    technologies: [
      { name: "Pinecone" },
      { name: "Weaviate" },
      { name: "FAISS" },
      { name: "Chroma" }
    ]
  },
  {
    name: "Cloud & Infra",
    technologies: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Vercel" }
    ]
  },
  {
    name: "Marketing",
    technologies: [
      { name: "Google Ads" },
      { name: "Meta Ads" },
      { name: "Analytics" },
      { name: "HubSpot" }
    ]
  },
  {
    name: "CMS & E-commerce",
    technologies: [
      { name: "WordPress" },
      { name: "Shopify" },
      { name: "Sanity" },
      { name: "Contentful" }
    ]
  }
];

// Testimonials
const testimonials = [
  {
    text: "Great experience working with them. Our website looks amazing and works perfectly.",
    client: "AJ Fencing",
    role: "Owner"
  },
  {
    text: "TechMeUp transformed our online presence. The team is professional, creative, and delivered beyond our expectations.",
    client: "Ziva Beauty",
    role: "Founder"
  }
];

export default function PortfolioContent() {
  const [filter, setFilter] = useState("All");

  // Get unique industries for filter
  const uniqueIndustries = Array.from(new Set(projects.map(p => p.industry)));
  const industries_filter = ["All", ...uniqueIndustries];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.industry === filter);

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Soft gradient orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 py-24 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 text-sm mb-6 text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>•</span>
              <span>Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">Our</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              A selection of projects we've designed and developed for businesses across different industries.
              Each project represents our commitment to excellence and innovation.
            </p>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-xs md:text-sm text-gray-400">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">8+</div>
                <div className="text-xs md:text-sm text-gray-400">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-xs md:text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries_filter.map((industry) => (
              <button
                key={industry}
                onClick={() => setFilter(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === industry
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - With Next.js Images */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
              >
                {/* Project Image with Next.js Image component */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show the letter placeholder
                      const parent = target.parentElement;
                      if (parent) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-400/30';
                        placeholder.textContent = project.name[0];
                        parent.appendChild(placeholder);
                      }
                    }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white font-semibold px-4 py-2 border-2 border-white rounded-lg">
                      Visit Live Site
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {project.industry.split('/')[0]}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{project.workDone}</span>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      Live Preview →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>



      {/* Technologies Used - REDESIGNED PROFESSIONAL VERSION */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto ">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Tech Stack</span>
            <h2 className="heading-lg mt-3 mb-4">Cutting-Edge Technology Ecosystem</h2>
            <p className="text-gray-600 text-lg">
              We leverage modern technologies across the full development stack to build scalable, intelligent, and high-performance solutions.
            </p>
          </div>

          {/* Technologies Used - ULTRA PREMIUM INTERACTIVE DESIGN */}
          <section className="section-padding bg-white relative overflow-hidden">



            <div className="container-custom relative z-10">

              {/* Interactive Technology Grid */}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {technologyCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Interactive Card */}
                    <div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden">

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      {/* Top accent bar - animated on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-primary to-secondary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                      {/* Category Header */}
                      <div className="relative px-6 py-6 border-b border-slate-100">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">{category.name}</h3>

                          {/* Interactive index number with subtle dot */}
                          <div className="flex items-center space-x-2">
                            <span className="text-3xl font-light text-slate-200 group-hover:text-primary/20 transition-colors duration-300">
                              {(categoryIndex + 1).toString().padStart(2, '0')}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300"></span>
                          </div>
                        </div>

                        {/* Decorative line */}
                        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                      </div>

                      {/* Technologies List - Interactive */}
                      <div className="p-6">
                        <div className="space-y-2">
                          {category.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                              viewport={{ once: true }}
                              className="relative"
                            >
                              <div className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-white group/tech transition-all duration-300 cursor-default border border-slate-100 hover:border-primary/20 hover:shadow-sm">

                                {/* Tech name with hover animation */}
                                <span className="text-sm font-medium text-slate-600 group-hover/tech:text-primary transition-all duration-300">
                                  {tech.name}
                                </span>

                                {/* Subtle decorative element - just a gentle glow */}
                                <div className="relative">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/tech:bg-primary/50 transition-all duration-300"></div>

                                  {/* Very subtle pulse effect on hover */}
                                  <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover/tech:scale-150 opacity-0 group-hover/tech:opacity-100 transition-all duration-500"></span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom gradient on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Decorative floating elements */}
                    <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                    <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-20"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 p-8 max-w-3xl mx-auto shadow-sm">
                  <div className="flex items-center justify-around">
                    {/* Stat 1 */}
                    <div className="text-center group/stat cursor-default">
                      <div className="relative inline-block">
                        <span className="text-3xl md:text-4xl font-bold text-slate-900 group-hover/stat:text-primary transition-colors duration-300">30+</span>
                        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2 font-light tracking-wide">Technologies Mastered</p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

                    {/* Stat 2 */}
                    <div className="text-center group/stat cursor-default">
                      <div className="relative inline-block">
                        <span className="text-3xl md:text-4xl font-bold text-slate-900 group-hover/stat:text-secondary transition-colors duration-300">8</span>
                        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-secondary rounded-full opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2 font-light tracking-wide">Specialized Categories</p>
                    </div>

                    {/* Divider */}
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

                    {/* Stat 3 */}
                    <div className="text-center group/stat cursor-default">
                      <div className="relative inline-block">
                        <span className="text-3xl md:text-4xl font-bold text-slate-900 group-hover/stat:text-primary transition-colors duration-300">100%</span>
                        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300"></span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2 font-light tracking-wide">Project Success</p>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-6 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary via-primary to-secondary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating interactive elements */}
              <div className="absolute top-20 left-10 w-32 h-32 border border-primary/5 rounded-full animate-pulse hidden lg:block"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 border border-secondary/5 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
            </div>
          </section>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/5 rounded-full px-6 py-3">
              <span className="text-primary">⚡</span>
              <span className="text-gray-700">
                <span className="font-bold text-primary">30+</span> technologies across <span className="font-bold text-primary">8</span> categories
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
            <h2 className="heading-lg mt-3 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                <p className="text-gray-700 italic mb-6 relative z-10">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.client}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Have a project in mind?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build something great together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="group inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start a Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}