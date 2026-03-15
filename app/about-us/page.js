// app/about/page.tsx
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us - TechMeUp | Complete Business & Technology Solutions",
  description: "Learn about TechMeUp's journey, mission, and how we're transforming businesses through innovative technology solutions.",
};

// Stats data
const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Expert Team" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

// Services data
const services = [
  { name: "UI/UX Design", desc: "Beautiful, intuitive interfaces" },
  { name: "Web Development", desc: "Custom, scalable solutions" },
  { name: "Digital Marketing", desc: "Data-driven strategies" },
  { name: "E-Commerce", desc: "Powerful online stores" },
  { name: "AI Integration", desc: "Smart automation" },
  { name: "Tech Support", desc: "24/7 expert assistance" },
];

// Process steps
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your business goals, challenges, and opportunities through comprehensive research and analysis.",
  },
  {
    number: "02",
    title: "Define",
    description: "Clear project scope, success metrics, and strategic roadmap aligned with your vision and objectives.",
  },
  {
    number: "03",
    title: "Design",
    description: "Crafting elegant solutions with focus on user experience, functionality, and visual appeal.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Agile development with cutting-edge technologies, regular updates, and quality assurance.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Seamless launch with thorough testing, optimization, and performance monitoring.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Ongoing support, training, and continuous improvement to ensure long-term success.",
  },
];

// Why choose us items
const whyChooseUs = [
  { title: "Best Quality Designs", desc: "Pixel-perfect, modern designs that captivate" },
  { title: "24/7 Live Support", desc: "Round-the-clock expert assistance" },
  { title: "Result Oriented", desc: "Focused on delivering measurable outcomes" },
  { title: "Award Winning Team", desc: "Recognized excellence in technology" },
  { title: "Best ROI Techniques", desc: "Maximizing your investment returns" },
  { title: "Experienced Pros", desc: "Senior experts with years of experience" },
];

// Team members - Updated with real team
const teamMembers = [
  {
    name: "Abrar Sharief",
    role: "CEO & Founder",
    bio: "Visionary leader with 5+ years in technology innovation",
    initial: "AS",
  },
  {
    name: "Atiqa Sharief",
    role: "Director",
    bio: "Strategic director driving business excellence and growth",
    initial: "AS",
  },
  {
    name: "Chandrakant",
    role: "Chief Technology Officer",
    bio: "Technical architect specializing in scalable solutions",
    initial: "C",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* <Header /> */}
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          {/* Abstract background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="container-custom relative z-10 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center text-white">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center space-x-2 text-sm mb-6 text-gray-200">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>•</span>
                <span>About Us</span>
              </div>

              <h1 className="heading-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
                Crafting Digital Excellence
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                At TechMeUp, we pioneer innovative digital solutions that empower businesses to thrive in the digital era. 
                With a team of seasoned experts in web development, SEO, and comprehensive IT services, we are dedicated 
                to delivering excellence and precision in everything we do.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Story</span>
                  <h2 className="heading-lg mt-3 mb-6">Who We Are</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  TechMeUp is a dynamic software company committed to driving digital transformation and innovation. 
                  With a diverse team of passionate professionals, we specialize in crafting bespoke software solutions 
                  that empower businesses to thrive in the digital age.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020 by Abrar Sharief, we've grown from a small team of innovators to a comprehensive technology partner 
                  serving businesses worldwide. Under the leadership of our Director Atiqa Sharief and CTO Chandrakant, 
                  our journey is defined by our commitment to excellence and our passion for solving complex challenges through technology.
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">100+ Satisfied Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">5+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">Global Presence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-600">Award Winning</span>
                  </div>
                </div>
              </div>

              {/* Image collage with gradient backgrounds */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-primary-soft to-primary/20 rounded-2xl p-8 aspect-square flex items-center justify-center text-7xl font-bold text-primary shadow-custom">
                    TM
                  </div>
                  <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 aspect-square flex items-center justify-center text-7xl font-bold text-secondary shadow-custom">
                    U
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 aspect-square flex items-center justify-center text-7xl font-bold text-accent shadow-custom">
                    24
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 aspect-square flex items-center justify-center text-7xl font-bold text-primary shadow-custom">
                    7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 bg-primary-soft rounded-2xl mb-8">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="heading-lg mb-8">Our Mission</h2>
              <blockquote className="text-2xl md:text-3xl text-gray-700 font-light italic leading-relaxed">
                &ldquo;To empower businesses and individuals through innovative software solutions that simplify complex 
                tasks, enhance productivity, and drive digital transformation.&rdquo;
              </blockquote>
              <div className="mt-8 flex justify-center space-x-2">
                <div className="w-12 h-0.5 bg-primary"></div>
                <div className="w-12 h-0.5 bg-secondary"></div>
                <div className="w-12 h-0.5 bg-accent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
              <h2 className="heading-lg mt-3 mb-4">Our Expertise</h2>
              <p className="text-gray-600">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary-soft rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <span className="text-primary group-hover:text-white text-xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                  <div className="mt-4 w-12 h-0.5 bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Methodology</span>
              <h2 className="heading-lg mt-3 mb-4">The 6-D Process</h2>
              <p className="text-gray-600">
                A systematic approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-lg transition-all duration-500 group overflow-hidden"
                >
                  {/* Background number */}
                  <div className="absolute top-4 right-4 text-7xl font-bold text-gray-50 group-hover:text-primary-soft transition-colors duration-500">
                    {step.number}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-gray-200 uppercase tracking-wider">Why Choose Us</span>
              <h2 className="heading-lg mt-3 mb-4 text-white">The TechMeUp Advantage</h2>
              <p className="text-gray-100">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-100 text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Leadership</span>
              <h2 className="heading-lg mt-3 mb-4">Meet The Team</h2>
              <p className="text-gray-600">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-soft to-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary shadow-custom group-hover:scale-105 transition-transform duration-500">
                      {member.initial}
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary/50 transition-all duration-500"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Partner with us to transform your digital challenges into growth opportunities. 
                Our commitment to quality and customer satisfaction ensures we exceed your expectations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  Start Your Journey
                </Link>
                <Link href="/" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}