import Link from 'next/link';

export default function SecurityCompliance() {
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
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">PROTECTION & TRUST</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              Security &
              <span className="block mt-2 font-normal bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-red-500 pl-6 py-2">
                Digital security and regulatory compliance are critical for protecting your business 
                assets and maintaining trust. TechmeUP provides comprehensive solutions that safeguard 
                your systems, ensure compliance, and enable uninterrupted operations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Security Challenges & Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  When Security Becomes a Concern
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-red-500 to-pink-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    This service is designed for businesses that need reliable protection without the 
                    complexity of managing multiple vendors. TechmeUP addresses security challenges 
                    by providing structured systems, proactive monitoring, and compliance alignment.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Executive Snapshot</h3>
                      <p className="text-gray-600 text-sm">
                        TechmeUP delivers security and compliance solutions with an enterprise-first 
                        mindset. We combine technical expertise, structured monitoring, and compliance 
                        alignment to protect digital assets and support business growth.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Our Promise</h3>
                      <p className="text-gray-600 text-sm">
                        Our clients rely on TechmeUP for predictable, risk-mitigated security outcomes 
                        and peace of mind in an increasingly complex digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Security Challenges */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Common Security Challenges</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Website vulnerabilities",
                      "Malware infections",
                      "Data breach risks",
                      "Lack of SSL protection",
                      "Inefficient backups",
                      "Compliance gaps"
                    ].map((challenge, i) => (
                      <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{challenge}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Security Stats */}
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm font-medium text-gray-500">Monitoring</div>
                <p className="text-xs text-gray-500 mt-2">Continuous threat detection</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">&lt; 1hr</div>
                <div className="text-sm font-medium text-gray-500">Response Time</div>
                <p className="text-xs text-gray-500 mt-2">Critical incident response</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-sm font-medium text-gray-500">Uptime Protection</div>
                <p className="text-xs text-gray-500 mt-2">System availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Businesses */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Who This Service Is Designed For</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ideal for businesses that require enterprise-grade security without enterprise-level complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "🌐", title: "Websites", desc: "Secure digital infrastructure" },
              { icon: "📋", title: "Compliance", desc: "Industry regulations" },
              { icon: "👁️", title: "Monitoring", desc: "Proactive threat detection" },
              { icon: "💾", title: "Backup", desc: "Reliable recovery systems" },
              { icon: "⚙️", title: "Operations", desc: "Simplified security management" }
            ].map((target, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-3xl mb-4">{target.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{target.title}</h3>
                <p className="text-red-100 text-sm">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">SECURITY CAPABILITIES</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Comprehensive Protection Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We integrate security best practices with operational simplicity for enterprise-grade protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Security Hardening",
                desc: "We fortify your web applications and infrastructure to prevent unauthorized access and cyberattacks.",
                items: [
                  "Vulnerability scanning and patching",
                  "Firewall and access control setup",
                  "Continuous monitoring for threats",
                  "Security audit and compliance checks"
                ],
                iconColor: "red"
              },
              {
                title: "Malware Cleanup & Protection",
                desc: "Proactive protection to remove existing threats and prevent future infections.",
                items: [
                  "Malware detection and removal",
                  "Scheduled system scans",
                  "Real-time threat blocking",
                  "Security alerts and reporting"
                ],
                iconColor: "orange"
              },
              {
                title: "SSL & Domain Security",
                desc: "Secure connections and protect your online presence with robust encryption.",
                items: [
                  "SSL certificate setup and renewal",
                  "Domain security and monitoring",
                  "Encryption mechanisms",
                  "Authentication protocols"
                ],
                iconColor: "blue"
              },
              {
                title: "Backup & Recovery Solutions",
                desc: "Ensure business continuity with structured backup and rapid recovery systems.",
                items: [
                  "Automated data backups",
                  "Disaster recovery planning",
                  "Fast restoration processes",
                  "Data integrity verification"
                ],
                iconColor: "purple"
              },
              {
                title: "Security Audits & Monitoring",
                desc: "Continuous assessment to maintain compliance and reduce organizational risk.",
                items: [
                  "Risk assessment and security audits",
                  "Compliance reporting",
                  "Ongoing system monitoring",
                  "Alert management and response"
                ],
                iconColor: "emerald"
              }
            ].map((capability, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-red-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${capability.iconColor}-100 flex items-center justify-center mr-4`}>
                      <svg className={`w-6 h-6 text-${capability.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{capability.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Enterprise-grade protection</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.desc}</p>
                  
                  <div className="space-y-3">
                    {capability.items.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${capability.iconColor}-400 mr-3`}></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Benefits Card */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl p-10 text-white">
                <div className="flex items-start mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-400 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">How TechmeUP Protects Your Business</h3>
                    <p className="text-red-100">
                      TechmeUP integrates security best practices with operational simplicity. 
                      Our approach ensures your systems are secure, resilient, and compliant 
                      without burdening internal teams.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: "Risk Reduction", desc: "Lower data breach likelihood" },
                    { title: "Compliance", desc: "Adherence to regulations" },
                    { title: "Visibility", desc: "Clear security posture view" },
                    { title: "Simplicity", desc: "Simplified security management" }
                  ].map((benefit, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-red-100 text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Professional Accordion */}
      <section className="py-24 bg-gray-50">
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
                q: "Do you provide ongoing security monitoring?", 
                a: "Yes. We continuously monitor systems, assess risks, and proactively prevent threats." 
              },
              { 
                q: "Can you handle compliance requirements?", 
                a: "Yes. Our security solutions are aligned with regulatory standards relevant to your industry." 
              },
              { 
                q: "How fast can backups be restored?", 
                a: "Recovery processes are designed to minimize downtime and restore critical data quickly." 
              },
              { 
                q: "Is website hardening included?", 
                a: "Yes. Website security hardening is a core part of our service to prevent vulnerabilities and attacks." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-8 h-0.5 bg-red-400"></div>
            <span className="mx-4 text-sm font-semibold text-red-300 tracking-wider">GET PROTECTED</span>
            <div className="w-8 h-0.5 bg-red-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Protect Your Digital Assets with TechmeUP
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700">
            <p className="text-xl text-gray-300 leading-relaxed">
              Secure your systems, maintain compliance, and gain peace of mind with 
              TechmeUP's comprehensive security and compliance solutions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Secure Your Business
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