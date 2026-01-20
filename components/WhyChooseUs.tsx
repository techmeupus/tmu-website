'use client';

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "One-Stop Tech Partner",
      description: "Everything you need under one roof - from websites to AI automation, saving you time and complexity.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Custom Solutions, Not Templates",
      description: "Tailored strategies and builds designed specifically for your business goals and industry needs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Scalable Monthly Plans",
      description: "Flexible pricing and services that grow with your business - no long-term contracts required.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Dedicated Support Team",
      description: "Direct access to experienced professionals who understand your business and respond quickly.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Results-Focused Approach",
      description: "We measure success by your growth - more leads, better conversions, and increased revenue.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Cutting-Edge Technology",
      description: "Stay ahead with the latest tools - AI, automation, cloud solutions, and modern frameworks.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const clientTypes = [
    {
      icon: "🏢",
      title: "Small & Medium Businesses",
      description: "Established businesses looking to modernize and scale operations"
    },
    {
      icon: "🚀",
      title: "Startups",
      description: "New ventures building their digital foundation from the ground up"
    },
    {
      icon: "🔧",
      title: "Local Service Businesses",
      description: "Service providers wanting to dominate their local market online"
    },
    {
      icon: "🛒",
      title: "E-commerce Brands",
      description: "Online retailers needing powerful platforms and marketing"
    },
    {
      icon: "💼",
      title: "Professionals & Consultants",
      description: "Independent experts establishing credibility and attracting clients"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Why Choose TechMeUp
            </span>
            <h2 className="heading-lg mb-6">
              Your Trusted Growth Partner in the Digital Age
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We don't just build websites or run ads - we become your dedicated technology partner, 
              combining strategy, execution, and ongoing support to drive real business results.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Transparent Communication</h3>
                  <p className="text-gray-600">Always know what we're working on, why it matters, and what results to expect.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">200+ successful projects delivered across diverse industries and business sizes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">Future-Ready Solutions</h3>
                  <p className="text-gray-600">Built to scale with your business using modern, maintainable technology.</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary">
              Start Your Project Today
            </button>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {feature.number}
                  </div>
                  <div className="bg-primary/10 rounded-lg p-2 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work With Section */}
        <div className="pt-12 border-t border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-3 block">
              Who We Work With
            </span>
            <h2 className="heading-md mb-6">
              Empowering Businesses Across Industries
            </h2>
            <p className="text-lg text-gray-600">
              From innovative startups to established enterprises, we partner with ambitious businesses 
              ready to leverage technology for growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-3">{client.icon}</div>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                  {client.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
