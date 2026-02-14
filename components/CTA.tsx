'use client';

export default function CTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-gray-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Let's discuss how our comprehensive technology solutions can help you achieve your goals. 
            Get a free consultation and discover the TechMeUp difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
              Schedule Free Consultation
            </button>
            <button className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-lg">
              View Our Portfolio
            </button>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:3023907520" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 group border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-gray-900 font-semibold">Talk to an Expert</div>
              {/* <div className="text-gray-600 text-sm mt-1">+1 (863) 333-1891</div> */}
            </a>

            <a href="mailto:Info@techmeup.us" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 group border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-gray-900 font-semibold">Get a Custom Proposal</div>
              {/* <div className="text-gray-600 text-sm mt-1">Info@techmeup.us</div> */}
            </a>

            <a href="https://techmeup.us" target="_blank" rel="noopener noreferrer" className="bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 group border border-gray-200">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-all">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="text-gray-900 font-semibold">Explore Our Work</div>
              {/* <div className="text-gray-600 text-sm mt-1">TechMeUp.us</div> */}
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-300">
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No Long-Term Contracts</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}