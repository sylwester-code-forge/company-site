import { useParams, Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";
import { servicesData } from "./servicesData";

export const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the service with the matching ID/slug
    const foundService = servicesData.find(s => s.slug === serviceId);
    setService(foundService);
    setLoading(false);
  }, [serviceId]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 flex justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-6">Service Not Found</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-blue-100 mb-8">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Overview</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  {service.longDescription}
                </p>
                
                <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">How We Can Help</h2>
                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  {service.helpDescription}
                </p>
                
                <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Approach</h2>
                <ul className="space-y-4 mb-6">
                  {service.approach.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="text-blue-500 mr-4 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg mb-8 sticky top-24">
                <div className="text-blue-500 mb-6 w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-center"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} services can help you achieve your business goals.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}; 