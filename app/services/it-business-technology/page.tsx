import Link from 'next/link';

export default function ITBusinessTechnology() {
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
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">INFRASTRUCTURE & SUPPORT</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              IT & Business
              <span className="block mt-2 font-normal bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-purple-500 pl-6 py-2">
                Stable IT systems are the backbone of every growing business. TechmeUP provides reliable, 
                enterprise-grade IT and business technology solutions that keep your operations running smoothly, 
                securely, and without disruption.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Centralized Technology Management
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-pink-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Instead of fragmented tools and multiple vendors, we offer a centralized, structured 
                    approach to managing your core technology infrastructure. TechmeUP addresses common 
                    business challenges by acting as your extended IT function—bringing clarity, control, 
                    and continuity to your technology environment.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Snapshot</h3>
                    <p className="text-gray-600 leading-relaxed">
                      TechmeUP operates as a long-term IT partner for businesses that value stability, 
                      security, and informed decision-making. We bring structure to IT environments through 
                      enterprise-grade tools, disciplined processes, and transparent communication.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Promise</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Business leaders rely on TechmeUP to maintain reliable systems today while preparing 
                      their technology foundation for future growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-sm font-medium text-gray-500">System Uptime</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">&lt; 1hr</div>
                <div className="text-sm font-medium text-gray-500">Response Time</div>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-500">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">CHALLENGES ADDRESSED</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">When IT Becomes a Bottleneck</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Many businesses struggle with technology challenges that hinder growth and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "System Downtime", desc: "Frequent outages or slow performance affecting productivity" },
              { title: "Security Risks", desc: "Unsecured data and unreliable backup systems" },
              { title: "Communication Issues", desc: "Poor email deliverability and access problems" },
              { title: "Rising Costs", desc: "Increasing IT expenses with no clear ownership or value" },
              { title: "Lack of Expertise", desc: "No internal guidance for technology decisions" },
              { title: "Vendor Complexity", desc: "Managing multiple tools and service providers" }
            ].map((challenge, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group hover:border-purple-200">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pt-1">{challenge.title}</h3>
                </div>
                <p className="text-gray-600">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Core IT Capabilities</h2>
            <p className="text-lg text-gray-600">Comprehensive technology management solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Business Communication & Access",
                subtitle: "Professional Email Systems",
                desc: "We set up and manage secure, domain-based business email environments.",
                items: [
                  "Google Workspace and Microsoft 365 configuration",
                  "Secure user access and permission control",
                  "Email security, spam protection, and compliance settings",
                  "Migration from existing email providers"
                ],
                iconColor: "purple"
              },
              {
                title: "Infrastructure & Cloud Operations",
                subtitle: "Technical Foundation",
                desc: "We manage the technical foundation that keeps your digital assets online and accessible.",
                items: [
                  "Domain and DNS management",
                  "Secure hosting environments",
                  "Cloud server and storage setup",
                  "Performance monitoring and uptime management"
                ],
                iconColor: "blue"
              },
              {
                title: "Data Protection & Security",
                subtitle: "Business Continuity",
                desc: "We implement structured security and backup frameworks designed to reduce risk and downtime.",
                items: [
                  "Automated data backups",
                  "Disaster recovery planning",
                  "Access control and encryption",
                  "Malware and threat prevention"
                ],
                iconColor: "red"
              },
              {
                title: "Technology Advisory & IT Consulting",
                subtitle: "Strategic Guidance",
                desc: "We support business leaders with clear, practical technology guidance.",
                items: [
                  "IT infrastructure assessments",
                  "Software and tool evaluation",
                  "Cost optimization strategies",
                  "Scalability and growth planning"
                ],
                iconColor: "emerald"
              }
            ].map((capability, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${capability.iconColor}-100 flex items-center justify-center mr-4`}>
                      <svg className={`w-6 h-6 text-${capability.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                        {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />}
                        {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                        {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{capability.title}</h3>
                      <p className="text-sm font-medium text-gray-500 mt-1">{capability.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.desc}</p>
                  
                  <div className="space-y-3">
                    {capability.items.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400 mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For & Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-8">Who This Service Is For</h2>
              
              <div className="space-y-6">
                {[
                  "SMBs without internal IT teams",
                  "Growing businesses scaling beyond 10-50 employees",
                  "Founders and operations leaders seeking stable IT systems",
                  "Organizations managing multiple tools and vendors"
                ].map((target, i) => (
                  <div key={i} className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <svg className="w-6 h-6 text-purple-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{target}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-light mb-8">How TechmeUP Supports Daily Operations</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Unlike traditional IT vendors, TechmeUP focuses on operational continuity. 
                Our role is to ensure technology supports your business—not disrupts it.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Reduced Downtime", desc: "Faster issue resolution and proactive maintenance" },
                  { title: "Single Accountability", desc: "One point of contact for all IT decisions" },
                  { title: "Proactive Monitoring", desc: "Continuous system oversight and maintenance" },
                  { title: "Clear Visibility", desc: "Transparent insights into your technology environment" }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Professional Accordion */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">FAQ</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "Do you replace the need for an in-house IT team?", 
                a: "For many SMBs, yes. We act as an external IT partner, providing expertise, monitoring, and ongoing support without the cost of a full internal team." 
              },
              { 
                q: "Can you work with our existing tools and vendors?", 
                a: "Yes. We assess and manage your current setup wherever possible, minimizing disruption while improving reliability and security." 
              },
              { 
                q: "Is this offered as a monthly service?", 
                a: "Yes. Most clients engage TechmeUP on a monthly retainer for ongoing IT management and advisory support." 
              },
              { 
                q: "How do you handle downtime or urgent issues?", 
                a: "We provide proactive monitoring and structured escalation to resolve issues quickly and reduce business impact." 
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 last:border-b-0">
                <details className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-purple-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-4">
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
            <div className="w-8 h-0.5 bg-purple-400"></div>
            <span className="mx-4 text-sm font-semibold text-purple-300 tracking-wider">GET STARTED</span>
            <div className="w-8 h-0.5 bg-purple-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Discuss Your IT Requirements
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              If your business requires dependable IT systems and expert oversight without complexity, 
              TechmeUP can help.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Engage with our team to evaluate your current infrastructure and identify practical improvements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-gray-700 hover:border-white transition-all"
            >
              View All Services
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