import Link from 'next/link';

export default function WebSoftwareSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sophisticated Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-12 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-gray-700 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">ENTERPRISE SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              Web & Software
              <span className="block mt-2 font-normal bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-blue-500 pl-6 py-2">
                Enterprise-grade websites and software applications engineered to support 
                operational efficiency, scalability, and long-term digital growth—delivered by TechmeUP.
              </p>
            </div>
          </div>
        </div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Elegant Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Built for <span className="font-normal">Modern Organizations</span>
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    A strong digital foundation is critical for modern organizations. TechmeUP's 
                    <strong className="font-semibold text-gray-800"> Web & Software Solutions</strong> are designed 
                    for businesses that require reliability, performance, and flexibility at scale.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We deliver structured, secure, and future-ready digital systems—ranging from 
                    corporate websites to complex web applications—that integrate seamlessly with 
                    your existing processes.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Enterprise", value: "100%" },
                    { label: "Scalability", value: "100%" },
                    { label: "Security", value: "100%" },
                    { label: "Performance", value: "100%" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Philosophy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our solutions prioritize architecture, security, performance, and user experience, 
                ensuring your digital assets deliver consistent business value rather than short-term 
                visual appeal.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🏗️", text: "Robust Architecture" },
                  { icon: "🛡️", text: "Enterprise Security" },
                  { icon: "⚡", text: "Optimal Performance" },
                  { icon: "🎯", text: "User-Centric Design" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 bg-white/50 rounded-lg">
                    <span className="text-xl mr-3">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Capabilities Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">OUR EXPERTISE</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Web & Software Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions engineered for operational efficiency and digital growth
            </p>
          </div>

          {/* Main Capabilities */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Business Websites",
                subtitle: "Basic to Enterprise-Level",
                desc: "Professional websites that serve as authoritative digital touchpoints for your brand.",
                highlights: ["Responsive design", "SEO architecture", "CRM integrations", "Enterprise security"],
                color: "blue"
              },
              {
                title: "E-Commerce Platforms",
                subtitle: "Scalable Revenue Systems",
                desc: "E-commerce platforms designed for stability, security, and sustained revenue growth.",
                highlights: ["Custom platforms", "Inventory management", "Secure payments", "High-traffic optimization"],
                color: "emerald"
              },
              {
                title: "Custom Web Applications",
                subtitle: "Tailored Business Solutions",
                desc: "Custom applications to support complex business workflows and digital operations.",
                highlights: ["SaaS platforms", "Workflow automation", "API integrations", "Modern frameworks"],
                color: "purple"
              },
              {
                title: "Client Portals & Dashboards",
                subtitle: "Secure Data Access",
                desc: "Role-based portals providing controlled access to business-critical data.",
                highlights: ["Role-based auth", "Secure management", "Analytics dashboards", "System integrations"],
                color: "orange"
              }
            ].map((capability, i) => (
              <div key={i} className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-${capability.color}-50 mb-6`}>
                    <svg className={`w-6 h-6 text-${capability.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-1">{capability.title}</h3>
                    <p className="text-sm font-medium text-gray-500">{capability.subtitle}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.desc}</p>
                  
                  <div className="space-y-2">
                    {capability.highlights.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-${capability.color}-500 mr-3`}></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Redesign Section - Elegant Card */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl overflow-hidden">
            <div className="p-10 md:p-12">
              <div className="flex items-start mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Website Redesign & Performance Optimization</h3>
                  <p className="text-blue-200">Structured redesign and optimization services focused on measurable improvement</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { title: "UX Refinement", desc: "Interface enhancement" },
                  { title: "Performance", desc: "Core Web Vitals" },
                  { title: "SEO Corrections", desc: "Structural optimization" },
                  { title: "Conversion", desc: "Pathway optimization" },
                  { title: "Security", desc: "Codebase hardening" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-white font-semibold mb-2">{item.title}</div>
                    <div className="text-blue-200 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-blue-100">
                  <span className="font-semibold">Objective:</span> Enhance performance and usability while preserving domain authority and existing traffic equity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries - Elegant Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Industries We Support</h2>
            <p className="text-lg text-gray-600">Proven experience across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Enterprise & Corporate", icon: "🏢", bg: "bg-blue-50", border: "border-blue-100" },
              { name: "SaaS & Technology", icon: "⚙️", bg: "bg-purple-50", border: "border-purple-100" },
              { name: "E-commerce & Retail", icon: "🛒", bg: "bg-emerald-50", border: "border-emerald-100" },
              { name: "Real Estate", icon: "🏗️", bg: "bg-orange-50", border: "border-orange-100" },
              { name: "Healthcare", icon: "🏥", bg: "bg-red-50", border: "border-red-100" },
              { name: "Education", icon: "🎓", bg: "bg-indigo-50", border: "border-indigo-100" },
              { name: "Professional Services", icon: "💼", bg: "bg-cyan-50", border: "border-cyan-100" },
              { name: "Financial Services", icon: "💰", bg: "bg-green-50", border: "border-green-100" }
            ].map((industry, i) => (
              <div key={i} className={`group ${industry.bg} rounded-xl border ${industry.border} p-6 hover:shadow-lg transition-all`}>
                <div className="flex items-center">
                  <div className="text-2xl mr-4">{industry.icon}</div>
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline - Sophisticated */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light mb-6">Our Delivery Framework</h2>
            <p className="text-gray-300">A structured, proven approach to project success</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/30 to-cyan-400/30"></div>
            
            <div className="space-y-12">
              {[
                { 
                  phase: "01", 
                  title: "Discovery & Requirements Analysis", 
                  desc: "Business objectives, system requirements, and stakeholder alignment" 
                },
                { 
                  phase: "02", 
                  title: "Technical Planning & Architecture", 
                  desc: "Scalable system design and technology selection" 
                },
                { 
                  phase: "03", 
                  title: "Design & Development", 
                  desc: "UI systems, backend development, and integration" 
                },
                { 
                  phase: "04", 
                  title: "Quality Assurance & Testing", 
                  desc: "Security, performance, and cross-platform validation" 
                },
                { 
                  phase: "05", 
                  title: "Deployment & Ongoing Support", 
                  desc: "Launch management, monitoring, and continuous improvement" 
                }
              ].map((step, i) => (
                <div key={i} className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="hidden md:block w-1/2"></div>
                  
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 items-center justify-center shadow-lg">
                    <span className="font-bold">{step.phase}</span>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
                      <div className="flex md:hidden items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-4">
                          <span className="font-bold">{step.phase}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner - Clean Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Why Partner With TechmeUP</h2>
            <p className="text-lg text-gray-600">Trusted by forward-thinking organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Bespoke Solutions", 
                desc: "Enterprise-ready, custom-built for your specific needs and requirements" 
              },
              { 
                title: "Scalable Architecture", 
                desc: "Designed to grow with your business, ensuring long-term viability" 
              },
              { 
                title: "Security First", 
                desc: "Built-in protection at every layer, following enterprise-grade standards" 
              },
              { 
                title: "SEO Optimized", 
                desc: "Performance and visibility built into the foundation from day one" 
              },
              { 
                title: "Transparent Process", 
                desc: "Clear communication and structured project management throughout" 
              },
              { 
                title: "Industry Expertise", 
                desc: "Proven experience across multiple industries and sectors" 
              }
            ].map((benefit, i) => (
              <div key={i} className="group p-8 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Elegant Accordion */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What types of web solutions do you provide?", 
                a: "We deliver corporate websites, e-commerce platforms, custom web applications, and secure portals designed for scalability and operational efficiency." 
              },
              { 
                q: "Are your solutions suitable for enterprise use?", 
                a: "Yes. Our solutions follow enterprise-grade standards for security, performance, scalability, and system integration." 
              },
              { 
                q: "Can you modernize existing systems?", 
                a: "Yes. We specialize in structured redesigns and optimizations that improve performance, usability, and technical stability without disrupting existing operations." 
              },
              { 
                q: "Do you support custom integrations?", 
                a: "Absolutely. We develop API-driven integrations with CRMs, ERPs, payment systems, analytics tools, and third-party platforms." 
              },
              { 
                q: "What level of post-launch support do you offer?", 
                a: "We provide ongoing maintenance, system monitoring, performance optimization, and feature enhancements based on business requirements." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-8 pb-8 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sophisticated CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]"></div>
        
        <div className="container-custom max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center mb-8">
            <div className="w-8 h-0.5 bg-blue-400"></div>
            <span className="mx-4 text-sm font-semibold text-blue-300 tracking-wider">GET STARTED</span>
            <div className="w-8 h-0.5 bg-blue-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Discuss Your Web & Software Requirements
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Engage with the TechmeUP team to assess your current digital infrastructure and 
            identify opportunities for scalable, high-performance solutions aligned with your business goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-gray-700 hover:border-white transition-all"
            >
              View Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}