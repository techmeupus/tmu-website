import Link from 'next/link';

export default function BrandingBusinessPresence() {
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
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">BRAND IDENTITY</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              Branding &
              <span className="block mt-2 font-normal bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
                Business Presence
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-amber-500 pl-6 py-2">
                A strong brand is not just visual—it is how your business is perceived, remembered, 
                and trusted. TechmeUP helps organizations build a clear, professional brand presence 
                that communicates credibility, consistency, and intent across every customer touchpoint.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Why Branding Matters */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Why Brand Consistency Matters
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-orange-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Inconsistent branding creates confusion and weakens trust. TechmeUP addresses 
                    these gaps by aligning strategy, design, and execution into a unified brand system.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Executive Snapshot</h3>
                      <p className="text-gray-600 text-sm">
                        TechmeUP helps businesses present themselves with clarity and confidence. 
                        Our branding solutions focus on consistency, professionalism, and strategic alignment.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Business Value</h3>
                      <p className="text-gray-600 text-sm">
                        For leadership teams, branding becomes a business asset rather than a 
                        design exercise—ensuring your brand communicates trust at every interaction.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Brand Challenges */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Common Branding Challenges</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Logo no longer reflects vision",
                      "Disconnected marketing materials",
                      "No defined brand voice",
                      "Weak online presence",
                      "Difficulty standing out",
                      "Outdated visual identity"
                    ].map((challenge, i) => (
                      <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            
            {/* Brand Impact Stats */}
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
                <div className="text-sm font-medium text-gray-500">First Impressions</div>
                <p className="text-xs text-gray-500 mt-2">Based on visual branding</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">3.5x</div>
                <div className="text-sm font-medium text-gray-500">Recall Increase</div>
                <p className="text-xs text-gray-500 mt-2">Consistent branding impact</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">23%</div>
                <div className="text-sm font-medium text-gray-500">Revenue Boost</div>
                <p className="text-xs text-gray-500 mt-2">Strong brand correlation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Who This Service Is Designed For</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              This service is designed for businesses that want to look established, 
              cohesive, and market-ready from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "🚀", title: "New Businesses", desc: "Establishing their identity" },
              { icon: "📈", title: "Growing Companies", desc: "Seeking professional image" },
              { icon: "🔄", title: "SMBs Rebranding", desc: "Next growth phase" },
              { icon: "🤝", title: "Founders", desc: "Preparing for partnerships" },
              { icon: "🌍", title: "Market Entrants", desc: "Entering new markets" }
            ].map((target, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-3xl mb-4">{target.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{target.title}</h3>
                <p className="text-amber-100 text-sm">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Foundations */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">BRAND FOUNDATIONS</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Comprehensive Brand Systems</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine strategic thinking with execution-focused design to ensure every brand element serves a purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Logo Design & Brand Identity",
                desc: "We design brand identities that are clear, versatile, and aligned with your business positioning.",
                items: [
                  "Logo design and variations",
                  "Brand colors, typography, and visual system",
                  "Usage guidelines for consistency",
                  "Assets adaptable across digital and print"
                ],
                iconColor: "amber"
              },
              {
                title: "Business Communication Assets",
                desc: "Professional communication reinforces credibility in daily interactions.",
                items: [
                  "Branded business email signatures",
                  "Consistent formatting and design",
                  "Alignment with brand tone",
                  "Professional presentation standards"
                ],
                iconColor: "blue"
              },
              {
                title: "Marketing & Sales Collateral",
                desc: "We design marketing materials that support sales conversations and brand recall.",
                items: [
                  "Flyers and brochures",
                  "Digital presentations",
                  "Brand-aligned promotional assets",
                  "Clarity and usability focus"
                ],
                iconColor: "purple"
              },
              {
                title: "Online Presence Setup",
                desc: "Your online presence is often the first point of interaction with your brand.",
                items: [
                  "Brand-aligned social and business profiles",
                  "Consistent visual and messaging standards",
                  "Foundation setup for digital marketing",
                  "Professional and credible appearance"
                ],
                iconColor: "emerald"
              },
              {
                title: "Brand Strategy Consulting",
                desc: "Design without strategy leads to inconsistency. We provide brand consulting for market presence.",
                items: [
                  "Brand positioning and differentiation",
                  "Target audience clarity",
                  "Brand voice and messaging direction",
                  "Long-term brand alignment"
                ],
                iconColor: "red"
              }
            ].map((foundation, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-amber-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${foundation.iconColor}-100 flex items-center justify-center mr-4`}>
                      <svg className={`w-6 h-6 text-${foundation.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{foundation.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Complete brand solution</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{foundation.desc}</p>
                  
                  <div className="space-y-3">
                    {foundation.items.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${foundation.iconColor}-400 mr-3`}></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Our Approach Card */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-gray-900 to-amber-900 rounded-2xl p-10 text-white">
                <div className="flex items-start mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">How TechmeUP Approaches Branding</h3>
                    <p className="text-amber-100">
                      Branding at TechmeUP is structured and intentional. Rather than isolated visuals, 
                      we build brand systems that support growth, recognition, and trust.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Strategic", desc: "Business-aligned approach" },
                    { title: "Cohesive", desc: "Unified across touchpoints" },
                    { title: "Scalable", desc: "Grows with your business" }
                  ].map((principle, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
                      <p className="text-amber-100 text-sm">{principle.desc}</p>
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
                q: "Do you only design logos or full brand systems?", 
                a: "We primarily focus on complete brand systems, including identity, communication assets, and strategic direction." 
              },
              { 
                q: "Can you refresh an existing brand?", 
                a: "Yes. We help modernize and realign existing brands while maintaining recognition and continuity." 
              },
              { 
                q: "Is brand strategy included?", 
                a: "Yes. Brand strategy consulting is a core part of this service, ensuring visual elements align with business goals." 
              },
              { 
                q: "Can branding be done before website development?", 
                a: "Absolutely. In fact, a clear brand foundation improves website, marketing, and CRM outcomes." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-8 h-0.5 bg-amber-400"></div>
            <span className="mx-4 text-sm font-semibold text-amber-300 tracking-wider">GET STARTED</span>
            <div className="w-8 h-0.5 bg-amber-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Build a Brand That Inspires Confidence
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700">
            <p className="text-xl text-gray-300 leading-relaxed">
              A professional brand presence sets the tone for trust, partnerships, and long-term growth. 
              TechmeUP helps businesses establish a consistent, credible identity that supports every 
              stage of their journey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Start Brand Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-xl font-semibold border-2 border-gray-700 hover:border-white transition-all"
            >
              View Brand Examples
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