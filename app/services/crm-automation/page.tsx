import Link from 'next/link';

export default function CRMAutomation() {
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
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">CUSTOMER MANAGEMENT</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              CRM &
              <span className="block mt-2 font-normal bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-emerald-500 pl-6 py-2">
                Intelligent systems that centralize information, streamline workflows, and enable teams 
                to engage customers with speed and precision—focused on operational clarity, accountability, 
                and scalable customer management.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Executive Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Business-First Automation
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Disconnected systems, manual follow-ups, and scattered customer data slow growth. 
                    TechmeUP addresses these challenges by building CRM and automation systems that 
                    align directly with your sales processes and operational structure.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Executive Snapshot</h3>
                      <p className="text-gray-600 text-sm">
                        TechmeUP builds with a business-first mindset, prioritizing process alignment, 
                        data integrity, and scalability—ensuring automation supports growth rather than adding complexity.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Our Philosophy</h3>
                      <p className="text-gray-600 text-sm">
                        Our solutions are designed to evolve with your organization, providing long-term value 
                        instead of short-term fixes.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { label: "Lead Response", value: "5x Faster" },
                    { label: "Conversion", value: "+40%" },
                    { label: "Time Saved", value: "20hrs/week" },
                    { label: "Efficiency", value: "75%" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Challenges Sidebar */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Common Challenges</h3>
              <div className="space-y-4">
                {[
                  "Leads falling through cracks",
                  "No pipeline visibility",
                  "Manual tasks consuming hours",
                  "Inconsistent follow-ups",
                  "Data spread across tools"
                ].map((challenge, i) => (
                  <div key={i} className="flex items-center p-3 bg-white/50 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Impact */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <div className="container-custom max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-8">Who This Service Is Designed For</h2>
              
              <div className="space-y-6">
                {[
                  "Sales-driven organizations",
                  "Service-based businesses",
                  "Growing SMBs and startups",
                  "Enterprises seeking workflow efficiency",
                  "Teams using multiple disconnected tools"
                ].map((target, i) => (
                  <div key={i} className="flex items-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <svg className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg">{target}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-light mb-8">How Automation Impacts Business</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                With TechmeUP's CRM & Automation solutions, organizations typically achieve measurable 
                improvements across key operational areas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Faster Response", desc: "Immediate lead follow-ups and engagement" },
                  { title: "Productivity Boost", desc: "Sales teams focus on high-value activities" },
                  { title: "Consistent Experience", desc: "Reliable, timely customer communication" },
                  { title: "Pipeline Clarity", desc: "Real-time visibility and forecasting" }
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

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">WHAT WE BUILD</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Comprehensive CRM & Automation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored systems designed to centralize information and streamline workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Custom CRM Systems",
                subtitle: "Built for Your Business",
                desc: "We design CRM platforms tailored to how your business actually operates—rather than forcing adaptation to rigid tools.",
                items: [
                  "Centralized customer and lead databases",
                  "Custom fields, stages, and workflows",
                  "Role-based access and permissions",
                  "Integration with websites and third-party tools"
                ],
                iconColor: "emerald"
              },
              {
                title: "Lead Management",
                subtitle: "Intelligent Qualification",
                desc: "We implement structured lead management systems that improve response time and conversion rates.",
                items: [
                  "Automated lead capture from multiple sources",
                  "Lead scoring and prioritization",
                  "Assignment rules and ownership tracking",
                  "Real-time notifications and alerts"
                ],
                iconColor: "blue"
              },
              {
                title: "Sales Pipeline Visibility",
                subtitle: "Clear Decision-Making",
                desc: "Clear pipeline visibility enables better forecasting and decision-making.",
                items: [
                  "Custom sales stages",
                  "Deal tracking and status updates",
                  "Performance reporting and insights",
                  "Forecasting support for management"
                ],
                iconColor: "purple"
              },
              {
                title: "Workflow & Task Automation",
                subtitle: "Efficient Operations",
                desc: "We automate repetitive operational tasks to reduce errors and free up team capacity.",
                items: [
                  "Task creation and assignment",
                  "Approval workflows",
                  "Internal notifications and reminders",
                  "Cross-department process automation"
                ],
                iconColor: "orange"
              }
            ].map((capability, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-emerald-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${capability.iconColor}-100 flex items-center justify-center mr-4`}>
                      <svg className={`w-6 h-6 text-${capability.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={
                          i === 0 ? "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" :
                          i === 1 ? "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" :
                          i === 2 ? "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" :
                          "M13 10V3L4 14h7v7l9-11h-7z"
                        } />
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
                        <div className={`w-2 h-2 rounded-full bg-${capability.iconColor}-400 mr-3`}></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Email & SMS Automation - Additional Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-emerald-900 rounded-2xl overflow-hidden">
            <div className="p-10 md:p-12">
              <div className="flex items-start mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Email & SMS Automation</h3>
                  <p className="text-emerald-200">Consistent, timely communication critical to customer engagement</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Email and SMS campaign automation",
                  "Trigger-based follow-ups",
                  "Transactional notifications",
                  "CRM-driven personalization"
                ].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-emerald-100 text-sm italic">
                  All communication workflows are aligned with compliance and deliverability best practices.
                </p>
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
                q: "Do you build custom CRMs or customize existing platforms?", 
                a: "We primarily build custom CRM systems but can also extend or integrate with existing tools based on business requirements." 
              },
              { 
                q: "Can CRM automation integrate with our website and marketing tools?", 
                a: "Yes. We integrate CRMs with websites, landing pages, email platforms, payment systems, and third-party tools." 
              },
              { 
                q: "Is automation suitable for small teams?", 
                a: "Absolutely. Automation is especially valuable for small teams, helping them operate efficiently without increasing headcount." 
              },
              { 
                q: "Can workflows be modified later?", 
                a: "Yes. All workflows and automation rules are designed to be flexible and scalable as your processes evolve." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-8 h-0.5 bg-emerald-400"></div>
            <span className="mx-4 text-sm font-semibold text-emerald-300 tracking-wider">GET STARTED</span>
            <div className="w-8 h-0.5 bg-emerald-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Move From Manual to Intelligent Systems
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              If your teams are spending time on follow-ups, data updates, and repetitive tasks, 
              it's time to implement systems that work intelligently in the background.
            </p>
            <p className="text-gray-300 leading-relaxed">
              TechmeUP helps organizations replace fragmented tools with CRM and automation solutions 
              that improve visibility, execution speed, and customer engagement—without adding operational complexity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Schedule Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-gray-700 hover:border-white transition-all"
            >
              View All Solutions
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