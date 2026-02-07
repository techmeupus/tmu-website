import Link from 'next/link';

export default function BrandingBusinessPresence() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-orange-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-400/30 mb-6">
              <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Brand Identity</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Branding &<br />
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Business Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed font-light">
              Build a clear, professional brand presence that communicates credibility, consistency, and intent across every customer touchpoint.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Your Brand is Your Business Asset
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-orange-600 to-red-500 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A strong brand is not just visual—it is how your business is perceived, remembered, and trusted. We help organizations build brand systems that support growth, recognition, and trust.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                TechmeUP addresses gaps in brand consistency by aligning strategy, design, and execution into a unified brand system.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="text-4xl mb-2">🎨</div>
                <h3 className="font-bold text-slate-900 mb-1">Visual Identity</h3>
                <p className="text-sm text-slate-600">Cohesive brand assets</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="font-bold text-slate-900 mb-1">Digital Presence</h3>
                <p className="text-sm text-slate-600">Market-ready profiles</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-4xl mb-2">📄</div>
                <h3 className="font-bold text-slate-900 mb-1">Collateral</h3>
                <p className="text-sm text-slate-600">Professional materials</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                <div className="text-4xl mb-2">💡</div>
                <h3 className="font-bold text-slate-900 mb-1">Strategy</h3>
                <p className="text-sm text-slate-600">Clear positioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Brand Foundations We Build</h2>
            <p className="text-xl text-slate-600">Complete brand systems that inspire confidence</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Logo & Brand Identity",
                items: ["Logo design & variations", "Brand colors & typography", "Usage guidelines", "Scalable assets"],
                gradient: "from-orange-600 to-red-500"
              },
              {
                title: "Marketing Collateral",
                items: ["Flyers & brochures", "Digital presentations", "Promotional assets", "Brand consistency"],
                gradient: "from-blue-600 to-indigo-500"
              },
              {
                title: "Online Presence",
                items: ["Social profiles", "Business listings", "Visual standards", "Digital foundation"],
                gradient: "from-purple-600 to-pink-500"
              },
              {
                title: "Brand Strategy",
                items: ["Market positioning", "Target audience clarity", "Brand voice & messaging", "Long-term alignment"],
                gradient: "from-emerald-600 to-teal-500"
              }
            ].map((cap, i) => (
              <div key={i} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{cap.title}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${cap.gradient} flex items-center justify-center mr-3 mt-0.5`}>
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
              { q: "Do you only design logos or full brand systems?", a: "We primarily focus on complete brand systems, including identity, communication assets, and strategic direction." },
              { q: "Can you refresh an existing brand?", a: "Yes. We help modernize and realign existing brands while maintaining recognition and continuity." },
              { q: "Is brand strategy included?", a: "Yes. Brand strategy consulting is a core part of this service, ensuring visual elements align with business goals." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-orange-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Build a Brand That Inspires Confidence
          </h2>
          <p className="text-xl text-orange-100 mb-10 leading-relaxed">
            A professional brand presence sets the tone for trust, partnerships, and long-term growth.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            Start Your Brand Journey
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
