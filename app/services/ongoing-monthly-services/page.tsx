import Link from 'next/link';

export default function OngoingMonthlyServices() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-teal-200 hover:text-white mb-12 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-teal-500/10 backdrop-blur-sm rounded-full border border-teal-400/30 mb-8">
              <div className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-teal-300 text-sm font-medium tracking-wider">CONTINUOUS SUPPORT</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              Ongoing
              <span className="block mt-2 font-normal bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Monthly Services
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-teal-100 leading-relaxed font-light mb-8 border-l-4 border-teal-500 pl-6 py-2">
                TechmeUP's Ongoing Monthly Services provide continuous support,
                optimization, and oversight to ensure your technology and business
                systems grow seamlessly alongside your organization.
              </p>
              <p className="text-lg text-teal-200">
                This service is built for businesses that require consistent performance, proactive
                maintenance, and expert guidance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-slate-900 mb-6 leading-tight tracking-tight">
                  Common Challenges Without Continuous Support
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 mb-8"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Organizations often face issues such as:
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Website downtime or outdated content</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Declining search visibility and inefficient ad campaigns</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">CRM systems not optimized for evolving processes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Workflow automation failures or errors</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Lack of timely technical support for emerging issues</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-slate-700">
                      TechmeUP mitigates these risks with structured monthly services,
                      ensuring systems remain optimized, secure, and effective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Executive Snapshot */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-900 to-emerald-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Executive Snapshot</h3>
                <p className="text-teal-100 text-sm">
                  TechmeUP's Ongoing Monthly Services act as an extension of your internal
                  team, providing strategic oversight, operational reliability, and
                  optimization. We focus on keeping your systems secure, efficient, and
                  growth-ready, enabling leadership to focus on business priorities.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                <p className="text-slate-700 text-sm">
                  Leadership teams rely on TechmeUP to implement systems that are
                  actionable, scalable, and aligned with core business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Service Capabilities */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Monthly Service Capabilities</h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Comprehensive monthly services designed to maintain and optimize your business systems
            </p>
          </div>

          {/* Website Maintenance & Updates */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Website Maintenance & Updates</h3>
                <p className="text-teal-200">Keep your website secure, functional, and up-to-date.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-teal-100 font-medium mb-3">Services include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Regular content and plugin updates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Performance monitoring and optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Security checks and patches</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">UX and technical improvements</span>
                </div>
              </div>
            </div>
          </div>

          {/* SEO & Ads Management */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">SEO & Ads Management</h3>
                <p className="text-teal-200">Maintain visibility and drive consistent qualified traffic.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-teal-100 font-medium mb-3">Services include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Ongoing SEO optimization (technical and on-page)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Paid campaign management and performance tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Keyword and trend monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Analytics reporting and insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* CRM Management & Optimization */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">CRM Management & Optimization</h3>
                <p className="text-teal-200">Ensure your customer data systems are accurate, integrated, and actionable.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-teal-100 font-medium mb-3">Services include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Regular system health checks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Workflow optimization and updates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Integration with marketing and automation tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Reporting and performance dashboards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Automation Monitoring */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Automation Monitoring</h3>
                <p className="text-teal-200">Maintain smooth operations with automated processes running efficiently.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-teal-100 font-medium mb-3">Services include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Workflow and task automation monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Issue detection and resolution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Continuous improvement recommendations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Alignment with operational changes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Support & Consulting */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Technical Support & Consulting</h3>
                <p className="text-teal-200">Expert guidance whenever you need it.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-teal-100 font-medium mb-3">Services include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Troubleshooting and issue resolution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Strategic technology consulting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Vendor coordination and support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-teal-100">Proactive planning for system growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TechmeUP Supports Ongoing Success */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">How TechmeUP Supports Ongoing Success</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-teal-500 to-emerald-400 mb-8 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-teal-900 rounded-2xl p-10 text-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-2xl mb-8">
                With monthly services, organizations benefit from:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Risk Reduction", desc: "Reduced operational risks and downtime" },
                { title: "Proactive Care", desc: "Proactive maintenance and optimization" },
                { title: "Consistent Performance", desc: "Consistent performance across all digital assets" },
                { title: "Expert Access", desc: "Access to expert guidance without hiring full-time staff" },
                { title: "Goal Alignment", desc: "Alignment of technology with business goals" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-teal-100 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who This Service Is Designed For */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">Who This Service Is Designed For</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This service is ideal for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Businesses seeking predictable technology performance",
              "Companies without dedicated IT teams or marketing support",
              "Organizations using multiple integrated platforms",
              "Leaders who value continuous improvement and optimization"
            ].map((audience, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-teal-200 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-lg">{audience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-slate-300"></div>
              <span className="mx-4 text-sm font-semibold text-slate-500 tracking-wider">FAQ</span>
              <div className="w-12 h-0.5 bg-slate-300"></div>
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "What is included in monthly support?", 
                a: "Our monthly services cover website maintenance, SEO and ads management, CRM optimization, automation monitoring, and technical consulting." 
              },
              { 
                q: "How does this differ from one-time services?", 
                a: "Ongoing services ensure systems are continuously optimized, updated, and aligned with evolving business needs, unlike one-off projects." 
              },
              { 
                q: "Can services be customized?", 
                a: "Yes. We tailor the monthly plan to the specific needs, scale, and priorities of each client." 
              },
              { 
                q: "How do we track progress?", 
                a: "Clients receive regular reports, insights, and recommendations, ensuring transparency and measurable value." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-teal-200 transition-colors">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-8 pb-8 pt-2 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]"></div>
        
        <div className="container-custom max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center mb-8">
            <div className="w-8 h-0.5 bg-teal-400"></div>
            <span className="mx-4 text-sm font-semibold text-teal-300 tracking-wider">CONTINUOUS OPTIMIZATION</span>
            <div className="w-8 h-0.5 bg-teal-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Continuous Optimization for Growth
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-teal-400/20">
            <p className="text-xl text-teal-100 leading-relaxed">
              TechmeUP ensures your technology, marketing, and operational systems
              remain effective, secure, and aligned with business goals through
              proactive, ongoing monthly services.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-teal-400/30 hover:border-white transition-all"
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