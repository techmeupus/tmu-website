'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Martinez",
      position: "Founder",
      company: "Urban Boutique",
      image: "https://ui-avatars.com/api/?name=Jennifer+Martinez&background=3B82F6&color=fff&size=128",
      rating: 5,
      text: "TechMeUp completely transformed our online presence. They built us a beautiful e-commerce site, set up our email automation, and our sales have tripled in just 4 months. Best investment we've made!",
    },
    {
      name: "Robert Chen",
      position: "CEO",
      company: "InnovateTech Solutions",
      image: "https://ui-avatars.com/api/?name=Robert+Chen&background=8B5CF6&color=fff&size=128",
      rating: 5,
      text: "As a startup, we needed a tech partner who could handle everything from our website to CRM setup. TechMeUp delivered beyond expectations and continues to support our growth with excellent monthly services.",
    },
    {
      name: "Sarah Williams",
      position: "Marketing Director",
      company: "Premier Consulting Group",
      image: "https://ui-avatars.com/api/?name=Sarah+Williams&background=3B82F6&color=fff&size=128",
      rating: 5,
      text: "The AI chatbot and automation they built has revolutionized how we handle customer inquiries. We're saving 20 hours a week and our response time went from hours to seconds. Incredible ROI.",
    },
    {
      name: "Michael Thompson",
      position: "Owner",
      company: "Thompson's HVAC Services",
      image: "https://ui-avatars.com/api/?name=Michael+Thompson&background=8B5CF6&color=fff&size=128",
      rating: 5,
      text: "Finally found a tech company that speaks our language! They redesigned our website, optimized our Google presence, and now we're getting 5x more leads. Their team is always responsive and helpful.",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-3 block">
            Client Success Stories
          </span>
          <h2 className="heading-lg text-white mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-white/80">
            See how we've helped businesses like yours achieve their goals and accelerate growth 
            with our comprehensive technology solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-custom-lg p-8 md:p-12 animate-fade-in">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <div className="mb-8">
              <svg className="w-12 h-12 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl text-gray-700 leading-relaxed italic">
                "{testimonials[activeIndex].text}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full mr-4 border-4 border-primary/20"
                />
                <div>
                  <div className="font-bold text-navy text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="bg-gray-100 hover:bg-primary hover:text-white text-navy rounded-full p-3 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="bg-gray-100 hover:bg-primary hover:text-white text-navy rounded-full p-3 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
            <div className="text-white/80">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">5.0</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
