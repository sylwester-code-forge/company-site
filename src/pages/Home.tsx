import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import { ServiceCard } from "../components/ServiceCard";
import { StatsSection } from "../components/StatsSection";
import { TestimonialCard } from "../components/TestimonialCard";
import { Link } from "react-router-dom";
import Review1 from "../assets/images/review1.png";
import Review2 from "../assets/images/review2.png";
import Review3 from "../assets/images/review3.png";

export const Home: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications and responsive websites built with modern technologies for optimal performance and user experience.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/services/web-development",
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android that deliver seamless experiences across all devices.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: "/services/mobile-apps",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      link: "/services/cloud-solutions",
    },
    {
      title: "IT Consulting",
      description: "Expert guidance and strategic planning to transform your business with innovative technology solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      link: "/services/it-consulting",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechStart Inc.",
      testimonial: "Code Forge transformed our business with their innovative web solutions. They delivered exactly what we needed on time and within budget.",
      avatar: Review1,
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "GrowthBox",
      testimonial: "Working with Code Forge on our mobile app was a game-changer. Their expertise and attention to detail resulted in a product that exceeded our expectations.",
      avatar: Review2,
    },
    {
      name: "Mark Rodriguez",
      position: "Product Manager",
      company: "InnovateCorp",
      testimonial: "The cloud migration handled by Code Forge was seamless. Their team's knowledge and support throughout the process was invaluable to our company.",
      avatar: Review3,
    },
  ];

  return (
    <Layout>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We offer a comprehensive range of IT services to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium">
              View all services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <StatsSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how Code Forge can help you achieve your technology goals and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
              Contact Us
            </Link>
            <Link to="/projects" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg border border-white transition-colors duration-300">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
