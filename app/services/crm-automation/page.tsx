import Link from 'next/link';

export default function CRMAutomation() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgtOHYtOGg4ek0yIDEzNGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6bTAtMTBoLTh2LThoOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center text-emerald-200 hover:text-white mb-12 transition-all group">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-300 text-sm font-semibold tracking-wider uppercase">Customer Management</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              CRM &<br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed font-light">
              Intelligent systems that centralize information, streamline workflows, and enable teams to engage customers with speed and precision.
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
                From Manual Chaos to Intelligent Systems
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full mb-8"></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Disconnected systems, manual follow-ups, and scattered customer data slow growth. Our focus is not just automation—but operational clarity, accountability, and scalable customer management.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We build CRM and automation systems that align directly with your sales processes and operational structure.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Business Impact</h3>
              <div className="space-y-4">
                {[
                  { metric: "Faster Response", value: "5x" },
                  { metric: "Lead Conversion", value: "+40%" },
                  { metric: "Time Saved", value: "20hrs/week" },
                  { metric: "Pipeline Visibility", value: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl">
                    <span className="font-semibold text-slate-700">{stat.metric}</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Build</h2>
            <p className="text-xl text-slate-600">Tailored CRM and automation solutions for modern businesses</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Custom CRM Systems",
                subtitle: "Built for Your Business",
                items: ["Centralized customer databases", "Custom fields & workflows", "Role-based permissions", "Seamless integrations"],
                gradient: "from-emerald-600 to-teal-500",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              },
              {
                title: "Lead Management",
                subtitle: "Intelligent Qualification",
                items: ["Automated lead capture", "Smart scoring & prioritization", "Assignment rules", "Real-time notifications"],
                gradient: "from-blue-600 to-cyan-500",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "Sales Pipeline",
                subtitle: "Complete Visibility",
                items: ["Custom sales stages", "Deal tracking", "Performance insights", "Forecasting support"],
                gradient: "from-purple-600 to-pink-500",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Workflow Automation",
                subtitle: "Streamlined Operations",
                items: ["Task automation", "Approval workflows", "Smart notifications", "Cross-department sync"],
                gradient: "from-orange-600 to-red-500",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
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

      <section className="py-24 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Business Impact</h2>
            <p className="text-xl text-emerald-200">Measurable improvements across your operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Faster lead response times",
              "Improved sales productivity",
              "Better customer consistency",
              "Increased pipeline transparency",
              "Reduced manual processes",
              "Scalable growth systems"
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-emerald-100 leading-relaxed pt-1">{benefit}</p>
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
              { q: "Do you build custom CRMs or customize existing platforms?", a: "We primarily build custom CRM systems but can also extend or integrate with existing tools based on business requirements." },
              { q: "Can CRM automation integrate with our website and marketing tools?", a: "Yes. We integrate CRMs with websites, landing pages, email platforms, payment systems, and third-party tools." },
              { q: "Is automation suitable for small teams?", a: "Absolutely. Automation is especially valuable for small teams, helping them operate efficiently without increasing headcount." },
              { q: "Can workflows be modified later?", a: "Yes. All workflows and automation rules are designed to be flexible and scalable as your processes evolve." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-xl overflow-hidden hover:bg-slate-100 transition-colors">
                <summary className="flex items-center justify-between p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
                  <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <section className="py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC04di04aDh6TTIgMzRoLTh2LThoOHptMC0xMGgtOHYtOGg4em0wLTEwaC04di04aDh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Move to Intelligent Systems
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
            Replace fragmented tools with CRM and automation solutions that improve visibility, execution speed, and customer engagement.
          </p>
          <Link href="/#contact" className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all group">
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
