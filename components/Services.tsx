'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web & Software Solutions",
      description: "Custom-built websites and applications designed to elevate your brand and streamline operations with cutting-edge technology.",
      features: [
        "Business websites (basic to advanced)",
        "E-commerce platforms",
        "Custom web applications",
        "Client portals & dashboards",
        "Website redesign & optimization"
      ],
      color: "from-blue-500 to-cyan-500",
      link: "/services/web-software-solutions"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "IT & Business Technology",
      description: "Complete IT infrastructure solutions to keep your business running smoothly with enterprise-grade tools and expert support.",
      features: [
        "Business email setup (Google/Microsoft)",
        "Domain & hosting management",
        "Cloud setup & management",
        "Data backups & security",
        "Tech consulting for SMBs"
      ],
      color: "from-purple-500 to-pink-500",
      link: "/services/it-business-technology"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "CRM & Automation",
      description: "Intelligent systems that automate your workflows, manage leads effectively, and transform how you engage with customers.",
      features: [
        "Custom CRM development",
        "Lead management systems",
        "Sales pipeline tracking",
        "Workflow & task automation",
        "Email & SMS automation"
      ],
      color: "from-green-500 to-emerald-500",
      link: "/services/crm-automation"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Branding & Business Presence",
      description: "Professional brand identity and marketing materials that make a lasting impression and establish credibility in your market.",
      features: [
        "Logo design & brand identity",
        "Business email signatures",
        "Marketing materials (flyers, brochures)",
        "Online presence setup",
        "Brand strategy consulting"
      ],
      color: "from-orange-500 to-red-500",
      link: "/services/branding-business-presence"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility, drive qualified traffic, and convert visitors into loyal customers.",
      features: [
        "Google Ads setup & management",
        "Local SEO & Google Business optimization",
        "Website SEO (on-page & technical)",
        "Social media marketing (SMO)",
        "Landing pages for lead generation"
      ],
      color: "from-indigo-500 to-purple-500",
      link: "/services/digital-marketing"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security & Compliance",
      description: "Comprehensive security solutions to protect your digital assets, ensure compliance, and give you peace of mind.",
      features: [
        "Website security hardening",
        "Malware cleanup & protection",
        "SSL & domain security",
        "Backup & recovery solutions",
        "Security audits & monitoring"
      ],
      color: "from-red-500 to-pink-500",
      link: "/services/security-compliance"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI & Smart Business Tools",
      description: "Next-generation AI solutions that automate processes, enhance customer experience, and give your business a competitive edge.",
      features: [
        "AI chatbots for websites",
        "Automated customer support",
        "AI lead qualification",
        "Business process automation",
        "Custom AI tools for operations"
      ],
      color: "from-cyan-500 to-blue-500",
      link: "/services/ai-smart-business-tools"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Ongoing Monthly Services",
      description: "Continuous support and optimization to ensure your technology grows with your business and stays ahead of the curve.",
      features: [
        "Website maintenance & updates",
        "SEO & Ads management",
        "CRM management & optimization",
        "Automation monitoring",
        "Technical support & consulting"
      ],
      color: "from-teal-500 to-green-500",
      link: "/services/ongoing-monthly-services"
    }
  ];

  const scrollToForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Complete Business Solutions
          </span>
          <h2 className="heading-lg mb-6">
            Everything Your Business Needs to Thrive
          </h2>
          <p className="text-xl text-gray-600">
            From web development to AI automation, we provide end-to-end technology solutions 
            that help startups and SMBs scale efficiently and compete effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={service.link} className="text-primary font-semibold flex items-center group-hover:gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Need a custom solution? We've got you covered.</p>
          <button 
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4 cursor-pointer"
          >
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}