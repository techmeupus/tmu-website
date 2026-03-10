// app/portfolio/PortfolioContent.tsx
'use client';

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

// Portfolio projects data with UPDATED URLs
const projects = [
  {
    id: 1,
    name: "Cinco",
    slug: "cinco",
    industry: "Sports / Entertainment",
    workDone: "Website Design & Development",
    description: "Professional website for soccer facility showcasing fields, leagues, and events.",
    image: "/portfolio/cinco.jpg",
    logo: "/portfolio/logos/cinco.svg",
    technologies: ["Node", "Figma", "SEO"],
    liveUrl: "https://cincosoccerlakeland.com/", // UPDATED URL
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
    description: "Scalable web platform for tech startup with complex functionality.",
    image: "/portfolio/clydios.jpg",
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
    image: "/portfolio/digital-sphere.jpg",
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
    image: "/portfolio/aj-fencing.jpg",
    logo: "/portfolio/logos/aj-fencing.svg",
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
    image: "/portfolio/esposito-fencing.jpg",
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
    image: "/portfolio/jnr-sounds.jpg",
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
    image: "/portfolio/protectify.jpg",
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
    image: "/portfolio/ziva-beauty.jpg",
    logo: "/portfolio/logos/ziva-beauty.svg",
    technologies: ["Shopify", "Branding", "E-commerce"],
    liveUrl: "https://www.facebook.com/Zivabeautyyy/",
    caseStudy: {
      problem: "Beauty brand needed a complete digital presence including e-commerce and brand identity.",
      solution: "Created cohesive branding with elegant website design and seamless shopping experience.",
      result: "Launched successful online store with 30% conversion rate from launch.",
      services: ["UI/UX Design", "Website Development", "Branding", "E-commerce"]
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

// Technologies data
const technologies = [
  { name: "WordPress", icon: "▹" },
  { name: "Next", icon: "▹" },
  { name: "Node", icon: "▹" },
  { name: "Shopify", icon: "▹" },
  { name: "SEO", icon: "▹" },
  { name: "Figma", icon: "▹" },
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
  const industries_filter = ["All", ...new Set(projects.map(p => p.industry))];
  
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
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">10+</div>
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
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === industry
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

      {/* Projects Grid - UPDATED: Direct links, no popup */}
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
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-400/30 group-hover:scale-110 transition-transform duration-500">
                    {project.name[0]}
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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

      {/* Industries Covered */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
            <h2 className="heading-lg mt-3 mb-4">Industries We Serve</h2>
            <p className="text-gray-600">
              From home services to tech startups, we've helped businesses across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 rounded-xl p-6 text-center group cursor-default"
              >
                <div className="text-2xl text-primary mb-2 group-hover:scale-110 transition-transform font-light">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-500">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tech Stack</span>
            <h2 className="heading-lg mt-3 mb-4">Technologies We Use</h2>
            <p className="text-gray-600">
              Modern tools and platforms to build exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="text-primary text-xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
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
                href="/contact" 
                className="group inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start a Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
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