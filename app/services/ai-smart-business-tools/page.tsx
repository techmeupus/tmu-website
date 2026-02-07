import Link from 'next/link';

export default function AISmartBusinessTools() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-cyan-200 hover:text-white mb-12 transition-colors group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-400/30 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-cyan-300 text-sm font-medium tracking-wider">INTELLIGENT AUTOMATION</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              AI &
              <span className="block mt-2 font-normal bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Smart Business Tools
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-cyan-100 leading-relaxed font-light mb-8 border-l-4 border-cyan-500 pl-6 py-2">
                TechmeUP leverages advanced AI solutions to help businesses automate
                repetitive tasks, enhance customer engagement, and gain actionable
                insights. Our AI-driven tools enable teams to operate more efficiently
                and make smarter decisions at scale.
              </p>
              <p className="text-lg text-cyan-200">
                This service is designed for businesses seeking operational efficiency,
                higher productivity, and a competitive advantage through intelligent
                automation.
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
                  Challenges Businesses Face Without AI
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mb-8"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Organizations often struggle with:
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Repetitive tasks consuming employee time</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Delayed or inconsistent customer responses</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Leads falling through the funnel due to manual processes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Lack of actionable insights from operational data</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-slate-700">Inefficient business workflows across departments</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-6">
                    <p className="text-slate-700">
                      TechmeUP addresses these challenges by integrating AI into business
                      processes, making operations faster, smarter, and more accurate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Executive Snapshot */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-900 to-blue-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Executive Snapshot</h3>
                <p className="text-cyan-100 text-sm">
                  TechmeUP provides AI and smart business tools that integrate seamlessly
                  into daily operations. Our approach emphasizes <strong>practical intelligence
                  over hype</strong>, ensuring that AI solutions drive measurable business
                  outcomes and enhance strategic decision-making.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl">
                <p className="text-slate-700 text-sm">
                  Leadership teams rely on TechmeUP to implement AI systems that are
                  actionable, scalable, and aligned with core business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Core AI Capabilities</h2>
            <p className="text-cyan-100 text-lg max-w-2xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </div>

          {/* AI Chatbots */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Chatbots for Websites</h3>
                <p className="text-cyan-200">Deliver intelligent, real-time interactions for website visitors.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-cyan-100 font-medium mb-3">Capabilities include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Conversational AI to guide and qualify visitors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Integration with CRM and lead management systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">24/7 automated support for common queries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Multilingual and context-aware responses</span>
                </div>
              </div>
            </div>
          </div>

          {/* Automated Customer Support */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Automated Customer Support</h3>
                <p className="text-cyan-200">Reduce response times and improve service consistency.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-cyan-100 font-medium mb-3">Features include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">AI-assisted ticketing systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Auto-response for common customer issues</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Seamless handoff to human agents when needed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Data-driven insights for support performance</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Lead Qualification */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI Lead Qualification</h3>
                <p className="text-cyan-200">Focus sales efforts on high-potential opportunities.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-cyan-100 font-medium mb-3">Functions include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Scoring leads based on behavior and engagement</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Automated prioritization and assignment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Insights into lead readiness and intent</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Integration with existing CRM systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Process Automation */}
          <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Business Process Automation</h3>
                <p className="text-cyan-200">Streamline internal operations and reduce manual workload.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-cyan-100 font-medium mb-3">Automation capabilities:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Task routing and workflow optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Approval automation and notifications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Reporting and performance dashboards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Cross-departmental process integration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Custom AI Tools for Operations */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Custom AI Tools for Operations</h3>
                <p className="text-cyan-200">Tailored AI solutions that address specific business challenges.</p>
              </div>
            </div>
            
            <div className="pl-16">
              <p className="text-cyan-100 font-medium mb-3">Applications include:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Predictive analytics for decision-making</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Operational forecasting and optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">Custom recommendation engines</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-cyan-100">AI-powered reporting and insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TechmeUP Transforms Business Operations */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-6">How TechmeUP Transforms Business Operations</h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-400 mb-8 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-cyan-900 rounded-2xl p-10 text-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-2xl mb-8">
                Our AI solutions do more than automate—they provide <strong>intelligence and clarity</strong>. 
                Organizations benefit from:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Faster Workflows", desc: "Faster operational workflows" },
                { title: "Better CX", desc: "Improved customer experience and satisfaction" },
                { title: "Smarter Decisions", desc: "Smarter, data-driven decisions" },
                { title: "Cost Reduction", desc: "Reduced operational costs and manual errors" },
                { title: "Scalable Systems", desc: "Scalable AI systems that grow with the business" }
              ].map((benefit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-cyan-100 text-sm">{benefit.desc}</p>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Businesses seeking operational efficiency",
              "Sales and support teams needing AI-powered automation",
              "Companies looking to enhance customer engagement",
              "Organizations ready to leverage AI for decision-making",
              "Enterprises aiming to gain a competitive edge through AI"
            ].map((audience, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-cyan-200 transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                q: "Can AI replace human employees?", 
                a: "AI is designed to assist and augment human work, not replace it. Our solutions reduce repetitive tasks and free employees for higher-value activities." 
              },
              { 
                q: "Do you integrate AI with existing systems?", 
                a: "Yes. We integrate AI tools with CRMs, websites, marketing platforms, and other business systems." 
              },
              { 
                q: "How quickly can AI tools be implemented?", 
                a: "Implementation timelines depend on the solution complexity, but many AI tools can be deployed and operational within weeks." 
              },
              { 
                q: "Are AI chatbots multilingual?", 
                a: "Yes. Our AI chatbots can handle multiple languages and provide context-aware responses." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-cyan-200 transition-colors">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-24 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]"></div>
        
        <div className="container-custom max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center mb-8">
            <div className="w-8 h-0.5 bg-cyan-400"></div>
            <span className="mx-4 text-sm font-semibold text-cyan-300 tracking-wider">ACCELERATE WITH AI</span>
            <div className="w-8 h-0.5 bg-cyan-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Accelerate Operations with AI
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-cyan-400/20">
            <p className="text-xl text-cyan-100 leading-relaxed">
              TechmeUP helps businesses leverage AI for smarter operations, faster processes, 
              and superior customer engagement—delivering measurable value and a competitive edge.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Explore AI Solutions
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-cyan-400/30 hover:border-white transition-all"
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