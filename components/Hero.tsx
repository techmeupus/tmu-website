'use client';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-block bg-white/20 border border-white/30 rounded-full px-4 py-2 mb-6">
              <span className="text-white font-semibold text-sm">🚀 Complete Business Technology Partner</span>
            </div>
            
            <h1 className="heading-xl mb-6">
              Elevate Your Business With
              <span className="block text-secondary-light mt-2">Smart Tech Solutions</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From custom websites to AI automation, we deliver end-to-end technology solutions 
              that transform how startups and SMBs operate, grow, and succeed in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
                Get Free Consultation
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/30 text-lg">
                View Our Work
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-1">200+</div>
                <div className="text-white/70 text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-white/70 text-sm">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Dashboard */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-custom-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-navy">Business Growth Metrics</h3>
                  <div className="bg-primary/10 rounded-full p-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                
                {/* Metrics Visualization */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Website Traffic</span>
                    <span className="font-bold text-navy">+320%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-600">Lead Generation</span>
                    <span className="font-bold text-navy">+245%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-600">Automation Efficiency</span>
                    <span className="font-bold text-navy">+410%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Average Client Results</span>
                    <span className="text-primary font-semibold">View Case Studies →</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-secondary text-white rounded-full w-24 h-24 flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">5.0</div>
                  <div className="text-xs">★★★★★</div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 rounded-full p-3">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">All-In-One</div>
                    <div className="font-bold text-navy">Tech Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
