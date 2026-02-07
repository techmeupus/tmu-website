import Link from 'next/link';

export default function DigitalMarketing() {
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
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
              <span className="text-gray-300 text-sm font-medium tracking-wider">GROWTH MARKETING</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight tracking-tight">
              Digital
              <span className="block mt-2 font-normal bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
            
            <div className="max-w-2xl">
              <p className="text-xl text-gray-300 leading-relaxed font-light mb-8 border-l-4 border-indigo-500 pl-6 py-2">
                Visibility alone does not drive growth. What matters is attracting the right audience, 
                guiding them through clear journeys, and converting attention into measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Performance Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight tracking-tight">
                  Performance-Driven Marketing
                </h2>
                <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-400 mb-8"></div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    TechmeUP delivers data-driven digital marketing solutions focused on performance, 
                    accountability, and sustainable growth. This service is built for businesses that 
                    expect marketing to contribute directly to revenue—not just impressions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Executive Snapshot</h3>
                      <p className="text-gray-600 text-sm">
                        TechmeUP approaches digital marketing as a revenue support function. 
                        Our strategies are built around intent, conversion, and long-term growth.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">Partnership Value</h3>
                      <p className="text-gray-600 text-sm">
                        Leadership teams partner with us to gain clarity, control, and consistency 
                        across their digital marketing efforts.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Marketing Challenges */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Common Marketing Challenges</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "High traffic, low-quality leads",
                      "Rising ad spend without ROI",
                      "Poor local visibility",
                      "Websites rank but don't convert",
                      "Disconnected campaigns",
                      "Unclear performance metrics"
                    ].map((challenge, i) => (
                      <div key={i} className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            
            {/* Performance Metrics */}
            <div className="space-y-6">
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">3-5x</div>
                <div className="text-sm font-medium text-gray-500">ROI Increase</div>
                <p className="text-xs text-gray-500 mt-2">Performance-driven campaigns</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">+45%</div>
                <div className="text-sm font-medium text-gray-500">Conversion Rate</div>
                <p className="text-xs text-gray-500 mt-2">Optimized user journeys</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900 mb-2">-40%</div>
                <div className="text-sm font-medium text-gray-500">Cost Per Lead</div>
                <p className="text-xs text-gray-500 mt-2">Efficient acquisition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-6">Who This Service Is Designed For</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              This service is built for businesses that expect marketing to contribute 
              directly to revenue—not just impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "🏢", title: "SMBs", desc: "Predictable lead generation" },
              { icon: "📍", title: "Local Businesses", desc: "Dominate search visibility" },
              { icon: "🛠️", title: "Service Companies", desc: "Scale acquisition efforts" },
              { icon: "🎯", title: "Brands Launching", desc: "New offerings or markets" },
              { icon: "📊", title: "Organizations", desc: "Seeking marketing accountability" }
            ].map((target, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                <div className="text-3xl mb-4">{target.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{target.title}</h3>
                <p className="text-indigo-100 text-sm">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Channels */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center mb-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <span className="mx-4 text-sm font-semibold text-gray-500 tracking-wider">GROWTH CHANNELS</span>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Comprehensive Marketing Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We manage performance-focused marketing channels designed to deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paid Search & Google Ads",
                desc: "We manage search advertising campaigns designed to capture high-intent demand at the right moment.",
                items: [
                  "Keyword and intent analysis",
                  "Campaign structure and bidding",
                  "Conversion tracking optimization",
                  "Budget control and ROI reporting"
                ],
                iconColor: "indigo"
              },
              {
                title: "Local Visibility",
                desc: "For location-driven businesses, local presence is critical to attracting nearby customers.",
                items: [
                  "Google Business Profile optimization",
                  "Local keyword targeting",
                  "Review strategy and management",
                  "Map pack ranking support"
                ],
                iconColor: "emerald"
              },
              {
                title: "Website SEO",
                desc: "SEO is a long-term growth asset when built correctly and focused on converting keywords.",
                items: [
                  "Technical SEO audits and fixes",
                  "On-page optimization",
                  "Site structure improvements",
                  "Performance optimization"
                ],
                iconColor: "blue"
              },
              {
                title: "Social Media Marketing",
                desc: "Social media supports brand awareness, engagement, and trust-building with your audience.",
                items: [
                  "Profile optimization",
                  "Content strategy alignment",
                  "Engagement-focused posting",
                  "Platform-specific growth"
                ],
                iconColor: "pink"
              },
              {
                title: "Conversion Landing Pages",
                desc: "Traffic without conversion is wasted potential. We design pages specifically for lead generation.",
                items: [
                  "Clear value propositions",
                  "Conversion-optimized layouts",
                  "Form and CTA optimization",
                  "CRM and automation integration"
                ],
                iconColor: "purple"
              }
            ].map((channel, i) => (
              <div key={i} className="group bg-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-8">
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-${channel.iconColor}-100 flex items-center justify-center mr-4`}>
                      <svg className={`w-6 h-6 text-${channel.iconColor}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{channel.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">Performance-focused</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{channel.desc}</p>
                  
                  <div className="space-y-3">
                    {channel.items.map((item, j) => (
                      <div key={j} className="flex items-center">
                        <div className={`w-2 h-2 rounded-full bg-${channel.iconColor}-400 mr-3`}></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Measurement & Analytics Card */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-gray-900 to-indigo-900 rounded-2xl p-10 text-white">
                <div className="flex items-start mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 mr-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">How We Measure Marketing Success</h3>
                    <p className="text-indigo-100">
                      Marketing performance is tracked against business outcomes, not assumptions. 
                      Decisions are driven by data, testing, and measurable results.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: "Lead Quality", desc: "Conversion rate analysis" },
                    { title: "Cost Efficiency", desc: "Cost per acquisition" },
                    { title: "Channel Insights", desc: "Performance analytics" },
                    { title: "Continuous Optimization", desc: "Data-driven improvements" }
                  ].map((metric, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <h4 className="text-lg font-semibold mb-2">{metric.title}</h4>
                      <p className="text-indigo-100 text-sm">{metric.desc}</p>
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
                q: "Do you focus on traffic or conversions?", 
                a: "Our primary focus is on qualified traffic and conversions. Visibility is valuable only when it leads to measurable business outcomes." 
              },
              { 
                q: "Can digital marketing work for local businesses?", 
                a: "Yes. Local SEO and Google Business optimization are highly effective for location-based services when executed correctly." 
              },
              { 
                q: "Do you provide landing pages as part of marketing campaigns?", 
                a: "Yes. We design and optimize landing pages specifically for lead generation and campaign performance." 
              },
              { 
                q: "How long does it take to see results?", 
                a: "Paid campaigns can generate results quickly, while SEO typically delivers compounding results over the medium to long term." 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-8 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.q}</h3>
                    <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="w-8 h-0.5 bg-indigo-400"></div>
            <span className="mx-4 text-sm font-semibold text-indigo-300 tracking-wider">GET STARTED</span>
            <div className="w-8 h-0.5 bg-indigo-400"></div>
          </div>
          
          <h2 className="text-4xl font-light text-white mb-8">
            Turn Visibility Into Predictable Growth
          </h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-gray-700">
            <p className="text-xl text-gray-300 leading-relaxed">
              Digital marketing should be measurable, strategic, and aligned with business goals. 
              TechmeUP helps organizations convert visibility into qualified leads and long-term 
              customer relationships.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105"
            >
              Start Growing Today
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