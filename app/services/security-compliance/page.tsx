import Link from 'next/link';

export default function SecurityCompliance() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-red-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-400/30 mb-6">
              <span className="text-red-300 text-sm font-semibold tracking-wider uppercase">Protection & Trust</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Security &<br />
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed font-light">
              Comprehensive security solutions that safeguard your systems, ensure compliance, and enable uninterrupted operations.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🛡️", title: "Protected", desc: "Multi-layer security protocols" },
              { icon: "✓", title: "Compliant", desc: "Industry standards aligned" },
              { icon: "⚡", title: "Always On", desc: "24/7 monitoring & support" }
            ].map((feature, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border border-red-100">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Security Capabilities</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "Website Security", items: ["Vulnerability scanning", "Firewall protection", "Threat monitoring", "Security patches"], gradient: "from-red-600 to-pink-500" },
              { title: "Malware Protection", items: ["Detection & removal", "Real-time scanning", "Threat blocking", "Security alerts"], gradient: "from-orange-600 to-red-500" },
              { title: "Data Backup", items: ["Automated backups", "Disaster recovery", "Quick restoration", "Data integrity"], gradient: "from-blue-600 to-cyan-500" },
              { title: "SSL & Domain", items: ["Certificate management", "Domain security", "Encryption setup", "Renewal automation"], gradient: "from-purple-600 to-pink-500" }
            ].map((cap, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-10">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-6`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
              { q: "Do you provide ongoing security monitoring?", a: "Yes. We continuously monitor systems, assess risks, and proactively prevent threats." },
              { q: "Can you handle compliance requirements?", a: "Yes. Our security solutions are aligned with regulatory standards relevant to your industry." },
              { q: "How fast can backups be restored?", a: "Recovery processes are designed to minimize downtime and restore critical data quickly." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Protect Your Digital Assets
          </h2>
          <p className="text-xl text-red-100 mb-10 leading-relaxed">
            Secure your systems, maintain compliance, and gain peace of mind with comprehensive security solutions.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
            Secure Your Business
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
