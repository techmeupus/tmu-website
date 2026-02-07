import Link from 'next/link';

export default function WebSoftwareSolutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
              <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">Enterprise Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Web & Software<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
              Enterprise-grade websites and software applications engineered to support operational efficiency, 
              scalability, and long-term digital growth.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Built for Businesses That Demand Excellence
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A strong digital foundation is critical for modern organizations. Our Web & Software Solutions are designed 
                for businesses that require reliability, performance, and flexibility at scale.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We deliver structured, secure, and future-ready digital systems that integrate seamlessly with your existing 
                processes, prioritizing architecture, security, performance, and user experience.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
                <div className="space-y-6">
                  {[
                    { label: "Enterprise-Ready", value: "100%" },
                    { label: "Scalable Architecture", value: "100%" },
                    { label: "Security First", value: "100%" },
                    { label: "Performance Optimized", value: "100%" }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">{stat.label}</span>
                        <span className="text-sm font-bold text-blue-600">{stat.value}</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style={{width: stat.value}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Capabilities</h2>
            <p className="text-xl text-slate-600">Comprehensive solutions tailored to your business needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Business Websites",
                subtitle: "Basic to Enterprise-Level",
                desc: "Professional websites that serve as authoritative digital touchpoints for your brand.",
                items: ["Responsive, standards-compliant design", "SEO-structured architecture", "Brand-aligned UI/UX systems", "CRM-ready integrations", "Enterprise-grade security"],
                gradient: "from-blue-600 to-cyan-500"
              },
              {
                title: "E-Commerce Platforms",
                subtitle: "Scalable Revenue Systems",
                desc: "E-commerce platforms designed for stability, security, and sustained revenue growth.",
                items: ["WooCommerce, Shopify, custom platforms", "Advanced inventory management", "Secure payment integrations", "Optimized checkout flows", "High-traffic performance tuning"],
                gradient: "from-emerald-600 to-teal-500"
              },
              {
                title: "Custom Web Applications",
                subtitle: "Tailored Business Solutions",
                desc: "Custom applications to support complex business workflows and digital operations.",
                items: ["SaaS-based platforms", "Workflow automation systems", "CRM & ERP-aligned apps", "API-driven integrations", "Modern frameworks & clean code"],
                gradient: "from-purple-600 to-pink-500"
              },
              {
                title: "Client Portals & Dashboards",
                subtitle: "Secure Data Access",
                desc: "Role-based portals providing controlled access to business-critical data.",
                items: ["Role-based authentication", "Secure user management", "Analytics dashboards", "Workflow tracking", "External system integrations"],
                gradient: "from-orange-600 to-red-500"
              }
            ].map((capability, i) => (
              <div key={i} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 md:p-10">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${capability.gradient} mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{capability.title}</h3>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{capability.subtitle}</p>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{capability.desc}</p>
                  
                  <ul className="space-y-3">
                    {capability.items.map((item, j) => (
                      <li key={j} className="flex items-start group/item">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${capability.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                          <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-slate-700 group-hover/item:text-slate-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Delivery Framework</h2>
            <p className="text-xl text-slate-600">A proven, structured approach to project success</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            
            <div className="space-y-8">
              {[
                { phase: "01", title: "Discovery & Requirements", desc: "Business objectives, system requirements, and stakeholder alignment" },
                { phase: "02", title: "Technical Planning", desc: "Scalable system design and technology selection" },
                { phase: "03", title: "Design & Development", desc: "UI systems, backend development, and integration" },
                { phase: "04", title: "Quality Assurance", desc: "Security, performance, and cross-platform validation" },
                { phase: "05", title: "Deployment & Support", desc: "Launch management, monitoring, and continuous improvement" }
              ].map((step, i) => (
                <div key={i} className="relative flex items-start md:ml-16">
                  <div className="hidden md:flex absolute -left-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{step.phase}</span>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border border-slate-100">
                    <div className="md:hidden inline-block px-3 py-1 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-sm mb-4">{step.phase}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Partner With TechmeUP</h2>
            <p className="text-xl text-blue-200">Trusted by forward-thinking organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bespoke Solutions", desc: "Enterprise-ready, custom-built for your needs" },
              { title: "Scalable Architecture", desc: "Designed to grow with your business" },
              { title: "Security First", desc: "Built-in protection at every layer" },
              { title: "SEO Optimized", desc: "Performance and visibility from day one" },
              { title: "Transparent Process", desc: "Clear communication and project management" },
              { title: "Industry Expertise", desc: "Proven experience across sectors" }
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-200">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "What types of web solutions do you provide?", a: "We deliver corporate websites, e-commerce platforms, custom web applications, and secure portals designed for scalability and operational efficiency." },
              { q: "Are your solutions suitable for enterprise use?", a: "Yes. Our solutions follow enterprise-grade standards for security, performance, scalability, and system integration." },
              { q: "Can you modernize existing systems?", a: "Yes. We specialize in structured redesigns and optimizations that improve performance, usability, and technical stability without disrupting existing operations." },
              { q: "Do you support custom integrations?", a: "Absolutely. We develop API-driven integrations with CRMs, ERPs, payment systems, analytics tools, and third-party platforms." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Exceptional?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's discuss your web and software requirements and create solutions that drive your business forward.
          </p>
          <Link 
            href="/#contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
