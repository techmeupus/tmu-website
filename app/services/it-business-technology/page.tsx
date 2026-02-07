import Link from 'next/link';

export default function ITBusinessTechnology() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <span className="text-purple-300 text-sm font-semibold tracking-wider uppercase">Infrastructure & Support</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              IT & Business<br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 leading-relaxed font-light">
              Reliable, enterprise-grade IT solutions that keep your operations running smoothly, securely, and without disruption.
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
                Your Extended IT Department
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Instead of fragmented tools and multiple vendors, we offer a centralized, structured approach to managing your core technology infrastructure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                TechmeUP acts as your extended IT function—bringing clarity, control, and continuity to your technology environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Uptime", value: "99.9%" },
                { label: "Response Time", value: "<1hr" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Issues Resolved", value: "95%" }
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Core IT Capabilities</h2>
            <p className="text-xl text-slate-600">Comprehensive technology management for modern businesses</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Business Communication",
                subtitle: "Professional Email Systems",
                items: ["Google Workspace & Microsoft 365", "Secure access control", "Email security & compliance", "Seamless migration support"],
                gradient: "from-purple-600 to-pink-500",
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              },
              {
                title: "Infrastructure & Cloud",
                subtitle: "Scalable Foundation",
                items: ["Domain & DNS management", "Secure hosting environments", "Cloud server setup", "Performance monitoring"],
                gradient: "from-blue-600 to-cyan-500",
                icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              },
              {
                title: "Data Protection",
                subtitle: "Security & Backup",
                items: ["Automated data backups", "Disaster recovery planning", "Access control & encryption", "Threat prevention"],
                gradient: "from-red-600 to-orange-500",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              },
              {
                title: "IT Consulting",
                subtitle: "Strategic Guidance",
                items: ["Infrastructure assessments", "Tool evaluation", "Cost optimization", "Growth planning"],
                gradient: "from-emerald-600 to-teal-500",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            ].map((cap, i) => (
              <div key={i} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative p-8 md:p-10">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cap.icon} />
                    </svg>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{cap.title}</h3>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{cap.subtitle}</p>
                  </div>
                  <ul className="space-y-3 mt-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose TechmeUP</h2>
            <p className="text-xl text-purple-200">Reliable IT partnership for growing businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Reduced downtime and faster resolution",
              "Single point of accountability",
              "Proactive monitoring & maintenance",
              "Expert guidance without full-time costs",
              "Scalable solutions that grow with you",
              "Clear visibility into your IT environment"
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-purple-100 leading-relaxed pt-1">{benefit}</p>
                </div>
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
              { q: "Do you replace the need for an in-house IT team?", a: "For many SMBs, yes. We act as an external IT partner, providing expertise, monitoring, and ongoing support without the cost of a full internal team." },
              { q: "Can you work with our existing tools and vendors?", a: "Yes. We assess and manage your current setup wherever possible, minimizing disruption while improving reliability and security." },
              { q: "Is this offered as a monthly service?", a: "Yes. Most clients engage TechmeUP on a monthly retainer for ongoing IT management and advisory support." },
              { q: "How do you handle downtime or urgent issues?", a: "We provide proactive monitoring and structured escalation to resolve issues quickly and reduce business impact." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Reliable IT Support?
          </h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed">
            Let's evaluate your current infrastructure and identify practical improvements that drive your business forward.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            Get Started Today
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
