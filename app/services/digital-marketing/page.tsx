import Link from 'next/link';

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-indigo-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full border border-indigo-400/30 mb-6">
              <span className="text-indigo-300 text-sm font-semibold tracking-wider uppercase">Growth Marketing</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Digital<br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed font-light">
              Data-driven marketing strategies that convert visibility into qualified leads and long-term customer relationships.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Performance-Focused Marketing</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deliver measurable results through strategic campaigns that attract the right audience and drive sustainable growth.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "ROI Increase", value: "3-5x" },
              { metric: "Lead Quality", value: "+60%" },
              { metric: "Conversion Rate", value: "+45%" },
              { metric: "Cost Per Lead", value: "-40%" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="font-semibold text-slate-600">{stat.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Growth Channels</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "Google Ads & Search", items: ["High-intent keyword targeting", "Campaign optimization", "Conversion tracking", "ROI-focused reporting"], gradient: "from-indigo-600 to-purple-500" },
              { title: "Local SEO", items: ["Google Business optimization", "Local rankings", "Review management", "Map pack visibility"], gradient: "from-emerald-600 to-teal-500" },
              { title: "Website SEO", items: ["Technical audits", "On-page optimization", "Content strategy", "Performance tuning"], gradient: "from-blue-600 to-cyan-500" },
              { title: "Social Media", items: ["Profile optimization", "Content strategy", "Engagement growth", "Platform expertise"], gradient: "from-pink-600 to-rose-500" }
            ].map((channel, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${channel.gradient} mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{channel.title}</h3>
                <ul className="space-y-3">
                  {channel.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${channel.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do you focus on traffic or conversions?", a: "Our primary focus is on qualified traffic and conversions. Visibility is valuable only when it leads to measurable business outcomes." },
              { q: "Can digital marketing work for local businesses?", a: "Yes. Local SEO and Google Business optimization are highly effective for location-based services when executed correctly." },
              { q: "How long does it take to see results?", a: "Paid campaigns can generate results quickly, while SEO typically delivers compounding results over the medium to long term." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-indigo-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Turn Visibility Into Growth
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Partner with us to create marketing campaigns that deliver measurable results and sustainable growth.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            Start Growing Today
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
