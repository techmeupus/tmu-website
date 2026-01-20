'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden py-12 md:py-0">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-800/80 to-gray-900/90 z-10"></div>
        <div className="absolute inset-0 bg-gray-900/40 z-5"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Gray Transparent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-800/50 to-gray-900/60 z-15"></div>

      {/* Floating Elements - Hidden on mobile, shown on medium+ */}
      <div className="hidden md:block absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full animate-float z-20"></div>
      <div className="hidden md:block absolute top-40 right-20 w-24 h-24 bg-blue-500/30 rounded-full animate-float z-20" style={{animationDelay: '1s'}}></div>
      <div className="hidden md:block absolute bottom-20 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-float z-20" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-30 min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center text-center w-full py-8 md:py-0">
          {/* Center Content */}
          <div className="text-white animate-fade-in max-w-4xl mx-auto">
            <div className="mb-4 md:mb-8"></div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">
              Get More
              <span className="block text-primary mt-2 md:mt-4">Customers Online</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
              Transform your digital presence and accelerate growth with our end-to-end 
              technology solutions designed for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-8 md:mb-0">
              <button className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-base sm:text-lg w-full sm:w-auto min-w-[200px] sm:min-w-[220px] hover:scale-105">
                Start Growing Now
              </button>
              <button className="bg-gray-800/80 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-gray-700/80 transition-all duration-300 border border-gray-600/50 text-base sm:text-lg w-full sm:w-auto min-w-[200px] sm:min-w-[220px] hover:scale-105">
                See Case Studies
              </button>
            </div>
            
            {/* Trust Indicators - Centered - Stack on mobile, grid on tablet+ */}
            <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
              <div className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-300 text-sm sm:text-base">Projects Delivered</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300 text-sm sm:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-gray-800/70 rounded-2xl p-4 sm:p-6 border border-gray-600/40">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm sm:text-base">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider - Only shown on mobile, hidden on larger screens for full screen effect */}
      <div className="block md:hidden absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg className="relative block w-full h-12" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#1f2937"></path>
        </svg>
      </div>
    </section>
  );
}